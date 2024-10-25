import { describe, expect, test } from "vitest";
import exampleInventoryBatchResult from "./example-inventory-batch-result.json"

type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type InventoryBatchResult = typeof exampleInventoryBatchResult;

type EPlatformItem = {
	invItem: ArrayElement<InventoryBatchResult['invItems']>,
	title: ArrayElement<InventoryBatchResult['titles']>
}

function extractInventoryBatch(data: InventoryBatchResult): EPlatformItem[] {

	let items: EPlatformItem[] = [];
	for (const invItem of data.invItems) {

		const title = data.titles.find(title => title.titleId === invItem.titleId);
		if (title) {
			items.push({ invItem: invItem, title: title })
		} else {
			console.error(`Title not found for invItem: ${invItem.titleId}`);
		}
	}
	return items;
}

function findDuplicateTitleIds(items: { titleId: string }[]): string[] {
	const titleIdMap: { [key: string]: number } = {};
	const duplicates: string[] = [];

	// Count occurrences of each titleId
	items.forEach(item => {
		const { titleId } = item;
		titleIdMap[titleId] = (titleIdMap[titleId] || 0) + 1;
	});

	// Collect titleIds that have more than one occurrence
	for (const titleId in titleIdMap) {
		if (titleIdMap[titleId] > 1) {
			duplicates.push(titleId);
		}
	}

	return duplicates;
}

describe('wheelers', () => {

	test("should extract wheelers stuff correctly", () => {

		const items = exampleInventoryBatchResult.invItems;
		const titles = exampleInventoryBatchResult.titles;

		const expected_count = 200;

		expect(items.length).toEqual(expected_count);
		expect(titles.length).toEqual(expected_count);

		const duplicatesItems = findDuplicateTitleIds(items);
		const duplicatesTitles = findDuplicateTitleIds(titles);

		expect(duplicatesItems).toEqual([]);
		expect(duplicatesTitles).toEqual([]);

		const eplatformItems = extractInventoryBatch(exampleInventoryBatchResult);
		expect(eplatformItems.length).toEqual(expected_count);

	});
})