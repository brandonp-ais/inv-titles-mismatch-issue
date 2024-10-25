import { describe, expect, test } from "bun:test";

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

type ArrayElement<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

type InventoryBatchResult = ReturnType<typeof mock_data>;

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

describe('wheelers', () => {

	test("should extract wheelers stuff correctly", () => {

		const items = mock_data().invItems;
		const titles = mock_data().titles;

		const expected_count = 200;

		expect(items.length).toEqual(expected_count);
		expect(titles.length).toEqual(expected_count);

		const duplicatesItems = findDuplicateTitleIds(items);
		const duplicatesTitles = findDuplicateTitleIds(titles);

		expect(duplicatesItems).toEqual([]);
		expect(duplicatesTitles).toEqual([]);

		const eplatformItems = extractInventoryBatch(mock_data());
		expect(eplatformItems.length).toEqual(expected_count);

	});
})

function mock_data() {
	return {
		"offset": 400,
		"limit": 200,
		"total": 4948,
		"invItems": [
			{
				"titleId": "39376523-01-919459",
				"isbn": "9781406399189",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-09-07T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39376523-01-919459"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39376523-01-919459"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39376523-01-919459"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39376523-01-919459"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39376523-01-919459"
					}
				}
			},
			{
				"titleId": "39376535-01-919471",
				"isbn": "9781406396287",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-12-07T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39376535-01-919471"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39376535-01-919471"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39376535-01-919471"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39376535-01-919471"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39376535-01-919471"
					}
				}
			},
			{
				"titleId": "39466032-01-921567",
				"isbn": "9781684034673",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-12-07T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39466032-01-921567"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39466032-01-921567"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39466032-01-921567"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39466032-01-921567"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39466032-01-921567"
					}
				}
			},
			{
				"titleId": "39504736-01-922151",
				"isbn": "9781800900004",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-10-12T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39504736-01-922151"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39504736-01-922151"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39504736-01-922151"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39504736-01-922151"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39504736-01-922151"
					}
				}
			},
			{
				"titleId": "39593263-01-925504",
				"isbn": "9781684035298",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-11T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39593263-01-925504"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39593263-01-925504"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39593263-01-925504"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39593263-01-925504"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39593263-01-925504"
					}
				}
			},
			{
				"titleId": "39593268-01-925509",
				"isbn": "9781684035359",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-11T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39593268-01-925509"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39593268-01-925509"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39593268-01-925509"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39593268-01-925509"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39593268-01-925509"
					}
				}
			},
			{
				"titleId": "39643929-01-926051",
				"isbn": "9780192737175",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-10-06T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39643929-01-926051"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39643929-01-926051"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39643929-01-926051"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39643929-01-926051"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39643929-01-926051"
					}
				}
			},
			{
				"titleId": "39643940-01-926062",
				"isbn": "9780192737304",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-10-06T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39643940-01-926062"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39643940-01-926062"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39643940-01-926062"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39643940-01-926062"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39643940-01-926062"
					}
				}
			},
			{
				"titleId": "39644056-01-926175",
				"isbn": "9780192739667",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-10-06T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39644056-01-926175"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39644056-01-926175"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39644056-01-926175"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39644056-01-926175"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39644056-01-926175"
					}
				}
			},
			{
				"titleId": "39661567-01-927345",
				"isbn": "9781472972279",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39661567-01-927345"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39661567-01-927345"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39661567-01-927345"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39661567-01-927345"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39661567-01-927345"
					}
				}
			},
			{
				"titleId": "39680404-01-927370",
				"isbn": "9780062840370",
				"format": "EPUB",
				"enabled": true,
				"added": "2022-03-06T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39680404-01-927370"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39680404-01-927370"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39680404-01-927370"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39680404-01-927370"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39680404-01-927370"
					}
				}
			},
			{
				"titleId": "39683866-01-927771",
				"isbn": "9781800900080",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-11-02T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39683866-01-927771"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39683866-01-927771"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39683866-01-927771"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39683866-01-927771"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39683866-01-927771"
					}
				}
			},
			{
				"titleId": "39683874-01-927778",
				"isbn": "9781800900059",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-11-02T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39683874-01-927778"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39683874-01-927778"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39683874-01-927778"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39683874-01-927778"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39683874-01-927778"
					}
				}
			},
			{
				"titleId": "39683875-01-927779",
				"isbn": "9781800900066",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-11-02T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39683875-01-927779"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39683875-01-927779"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39683875-01-927779"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39683875-01-927779"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39683875-01-927779"
					}
				}
			},
			{
				"titleId": "39723142-01-931914",
				"isbn": "9781526629890",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-11T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39723142-01-931914"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39723142-01-931914"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39723142-01-931914"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39723142-01-931914"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39723142-01-931914"
					}
				}
			},
			{
				"titleId": "39728192-01-932224",
				"isbn": "9781406396522",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-11-02T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39728192-01-932224"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39728192-01-932224"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39728192-01-932224"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39728192-01-932224"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39728192-01-932224"
					}
				}
			},
			{
				"titleId": "39728235-01-932270",
				"isbn": "9781631950889",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-10-22T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39728235-01-932270"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39728235-01-932270"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39728235-01-932270"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39728235-01-932270"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39728235-01-932270"
					}
				}
			},
			{
				"titleId": "39728888-01-932424",
				"isbn": "9780825308192",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-10-22T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39728888-01-932424"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39728888-01-932424"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39728888-01-932424"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39728888-01-932424"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39728888-01-932424"
					}
				}
			},
			{
				"titleId": "39783146-01-934102",
				"isbn": "9780241397053",
				"format": "EPUB",
				"enabled": true,
				"added": "2022-12-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39783146-01-934102"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39783146-01-934102"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39783146-01-934102"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39783146-01-934102"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39783146-01-934102"
					}
				}
			},
			{
				"titleId": "39822039-01-937009",
				"isbn": "9781643528229",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-11T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39822039-01-937009"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39822039-01-937009"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39822039-01-937009"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39822039-01-937009"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39822039-01-937009"
					}
				}
			},
			{
				"titleId": "39834208-01-937823",
				"isbn": "9781683357407",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-12-07T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39834208-01-937823"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39834208-01-937823"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39834208-01-937823"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39834208-01-937823"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39834208-01-937823"
					}
				}
			},
			{
				"titleId": "39846278-01-938478",
				"isbn": "9781684036004",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-11T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39846278-01-938478"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39846278-01-938478"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39846278-01-938478"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39846278-01-938478"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39846278-01-938478"
					}
				}
			},
			{
				"titleId": "39909551-01-941124",
				"isbn": "9781406396379",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-12-07T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39909551-01-941124"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39909551-01-941124"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39909551-01-941124"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39909551-01-941124"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39909551-01-941124"
					}
				}
			},
			{
				"titleId": "39948228-01-972805",
				"isbn": "9781800900332",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-05-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39948228-01-972805"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39948228-01-972805"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39948228-01-972805"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39948228-01-972805"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39948228-01-972805"
					}
				}
			},
			{
				"titleId": "39948239-01-956916",
				"isbn": "9781800900295",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39948239-01-956916"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39948239-01-956916"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39948239-01-956916"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39948239-01-956916"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39948239-01-956916"
					}
				}
			},
			{
				"titleId": "39948243-01-956915",
				"isbn": "9781800900288",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39948243-01-956915"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39948243-01-956915"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39948243-01-956915"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39948243-01-956915"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39948243-01-956915"
					}
				}
			},
			{
				"titleId": "39964143-01-945608",
				"isbn": "9780062821928",
				"format": "EPUB",
				"enabled": true,
				"added": "2023-02-23T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39964143-01-945608"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39964143-01-945608"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39964143-01-945608"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39964143-01-945608"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39964143-01-945608"
					}
				}
			},
			{
				"titleId": "40089658-01-950009",
				"isbn": "9780711256934",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-11T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40089658-01-950009"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40089658-01-950009"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40089658-01-950009"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40089658-01-950009"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40089658-01-950009"
					}
				}
			},
			{
				"titleId": "40199206-01-951654",
				"isbn": "9780062685339",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-12-07T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40199206-01-951654"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40199206-01-951654"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40199206-01-951654"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40199206-01-951654"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40199206-01-951654"
					}
				}
			},
			{
				"titleId": "40199211-01-951659",
				"isbn": "9780062491275",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-12-07T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40199211-01-951659"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40199211-01-951659"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40199211-01-951659"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40199211-01-951659"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40199211-01-951659"
					}
				}
			},
			{
				"titleId": "40199285-01-951759",
				"isbn": "9781684036042",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-11T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40199285-01-951759"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40199285-01-951759"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40199285-01-951759"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40199285-01-951759"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40199285-01-951759"
					}
				}
			},
			{
				"titleId": "40210266-01-953134",
				"isbn": "9781526634344",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-11T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40210266-01-953134"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40210266-01-953134"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40210266-01-953134"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40210266-01-953134"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40210266-01-953134"
					}
				}
			},
			{
				"titleId": "40218377-01-951981",
				"isbn": "9781406399905",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40218377-01-951981"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40218377-01-951981"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40218377-01-951981"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40218377-01-951981"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40218377-01-951981"
					}
				}
			},
			{
				"titleId": "40231027-01-952127",
				"isbn": "9781728411699",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40231027-01-952127"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40231027-01-952127"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40231027-01-952127"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40231027-01-952127"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40231027-01-952127"
					}
				}
			},
			{
				"titleId": "40302146-01-954941",
				"isbn": "9781646031078",
				"format": "EPUB",
				"enabled": true,
				"added": "2022-02-23T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40302146-01-954941"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40302146-01-954941"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40302146-01-954941"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40302146-01-954941"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40302146-01-954941"
					}
				}
			},
			{
				"titleId": "40317981-01-955380",
				"isbn": "9781683645719",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-11T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40317981-01-955380"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40317981-01-955380"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40317981-01-955380"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40317981-01-955380"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40317981-01-955380"
					}
				}
			},
			{
				"titleId": "40407237-01-957714",
				"isbn": "9781526630735",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40407237-01-957714"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40407237-01-957714"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40407237-01-957714"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40407237-01-957714"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40407237-01-957714"
					}
				}
			},
			{
				"titleId": "40441308-01-960892",
				"isbn": "9781635767285",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40441308-01-960892"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40441308-01-960892"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40441308-01-960892"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40441308-01-960892"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40441308-01-960892"
					}
				}
			},
			{
				"titleId": "40451230-01-961359",
				"isbn": "9781578597574",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40451230-01-961359"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40451230-01-961359"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40451230-01-961359"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40451230-01-961359"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40451230-01-961359"
					}
				}
			},
			{
				"titleId": "40454343-01-962915",
				"isbn": "9781683357087",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40454343-01-962915"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40454343-01-962915"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40454343-01-962915"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40454343-01-962915"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40454343-01-962915"
					}
				}
			},
			{
				"titleId": "40455002-01-0000",
				"isbn": "9780711247468",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-08-05T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40455002-01-0000"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40455002-01-0000"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40455002-01-0000"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40455002-01-0000"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40455002-01-0000"
					}
				}
			},
			{
				"titleId": "40501784-01-973312",
				"isbn": "9781838855215",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-08-05T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40501784-01-973312"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40501784-01-973312"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40501784-01-973312"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40501784-01-973312"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40501784-01-973312"
					}
				}
			},
			{
				"titleId": "40509109-01-965832",
				"isbn": "9781913101343",
				"format": "EPUB",
				"enabled": true,
				"added": "2022-07-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40509109-01-965832"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40509109-01-965832"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40509109-01-965832"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40509109-01-965832"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40509109-01-965832"
					}
				}
			},
			{
				"titleId": "40581998-01-968304",
				"isbn": "9781493431632",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40581998-01-968304"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40581998-01-968304"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40581998-01-968304"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40581998-01-968304"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40581998-01-968304"
					}
				}
			},
			{
				"titleId": "40606179-01-968477",
				"isbn": "9781492635260",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-08-05T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40606179-01-968477"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40606179-01-968477"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40606179-01-968477"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40606179-01-968477"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40606179-01-968477"
					}
				}
			},
			{
				"titleId": "40620061-01-968542",
				"isbn": "9781684036387",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40620061-01-968542"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40620061-01-968542"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40620061-01-968542"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40620061-01-968542"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40620061-01-968542"
					}
				}
			},
			{
				"titleId": "40630119-01-969090",
				"isbn": "9781608687398",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40630119-01-969090"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40630119-01-969090"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40630119-01-969090"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40630119-01-969090"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40630119-01-969090"
					}
				}
			},
			{
				"titleId": "40684434-01-970955",
				"isbn": "9781684035472",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40684434-01-970955"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40684434-01-970955"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40684434-01-970955"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40684434-01-970955"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40684434-01-970955"
					}
				}
			},
			{
				"titleId": "40684462-01-970983",
				"isbn": "9781800435209",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40684462-01-970983"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40684462-01-970983"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40684462-01-970983"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40684462-01-970983"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40684462-01-970983"
					}
				}
			},
			{
				"titleId": "40734984-01-972691",
				"isbn": "9781641605434",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40734984-01-972691"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40734984-01-972691"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40734984-01-972691"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40734984-01-972691"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40734984-01-972691"
					}
				}
			},
			{
				"titleId": "40976017-01-977214",
				"isbn": "9781529501438",
				"format": "EPUB",
				"enabled": true,
				"added": "2022-03-17T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40976017-01-977214"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40976017-01-977214"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40976017-01-977214"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40976017-01-977214"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40976017-01-977214"
					}
				}
			},
			{
				"titleId": "41129102-01-982521",
				"isbn": "9780062880475",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-08-05T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/41129102-01-982521"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/41129102-01-982521"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=41129102-01-982521"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=41129102-01-982521"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=41129102-01-982521"
					}
				}
			},
			{
				"titleId": "41145308-01-983121",
				"isbn": "9781524871673",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-08-05T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/41145308-01-983121"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/41145308-01-983121"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=41145308-01-983121"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=41145308-01-983121"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=41145308-01-983121"
					}
				}
			},
			{
				"titleId": "41148040-01-983971",
				"isbn": "9780241989470",
				"format": "EPUB",
				"enabled": true,
				"added": "2024-03-08T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/41148040-01-983971"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/41148040-01-983971"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=41148040-01-983971"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=41148040-01-983971"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=41148040-01-983971"
					}
				}
			},
			{
				"titleId": "41148042-01-983973",
				"isbn": "9780241517239",
				"format": "EPUB",
				"enabled": true,
				"added": "2023-11-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/41148042-01-983973"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/41148042-01-983973"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=41148042-01-983973"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=41148042-01-983973"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=41148042-01-983973"
					}
				}
			},
			{
				"titleId": "41153363-01-0000",
				"isbn": "9781684035809",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-08-05T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/41153363-01-0000"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/41153363-01-0000"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=41153363-01-0000"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=41153363-01-0000"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=41153363-01-0000"
					}
				}
			},
			{
				"titleId": "41153365-01-984430",
				"isbn": "9781684036738",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-08-05T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/41153365-01-984430"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/41153365-01-984430"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=41153365-01-984430"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=41153365-01-984430"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=41153365-01-984430"
					}
				}
			},
			{
				"titleId": "100081727-04-52763",
				"isbn": "9780739372319",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100081727-04-52763"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100081727-04-52763"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100081727-04-52763"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100081727-04-52763"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100081727-04-52763"
					}
				}
			},
			{
				"titleId": "100082478-04-50160",
				"isbn": "9780307704573",
				"format": "MP3",
				"enabled": true,
				"added": "2020-09-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100082478-04-50160"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100082478-04-50160"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100082478-04-50160"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100082478-04-50160"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100082478-04-50160"
					}
				}
			},
			{
				"titleId": "100082891-04-76707",
				"isbn": "9780792751694",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100082891-04-76707"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100082891-04-76707"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100082891-04-76707"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100082891-04-76707"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100082891-04-76707"
					}
				}
			},
			{
				"titleId": "100083903-04-49087",
				"isbn": "9780739368138",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100083903-04-49087"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100083903-04-49087"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100083903-04-49087"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100083903-04-49087"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100083903-04-49087"
					}
				}
			},
			{
				"titleId": "100083972-04-124329",
				"isbn": "9781937091637",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100083972-04-124329"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100083972-04-124329"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100083972-04-124329"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100083972-04-124329"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100083972-04-124329"
					}
				}
			},
			{
				"titleId": "100084315-04-32956",
				"isbn": "9781427218452",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100084315-04-32956"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100084315-04-32956"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100084315-04-32956"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100084315-04-32956"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100084315-04-32956"
					}
				}
			},
			{
				"titleId": "100084329-04-0493",
				"isbn": "9789629544317",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100084329-04-0493"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100084329-04-0493"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100084329-04-0493"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100084329-04-0493"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100084329-04-0493"
					}
				}
			},
			{
				"titleId": "100084515-04-36569",
				"isbn": "9781442353008",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100084515-04-36569"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100084515-04-36569"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100084515-04-36569"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100084515-04-36569"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100084515-04-36569"
					}
				}
			},
			{
				"titleId": "100085050-04-82487",
				"isbn": "9781478903529",
				"format": "MP3",
				"enabled": true,
				"added": "2023-01-10T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100085050-04-82487"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100085050-04-82487"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100085050-04-82487"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100085050-04-82487"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100085050-04-82487"
					}
				}
			},
			{
				"titleId": "100085475-04-5031",
				"isbn": "9781580814706",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 15,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100085475-04-5031"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100085475-04-5031"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100085475-04-5031"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100085475-04-5031"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100085475-04-5031"
					}
				}
			},
			{
				"titleId": "100086071-04-26325",
				"isbn": "9789629544157",
				"format": "MP3",
				"enabled": true,
				"added": "2023-05-23T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100086071-04-26325"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100086071-04-26325"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100086071-04-26325"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100086071-04-26325"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100086071-04-26325"
					}
				}
			},
			{
				"titleId": "100086211-04-15035",
				"isbn": "9789629548230",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100086211-04-15035"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100086211-04-15035"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100086211-04-15035"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100086211-04-15035"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100086211-04-15035"
					}
				}
			},
			{
				"titleId": "100086297-04-7007",
				"isbn": "9789629547172",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100086297-04-7007"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100086297-04-7007"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100086297-04-7007"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100086297-04-7007"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100086297-04-7007"
					}
				}
			},
			{
				"titleId": "100086604-04-5171",
				"isbn": "9781577313656",
				"format": "MP3",
				"enabled": true,
				"added": "2020-09-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100086604-04-5171"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100086604-04-5171"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100086604-04-5171"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100086604-04-5171"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100086604-04-5171"
					}
				}
			},
			{
				"titleId": "100086850-04-76769",
				"isbn": "9780792751892",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100086850-04-76769"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100086850-04-76769"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100086850-04-76769"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100086850-04-76769"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100086850-04-76769"
					}
				}
			},
			{
				"titleId": "100087343-04-113193",
				"isbn": "9781615441884",
				"format": "MP3",
				"enabled": true,
				"added": "2020-09-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100087343-04-113193"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100087343-04-113193"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100087343-04-113193"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100087343-04-113193"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100087343-04-113193"
					}
				}
			},
			{
				"titleId": "100087618-04-122861",
				"isbn": "9781518917882",
				"format": "MP3",
				"enabled": true,
				"added": "2020-09-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100087618-04-122861"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100087618-04-122861"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100087618-04-122861"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100087618-04-122861"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100087618-04-122861"
					}
				}
			},
			{
				"titleId": "100088753-04-47728",
				"isbn": "9780739385814",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100088753-04-47728"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100088753-04-47728"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100088753-04-47728"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100088753-04-47728"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100088753-04-47728"
					}
				}
			},
			{
				"titleId": "100089714-04-69793",
				"isbn": "9781467663496",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100089714-04-69793"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100089714-04-69793"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100089714-04-69793"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100089714-04-69793"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100089714-04-69793"
					}
				}
			},
			{
				"titleId": "100090364-04-8863",
				"isbn": "9781338304282",
				"format": "MP3",
				"enabled": true,
				"added": "2017-11-25T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100090364-04-8863"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100090364-04-8863"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100090364-04-8863"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100090364-04-8863"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100090364-04-8863"
					}
				}
			},
			{
				"titleId": "100090775-04-15036",
				"isbn": "9789629549596",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100090775-04-15036"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100090775-04-15036"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100090775-04-15036"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100090775-04-15036"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100090775-04-15036"
					}
				}
			},
			{
				"titleId": "100090866-04-139668",
				"isbn": "9781504777315",
				"format": "MP3",
				"enabled": true,
				"added": "2023-04-27T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100090866-04-139668"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100090866-04-139668"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100090866-04-139668"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100090866-04-139668"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100090866-04-139668"
					}
				}
			},
			{
				"titleId": "100091096-04-46193",
				"isbn": "9780739330906",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100091096-04-46193"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100091096-04-46193"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100091096-04-46193"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100091096-04-46193"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100091096-04-46193"
					}
				}
			},
			{
				"titleId": "100091486-04-0686",
				"isbn": "9789629545918",
				"format": "MP3",
				"enabled": true,
				"added": "2018-06-17T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100091486-04-0686"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100091486-04-0686"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100091486-04-0686"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100091486-04-0686"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100091486-04-0686"
					}
				}
			},
			{
				"titleId": "100092152-04-26286",
				"isbn": "9789629548537",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100092152-04-26286"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100092152-04-26286"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100092152-04-26286"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100092152-04-26286"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100092152-04-26286"
					}
				}
			},
			{
				"titleId": "100092305-04-19987",
				"isbn": "9781338252965",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100092305-04-19987"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100092305-04-19987"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100092305-04-19987"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100092305-04-19987"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100092305-04-19987"
					}
				}
			},
			{
				"titleId": "100092306-04-19984",
				"isbn": "9781338249705",
				"format": "MP3",
				"enabled": true,
				"added": "2017-11-25T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100092306-04-19984"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100092306-04-19984"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100092306-04-19984"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100092306-04-19984"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100092306-04-19984"
					}
				}
			},
			{
				"titleId": "100092401-04-26369",
				"isbn": "9789629546816",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100092401-04-26369"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100092401-04-26369"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100092401-04-26369"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100092401-04-26369"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100092401-04-26369"
					}
				}
			},
			{
				"titleId": "100094265-04-26492",
				"isbn": "9789629548698",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100094265-04-26492"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100094265-04-26492"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100094265-04-26492"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100094265-04-26492"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100094265-04-26492"
					}
				}
			},
			{
				"titleId": "100094484-04-47048",
				"isbn": "9780739360811",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100094484-04-47048"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100094484-04-47048"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100094484-04-47048"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100094484-04-47048"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100094484-04-47048"
					}
				}
			},
			{
				"titleId": "100094676-04-143532",
				"isbn": "9781488202568",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-17T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100094676-04-143532"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100094676-04-143532"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100094676-04-143532"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100094676-04-143532"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100094676-04-143532"
					}
				}
			},
			{
				"titleId": "100095116-04-45100",
				"isbn": "9780739346747",
				"format": "MP3",
				"enabled": true,
				"added": "2023-07-10T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100095116-04-45100"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100095116-04-45100"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100095116-04-45100"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100095116-04-45100"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100095116-04-45100"
					}
				}
			},
			{
				"titleId": "37674168-01-855254",
				"isbn": "9781788005937",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-02-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/37674168-01-855254"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/37674168-01-855254"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=37674168-01-855254"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=37674168-01-855254"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=37674168-01-855254"
					}
				}
			},
			{
				"titleId": "38044592-01-858753",
				"isbn": "9781788007252",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-03-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/38044592-01-858753"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/38044592-01-858753"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=38044592-01-858753"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=38044592-01-858753"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=38044592-01-858753"
					}
				}
			},
			{
				"titleId": "38044593-01-858754",
				"isbn": "9781788001137",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-02-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/38044593-01-858754"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/38044593-01-858754"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=38044593-01-858754"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=38044593-01-858754"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=38044593-01-858754"
					}
				}
			},
			{
				"titleId": "38537840-01-866211",
				"isbn": "9781788451178",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-03-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/38537840-01-866211"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/38537840-01-866211"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=38537840-01-866211"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=38537840-01-866211"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=38537840-01-866211"
					}
				}
			},
			{
				"titleId": "38620359-01-870418",
				"isbn": "9781788007825",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-03-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/38620359-01-870418"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/38620359-01-870418"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=38620359-01-870418"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=38620359-01-870418"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=38620359-01-870418"
					}
				}
			},
			{
				"titleId": "38630834-01-872514",
				"isbn": "9781788007917",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-04-06T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/38630834-01-872514"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/38630834-01-872514"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=38630834-01-872514"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=38630834-01-872514"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=38630834-01-872514"
					}
				}
			},
			{
				"titleId": "38630840-01-872520",
				"isbn": "9781788007795",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-03-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/38630840-01-872520"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/38630840-01-872520"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=38630840-01-872520"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=38630840-01-872520"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=38630840-01-872520"
					}
				}
			},
			{
				"titleId": "38630872-01-872551",
				"isbn": "9781788007092",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-04-06T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/38630872-01-872551"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/38630872-01-872551"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=38630872-01-872551"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=38630872-01-872551"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=38630872-01-872551"
					}
				}
			},
			{
				"titleId": "38743228-01-877354",
				"isbn": "9781788952606",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-04-06T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/38743228-01-877354"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/38743228-01-877354"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=38743228-01-877354"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=38743228-01-877354"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=38743228-01-877354"
					}
				}
			},
			{
				"titleId": "38743314-01-877433",
				"isbn": "9781788492003",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-04-06T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/38743314-01-877433"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/38743314-01-877433"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=38743314-01-877433"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=38743314-01-877433"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=38743314-01-877433"
					}
				}
			},
			{
				"titleId": "39226152-01-915193",
				"isbn": "9781788952736",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-08-10T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39226152-01-915193"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39226152-01-915193"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39226152-01-915193"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39226152-01-915193"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39226152-01-915193"
					}
				}
			},
			{
				"titleId": "39683995-01-927897",
				"isbn": "9781913102388",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-10-12T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39683995-01-927897"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39683995-01-927897"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39683995-01-927897"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39683995-01-927897"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39683995-01-927897"
					}
				}
			},
			{
				"titleId": "39808934-01-934357",
				"isbn": "9781788006316",
				"format": "EPUB",
				"enabled": true,
				"added": "2020-12-07T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/39808934-01-934357"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/39808934-01-934357"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=39808934-01-934357"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=39808934-01-934357"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=39808934-01-934357"
					}
				}
			},
			{
				"titleId": "40361535-01-956894",
				"isbn": "9781788006330",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-02-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40361535-01-956894"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40361535-01-956894"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40361535-01-956894"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40361535-01-956894"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40361535-01-956894"
					}
				}
			},
			{
				"titleId": "40394204-01-957481",
				"isbn": "9781633537378",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40394204-01-957481"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40394204-01-957481"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40394204-01-957481"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40394204-01-957481"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40394204-01-957481"
					}
				}
			},
			{
				"titleId": "40669751-01-969815",
				"isbn": "9781913102340",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-03-01T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40669751-01-969815"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40669751-01-969815"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40669751-01-969815"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40669751-01-969815"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40669751-01-969815"
					}
				}
			},
			{
				"titleId": "40739862-01-972709",
				"isbn": "9780717192519",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-08-05T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40739862-01-972709"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40739862-01-972709"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40739862-01-972709"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40739862-01-972709"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40739862-01-972709"
					}
				}
			},
			{
				"titleId": "40739954-01-972788",
				"isbn": "9781788451369",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-04-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40739954-01-972788"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40739954-01-972788"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40739954-01-972788"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40739954-01-972788"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40739954-01-972788"
					}
				}
			},
			{
				"titleId": "40764228-01-974409",
				"isbn": "9781644501962",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-08-05T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40764228-01-974409"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40764228-01-974409"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40764228-01-974409"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40764228-01-974409"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40764228-01-974409"
					}
				}
			},
			{
				"titleId": "40912939-01-976924",
				"isbn": "9781617759710",
				"format": "EPUB",
				"enabled": true,
				"added": "2021-08-05T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/40912939-01-976924"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/40912939-01-976924"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=40912939-01-976924"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=40912939-01-976924"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=40912939-01-976924"
					}
				}
			},
			{
				"titleId": "100084000-04-131424",
				"isbn": "9781590308639",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 15,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100084000-04-131424"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100084000-04-131424"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100084000-04-131424"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100084000-04-131424"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100084000-04-131424"
					}
				}
			},
			{
				"titleId": "100086848-04-76662",
				"isbn": "9780792751571",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100086848-04-76662"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100086848-04-76662"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100086848-04-76662"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100086848-04-76662"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100086848-04-76662"
					}
				}
			},
			{
				"titleId": "100095671-04-7008",
				"isbn": "9789629546885",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100095671-04-7008"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100095671-04-7008"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100095671-04-7008"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100095671-04-7008"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100095671-04-7008"
					}
				}
			},
			{
				"titleId": "100095789-04-26448",
				"isbn": "9789629544089",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100095789-04-26448"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100095789-04-26448"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100095789-04-26448"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100095789-04-26448"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100095789-04-26448"
					}
				}
			},
			{
				"titleId": "100095991-04-51798",
				"isbn": "9781621880868",
				"format": "MP3",
				"enabled": true,
				"added": "2020-09-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100095991-04-51798"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100095991-04-51798"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100095991-04-51798"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100095991-04-51798"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100095991-04-51798"
					}
				}
			},
			{
				"titleId": "100096642-04-11662",
				"isbn": "9789629544348",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100096642-04-11662"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100096642-04-11662"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100096642-04-11662"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100096642-04-11662"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100096642-04-11662"
					}
				}
			},
			{
				"titleId": "100096931-04-3329",
				"isbn": "9789629547776",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100096931-04-3329"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100096931-04-3329"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100096931-04-3329"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100096931-04-3329"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100096931-04-3329"
					}
				}
			},
			{
				"titleId": "100096949-04-47246",
				"isbn": "9780739379929",
				"format": "MP3",
				"enabled": true,
				"added": "2022-11-21T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100096949-04-47246"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100096949-04-47246"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100096949-04-47246"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100096949-04-47246"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100096949-04-47246"
					}
				}
			},
			{
				"titleId": "100097249-04-45464",
				"isbn": "9780739346839",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100097249-04-45464"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100097249-04-45464"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100097249-04-45464"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100097249-04-45464"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100097249-04-45464"
					}
				}
			},
			{
				"titleId": "100097397-04-141995",
				"isbn": "9781524776404",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100097397-04-141995"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100097397-04-141995"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100097397-04-141995"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100097397-04-141995"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100097397-04-141995"
					}
				}
			},
			{
				"titleId": "100097602-04-54536",
				"isbn": "9781442357587",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100097602-04-54536"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100097602-04-54536"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100097602-04-54536"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100097602-04-54536"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100097602-04-54536"
					}
				}
			},
			{
				"titleId": "100097905-04-22787",
				"isbn": "9781338247015",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100097905-04-22787"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100097905-04-22787"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100097905-04-22787"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100097905-04-22787"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100097905-04-22787"
					}
				}
			},
			{
				"titleId": "100098306-04-26484",
				"isbn": "9789629547660",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100098306-04-26484"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100098306-04-26484"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100098306-04-26484"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100098306-04-26484"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100098306-04-26484"
					}
				}
			},
			{
				"titleId": "100098325-04-45276",
				"isbn": "9781415965108",
				"format": "MP3",
				"enabled": true,
				"added": "2020-09-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100098325-04-45276"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100098325-04-45276"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100098325-04-45276"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100098325-04-45276"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100098325-04-45276"
					}
				}
			},
			{
				"titleId": "100098506-04-46171",
				"isbn": "9780307876997",
				"format": "MP3",
				"enabled": true,
				"added": "2020-09-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100098506-04-46171"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100098506-04-46171"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100098506-04-46171"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100098506-04-46171"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100098506-04-46171"
					}
				}
			},
			{
				"titleId": "100098687-04-47005",
				"isbn": "9780739348109",
				"format": "MP3",
				"enabled": true,
				"added": "2018-11-18T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100098687-04-47005"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100098687-04-47005"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100098687-04-47005"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100098687-04-47005"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100098687-04-47005"
					}
				}
			},
			{
				"titleId": "100098691-04-51425",
				"isbn": "9781608148370",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100098691-04-51425"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100098691-04-51425"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100098691-04-51425"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100098691-04-51425"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100098691-04-51425"
					}
				}
			},
			{
				"titleId": "100099368-04-14513",
				"isbn": "9781338246711",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100099368-04-14513"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100099368-04-14513"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100099368-04-14513"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100099368-04-14513"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100099368-04-14513"
					}
				}
			},
			{
				"titleId": "100099376-04-15041",
				"isbn": "9789629549640",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100099376-04-15041"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100099376-04-15041"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100099376-04-15041"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100099376-04-15041"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100099376-04-15041"
					}
				}
			},
			{
				"titleId": "100099932-04-49751",
				"isbn": "9780739345191",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100099932-04-49751"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100099932-04-49751"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100099932-04-49751"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100099932-04-49751"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100099932-04-49751"
					}
				}
			},
			{
				"titleId": "100100334-04-136998",
				"isbn": "9781338250244",
				"format": "MP3",
				"enabled": true,
				"added": "2018-08-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100100334-04-136998"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100100334-04-136998"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100100334-04-136998"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100100334-04-136998"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100100334-04-136998"
					}
				}
			},
			{
				"titleId": "100100359-04-137014",
				"isbn": "9781338244441",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100100359-04-137014"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100100359-04-137014"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100100359-04-137014"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100100359-04-137014"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100100359-04-137014"
					}
				}
			},
			{
				"titleId": "100100519-04-49822",
				"isbn": "9780739330890",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100100519-04-49822"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100100519-04-49822"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100100519-04-49822"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100100519-04-49822"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100100519-04-49822"
					}
				}
			},
			{
				"titleId": "100100649-04-26276",
				"isbn": "9789629546618",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100100649-04-26276"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100100649-04-26276"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100100649-04-26276"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100100649-04-26276"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100100649-04-26276"
					}
				}
			},
			{
				"titleId": "100101156-04-1720",
				"isbn": "9789629546557",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100101156-04-1720"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100101156-04-1720"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100101156-04-1720"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100101156-04-1720"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100101156-04-1720"
					}
				}
			},
			{
				"titleId": "100101240-04-15021",
				"isbn": "9789629549343",
				"format": "MP3",
				"enabled": true,
				"added": "2018-06-17T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100101240-04-15021"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100101240-04-15021"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100101240-04-15021"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100101240-04-15021"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100101240-04-15021"
					}
				}
			},
			{
				"titleId": "100101327-04-7016",
				"isbn": "9789629545970",
				"format": "MP3",
				"enabled": true,
				"added": "2018-06-17T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100101327-04-7016"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100101327-04-7016"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100101327-04-7016"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100101327-04-7016"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100101327-04-7016"
					}
				}
			},
			{
				"titleId": "100101333-04-26478",
				"isbn": "9789629545741",
				"format": "MP3",
				"enabled": true,
				"added": "2023-06-20T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100101333-04-26478"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100101333-04-26478"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100101333-04-26478"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100101333-04-26478"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100101333-04-26478"
					}
				}
			},
			{
				"titleId": "100101790-04-44723",
				"isbn": "9780739360828",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100101790-04-44723"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100101790-04-44723"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100101790-04-44723"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100101790-04-44723"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100101790-04-44723"
					}
				}
			},
			{
				"titleId": "100102313-04-58205",
				"isbn": "9781481593939",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100102313-04-58205"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100102313-04-58205"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100102313-04-58205"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100102313-04-58205"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100102313-04-58205"
					}
				}
			},
			{
				"titleId": "100104463-04-78994",
				"isbn": "9781442376458",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100104463-04-78994"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100104463-04-78994"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100104463-04-78994"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100104463-04-78994"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100104463-04-78994"
					}
				}
			},
			{
				"titleId": "100104591-04-9493",
				"isbn": "9789629544744",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100104591-04-9493"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100104591-04-9493"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100104591-04-9493"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100104591-04-9493"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100104591-04-9493"
					}
				}
			},
			{
				"titleId": "100105011-04-107215",
				"isbn": "9780062440549",
				"format": "MP3",
				"enabled": true,
				"added": "2018-05-20T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100105011-04-107215"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100105011-04-107215"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100105011-04-107215"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100105011-04-107215"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100105011-04-107215"
					}
				}
			},
			{
				"titleId": "100105051-04-87981",
				"isbn": "9781780003665",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100105051-04-87981"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100105051-04-87981"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100105051-04-87981"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100105051-04-87981"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100105051-04-87981"
					}
				}
			},
			{
				"titleId": "100105336-04-79533",
				"isbn": "9781338243505",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100105336-04-79533"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100105336-04-79533"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100105336-04-79533"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100105336-04-79533"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100105336-04-79533"
					}
				}
			},
			{
				"titleId": "100105769-04-63504",
				"isbn": "9781442364325",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100105769-04-63504"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100105769-04-63504"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100105769-04-63504"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100105769-04-63504"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100105769-04-63504"
					}
				}
			},
			{
				"titleId": "100106598-04-68399",
				"isbn": "9781442368125",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 15,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100106598-04-68399"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100106598-04-68399"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100106598-04-68399"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100106598-04-68399"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100106598-04-68399"
					}
				}
			},
			{
				"titleId": "100106615-04-73582",
				"isbn": "9781937091774",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100106615-04-73582"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100106615-04-73582"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100106615-04-73582"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100106615-04-73582"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100106615-04-73582"
					}
				}
			},
			{
				"titleId": "100106982-04-74320",
				"isbn": "9781843797746",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100106982-04-74320"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100106982-04-74320"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100106982-04-74320"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100106982-04-74320"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100106982-04-74320"
					}
				}
			},
			{
				"titleId": "100108342-04-67292",
				"isbn": "9781338241938",
				"format": "MP3",
				"enabled": true,
				"added": "2023-10-24T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100108342-04-67292"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100108342-04-67292"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100108342-04-67292"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100108342-04-67292"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100108342-04-67292"
					}
				}
			},
			{
				"titleId": "100108615-04-73417",
				"isbn": "9780553396263",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100108615-04-73417"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100108615-04-73417"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100108615-04-73417"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100108615-04-73417"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100108615-04-73417"
					}
				}
			},
			{
				"titleId": "100109706-04-76162",
				"isbn": "9780739368336",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100109706-04-76162"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100109706-04-76162"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100109706-04-76162"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100109706-04-76162"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100109706-04-76162"
					}
				}
			},
			{
				"titleId": "100109925-04-87774",
				"isbn": "9781780003610",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100109925-04-87774"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100109925-04-87774"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100109925-04-87774"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100109925-04-87774"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100109925-04-87774"
					}
				}
			},
			{
				"titleId": "100110091-04-74929",
				"isbn": "9780062345790",
				"format": "MP3",
				"enabled": true,
				"added": "2018-02-25T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100110091-04-74929"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100110091-04-74929"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100110091-04-74929"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100110091-04-74929"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100110091-04-74929"
					}
				}
			},
			{
				"titleId": "100110137-04-76258",
				"isbn": "9781442374836",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100110137-04-76258"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100110137-04-76258"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100110137-04-76258"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100110137-04-76258"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100110137-04-76258"
					}
				}
			},
			{
				"titleId": "100111291-04-68387",
				"isbn": "9781442368095",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100111291-04-68387"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100111291-04-68387"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100111291-04-68387"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100111291-04-68387"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100111291-04-68387"
					}
				}
			},
			{
				"titleId": "100111538-04-76777",
				"isbn": "9780792751922",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100111538-04-76777"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100111538-04-76777"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100111538-04-76777"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100111538-04-76777"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100111538-04-76777"
					}
				}
			},
			{
				"titleId": "100112145-04-88796",
				"isbn": "9781101916582",
				"format": "MP3",
				"enabled": true,
				"added": "2017-07-10T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100112145-04-88796"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100112145-04-88796"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100112145-04-88796"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100112145-04-88796"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100112145-04-88796"
					}
				}
			},
			{
				"titleId": "100113450-04-48816",
				"isbn": "9780739350201",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100113450-04-48816"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100113450-04-48816"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100113450-04-48816"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100113450-04-48816"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100113450-04-48816"
					}
				}
			},
			{
				"titleId": "100113629-04-48363",
				"isbn": "9780307967237",
				"format": "MP3",
				"enabled": true,
				"added": "2020-09-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100113629-04-48363"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100113629-04-48363"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100113629-04-48363"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100113629-04-48363"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100113629-04-48363"
					}
				}
			},
			{
				"titleId": "100113800-04-87805",
				"isbn": "9781780003221",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100113800-04-87805"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100113800-04-87805"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100113800-04-87805"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100113800-04-87805"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100113800-04-87805"
					}
				}
			},
			{
				"titleId": "100113855-04-87819",
				"isbn": "9781780003269",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100113855-04-87819"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100113855-04-87819"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100113855-04-87819"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100113855-04-87819"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100113855-04-87819"
					}
				}
			},
			{
				"titleId": "100114020-04-130377",
				"isbn": "9780008175412",
				"format": "MP3",
				"enabled": true,
				"added": "2018-04-22T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100114020-04-130377"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100114020-04-130377"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100114020-04-130377"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100114020-04-130377"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100114020-04-130377"
					}
				}
			},
			{
				"titleId": "100114279-04-140936",
				"isbn": "9781518935169",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100114279-04-140936"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100114279-04-140936"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100114279-04-140936"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100114279-04-140936"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100114279-04-140936"
					}
				}
			},
			{
				"titleId": "100114641-04-89782",
				"isbn": "9781442385115",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100114641-04-89782"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100114641-04-89782"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100114641-04-89782"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100114641-04-89782"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100114641-04-89782"
					}
				}
			},
			{
				"titleId": "100115431-04-34732",
				"isbn": "9781442303645",
				"format": "MP3",
				"enabled": true,
				"added": "2023-01-10T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100115431-04-34732"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100115431-04-34732"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100115431-04-34732"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100115431-04-34732"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100115431-04-34732"
					}
				}
			},
			{
				"titleId": "100115639-04-34955",
				"isbn": "9780743582018",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100115639-04-34955"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100115639-04-34955"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100115639-04-34955"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100115639-04-34955"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100115639-04-34955"
					}
				}
			},
			{
				"titleId": "100115766-04-34111",
				"isbn": "9780743579629",
				"format": "MP3",
				"enabled": true,
				"added": "2023-02-13T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100115766-04-34111"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100115766-04-34111"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100115766-04-34111"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100115766-04-34111"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100115766-04-34111"
					}
				}
			},
			{
				"titleId": "100116016-04-88519",
				"isbn": "9781338250220",
				"format": "MP3",
				"enabled": true,
				"added": "2018-08-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100116016-04-88519"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100116016-04-88519"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100116016-04-88519"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100116016-04-88519"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100116016-04-88519"
					}
				}
			},
			{
				"titleId": "100116455-04-81696",
				"isbn": "9780553556025",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100116455-04-81696"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100116455-04-81696"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100116455-04-81696"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100116455-04-81696"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100116455-04-81696"
					}
				}
			},
			{
				"titleId": "100116998-04-74621",
				"isbn": "9781442347564",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100116998-04-74621"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100116998-04-74621"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100116998-04-74621"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100116998-04-74621"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100116998-04-74621"
					}
				}
			},
			{
				"titleId": "100117000-04-59673",
				"isbn": "9781442363090",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100117000-04-59673"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100117000-04-59673"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100117000-04-59673"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100117000-04-59673"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100117000-04-59673"
					}
				}
			},
			{
				"titleId": "100117028-04-62663",
				"isbn": "9781442347533",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100117028-04-62663"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100117028-04-62663"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100117028-04-62663"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100117028-04-62663"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100117028-04-62663"
					}
				}
			},
			{
				"titleId": "100117497-04-81249",
				"isbn": "9781442381773",
				"format": "MP3",
				"enabled": true,
				"added": "2017-07-10T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100117497-04-81249"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100117497-04-81249"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100117497-04-81249"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100117497-04-81249"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100117497-04-81249"
					}
				}
			},
			{
				"titleId": "100119243-04-96917",
				"isbn": "9781338241464",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100119243-04-96917"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100119243-04-96917"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100119243-04-96917"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100119243-04-96917"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100119243-04-96917"
					}
				}
			},
			{
				"titleId": "100119318-04-42582",
				"isbn": "9780062009012",
				"format": "MP3",
				"enabled": true,
				"added": "2020-09-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100119318-04-42582"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100119318-04-42582"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100119318-04-42582"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100119318-04-42582"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100119318-04-42582"
					}
				}
			},
			{
				"titleId": "100120688-04-124003",
				"isbn": "9781937091064",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100120688-04-124003"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100120688-04-124003"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100120688-04-124003"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100120688-04-124003"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100120688-04-124003"
					}
				}
			},
			{
				"titleId": "100121227-04-139077",
				"isbn": "9781524775322",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100121227-04-139077"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100121227-04-139077"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100121227-04-139077"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100121227-04-139077"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100121227-04-139077"
					}
				}
			},
			{
				"titleId": "100121620-04-7012",
				"isbn": "9789629544409",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100121620-04-7012"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100121620-04-7012"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100121620-04-7012"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100121620-04-7012"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100121620-04-7012"
					}
				}
			},
			{
				"titleId": "100121756-04-94491",
				"isbn": "9780062395818",
				"format": "MP3",
				"enabled": true,
				"added": "2018-07-22T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100121756-04-94491"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100121756-04-94491"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100121756-04-94491"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100121756-04-94491"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100121756-04-94491"
					}
				}
			},
			{
				"titleId": "100122057-04-110656",
				"isbn": "9781467699266",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 15,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100122057-04-110656"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100122057-04-110656"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100122057-04-110656"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100122057-04-110656"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100122057-04-110656"
					}
				}
			},
			{
				"titleId": "100123531-04-100939",
				"isbn": "9781338242324",
				"format": "MP3",
				"enabled": true,
				"added": "2021-12-07T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100123531-04-100939"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100123531-04-100939"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100123531-04-100939"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100123531-04-100939"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100123531-04-100939"
					}
				}
			},
			{
				"titleId": "100123550-04-100924",
				"isbn": "9781504634281",
				"format": "MP3",
				"enabled": true,
				"added": "2019-02-17T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100123550-04-100924"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100123550-04-100924"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100123550-04-100924"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100123550-04-100924"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100123550-04-100924"
					}
				}
			},
			{
				"titleId": "100123747-04-103250",
				"isbn": "9781442384880",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100123747-04-103250"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100123747-04-103250"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100123747-04-103250"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100123747-04-103250"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100123747-04-103250"
					}
				}
			},
			{
				"titleId": "100123767-04-108080",
				"isbn": "9781442397361",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100123767-04-108080"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100123767-04-108080"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100123767-04-108080"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100123767-04-108080"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100123767-04-108080"
					}
				}
			},
			{
				"titleId": "100124025-04-103132",
				"isbn": "9781442390072",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100124025-04-103132"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100124025-04-103132"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100124025-04-103132"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100124025-04-103132"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100124025-04-103132"
					}
				}
			},
			{
				"titleId": "100124037-04-108844",
				"isbn": "9781442398115",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100124037-04-108844"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100124037-04-108844"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100124037-04-108844"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100124037-04-108844"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100124037-04-108844"
					}
				}
			},
			{
				"titleId": "100124146-04-113712",
				"isbn": "9781508213994",
				"format": "MP3",
				"enabled": true,
				"added": "2017-08-09T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100124146-04-113712"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100124146-04-113712"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100124146-04-113712"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100124146-04-113712"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100124146-04-113712"
					}
				}
			},
			{
				"titleId": "100124451-04-113195",
				"isbn": "9781682767139",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100124451-04-113195"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100124451-04-113195"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100124451-04-113195"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100124451-04-113195"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100124451-04-113195"
					}
				}
			},
			{
				"titleId": "100124574-04-114251",
				"isbn": "9781509495818",
				"format": "MP3",
				"enabled": true,
				"added": "2020-09-15T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100124574-04-114251"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100124574-04-114251"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100124574-04-114251"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100124574-04-114251"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100124574-04-114251"
					}
				}
			},
			{
				"titleId": "100124979-04-113394",
				"isbn": "9781338250237",
				"format": "MP3",
				"enabled": true,
				"added": "2018-08-19T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100124979-04-113394"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100124979-04-113394"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100124979-04-113394"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100124979-04-113394"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100124979-04-113394"
					}
				}
			},
			{
				"titleId": "100125038-04-26585",
				"isbn": "9789629549534",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 14,
					"cyl": 8
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100125038-04-26585"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100125038-04-26585"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100125038-04-26585"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100125038-04-26585"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100125038-04-26585"
					}
				}
			},
			{
				"titleId": "100125054-04-26329",
				"isbn": "9789629544607",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100125054-04-26329"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100125054-04-26329"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100125054-04-26329"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100125054-04-26329"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100125054-04-26329"
					}
				}
			},
			{
				"titleId": "100125777-04-117205",
				"isbn": "9780008146320",
				"format": "MP3",
				"enabled": true,
				"added": "2021-11-16T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100125777-04-117205"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100125777-04-117205"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100125777-04-117205"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100125777-04-117205"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100125777-04-117205"
					}
				}
			},
			{
				"titleId": "100125877-04-116195",
				"isbn": "9780007218714",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100125877-04-116195"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100125877-04-116195"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100125877-04-116195"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100125877-04-116195"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100125877-04-116195"
					}
				}
			},
			{
				"titleId": "100127291-04-117385",
				"isbn": "9780007597000",
				"format": "MP3",
				"enabled": true,
				"added": "2018-07-22T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100127291-04-117385"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100127291-04-117385"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100127291-04-117385"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100127291-04-117385"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100127291-04-117385"
					}
				}
			},
			{
				"titleId": "100127522-04-117788",
				"isbn": "9780007219643",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100127522-04-117788"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100127522-04-117788"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100127522-04-117788"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100127522-04-117788"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100127522-04-117788"
					}
				}
			},
			{
				"titleId": "100127661-04-118217",
				"isbn": "9780007523306",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100127661-04-118217"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100127661-04-118217"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100127661-04-118217"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100127661-04-118217"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100127661-04-118217"
					}
				}
			},
			{
				"titleId": "100128280-04-50010",
				"isbn": "9781415951194",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"restrictions": {
					"age": 15,
					"cyl": 9
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100128280-04-50010"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100128280-04-50010"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100128280-04-50010"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100128280-04-50010"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100128280-04-50010"
					}
				}
			},
			{
				"titleId": "100128553-04-0517",
				"isbn": "9789629546700",
				"format": "MP3",
				"enabled": true,
				"added": "2017-06-14T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 1,
					"loaned": 0,
					"reserved": 0,
					"available": 1
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100128553-04-0517"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100128553-04-0517"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100128553-04-0517"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100128553-04-0517"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100128553-04-0517"
					}
				}
			},
			{
				"titleId": "100128641-04-48058",
				"isbn": "9780739329771",
				"format": "MP3",
				"enabled": true,
				"added": "2017-09-03T00:00:00Z",
				"loanModel": "copies",
				"copies": {
					"purchased": 0,
					"allowed": 2,
					"loaned": 0,
					"reserved": 0,
					"available": 2
				},
				"actions": {
					"loan": {
						"allow": true,
						"fee": null,
						"days": 14
					},
					"hold": {
						"allow": true,
						"fee": null,
						"days": 2
					}
				},
				"_links": {
					"self": {
						"href": "https://api.eplatform.co/v1/accessit/inventory/100128641-04-48058"
					},
					"title": {
						"href": "https://api.eplatform.co/v1/catalog/100128641-04-48058"
					},
					"txns": {
						"href": "https://api.eplatform.co/v1/accessit/txns?titleId=100128641-04-48058"
					},
					"active-loans": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=loan&state=active&titleId=100128641-04-48058"
					},
					"active-holds": {
						"href": "https://api.eplatform.co/v1/accessit/txns?type=hold&state=active,future&titleId=100128641-04-48058"
					}
				}
			}
		],
		"titles": [
			{
				"titleId": "40455002-01-963733",
				"isbn13": "9780711247468",
				"isbn10": "0711247463",
				"format": "EPUB",
				"name": "I Am Not a Label: 34 disabled artists, thinkers, athletes and activists from past and present",
				"contributors": [
					{
						"contributorId": "338715",
						"name": "Cerrie Burnell",
						"firstName": "Cerrie",
						"middleName": "",
						"lastName": "Burnell",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "500712",
						"name": "Lauren Mark Baldo",
						"firstName": "Lauren Mark",
						"middleName": "",
						"lastName": "Baldo",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-07-07",
					"country": "GB",
					"imprint": "Wide Eyed Editions"
				},
				"classifications": {
					"bic2": [
						"YXL",
						"YXK",
						"YNM"
					],
					"interestAge": [
						6,
						12
					]
				},
				"edition": "Illustrated Edition",
				"language": "en",
				"descriptions": [
					"<p>&quot;Intelligent, politically bold, and beautiful to browse [...] Every bookshelf needs a copy.&quot; &mdash; Disability Arts Online<b>In this stylishly illustrated biography anthology, meet 34&#160;artists, thinkers, athletes and activists with disabilities, from past and present. From Frida Kahlo to Stephen Hawking, find out how these iconic figures have overcome obstacles, owned their differences and paved the way for others by making their bodies and minds work for them.</b> These short biographies tell the stories of <b>people who have faced unique challenges which have not stopped them</b> from becoming trailblazers, innovators, advocates and makers. Each person is a leading figure in their field, be it sport, science, maths, art, breakdance or the world of pop.<b>Challenge your preconceptions of disability and mental health</b> with the eye-opening stories of these remarkable people: Ludwig van Beethoven, Gustav Kirchoff, Henri Matisse, Eliza Suggs, Helen Keller, Frida Kahlo, John Nash, Stephen Hawking, Temple Grandin, Stevie Wonder, Nabil Shaban, Terry Fox, Peter Dinklage, Wanda Diaz Merced, Emmanuel Ofosu Yeboah, Dr Victor Pineda, Farida Bedwei, Stella Young, Lady Gaga, Arunima Sinha, Naoki Higashida, Isabella Spingmuhl Tejada, Aaron Philip, Catalina Devandas Aguilar, Redouan Ait Chitt, Jonas Jacobsson, Trischa Zorn, Ade Adepitan, and Dynamo. As seen on<b>&#160;ITV&#39;s Good Morning Britain</b>:&#160;&quot;This book is there to help us all, to encourage us to talk about how we&rsquo;re all different [...] It&rsquo;s a really, really&#160;lovely book, beautifully illustrated as well.&quot;&mdash; Presenters&#160;Ben Shephard &amp;&#160;Ranvir Singh</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40455002-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40455002-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40455002-01-963733"
					}
				}
			},
			{
				"titleId": "41153363-01-984426",
				"isbn13": "9781684035809",
				"isbn10": "1684035805",
				"format": "EPUB",
				"name": "The Resilient Teen: 10 Key Skills to Bounce Back from Setbacks and Turn Stress into Success",
				"contributors": [
					{
						"contributorId": "300764",
						"name": "Sheela Raja",
						"firstName": "Sheela",
						"middleName": "",
						"lastName": "Raja",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-06-01",
					"imprint": "New Harbinger Publications"
				},
				"series": {
					"name": "The Instant Help Solutions Series"
				},
				"classifications": {
					"bic2": [
						"JMC"
					],
					"interestAge": [
						13,
						19
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>&ldquo;Well researched and up to date, including the acknowledgement of teens&rsquo; struggles with the Covid-19 pandemic.... Belongs on every young adult&rsquo;s bookshelf.&rdquo; &mdash;Kirkus Reviews (starred)</b></p><p><b>10 powerful skills to help you manage stress, bounce back from difficult situations, and rewire your brain for happiness and success!</b></p><p>Being a teen today is stressful. That&rsquo;s why you need real tools to help you cope with all of life&rsquo;s challenges&mdash;from small stressors like homework, social media, and dating to serious trauma resulting from bullying, school shootings, violence, and now&mdash;pandemics. The key to dealing with all of these difficult events is resilience&mdash;the ability to recover from setbacks or trauma, and forge ahead with emotional strength. The best thing about resilience is that it can be learned. This book will help you learn how to be resilient, so you can weather life&rsquo;s storms and reach your goals.</p><p>In The Resilient Teen, psychologist, teen expert, and trauma specialist Sheela Raja offers ten skills grounded in key principles from psychology and neuroscience to help you manage difficult emotions, recover from difficult situations, and cultivate a sense of joy&mdash;even in the face of setbacks and modern-day stressors. You&rsquo;ll learn essential strategies for self-care, how to establish a healthy lifestyle, and how to set limits on technology. You&rsquo;ll also discover how mindfulness can help you deal with stress and challenging emotions in the moment, tips for building better relationships with family and friends, and tools for dealing with disappointment.</p><p>Most importantly, this book will show you how to increase your own sense of joy, purpose, and meaning&mdash;even when things seem less than awesome.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/41153363-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/41153363-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/41153363-01-984426"
					}
				}
			},
			{
				"titleId": "39376523-01-919459",
				"isbn13": "9781406399189",
				"isbn10": "1406399183",
				"format": "EPUB",
				"name": "Agents of the Wild 2: Operation Icebeak",
				"contributors": [
					{
						"contributorId": "189433",
						"name": "Jennifer Bell",
						"firstName": "Jennifer",
						"middleName": "",
						"lastName": "Bell",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "465383",
						"name": "Alice Lickens",
						"firstName": "Alice",
						"middleName": "",
						"lastName": "Lickens",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-09-03",
					"country": "GB",
					"imprint": "Walker Books"
				},
				"series": {
					"name": "Agents of the Wild"
				},
				"classifications": {
					"bic2": [
						"YFP",
						"YFQ"
					],
					"interestAge": [
						7,
						9
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>  Agnes and Attie – AGENTS OF THE WILD - are bound for the Antarctic on their second creature-crazy wildlife-rescue adventure</b>. When SPEARS receives an emergency distress call from its marine outpost in Antarctica, there is only one team they can send. Agnes and Attie are soon up to their eyes in an icebound mystery. What is causing the tremors threatening to destroy the rescue centre? Why are the local Adelie penguins behaving so bizarrely? And what exactly is the celebrity nature presenter Cynthia Steelsharp doing, out there in the ice-fields…? <b>SPECIES IN DANGER? GIRL AND SHREW TO THE RESCUE!</b></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/39376523-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/39376523-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39376523-01-919459"
					}
				}
			},
			{
				"titleId": "39376535-01-919471",
				"isbn13": "9781406396287",
				"isbn10": "1406396281",
				"format": "EPUB",
				"name": "The Midnight Guardians",
				"contributors": [
					{
						"contributorId": "250361",
						"name": "Ross Montgomery",
						"firstName": "Ross",
						"middleName": "",
						"lastName": "Montgomery",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-11-05",
					"country": "GB",
					"imprint": "Walker Books"
				},
				"classifications": {
					"bic2": [
						"YFA",
						"YFT",
						"YFH",
						"YFN",
						"YFB"
					],
					"interestAge": [
						9,
						12
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>Discover a world of magical storytelling with Ross Montgomery.</b>  <b>SHORTLISTED FOR THE COSTA CHILDREN'S BOOK AWARD </b><b>WATERSTONES CHILDREN'S BOOK OF THE MONTH</b><b>HIVE CHILDREN'S BOOK OF THE MONTHTOPPSTA CHILDREN'S BOOK OF THE MONTH</b><b>\"One of our finest children’s writers.\" Phil Earle</b><b>\"A master storyteller.\" Aisling Fowler</b><b>\"Another absolute triumph from one of my favourite children’s authors.\" Catherine Doyle </b>Sometimes at the darkest hour, hope shines the brightest…When Col’s childhood imaginary friends come to life, he discovers a world where myths and legends are real. Accompanied by his guardians – a six-foot tiger, a badger in a waistcoat and a miniature knight – Col must race to Blitz-bombed London to save his sister.But there are darker forces at work, even than the Nazi bombings. Soon Col is pursued by the terrifying Midwinter King, who is determined to bring an eternal darkness down over everything.<b>PRAISE FOR THE MIDNIGHT GUARDIANS</b>\"Montgomery's latest is <b>an enthralling, Narnia-flavoured novel</b> with the folkloric feel of a Christmas classic.\" <b>Guardian</b>\"Beautifully drawn fantasy characters ... <b>a story of hope and love</b> underpinned by witty humour.\" <b>Daily Mail</b>\"A <b>magical</b> slice of historical fantasy fiction.\" <b>i Newspaper</b>\"This lovely adventure story has<b> the feel of a classic</b> children's book.\"  Book of the Week,<b> The Week Junior</b>\"Ross Montgomery’s <b>beautiful writing and epic storytelling</b> weave together a magical adventure set against the backdrop of World War Two.\" <b>WRD Magazine</b>\"<b>Spectacular</b>. A story of real and rare power - The Midnight Guardians is one of the best books I've read in years.\" <b>Kiran Millwood Hargrave</b>\"The Midnight Guardians is <b>torch-under-the-duvet, can't-stop-reading magic</b>. British folklore rebooted … in an edge-of-your-seat, heart-filled search for hope in the darkest hour.\" <b>Piers Torday</b>\"Embark on <b>a mythic, comic, classic adventure</b> with the finest fellowship since Frodo set a hairy foot beyond the Shire.\" <b>David Solomons</b>\"<b>Glorious!</b> I think this is Ross Montgomery’s best book yet: an adventure across WWII wintry Britain with a Kindertransportee, a boy dressed in shorts and his three imaginary friends. <b>A joy of a thing</b>.\" <b>Katherine Rundell</b>\"A gem of book,<b> jam-packed with heart and humour</b> and one utterly unique set of friends.\" <b>Peter Bunzl</b>\"<b>Pure magic.</b> Storytelling at its very best.\" <b>Abi Elphinstone</b>\"<b>Brilliant! </b>The Midnight Guardians is the perfect blend of humour, adventure and emotion. Simply beautiful.\" <b>Lisa Thompson</b>\"Funny, thrilling, moving ... <b>everything that is brilliant about children's literature</b>. A triumph.\" <b>Sophie Anderson</b>\"<b>Brimming with imagination and warmth</b>, and powered by the strongest magic of all - hope. Fantastic from first page to last.\"  <b>Catherine Doyle</b>\"Beautiful. <b>A magical, big-hearted adventure full of wit and warmth</b>. One of the best children's books I've read for ages.\" <b>Anna James</b>\"A tale of enchantment and friendship … a<b>ll the warmth of a timeless story, told between friends round a winter fire</b> … funny and true in the way all good stories are.\" <b>Thomas Taylor</b>\"The adventure whisks you through wartime trouble and mythical danger like riding a giant tiger through falling snow … A <b>magical</b> story.\" <b>Jack Noel</b>\"With the spirit of Narnia, but a heart of its own. The Midnight Guardians is<b> totally enchanting</b>. I gobbled up every word.\" <b>Aisha Bushby</b>\"I inhaled this wonderful book in one sitting ... humour, beautiful writing, heartbreak, hope, and a fat badger in a waistcoat. <b>I'll be recommending it to everyone</b>.\" <b>Katya Balen</b>\"<b>A real triumph of the imagination</b>.\" <b>Editor's Choice, The Bookseller</b></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/39376535-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/39376535-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39376535-01-919471"
					}
				}
			},
			{
				"titleId": "39466032-01-921567",
				"isbn13": "9781684034673",
				"isbn10": "1684034671",
				"format": "EPUB",
				"name": "Your Life, Your Way: Acceptance and Commitment Therapy Skills to Help Teens Manage Emotions and Build Resilience",
				"contributors": [
					{
						"contributorId": "279241",
						"name": "Joseph V. Ciarrochi",
						"firstName": "Joseph V.",
						"middleName": "",
						"lastName": "Ciarrochi",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "284421",
						"name": "Louise L. Hayes",
						"firstName": "Louise L.",
						"middleName": "",
						"lastName": "Hayes",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "384442",
						"name": "Katharine Hall",
						"firstName": "Katharine",
						"middleName": "",
						"lastName": "Hall",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-09-01",
					"imprint": "New Harbinger Publications"
				},
				"classifications": {
					"bic2": [
						"VFXC1"
					],
					"interestAge": [
						13,
						19
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>The ultimate teen guide to handling all the pressures and challenges of life&mdash;your own way!</b></p><p>Being a teen in today&rsquo;s world is tough. Between school pressure, family, friends, and extracurricular activities&mdash;sometimes it can feel like you&rsquo;re being pulled in a dozen different directions, and none of them are your way. On top of that, you may feel lonely, angry, or depressed; or you may wonder if you&rsquo;re good enough, smart enough, or attractive enough. So, how can you overcome these self-doubts, and cultivate the strength to face life&rsquo;s challenges and reach your full potential?</p><p>In Your Life, Your Way, you&rsquo;ll learn how to deal with all the changes and challenges of the teen years&mdash;and how to grow into the person you want to be. You&rsquo;ll learn doable skills grounded in mindfulness, acceptance and commitment therapy (ACT), and positive psychology to help you form positive friendships, manage difficult emotions, and get unstuck from bad habits. You&rsquo;ll also learn real tips for dealing with several life challenges, including:</p><ul><li>Feelings of uncertainty</li><li>Concerns about your looks</li><li>Deadlines</li><li>School/college/work</li><li>Family</li><li>Worries about the future</li><li>Relationship stress</li></ul> &#160; <p>Once you identify your own personal struggles, you can decide how you want to face them&mdash;as strong, assertive, kind, honorable, caring, fun, supportive, friendly, agreeable, bold, persistent, or giving.</p><p>If you&rsquo;re ready to take charge of your destiny and face problems head on in your own way, this fun and illustrated book has everything you need to get started today!</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/39466032-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/39466032-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39466032-01-921567"
					}
				}
			},
			{
				"titleId": "39504736-01-922151",
				"isbn13": "9781800900004",
				"format": "EPUB",
				"name": "The House of Clouds",
				"contributors": [
					{
						"contributorId": "320315",
						"name": "Lisa Thompson",
						"firstName": "Lisa",
						"middleName": "",
						"lastName": "Thompson",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "481105",
						"name": "Alice McKinley",
						"firstName": "Alice",
						"middleName": "",
						"lastName": "McKinley",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-09-03",
					"country": "GB",
					"imprint": "HarperCollins Publishers"
				},
				"classifications": {
					"bic2": [
						"YFY",
						"YFN",
						"YNND",
						"YFB"
					],
					"interestAge": [
						0,
						5
					]
				},
				"language": "en",
				"descriptions": [
					"The power of imagination and storytelling combine in a poignant and uplifting novella of family, connection and overcoming grief.Tabby's fed up. Fed up with losing her best friend and fed up that Grandad has come to stay. Grandad's always telling the same old silly, made-up stories and now Tabby has to walk his smelly dog Buster every day after school. When one of Tabby's walks takes her to a lonely hilltop house she spots something strange going on. So strange she can't help but mention it to Grandad who of course turns it all into another fantasy. But when tragedy strikes, Tabby's left wondering if Grandad's impossible story could be true? A poignant and uplifting story of family, connection and imagination, from the Blue Peter Book Award shortlisted author of Owen and the Soldier. Particularly suitable for struggling, reluctant or dyslexic readers aged 8+"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39504736-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39504736-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39504736-01-922151"
					}
				}
			},
			{
				"titleId": "39593263-01-925504",
				"isbn13": "9781684035298",
				"isbn10": "1684035295",
				"format": "EPUB",
				"name": "The Self-Compassionate Teen: Mindfulness and Compassion Skills to Conquer Your Critical Inner Voice",
				"contributors": [
					{
						"contributorId": "364321",
						"name": "Karen Bluth",
						"firstName": "Karen",
						"middleName": "",
						"lastName": "Bluth",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-10-01",
					"imprint": "New Harbinger Publications"
				},
				"series": {
					"name": "The Instant Help Solutions Series"
				},
				"classifications": {
					"bic2": [
						"JMC"
					],
					"interestAge": [
						13,
						19
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>Are you kind to everyone but yourself? This book will help you find the strength and courage to move beyond self-criticism and just be you. </b></p><p>Do you ever feel like you&rsquo;re just not good enough? Do you often compare yourself to friends, classmates, or even celebrities and models? As a teen facing intense physical, mental, and social changes, it&rsquo;s easy to get caught up in self-judgment and criticism. The problem is, over time, these negative thoughts can build up, cloud your world, and lead to stress, anxiety, and even depression. So, how can you start being nicer to yourself?</p><p>Written by psychologist Karen Bluth and based on practices adapted from Kristin Neff and Christopher Germer&rsquo;s Mindful Self-Compassion program, this book offers fun, everyday exercises grounded in mindfulness and self-compassion to help you overcome crippling self-criticism and respond to feelings of self-doubt with greater kindness and self-care. You&rsquo;ll find real tools to help you work through difficult thoughts and feelings, navigate life&rsquo;s emotional ups and downs, and be as accepting of yourself as you are of others.</p><p>Learning to believe in yourself means being aware of the self-critical voice inside you, and then discovering how to not&#160;take it so seriously. With this book, you&rsquo;ll learn how self-compassion can actually be a much greater motivator for reaching your goals than self-criticism. In fact, being kind to yourself when you&rsquo;re struggling can actually reduce stress and make you more resilient!</p><p>So, stop beating yourself up, and start reading this book. You have an important friend to make&mdash;you!</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/39593263-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/39593263-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39593263-01-925504"
					}
				}
			},
			{
				"titleId": "39593268-01-925509",
				"isbn13": "9781684035359",
				"isbn10": "168403535X",
				"format": "EPUB",
				"name": "Six Super Skills for Executive Functioning: Tools to Help Teens Improve Focus, Stay Organized, and Reach Their Goals",
				"contributors": [
					{
						"contributorId": "276942",
						"name": "Lara Honos-Webb",
						"firstName": "Lara",
						"middleName": "",
						"lastName": "Honos-Webb",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-10-01",
					"imprint": "New Harbinger Publications"
				},
				"series": {
					"name": "The Instant Help Solutions Series"
				},
				"classifications": {
					"interestAge": [
						13,
						19
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>6 SUPER SKILLS to help teens stay focused and reach their goals!</b></p><p>Do you sometimes have trouble paying attention in school? Do you lose track of time and deadlines? Do you often feel &ldquo;scattered&rdquo; or unorganized? You&rsquo;re not alone. All teens need a little extra help staying focused&mdash;in school and in life. This is especially true if you have attention-deficit/hyperactivity disorder (ADHD), autism spectrum disorder, sensory processing disorders, a mood disorder, or have experienced traumatic brain injury. The good news is that there are skills you can learn to help you stay on track.</p><p>In this friendly guide, psychologist and ADHD expert Lara Honos-Webb offers six powerful &ldquo;super skills&rdquo; to help you pay attention, increase productivity, and get organized so you can achieve your goals and live your best life. These skills include:</p><ul><li>Focusing on the positive</li><li>Goal setting</li><li>Chunking: breaking big goals down into small manageable chunks</li><li>Motivational enhancement</li><li>Emotional regulation: dealing with &ldquo;big&rdquo; feelings</li><li>Managing attention&#160;</li></ul> &#160; <p>Once you learn and practice these skills, you&rsquo;ll feel empowered to conquer any task&mdash;no matter how big. So, why not start learning them today?</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/39593268-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/39593268-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39593268-01-925509"
					}
				}
			},
			{
				"titleId": "39643929-01-926051",
				"isbn13": "9780192737175",
				"isbn10": "0192737171",
				"format": "EPUB",
				"name": "Bob and Flo: Hide and Seek",
				"contributors": [
					{
						"contributorId": "325136",
						"name": "Rebecca Ashdown",
						"firstName": "Rebecca",
						"middleName": "",
						"lastName": "Ashdown",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2016-01-07",
					"imprint": "OUP Oxford"
				},
				"classifications": {
					"bic2": [
						"YBCS"
					]
				},
				"language": "en",
				"descriptions": [
					"When Bob arrives at nursery, half hidden under his umbrella, it gives his friends Flo and Sam an idea. They should all play a game of hide and seek! Bob is first to hide but his hiding skills need a little bit of practice and he needs some help in understanding how to play the game. Flo and Sam decide to do some pretend baking to give Bob enough time to find a really good place to hide. And it works! The game finishes when Bob emerges from his hiding place just in time for the three friends to tuck into their pretend slices of cake. A beautifully-illustrated story from new talent Rebecca Ashdown, presenting a toddler's-eye-view of the world to help young children everywhere to steer a course through their first friendships. Lots of visual humour to really engage a young audience."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/34/39643929-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/34/39643929-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39643929-01-926051"
					}
				}
			},
			{
				"titleId": "39643940-01-926062",
				"isbn13": "9780192737304",
				"isbn10": "0192737309",
				"format": "EPUB",
				"name": "This Book Just Ate My Dog!",
				"contributors": [
					{
						"contributorId": "482859",
						"name": "Richard Byrne",
						"firstName": "Richard",
						"middleName": "",
						"lastName": "Byrne",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2014-09-04",
					"imprint": "OUP Oxford"
				},
				"classifications": {
					"bic2": [
						"YBCS"
					]
				},
				"language": "en",
				"descriptions": [
					"In this wonderfully inventive book, Bella is taking her dog for a stroll across the page but halfway across, he disappears! Unable to quite believe what's just happened Bella watches, transfixed, with changing emotions of surprise, indignation, moments of renewed hope (as the authorities arrive to take control) followed by shock (as they too succumb to the book's inexplicable behaviour) and finally action when Bella marches toward the dangerous middle of the book . . . only to disappear herself! At this point, the book has consumed its characters and it's down to the reader to step in to help. A note from Bella appears directly appealing for assistance and, with a rigorous shake, the characters reappear. Normality is restored and Bella is finally able to take her dog for an uninterrupted walk . . . or is she?!"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/34/39643940-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/34/39643940-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39643940-01-926062"
					}
				}
			},
			{
				"titleId": "39644056-01-926175",
				"isbn13": "9780192739667",
				"isbn10": "0192739662",
				"format": "EPUB",
				"name": "Winnie and Wilbur Winnie's Alien Sleepover",
				"contributors": [
					{
						"contributorId": "482821",
						"name": "Laura Owen",
						"firstName": "Laura",
						"middleName": "",
						"lastName": "Owen",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "482820",
						"name": "Korky Paul",
						"firstName": "Korky",
						"middleName": "",
						"lastName": "Paul",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-08-06",
					"imprint": "OUP Oxford"
				},
				"classifications": {
					"bic2": [
						"YFB"
					],
					"interestAge": [
						7,
						9
					]
				},
				"language": "en",
				"descriptions": [
					"Winnie and Wilbur are always on the lookout. Whether it's Winnie looking for her lost teddy, Wilbur looking for fame and fortune, Winnie looking seriously wobbly on a bicycle, or Winnie and Wilbur looking at the stars and spotting an alien, there is one thing they always find - true adventure! Four hilarious stories featuring Winnie and Wilbur and a zany supporting cast. Korky Paul's exuberant black line illustrations complement the humour, slapstick, and moments of real drama in each story. 'Funny, mischievous, silly, and exciting. Great stuff.' Giles Andrea, author of Sir Scallywag and the Golden Underpants. The spellbinding new look of this bestselling series celebrates the wonderful relationship shared by Winnie and her cat, Wilbur. Since 1987 they have been delighting children and adults all over the world and more than 7 million books have been sold. Winnie and Wilbur will be hitting TV screens worldwide in 2017, airing in the UK on Milkshake, Channel 5's popular pre-school slot. A Winnie and"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/34/39644056-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/34/39644056-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39644056-01-926175"
					}
				}
			},
			{
				"titleId": "39661567-01-927345",
				"isbn13": "9781472972279",
				"format": "EPUB",
				"name": "Live Well, Learn Well: A practical approach to supporting student wellbeing",
				"contributors": [
					{
						"contributorId": "370985",
						"name": "Abigail Mann",
						"firstName": "Abigail",
						"middleName": "",
						"lastName": "Mann",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-10-15",
					"country": "GB",
					"imprint": "Bloomsbury Publishing"
				},
				"classifications": {
					"bic2": [
						"JNF",
						"JNK",
						"VFJS",
						"JNLC",
						"JNH"
					]
				},
				"language": "en",
				"descriptions": [
					"Supporting student wellbeing is an absolute must if you are to develop high-achieving, well-rounded learners. After all, happy students are successful students. Live Well, Learn Well is packed with 90 practical ideas and strategies that will help your students progress with their studies and thrive in your secondary classroom.#Teacher5aday advocate Abigail Mann offers easy-to-implement techniques that use classroom management, classroom layout, praise and rewards to support student wellbeing. By the same author as Live Well, Teach Well, this book offers ideas and activities that will help students to manage their time and workload more effectively, learn coping strategies to manage stress and play a more active role in their local communities. The dip-in-and-out format will enable you to act quickly to support the needs of your students so they feel happy with their studies and confident about their progress. Improving social and emotional wellbeing in this way will build better relationships between you and your students, boost mental health and have a positive impact on academic outcomes."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1559/39661567-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1559/39661567-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39661567-01-927345"
					}
				}
			},
			{
				"titleId": "39680404-01-927370",
				"isbn13": "9780062840370",
				"isbn10": "0062840371",
				"format": "EPUB",
				"name": "Grown",
				"contributors": [
					{
						"contributorId": "327236",
						"name": "Tiffany D. Jackson",
						"firstName": "Tiffany D.",
						"middleName": "",
						"lastName": "Jackson",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-09-15",
					"imprint": "HarperCollins"
				},
				"classifications": {
					"bic2": [
						"YFCB",
						"YXC"
					],
					"interestAge": [
						13,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p><strong>An instant <em>New York Times</em> bestseller! &#8220;<em>Grown </em>exposes the underbelly of a tough conversation, providing a searing examination of misogynoir, rape culture, and the vulnerability of young black girls. Groundbreaking, heart-wrenching, and essential reading for all in the #MeToo era.&#8221; &#8212;Dhonielle Clayton,&#160;<em>New York Times</em>&#160;bestselling author of&#160;<em>The Belles</em>&#160;</strong></p>  <p>Award-winning author Tiffany D. Jackson delivers another riveting, ripped-from-the-headlines mystery that exposes horrific secrets hiding behind the limelight and embraces the power of a young woman&#8217;s voice.</p>  <p>When legendary R&#38;B artist Korey Fields spots Enchanted Jones at an audition, her dreams of being a famous singer take flight. Until Enchanted wakes up with blood on her hands and zero memory of the previous night. Who killed Korey Fields?</p>  <p>Before there was a dead body, Enchanted&#8217;s dreams had turned into a nightmare. Because behind Korey&#8217;s charm and star power was a controlling dark side. Now he&#8217;s dead, the police are at the door, and all signs point to Enchanted.</p><p><strong>&#8220;Never have I read a story that so flawlessly hits the highest high and lowest low notes of Black girlhood in pursuit of the American Dream.&#8221;</strong> &#8212;Nic Stone, <em>New York Times</em> bestselling author of <em>Dear Martin</em> and <em>Jackpot</em></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1174/39680404-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1174/39680404-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39680404-01-927370"
					}
				}
			},
			{
				"titleId": "39683866-01-927771",
				"isbn13": "9781800900080",
				"format": "EPUB",
				"name": "World Burn Down",
				"contributors": [
					{
						"contributorId": "170439",
						"name": "Steve Cole",
						"firstName": "Steve",
						"middleName": "",
						"lastName": "Cole",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "483462",
						"name": "Oriol Vidal",
						"firstName": "Oriol",
						"middleName": "",
						"lastName": "Vidal",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-10-01",
					"country": "GB",
					"imprint": "HarperCollins Publishers"
				},
				"classifications": {
					"bic2": [
						"YFC",
						"YFP",
						"YXL",
						"YFCB",
						"YFCF",
						"YFN",
						"YXZG",
						"YXF",
						"YNNR",
						"YNK"
					],
					"interestAge": [
						0,
						5
					]
				},
				"language": "en",
				"descriptions": [
					"A powerful and potent look at the destruction humans wreak upon the Amazon rainforest, by the bestselling author of Young Bond.Carlos's mother works for IBAMA, Brazil's Environmental Authority. As head of a specially trained task force, her role is to protect the Amazon from the farmers, loggers and miners who are illegally destroying the precious rainforest. It's a dangerous role and when she upsets some of these land-grabbers, they decide to teach her a lesson by kidnapping her son, Carlos. Taken deep into the Amazon, Carlos manages to escape his captors only to find himself trapped by the fast-moving fires. Will he be able to outrun the flames as the world around him burns to the ground? The terrifying reality of illegal deforestation and the destruction of the rainforest is revealed in this powerful and gripping Amazonian adventure from bestselling author Steve Cole. Particularly suitable for struggling, reluctant and dyslexic readers aged 8+"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39683866-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39683866-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39683866-01-927771"
					}
				}
			},
			{
				"titleId": "39683874-01-927778",
				"isbn13": "9781800900059",
				"isbn10": "",
				"format": "EPUB",
				"name": "Rock Bottom",
				"contributors": [
					{
						"contributorId": "250361",
						"name": "Ross Montgomery",
						"firstName": "Ross",
						"middleName": "",
						"lastName": "Montgomery",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "195980",
						"name": "Mark Beech",
						"firstName": "Mark",
						"middleName": "",
						"lastName": "Beech",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-10-01",
					"country": "GB",
					"imprint": "HarperCollins Publishers"
				},
				"series": {
					"name": "Shakespeare Shake-ups"
				},
				"classifications": {
					"bic2": [
						"YFS",
						"YXS",
						"YFB",
						"YFQ",
						"YND"
					],
					"interestAge": [
						0,
						5
					]
				},
				"language": "en",
				"descriptions": [
					"Ross Montgomery makes his Barrington Stoke debut with this comical caper that sees a match-making dream turn into a midsummer night's disaster.Nick is truly, madly in love with Jessie Stone. And she doesn't even know his name. In a ploy to win her heart, he plans to star alongside her in the school production of 'A Midsummer Night's Dream'. But when he's cast as the foolish Bottom instead of the romantic lead, his whole world comes crashing down. Enter Robyn, school mischief-maker, who has some crafty tricks up her sleeve. With her help Nick is sure he can get Jessie to notice him just as long as his grand plans don't go up in smoke … A laugh-out-loud comical caper of friendship, true love and a completely disastrous school Shakespeare production from bestselling author Ross Montgomery. Particularly suitable for struggling, reluctant and dyslexic readers aged 8+"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39683874-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39683874-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39683874-01-927778"
					}
				}
			},
			{
				"titleId": "39683875-01-927779",
				"isbn13": "9781800900066",
				"format": "EPUB",
				"name": "The Griffin Gate",
				"contributors": [
					{
						"contributorId": "483478",
						"name": "Vashti Hardy",
						"firstName": "Vashti",
						"middleName": "",
						"lastName": "Hardy",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "483477",
						"name": "Natalie Smillie",
						"firstName": "Natalie",
						"middleName": "",
						"lastName": "Smillie",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-10-01",
					"country": "GB",
					"imprint": "HarperCollins Publishers"
				},
				"series": {
					"name": "The Griffin Gate"
				},
				"classifications": {
					"bic2": [
						"YFC",
						"YXL",
						"YFCF",
						"YFG",
						"YFH",
						"YFN",
						"YFB",
						"YNT",
						"YNK"
					],
					"interestAge": [
						0,
						5
					]
				},
				"language": "en",
				"descriptions": [
					"Bestselling author Vashti Hardy transports us to a world like no other in a steampunk, fantasy adventure with family at its heart.\"Warden Griffin at your service. Can I ask if you've seen a monster in the area …?\" So when Grace finds herself alone with the map when a distress call comes in, she jumps at the chance to prove she's up to the task. But the map transports Grace to a remote village where nothing is quite as it seems … Has she taken on more than she can handle? Be transported to a world like no other in this steampunk, fantasy adventure with family at its heart from Blue Peter Book Award-winner Vashti Hardy."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39683875-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39683875-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39683875-01-927779"
					}
				}
			},
			{
				"titleId": "39723142-01-931914",
				"isbn13": "9781526629890",
				"format": "EPUB",
				"name": "The Book of Hopes: Words and Pictures to Comfort, Inspire and Entertain",
				"contributors": [
					{
						"contributorId": "153143",
						"name": "Katherine Rundell",
						"firstName": "Katherine",
						"middleName": "",
						"lastName": "Rundell",
						"attr": "Edited by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-10-01",
					"country": "GB",
					"imprint": "Bloomsbury Publishing"
				},
				"classifications": {
					"bic2": [
						"YFB",
						"YFU",
						"YDC"
					],
					"interestAge": [
						7,
						9
					]
				},
				"language": "en",
				"descriptions": [
					"<b>_______________</b><b>Shortlisted for Waterstones Book of the Year </b><b>_______________</b>In difficult times, what children really need is hope. And in that spirit, bestselling author Katherine Rundell emailed some of the children's writers and artists whose work she loved most:'I asked them to write something very short, fiction or non-fiction, or draw something that would make the children reading it feel like possibility-ists: something that would make them laugh or wonder or snort or smile. The response was magnificent, which shouldn't have surprised me, because children's writers and illustrators are professional hunters of hope … I hope that the imagination can be a place of shelter for children and that The Book of Hopes might be useful in that, even if only a little.'This collection, packed with short stories, poems and pictures from the very best children's authors and illustrators, aims to provide just that. Within its pages you'll find animal friends from insects to elephants, high-flying grandmas, a homesick sprite, the tooth fairy, and even extra-terrestrial life.There are 133 contributions from authors and illustrators, including Anthony Horowitz, Axel Scheffler, Catherine Johnson, Jacqueline Wilson, Katherine Rundell, Lauren Child, Michael Morpurgo and Onjali Q. Raúf. A donation from the sale of each book will go to NHS Charities Together, in gratitude for the incredible efforts of all those who worked in hospitals over the quarantine period.<b>_______________</b><b>'An anthology on the theme of hope … it includes a rich range of images, poetry, stories and non-fiction' </b>- Sunday Times, 'Stories to charm on endless days' Proceeds from this book will be donated to NHS Charities Together. In respect of UK sales, this will be £2.10 and in respect of sales in other territories this will be 16% of net receipts (at least 62p).NHS Charities Together is a charity registered in England and Wales (registered charity no. 1186569)."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1560/39723142-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1560/39723142-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39723142-01-931914"
					}
				}
			},
			{
				"titleId": "39728192-01-932224",
				"isbn13": "9781406396522",
				"isbn10": "1406396524",
				"format": "EPUB",
				"name": "Molly Thompson and the Crypt of the Blue Moon",
				"contributors": [
					{
						"contributorId": "485480",
						"name": "Nick Tomlinson",
						"firstName": "Nick",
						"middleName": "",
						"lastName": "Tomlinson",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-10-01",
					"country": "GB",
					"imprint": "Walker Books"
				},
				"classifications": {
					"bic2": [
						"YFQ",
						"YFD"
					],
					"interestAge": [
						9,
						12
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>The scariest legends just got scarier!</b>When two journalists are sent to Howlfair to write about the world's scariest town, they want amateur historian Molly to be their guide. But there's something creepy about them - they seem a little too interested in a local legend of a phantom known as the Silentman. And they want Molly to help them find a hidden crypt that was never meant to be opened... A madcap horror adventure with spooky tombs, flying skeletons, a wig-stealing cat and a phantom whose touch spells madness!</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/39728192-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/39728192-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39728192-01-932224"
					}
				}
			},
			{
				"titleId": "39728235-01-932270",
				"isbn13": "9781631950889",
				"isbn10": "1631950886",
				"format": "EPUB",
				"name": "Be Strong, Be Wise: The Young Adults Guide to Sexual Assault Awareness and Personal Safety",
				"contributors": [
					{
						"contributorId": "529776",
						"name": "Amy R. Carpenter",
						"firstName": "Amy R.",
						"middleName": "",
						"lastName": "Carpenter",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-10-06",
					"imprint": "Morgan James Publishing"
				},
				"classifications": {
					"interestAge": [
						13,
						20
					]
				},
				"edition": "",
				"language": "en",
				"descriptions": [
					"<b>How Do I Prevent Sexual Assault?</b><p>\nIf youre a teenager or young adult asking this question, theres probably a reason. Have you heard rumors about someone you know getting assaulted? Do you worry about date rape? Or perhaps youve experienced sexual assault and didnt know what to do or where to turn. Be Strong, Be Wise will help! Psychotherapist and trauma expert, Amy Carpenter, provides all the information young men, women, and non-binary youth need in order to avoid toxic relationships and instead build healthy ones. By the end, you will have tools you can use to feel confident in public settings, whether on campus, at a party or a club, on a date, or a night on the town. <p>\nYoull learn how to:\n<li>Establish a system with friends that lowers risk without missing any fun</li>\n<li>Use the 5 tools that build self-knowledge and healthy boundaries</li>\n<li>Recognize the red flags you need to know when meeting new people or starting a new relationship</li>\n<li>Understand gender roles as they relate to safety</li>\n<li>Identify and respond to cyber harassment</li><p>\nWith Be Strong, Be Wise, learn how to have fun while staying safe!</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/39728235-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/39728235-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39728235-01-932270"
					}
				}
			},
			{
				"titleId": "39728888-01-932424",
				"isbn13": "9780825308192",
				"isbn10": "0825308194",
				"format": "EPUB",
				"name": "My Feet Aren't Ugly: A Girl's Guide to Loving Herself from the Inside Out",
				"contributors": [
					{
						"contributorId": "133421",
						"name": "Debra Beck",
						"firstName": "Debra",
						"middleName": "",
						"lastName": "Beck",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-10-27",
					"imprint": "Beaufort Books"
				},
				"classifications": {
					"interestAge": [
						13,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"Updated Content, including three new chapters!Make healthy decisions in the face of peer pressure, have strong relationships with family and friends, and respect and love yourself for who you are. In My Feet Aren't Ugly, teen mentor Debra Beck provides sometimes funny and always honest personal stories along with quizzes, journaling exercises, and thoughts from teens themselves to help develop self-confidence.Whether you feel bad about yourself, have trouble fitting in, or have tough questions you are afraid to ask, this updated edition will help pre-teens, teens, and parents tackle these issues together."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/639/39728888-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/639/39728888-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39728888-01-932424"
					}
				}
			},
			{
				"titleId": "39783146-01-934102",
				"isbn13": "9780241397053",
				"isbn10": "0241397057",
				"format": "EPUB",
				"name": "Harrow Lake",
				"contributors": [
					{
						"contributorId": "204770",
						"name": "Kat Ellis",
						"firstName": "Kat",
						"middleName": "",
						"lastName": "Ellis",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-07-09",
					"country": "GB",
					"imprint": "Penguin Random House Children's UK"
				},
				"classifications": {
					"bic2": [
						"YFCB",
						"YFD"
					],
					"interestAge": [
						13,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<p>It's an old-fashioned puppet. The details are hard to make out in the dim light, but it looks like the puppet's neck is broken. It's a sad-looking thing, trapped there in its cage. Maybe I should let it out...   <b>THE MUST-HAVE THRILLER OF 2020 THAT WILL KEEP YOU GRIPPED, KEEP YOU GUESSING, AND KEEP YOU UP ALL NIGHT.</b> 'A <b>captivating and creeping mystery</b> full of brilliantly twisting turns and dark secrets' - Holly Jackson, bestselling author of A Good Girls' Guide to Murder  'If you like <b>Stephen King</b>, snap this up!' - Cass Green, Sunday Times bestselling author of In a Cottage in a Wood 'This book crawled under my skin and made itself a home there, and I can't wait for people to start reading it so that I can <b>scream about the ending with everyone I know</b>' - Inkandplasma book review '<b>Scream meets The Babadook </b>in small-town USA' - Kirsty Logan, award-winning author of The Gracekeepers  Lola Nox is the daughter of a celebrated horror filmmaker - she thinks nothing can scare her. But when her father is brutally attacked in their New York apartment, she's swiftly packed off to live with a grandmother she's never met in Harrow Lake, the eerie town where her father's most iconic horror movie was shot. The locals are weirdly obsessed with the film that put their town on the map - and there are strange disappearances, which the police seem determined to explain away. And there's someone - or something - stalking Lola's every move. The more she discovers about the town, the more terrifying it becomes. Because Lola's got secrets of her own. And if she can't find a way out of Harrow Lake, they might just be the death of her...</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1484/39783146-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1484/39783146-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39783146-01-934102"
					}
				}
			},
			{
				"titleId": "39822039-01-937009",
				"isbn13": "9781643528229",
				"format": "EPUB",
				"name": "The Teen's Guide to Face-to-Face Connections in a Screen-to-Screen World: 40 Tips to Meaningful Communication",
				"contributors": [
					{
						"contributorId": "189175",
						"name": "Jonathan McKee",
						"firstName": "Jonathan",
						"middleName": "",
						"lastName": "McKee",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "489108",
						"name": "Alyssa McKee",
						"firstName": "Alyssa",
						"middleName": "",
						"lastName": "McKee",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-11-01",
					"imprint": "Barbour Publishing, Inc."
				},
				"classifications": {
					"bic2": [
						"YQNP",
						"YNRB"
					],
					"dewey": [
						"153.6"
					],
					"interestAge": [
						13,
						18
					]
				},
				"edition": "",
				"language": "en",
				"descriptions": [
					"What if your phone truly helped you connect with people more than disconnect with those around you? You CAN dare to be relationally different in a screen-to-screen culture. But. . .honestly, I like my phone. So what should I do? You probably enjoy screens but don't want them hurting your relationships with the people who matter most, right? What if you could improve your face-to-face relationships, develop deeper connections, resolve conflict, and confidently communicate with friends, parents, teachers, roommates, coworkers, potential employers...even the barista at your local coffee shop? What if you paused to think before you posted, avoiding some of the hurt and consequences that almost always lead to regret after? What if you became a master of your own screen-time instead of letting it master you?What if you became more screen-wise? 40 real-life realizations including. . .* Your phone doesn't have an UNSEND button.*Texting is a dumb way to manage conflict.* We all need a digital detox every once in a while.* Sometimes less is more. * Phones are a great tool for connecting with people outside of the room when they don't interfere with the people inside the room* Sometimes the people we love the most are the people we ignored all day.Author and youth culture expert, Jonathan McKee, and his daughter Alyssa McKee, uncover forty random realizations they've discovered over the last five years. Screens provide fun platforms to connect with faraway friends; and sometimes the people we love the most are the people we ignore all day. Jonathan and Alyssa help young adults navigate face-to-face communication in a screen-to-screen world too! Maybe they'll help you navigate face-to-face communication in a screen-to-screen world too!"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1236/39822039-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1236/39822039-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39822039-01-937009"
					}
				}
			},
			{
				"titleId": "39834208-01-937823",
				"isbn13": "9781683357407",
				"format": "EPUB",
				"name": "Winter, White and Wicked",
				"contributors": [
					{
						"contributorId": "224927",
						"name": "Shannon Dittemore",
						"firstName": "Shannon",
						"middleName": "",
						"lastName": "Dittemore",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-10-13",
					"imprint": "Abrams"
				},
				"classifications": {
					"bic2": [
						"YFC"
					],
					"interestAge": [
						12,
						99
					]
				},
				"edition": "",
				"language": "en",
				"descriptions": [
					"Mad Max: Fury Road meets Frozen in this striking YA fantasy about a rig driver's journey to save her friend Twice-orphaned Sylvi has chipped out a niche for herself on Layce, an island cursed by eternal winter. Alone in her truck, she takes comfort in two things: the solitude of the roads and the favor of Winter, an icy spirit who has protected her since she was a child. Sylvi likes the road, where no one asks who her parents were or what she thinks of the rebels in the north. But when her best friend, Lenore, runs off with the rebels, Sylvi must make a haul too late in the season for a smuggler she wouldn't normally work with, the infamous Mars Dresden. Alongside his team-Hyla, a giant warrior woman and Kyn, a boy with skin like stone-Sylvi will do whatever it takes to save her friend. But when the time comes, she'll have to choose: safety, anonymity, and the favor of Winter-or the future of the island that she calls home."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1036/39834208-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1036/39834208-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39834208-01-937823"
					}
				}
			},
			{
				"titleId": "39846278-01-938478",
				"isbn13": "9781684036004",
				"isbn10": "1684036003",
				"format": "EPUB",
				"name": "The Grit Workbook for Kids: CBT Skills to Help Kids Cultivate a Growth Mindset and Build Resilience",
				"contributors": [
					{
						"contributorId": "489775",
						"name": "Elisa Nebolsine",
						"firstName": "Elisa",
						"middleName": "",
						"lastName": "Nebolsine",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-11-01",
					"imprint": "New Harbinger Publications"
				},
				"classifications": {
					"bic2": [
						"MMJT",
						"JMC"
					],
					"interestAge": [
						5,
						12
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>A fun and engaging workbook to help kids ages 6-12 build resilience, perseverance, and a growth mindset</b></p><p>As a parent, you want to give your child a solid foundation for living a happy, successful life. But if you have a child who is easily sidelined by obstacles, has trouble bouncing back from setbacks, who melts down easily, or gives up quickly when things get tough&mdash;you may worry about their ability to succeed in our competitive, high-pressure world. So, how can you help your child develop grit&mdash;a trait that embodies tenacity and self-control?</p><p>Fortunately, grit can be learned. Written in a kid-friendly tone and grounded in cognitive behavioral therapy (CBT), The Grit Workbook for Kids offers a unique approach for learning and practicing the tools, strategies, and skills that make up grit. These activities will help your child:</p><ul><li>Build stamina</li><li>Keep perspective</li><li>Be optimistic</li><li>Solve problems</li><li>Cope with change</li><li>Practice mental flexibility</li><li>Stick up for themselves</li><li>Build good relationships</li><li>And much, much more!</li></ul> &#160; <p>Grit is key to helping kids succeed in what they want or need to do&mdash;whether that&rsquo;s getting good grades, making the sports team, or just building an awesome treehouse. By practicing the skills and activities outlined in this accessible workbook&mdash;whether on their own or with you&mdash;your child will gain powerful tools to help them thrive, well into adulthood.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/39846278-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/39846278-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39846278-01-938478"
					}
				}
			},
			{
				"titleId": "39909551-01-941124",
				"isbn13": "9781406396379",
				"isbn10": "1406396370",
				"format": "EPUB",
				"name": "Glassheart",
				"contributors": [
					{
						"contributorId": "490455",
						"name": "Katharine Orton",
						"firstName": "Katharine",
						"middleName": "",
						"lastName": "Orton",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-11-05",
					"country": "GB",
					"imprint": "Walker Books"
				},
				"classifications": {
					"bic2": [
						"YFC",
						"YFH"
					],
					"interestAge": [
						9,
						12
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>\"Fantasy at its best.\" The Daily Telegraph\"With echoes of Susan Cooper, this has all the feel of a classic.\" Sarah Baker\"A masterfully written story surging with powerful energy.\" Sinéad O'Hart</b><b>An enchanting magical adventure set in the wild moors of Dartmoor – the second middle-grade novel from the author of Nevertell.</b>Through the glass, the magic is waiting…Nona and her uncle travel everywhere together, replacing stained-glass windows in war-torn buildings. When a mysterious commission takes them to the lonely moors of Dartmoor, Nona discovers a wild and powerful magic which threatens everything. Can Nona protect those she loves – even if it means fighting darkness itself?A beautifully imaginative and rich adventure about determination, courage and the power of love, set in the aftermath of World War Two. Perfect for fans of Abi Elphinstone, Sophie Anderson and Catherine Doyle.<b>Praise for Glassheart:</b>\"Orton's fantastical world is <b>creepily drawn</b>; even better is her understanding of grief, suffering and healing.\" Observer\"<b>Rich and atmospheric</b>, Glassheart feels like a long-lost folktale brimming with ghostly magic.\" Jennifer Bell\"Katharine Orton writes about history as someone who understands it, and about magic as though she could probably do it. <b>Shatteringly good</b>.\" Nick Tomlinson\"Glassheart <b>shimmers with magic and adventure</b> ... A story that left a sparkling splinter in my soul.\" Damaris Young<b>Praise for Nevertell:</b>\"This is <b>fantasy at its best</b>.\" Daily Telegraph\"A coming-of-age tale that’s <b>compelling, exciting</b> and as chilling as the snow-bound landscape in which it is set.\" Financial Times\"Readers will be captivated … <b>A magical, snowy adventure</b> perfect for winter nights.\" BookTrust\"Featuring themes of bravery, friendship, sorcery and survival, this <b>beautifully written </b>story is ideal for fans of magical adventure tales.\" The Week Junior\"A tale that <b>sparkles</b> with frosty magic.\" Thomas Taylor\"Orton's use of language is <b>masterful</b> and her vivid descriptions bring the journey to life … Perfect to snuggle up with on a winter's afternoon.\" ReadingZone\"It’s an unusual juxtaposition – the harsh world of political prisoners in a forced labour camp versus one of ice castles, spirit children and giant eagles. <b>Katharine Orton pulls it off brilliantly</b>.\" The Bookseller</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/39909551-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/39909551-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39909551-01-941124"
					}
				}
			},
			{
				"titleId": "39948228-01-972805",
				"isbn13": "9781800900332",
				"isbn10": "",
				"format": "EPUB",
				"name": "The Girl with her Head in the Clouds: The Amazing Life of Dolly Shepherd",
				"contributors": [
					{
						"contributorId": "148118",
						"name": "Karen McCombie",
						"firstName": "Karen",
						"middleName": "",
						"lastName": "McCombie",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "509430",
						"name": "Anneli Bray",
						"firstName": "Anneli",
						"middleName": "",
						"lastName": "Bray",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2021-03-04",
					"country": "GB",
					"imprint": "HarperCollins Publishers"
				},
				"classifications": {
					"bic2": [
						"YFC",
						"YFT",
						"YFY",
						"YNH",
						"YFB",
						"YNM"
					],
					"interestAge": [
						0,
						5
					]
				},
				"language": "en",
				"descriptions": [
					"Pioneering aviatrix Dolly Shepherd comes alive in this thrilling reimagining of her death-defying exploits from bestelling author Karen McCombie.When sixteen-year-old Dolly Shepherd is offered the chance to take to the sky in a hot-air balloon, there’s no way she’s going to turn it down. Even though the pilot actually plans for her to jump out of the balloon and plummet back to earth using just a flimsy parachute.For Dolly, it’s the start of a sensational career. But the life of an aeronaut is as dangerous as it is daring, and there will be many narrow escapes along the way …Pioneering aviatrix Dolly Shepherd comes alive in this thrilling reimagining of her death-defying exploits from bestselling author Karen McCombie."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39948228-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39948228-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39948228-01-972805"
					}
				}
			},
			{
				"titleId": "39948239-01-956916",
				"isbn13": "9781800900295",
				"format": "EPUB",
				"name": "The Humiliations of Welton Blake",
				"contributors": [
					{
						"contributorId": "152646",
						"name": "Alex Wheatle",
						"firstName": "Alex",
						"middleName": "",
						"lastName": "Wheatle",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-01-07",
					"country": "GB",
					"imprint": "HarperCollins Publishers"
				},
				"classifications": {
					"bic2": [
						"YFM",
						"YFS",
						"YXL",
						"YXC",
						"YXS",
						"YXFD",
						"YFQ",
						"YNW"
					],
					"interestAge": [
						0,
						5
					]
				},
				"language": "en",
				"descriptions": [
					"Hilarity follows disaster in this sharp-witted tale of the trials of pre-teen life, from award-winning and critically acclaimed Crongton author Alex Wheatle.Welton Blake has done it! He’s asked out Carmella McKenzie – the best-looking girl in school – and she’s only gone and said yes!But just as he thinks his luck is starting to change, Welton’s phone breaks, kick-starting a series of unfortunate and humiliating events. With bullies to avoid, girls ready to knock him out and all the drama with his mum and dad, life for Welton is about to go very, very wrong …Hilarity follows disaster in this sharp-witted tale of the trials of teen life from award-winning author Alex Wheatle."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39948239-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39948239-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39948239-01-956916"
					}
				}
			},
			{
				"titleId": "39948243-01-956915",
				"isbn13": "9781800900288",
				"format": "EPUB",
				"name": "The Ghost Garden",
				"contributors": [
					{
						"contributorId": "250408",
						"name": "Emma Carroll",
						"firstName": "Emma",
						"middleName": "",
						"lastName": "Carroll",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "623701",
						"name": "Kaja Kajfež",
						"firstName": "Kaja",
						"middleName": "",
						"lastName": "Kajfež",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2021-01-07",
					"country": "GB",
					"imprint": "HarperCollins Publishers"
				},
				"classifications": {
					"bic2": [
						"YFC",
						"YFT",
						"YFY",
						"YFB",
						"YFD"
					],
					"interestAge": [
						13,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"Queen of historical fiction Emma Carroll makes her Barrington Stoke debut with a powerful, evocative, and spine-tingling story of childhood on the brink of war.SUMMER 1914When Fran uncovers a bone in the garden of Longbarrow House on the same afternoon that Leo breaks his leg, it is just the first in a series of strange and unsettling coincidences.Leo is left immobilised for the rest of the summer and Fran is roped in to keep him company, forced to listen to his foolish theories about the looming threat of war in Europe.Suddenly the garden she has loved all her life seems to hold threatening shadows of the future, and Fran starts to fear what she and Leo might find next …Queen of Historical Fiction, Emma Carroll, makes her Barrington Stoke debut with a powerful, evocative, and spine-tingling story of childhood on the brink of war."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39948243-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1557/39948243-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39948243-01-956915"
					}
				}
			},
			{
				"titleId": "39964143-01-945608",
				"isbn13": "9780062821928",
				"isbn10": "006282192X",
				"format": "EPUB",
				"name": "The Ever Cruel Kingdom",
				"contributors": [
					{
						"contributorId": "238672",
						"name": "Rin Chupeco",
						"firstName": "Rin",
						"middleName": "",
						"lastName": "Chupeco",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-11-10",
					"imprint": "HarperCollins"
				},
				"series": {
					"name": "Never Tilting World"
				},
				"classifications": {
					"bic2": [
						"YFM",
						"YFH",
						"YFN"
					],
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<b>In this thrilling fantasy epic sequel to The Never Tilting World, twin sisters unite to break a destructive cycle and heal their world.</b>After a treacherous journey and a life-shattering introduction to a twin neither knew she had, sisters Haidee and Odessa expected to emerge from the Great Abyss to a world set right. But though the planet is turning once again, the creatures of the abyss refuse to rest without another goddess’s sacrifice. To break the cycle, Haidee and Odessa need answers that lie beyond the seven gates of the underworld, within the Cruel Kingdom itself. The shadows of the underworld may hunger to tear them apart, but these two sisters are determined to heal their world—together.<b>Featuring elemental magic, fierce sisterhood, and vast, incredible landscapes, this work is perfect for fans of Leigh Bardugo and Sabaa Tahir. </b><b>Praise for The Ever Cruel Kingdom</b><b>\"Chupeco has built a magical world with strong characters, who have a range of skin tones, and good LGBTQIA+ representation. The plot is action-packed from the beginning to the end.\" —School Library Journal</b>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/25/39964143-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/25/39964143-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39964143-01-945608"
					}
				}
			},
			{
				"titleId": "40089658-01-950009",
				"isbn13": "9780711256934",
				"isbn10": "0711256934",
				"format": "EPUB",
				"name": "It's OK Not to Be OK: A Guide to Wellbeing",
				"contributors": [
					{
						"contributorId": "265755",
						"name": "Tina Rae",
						"firstName": "Tina",
						"middleName": "",
						"lastName": "Rae",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "279810",
						"name": "Jessica Smith",
						"firstName": "Jessica",
						"middleName": "",
						"lastName": "Smith",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-10-27",
					"country": "GB",
					"imprint": "Words & Pictures"
				},
				"classifications": {
					"bic2": [
						"YXL",
						"YN",
						"YXA"
					],
					"interestAge": [
						9,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"It&#39;s OK not to be OK acknowledges and explores common mental health disorders such as depression, eating disorders and anxiety. Get the low down on these issues, why they happen and discover ways of looking after mental health in our fast-moving world. This book will help children and young people develop the resilience to cope with whatever life throws at them and grow into well-rounded, healthy adults."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40089658-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40089658-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40089658-01-950009"
					}
				}
			},
			{
				"titleId": "40199206-01-951654",
				"isbn13": "9780062685339",
				"isbn10": "0062685333",
				"format": "EPUB",
				"name": "Nobody Knows But You",
				"contributors": [
					{
						"contributorId": "267259",
						"name": "Anica Mrose Rissi",
						"firstName": "Anica Mrose",
						"middleName": "",
						"lastName": "Rissi",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-09-08",
					"imprint": "HarperCollins"
				},
				"classifications": {
					"bic2": [
						"YFCB",
						"YXS"
					],
					"interestAge": [
						13,
						19
					]
				},
				"language": "en",
				"descriptions": [
					"<p><strong>The nail-bitingly intense story of a summer at camp that ends in a disturbing death&#8212;and depicts a powerful friendship that won&#8217;t ever be forgotten. Perfect for fans of <em>One of Us Is Lying </em>and <em>Broken Things.</em></strong></p>  <p>Kayla is still holding on to Lainie&#8217;s secrets. </p>  <p>After all, Lainie is Kayla&#8217;s best friend. And despite Lainie&#8217;s painful obsession with her on-again, off-again boyfriend, and the ways he has tried to come between them, friends don&#8217;t spill each other&#8217;s secrets. They don&#8217;t betray each other&#8217;s trust.</p>  <p>The murder at the end of the summer doesn&#8217;t change all that.</p>  <p><strong>Besides&#8212;Kayla knows that the truth is not the whole story.&#160;&#160;</strong></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1174/40199206-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1174/40199206-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40199206-01-951654"
					}
				}
			},
			{
				"titleId": "40199211-01-951659",
				"isbn13": "9780062491275",
				"isbn10": "006249127X",
				"format": "EPUB",
				"name": "Junk Boy",
				"contributors": [
					{
						"contributorId": "191174",
						"name": "Tony Abbott",
						"firstName": "Tony",
						"middleName": "",
						"lastName": "Abbott",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-10-13",
					"imprint": "HarperCollins"
				},
				"classifications": {
					"bic2": [
						"YXC",
						"YFB"
					],
					"interestAge": [
						14,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p><strong>Bestselling author Tony Abbott’s YA novel-in-verse is an unflinching and heartbreaking look at a boy’s junk-filled life, and the ways he finds redemption and hope, perfect for fans of <em>The Crossover</em> and <em>Long Way Down</em>.</strong></p><p><em>Junk.</em>&#160;That’s what the kids at school call Bobby Lang, mostly because his rundown house looks like a junkyard, but also because they want to put him down. Trying desperately to live under the radar at school—and at the home he shares with his angry, neglectful father—Bobby develops a sort of proud loneliness. The only buffer between him and the uncaring world is his love of the long, wooded trail between school and home.</p><p>Life grinds along quietly and hopelessly for Bobby until he meets Rachel. Rachel is an artist who sees him in a way no one ever has. Maybe it’s because she has her own kind of junk, and a parent who hates what Rachel is: gay. Together the two embark on journeys to clean up the messes that fill their lives, searching against all odds for hope and redemption.</p><p>Narrated in Bobby’s unique voice in arresting free verse, this novel will captivate readers right from its opening lines, urging them on page after page, all the way to its explosive conclusion.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1174/40199211-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1174/40199211-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40199211-01-951659"
					}
				}
			},
			{
				"titleId": "40199285-01-951759",
				"isbn13": "9781684036042",
				"isbn10": "1684036046",
				"format": "EPUB",
				"name": "The Positivity Workbook for Teens: Skills to Help You Increase Optimism, Resilience, and a Growth Mindset",
				"contributors": [
					{
						"contributorId": "392532",
						"name": "Goali Saedi Bocci",
						"firstName": "Goali",
						"middleName": "",
						"lastName": "Saedi Bocci",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "405391",
						"name": "Ryan M. Niemiec",
						"firstName": "Ryan M.",
						"middleName": "",
						"lastName": "Niemiec",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-12-01",
					"imprint": "New Harbinger Publications"
				},
				"classifications": {
					"interestAge": [
						13,
						19
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>Discover the secret to positivity by tapping into your inner strengths!</b></p><p>As a teen, your brain is changing every day. You&rsquo;re more aware of the challenges and difficulties of life. You&rsquo;re questioning everything. And you can tell when grownups are being fake or dishonest. All of these sudden realizations can be overwhelming, and as a result, you may fall into a &ldquo;negativity trap.&rdquo; And while there&rsquo;s nothing wrong with a little sarcasm or skepticism&mdash;after a while, negative thoughts have a way of turning inward, causing stress, damaging your self-esteem, and crushing your confidence. So, how can you start building the real positivity you need to be happy, healthy, and in control of your life?</p><p>You only need to look inside yourself.</p><p>In this unique workbook, you&rsquo;ll learn to tap into the power of your own character strengths&mdash;such as bravery, creativity, being a good friend, perseverance, honesty, and more&mdash;in order to build self-confidence, boost a positive attitude, and cope with the inevitable stress of life. You&rsquo;ll also find out how to spot strengths in those around you, such as friends, family, teachers, and more. Finally, you&rsquo;ll discover how your own character strengths can help bolster your engagement in life, enhance positive and healthy relationships, give your life greater meaning, increase your accomplishments, and even improve your physical health.</p><p>This isn&rsquo;t a workbook to help you be sunny and happy for the benefit of others. It&rsquo;s not a workbook to help you ignore the difficulties and injustices of our world. What it is is a toolkit for finding your own inner strengths and using those strengths to be your very best. Imagine all you can accomplish with the power of real positivity&mdash;both for yourself and the world!</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/40199285-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/40199285-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40199285-01-951759"
					}
				}
			},
			{
				"titleId": "40210266-01-953134",
				"isbn13": "9781526634344",
				"format": "EPUB",
				"name": "Emotional Intelligence: 25th Anniversary Edition",
				"contributors": [
					{
						"contributorId": "195960",
						"name": "Daniel Goleman",
						"firstName": "Daniel",
						"middleName": "",
						"lastName": "Goleman",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-12-08",
					"country": "GB",
					"imprint": "Bloomsbury Publishing"
				},
				"classifications": {
					"bic2": [
						"VX",
						"JMM"
					]
				},
				"language": "en",
				"descriptions": [
					"<b>A 25th anniversary edition of the number one, multi-million copy international bestseller that taught us how emotional intelligence is more important than IQ - 'a revolutionary, paradigm-shattering idea' (Harvard Business Review)</b><b>Featuring a new introduction from the author</b>Does IQ define our destiny? In his groundbreaking bestseller, Daniel Goleman argues that our view of human intelligence is far too narrow. It is not our IQ, but our emotional intelligence that plays a major role in thought, decision-making and individual success. Self-awareness, impulse control, persistence, motivation, empathy and social deftness: all are qualities that mark people who excel, whose relationships flourish, who can navigate difficult conversations, who become stars in the workplace. With new insights into the brain architecture underlying emotion and rationality, Goleman shows precisely how emotional intelligence can be nurtured and strengthened in all of us."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1560/40210266-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1560/40210266-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40210266-01-953134"
					}
				}
			},
			{
				"titleId": "40218377-01-951981",
				"isbn13": "9781406399905",
				"isbn10": "1406399906",
				"format": "EPUB",
				"name": "The House at the Edge of Magic",
				"contributors": [
					{
						"contributorId": "343416",
						"name": "Amy Sparkes",
						"firstName": "Amy",
						"middleName": "",
						"lastName": "Sparkes",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-01-07",
					"country": "GB",
					"imprint": "Walker Books"
				},
				"series": {
					"name": "The House at the Edge of Magic"
				},
				"classifications": {
					"bic2": [
						"YFH"
					],
					"interestAge": [
						9,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"<p>\"Sometimes you are a whisper away from magic without even realizing it.\"Nine is an orphan pickpocket determined to escape her life in the Nest of a Thousand Treasures. When she steals a house-shaped ornament from a mysterious woman’s purse, she knocks on its tiny door and watches it grow into a huge, higgledy-piggeldy house. Inside she finds a host of magical and brilliantly funny characters, including Flabberghast – a young wizard who’s particularly competitive at hopscotch – and a hideous troll housekeeper who’s emotionally attached to his feather duster. They have been placed under an extraordinary spell, which they are desperate for Nine to break – and if she can, maybe they can offer her a new life in return…<b>\"A Diana Wynne Jones-ish adventure fizzing with imagination. Such fun – I loved it!\" – Sinead O'Hart</b><b>\"A wonder-filled book that revels in magic and mayhem.\" – Abi Elphinstone</b><b>\"Wildly imaginative and relentlessly entertaining. It is a story like no other and I absolutely adored it!\" – David Walliams</b></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/40218377-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/40218377-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40218377-01-951981"
					}
				}
			},
			{
				"titleId": "40231027-01-952127",
				"isbn13": "9781728411699",
				"isbn10": "1728411696",
				"format": "EPUB",
				"name": "#MeToo and You: Everything You Need to Know about Consent, Boundaries, and More",
				"contributors": [
					{
						"contributorId": "408356",
						"name": "Halley Bondy",
						"firstName": "Halley",
						"middleName": "",
						"lastName": "Bondy",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "550671",
						"name": "Timothy Corbett",
						"firstName": "Timothy",
						"middleName": "",
						"lastName": "Corbett",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2021-02-02",
					"country": "US",
					"imprint": "Lerner Publishing Group"
				},
				"classifications": {
					"bic2": [
						"YXC",
						"YXFT",
						"YXAX",
						"YXA"
					],
					"interestAge": [
						11,
						18
					]
				},
				"language": "en",
				"descriptions": [
					"#MeToo and Youconsentassaultyesno"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1210/40231027-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1210/40231027-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40231027-01-952127"
					}
				}
			},
			{
				"titleId": "40302146-01-954941",
				"isbn13": "9781646031078",
				"isbn10": "1646031075",
				"format": "EPUB",
				"name": "Just Maria",
				"contributors": [
					{
						"contributorId": "496481",
						"name": "Jay Hardwig",
						"firstName": "Jay",
						"middleName": "",
						"lastName": "Hardwig",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2022-01-07",
					"imprint": "Regal House Publishing"
				},
				"classifications": {
					"interestAge": [
						0,
						12
					]
				},
				"language": "en",
				"descriptions": [
					"Just Maria is the story of Maria Romero, a blind sixth-grader who is trying her hardest to be normal. Not amazing. Not inspiring. Not helpless. Not weird. Just normal. Normal is hard enough with her white cane, glass eyes, and bumpy books, but Maria's task is complicated by her neighbor and classmate JJ Munson, an asthmatic overweight oddball known in the halls of Marble City Middle as a double-dork paste-eater. When JJ draws Maria into his latest hare-brained scheme—a series of public challenges to prove their worth as gumshoes for his Twinnoggin Detective Agency—she fears she's lost her last chance to go unnoticed. When a young girl goes missing on the streets of Marble City, Maria's new-found confidence is tested in ways she never anticipated. Use your cane and your brain, and figure it out . . . Aimed at middle-grade readers, Just Maria explores difference and disability without resorting to the saccharine and engages universal themes about the price of popularity and the meaning of independence."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/639/40302146-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/639/40302146-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40302146-01-954941"
					}
				}
			},
			{
				"titleId": "40317981-01-955380",
				"isbn13": "9781683645719",
				"isbn10": "1683645715",
				"format": "EPUB",
				"name": "Whole Girl: Live Vibrantly, Love Your Entire Self, and Make Friends with Food",
				"contributors": [
					{
						"contributorId": "496689",
						"name": "Sadie Radinsky",
						"firstName": "Sadie",
						"middleName": "",
						"lastName": "Radinsky",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-02-02",
					"imprint": "Sounds True"
				},
				"classifications": {
					"bic2": [
						"YX"
					],
					"interestAge": [
						13,
						17
					]
				},
				"edition": "",
				"language": "en",
				"descriptions": [
					"As seen in the New York Times, Rachael Ray Show, E! Daily Pop, ABC TV (KATU), Justine, mindbodygreen, and Shape. &#160; &ldquo;Sadie&rsquo;s clearly the smartest person in the room, and she&rsquo;s just 19 &hellip; Sadie, you&rsquo;re brilliant.&rdquo; &mdash;<b>Rachael Ray</b> &ldquo;Approachable and engaging, Radinsky exudes best friend vibes &hellip; A useful, accessible self-help guide.&rdquo; <b>&mdash;Kirkus Reviews</b> &ldquo;[Sadie&rsquo;s] outlooks &hellip; are so refreshing and comforting in these troubled times when teens are up against so much terrible coercion to feel as though they aren&rsquo;t good enough. She&rsquo;s a true role model.&rdquo; &mdash;<b>Jameela Jamil,</b> actress (The Good Place), activist, founder of I Weigh&ldquo;Smile!&rdquo; &ldquo;Don&rsquo;t eat too much.&rdquo; &ldquo;You&rsquo;re so bossy.&rdquo; Society constantly squelches young women and tells us all the ways that we&rsquo;re wrong. But we reject these limitations. We are all strong, different&mdash;and complex. In this unique book, teen writer and recipe creator Sadie Radinsky offers practices, tips, and exercises to help young women embrace their whole selves. Each chapter welcomes a different mood (like mad, blue, wild, cozy) to empower all parts of their lives. The book includes: <ul><li>Tips and insights for navigating some of young women&rsquo;s biggest issues today</li><li>45 delicious gluten-free, Paleo treat recipes</li><li>Well-being practices like getting enough sleep, exercise as self-love, and creating a good relationship with food</li><li>Talks with experts and celebrities who share fresh advice</li><li>Mindful Movements, from yoga to tree-climbing</li></ul> &#160; &#160;"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1256/40317981-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1256/40317981-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40317981-01-955380"
					}
				}
			},
			{
				"titleId": "40407237-01-957714",
				"isbn13": "9781526630735",
				"format": "EPUB",
				"name": "As Far as You'll Take Me",
				"contributors": [
					{
						"contributorId": "469899",
						"name": "Phil Stamper",
						"firstName": "Phil",
						"middleName": "",
						"lastName": "Stamper",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-03-04",
					"country": "GB",
					"imprint": "Bloomsbury Publishing"
				},
				"classifications": {
					"bic2": [
						"YFM",
						"YFN",
						"YXS",
						"YFB"
					],
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<b>_______________</b><b>'A beautiful tribute to every queer kid who's ever had to leave their home in order to find one' </b>- Leah Johnson, bestselling author of 'You Should See Me in a Crown'<b>_______________</b><b>From the author of The Gravity of Us comes a heartfelt coming-of-age story about finding your chosen people. Perfect for fans of Becky Albertalli</b>Marty arrives in London with nothing but his oboe and some savings from his summer job, but he's excited to start his new life--where he's no longer the closeted, shy kid who slips under the radar and is free to explore his sexuality without his parents' disapproval.  From the outside, Marty's life looks like a perfect fantasy: in the span of a few weeks, he's made new friends, he's getting closer with his first ever boyfriend, and he's even traveling around Europe. But Marty knows he can't keep up the facade. He hasn't spoken to his parents since he arrived, he's tearing through his meager savings, his homesickness and anxiety are getting worse and worse, and he hasn't even come close to landing the job of his dreams. Will Marty be able to find a place that feels like home?"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1560/40407237-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1560/40407237-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40407237-01-957714"
					}
				}
			},
			{
				"titleId": "40441308-01-960892",
				"isbn13": "9781635767285",
				"isbn10": "1635767288",
				"format": "EPUB",
				"name": "Dare to Make History: Chasing a Dream and Fighting for Equity",
				"contributors": [
					{
						"contributorId": "499308",
						"name": "Jocelyne Lamoureux-Davidson",
						"firstName": "Jocelyne",
						"middleName": "",
						"lastName": "Lamoureux-Davidson",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "499309",
						"name": "Monique Lamoureux-Morando",
						"firstName": "Monique",
						"middleName": "",
						"lastName": "Lamoureux-Morando",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-02-23",
					"country": "US",
					"imprint": "Radius Book Group"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Dare to Make History is the story of two courageous and talented women who weren’t willing to accept anything less than being treated as equals. On their journey to a gold medal in women’s ice hockey, they became role models for generations before and after them.\n\nTwins Jocelyne Lamoureux-Davidson and Monique Lamoureux-Morando started playing ice hockey with their four older brothers and their friends on a frozen pond next to their home in North Dakota. No girls hockey teams, no problem―they just played on boys teams. \n\nThey went on to win six World Championships and played in three Olympics, winning two silver medals and ultimately a gold medal in South Korea in 2018 for the USA Women’s National Team. \n\nThey did not allow roadblocks and discrimination deter them from taking on their governing body—USA Hockey—threatening to boycott the 2017 World Championships and jeopardizing their ability to compete in the 2018 Olympics unless their gender equity issues were addressed. The success of Monique, Jocelyne, and their team thrust them into the center of the struggle for gender equity, for women in hockey and in sports in general, as well as in society at large.\n\nIn Dare to Make History, the Lamoureux twins chronicle their journey to the pinnacle of their sport, their efforts along with almost 150 other hockey players to start a new professional women’s hockey league, their training to come back and make another national team after giving birth, their tireless efforts to advance the interests of disadvantaged communities in closing the digital divide, and their ongoing contributions as role models championing the dreams of future generations of girls in sports, education, and the workplace.\n\nThis is not a hockey book. It is not a girls book. It is a book about the importance of the fight for equity, particularly gender equity. It is the inspirational story of how two young women from a small town in North Dakota have dreamed big—had the courage to take on huge battles—and in the end how they have dared to make history."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40441308-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40441308-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40441308-01-960892"
					}
				}
			},
			{
				"titleId": "40451230-01-961359",
				"isbn13": "9781578597574",
				"isbn10": "1578597579",
				"format": "EPUB",
				"name": "Trailblazing Women!: Amazing Americans Who Made History",
				"contributors": [
					{
						"contributorId": "413189",
						"name": "Deborah G. Felder",
						"firstName": "Deborah G.",
						"middleName": "",
						"lastName": "Felder",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-03-01",
					"imprint": "Visible Ink Press"
				},
				"series": {
					"name": "The Multicultural History & Heroes Collection"
				},
				"classifications": {
					"bic2": [
						"YNM",
						"YR",
						"YQH"
					],
					"interestAge": [
						13,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<b>Impressive! Innovative! Influential! Discover and celebrate the amazing stories and achievements of 120 of America&#8217;s most inspiring women!</b>Women have accomplished incredible things throughout American history. They&#8217;ve made and changed history. They've contributed revolutionary new ideas and moved science forward. Their inventions, businesses, literature, art, and activism helped build the nation. They've succeeded in a whole host of professions, including media, medicine, politics, government, education, sports, and the military.&#160;<b>Trailblazing Women! Amazing Americans Who Made History</b>&#160;shines a welcome light on some of America's most remarkable women and their enduring stories and amazing accomplishments.<p>This fun and fascinating read covers the long history of America's heroic women. It brings you the biographies of some of America's boldest and bravest. Read about obstacles they overcame and how they flourished. It covers the lasting legacies of well-known and lesser-known stars, including ...</p><li>As a young child, she sang solos and duets with her Aunt Mary at the Union Baptist Church and by the age of 6 was earning money singing at local functions throughout her hometown of Philadelphia. (Marian Anderson (1897&#8211;1993), Singer)</li><li>She made headlines when she became the first woman to receive a Ph.D. in the science of geology from the elite Baltimore research university, Johns Hopkins. (Florence Bascom (1862&#8211;1945), Geologist)</li><li>She said about the &#8220;me too&#8221; movement she founded: &#8220;When one person says, &#8216;Yeah, me, too,&#8217; it gives permission for others to open up.&#8221; (Tarana Burke (1973&#8211;), Civil Rights Activist)</li><li>The nation&#8217;s first four-star woman general has a long family history of U.S. military service&#8212;going back five generations. (Ann E. Dunwoody (1953&#8211;), Army Officer)</li><li>When this celebrated U.S. Supreme Court justice served on the high court with Justice Sandra Day O&#8217;Connor as one of only two women justices, she and O&#8217;Connor decided to wear special collars on decision days to carve out their visual space in a sea of black robes and ties. (Ruth Bader Ginsburg (1933&#8211;2020), Attorney, U.S. Supreme Court Justice)</li><li>She made many discoveries in physics, but the most important was identifying the &#8220;magic numbers&#8221; that make protons or neutrons stable within an atomic nucleus. She was awarded the Nobel Prize in Physics for her work. (Maria Goeppert-Mayer (1906&#8211;1972), Physicist)</li><li>A soccer icon who was the first woman inducted into the World Football Hall of Fame, she started playing the sport at the age of two, while her family was living in Italy. (Mia Hamm (1972&#8211;), Soccer Player)</li><li>Her first name means &#8220;lotus&#8221; in the Sanskrit language, and her name, Devi, means &#8220;goddess.&#8221; (Kamala Harris (1964&#8211;), Vice President of the United States of America)</li><li>She coined the term &#8220;bug&#8221; to describe computer errors after she found a moth inside one of her team&#8217;s computers. (Grace Hopper (1906&#8211;1992), Computer Scientist, Navy Rear Admiral)</li><li>An acclaimed architect and artist best known for designing Washington, D.C.&#8217;s Vietnam Veterans Memorial, Lin once said, &#8220;I try to give people a different way of looking at their surroundings. That&#8217;s art to me.&#8221; (Maya Lin (1959&#8211;), Architect)</li><li>When this former first lady was growing up, she was a great athlete, but she didn&#8217;t like playing competitive sports. The reason, her big brother said, was that &#8220;she hated losing.&#8221; (Michelle Obama (1964&#8211;), Attorney, First Lady)</li><li>A Cuban American and the first Latinx elected to the U.S. House of Representatives, she delivered a Spanish version of the Republican rebuttal to President Barack Obama&#8217;s State of the Union Address in 2014. (Ileana Ros-Lehtinen (1952&#8211;), Congresswoman)</li><li>This acclaimed prima ballerina was the daughter of an Osage Indian father and a white mother. The Osage people gave her the name Wa-Xthe-Thomba, meaning &#8220;Woman of Two Worlds.&#8221; (Maria Tallchief (1925&#8211;2013), Ballet Dancer)</li><li>A labor leader and educator, she is the current president of the American Federation of Teachers (AFT), the former president of the United Federation of Teachers (UFT), and she became the first openly gay individual to be elected president of a national American labor union. (Randi Weingarten (1957&#8211;), Educator, Labor Leader)</li><li>This mathematician is the hidden hero behind the development of GPS apps on cell phones. (Gladys West (1930&#8211;), Mathematician)</li><li>And many more.<p>America has had more than its share of amazing women. The influence, inspiration, and impact of women on U.S. society and culture cannot be ignored. Explore the vital roles and vibrant experiences of some of the most impressive women in American history with&#160;<b>Trailblazing Women! Amazing Americans Who Made History</b>. It brings to light all there is to admire and discover about these extraordinary women.</p></li>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40451230-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40451230-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40451230-01-961359"
					}
				}
			},
			{
				"titleId": "40454343-01-962915",
				"isbn13": "9781683357087",
				"format": "EPUB",
				"name": "Get a Clue: A Bookish Boyfriends Novel",
				"contributors": [
					{
						"contributorId": "370459",
						"name": "Tiffany Schmidt",
						"firstName": "Tiffany",
						"middleName": "",
						"lastName": "Schmidt",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-01-19",
					"imprint": "Abrams"
				},
				"series": {
					"name": "Bookish Boyfriends"
				},
				"classifications": {
					"bic2": [
						"YFM"
					],
					"interestAge": [
						12,
						99
					]
				},
				"edition": "",
				"language": "en",
				"descriptions": [
					"The game's afoot in the next book of the Bookish Boyfriends series-this time starring Huck and Winston! After Ms. Gregoire assigns the works of Sherlock Holmes in English class, a mystery deepens at Reginald R. Hero High. Huck and Win-Curtis's younger brother-team up to solve the case . . . and while the sleuths gather clues, another swoon-worthy romance blooms in the school halls. Perfect for younger readers of YA or older readers of middle grade, this squeaky-clean series is sure to charm any reader who's ever had a book boyfriend of their own."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1036/40454343-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1036/40454343-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40454343-01-962915"
					}
				}
			},
			{
				"titleId": "40501784-01-973312",
				"isbn13": "9781838855215",
				"isbn10": "1838855211",
				"format": "EPUB",
				"name": "When They Call You a Terrorist",
				"contributors": [
					{
						"contributorId": "364588",
						"name": "Patrisse Khan-Cullors",
						"firstName": "Patrisse",
						"middleName": "",
						"lastName": "Khan-Cullors",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "169091",
						"name": "Asha Bandele",
						"firstName": "Asha",
						"middleName": "",
						"lastName": "Bandele",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-05-27",
					"country": "GB",
					"imprint": "Canongate Books"
				},
				"classifications": {
					"bic2": [
						"BM",
						"YXN"
					],
					"interestAge": [
						13,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"The powerful memoir of one of the co-founders of Black Lives Matter which explores how the movement was born, adapted for young adults and featuring brand new content including photos and journal entries\n\nA movement that started with a hashtag – #BlackLivesMatter – and spread across the world.\n\nFrom one of the co-founders of the Black Lives Matter movement comes a poetic memoir and reflection on humanity. Necessary and timely, Patrisse Khan-Cullors’ story asks us to remember that protest in the interest of the most vulnerable comes from love. Leaders of the Black Lives Matter movement have been called terrorists, a threat to America. But in truth, they are loving women whose life experiences have led them to seek justice for those victimised by the powerful.\n\nIn this meaningful, empowering account of survival, strength and resilience, Khan-Cullors and asha bandele seek to change the culture that declares innocent Black life expendable."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1254/40501784-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1254/40501784-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40501784-01-973312"
					}
				}
			},
			{
				"titleId": "40509109-01-965832",
				"isbn13": "9781913101343",
				"isbn10": "1913101347",
				"format": "EPUB",
				"name": "Maggie Blue and the Dark World: Shortlisted for the 2021 COSTA Children's Book Award",
				"contributors": [
					{
						"contributorId": "501652",
						"name": "Anna Goodall",
						"firstName": "Anna",
						"middleName": "",
						"lastName": "Goodall",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-02-04",
					"country": "GB",
					"imprint": "Guppy Publishing Ltd"
				},
				"series": {
					"name": "Maggie Blue"
				},
				"classifications": {
					"interestAge": [
						8,
						12
					]
				},
				"language": "en",
				"descriptions": [
					"&lt;p&gt;&lt;b&gt;SHORTLISTED FOR THE 2021 COSTA CHILDREN&#39;S BOOK AWARD&lt;/b&gt;&lt;br&gt;&lt;b&gt;SUNDAY TIMES CHILDREN&#39;S BOOK OF THE WEEK &lt;/b&gt;&lt;br&gt;&lt;br&gt;&lt;b&gt;&#39;A sophisticated magical tale, awash in sinister villains and perplexing plights ... bursting with invention&#39; &#8211; &lt;i&gt;Financial Times &lt;/i&gt;&lt;br&gt;&lt;br&gt;&#39;Dreamy and odd, yet razor sharp and terrifying all rolled into one ... &lt;i&gt;The Neverending Story&lt;/i&gt; and &lt;i&gt;Spirited Away&lt;/i&gt; and &lt;i&gt;Coraline&lt;/i&gt; all rolled into one amazing story. If you have fans of manga, fans of headstrong, flawed characters, witty and brave sidekicks and truly gut-wrenching monsters then this is the one for you. I can&#39;t recommend it enough.&#39; &#8211; Lucas Maxwell, School Librarian of the Year&lt;br&gt;&lt;br&gt;&#39;The story is every bit as bizarre, brilliant, fantastical and exciting as I&#39;d hoped. Definitely one to watch out for&#39; &#8211; Kiran Millwood Hargrave&lt;/b&gt;&lt;br&gt;&lt;br&gt;__________________________&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;b&gt;A thrilling tale of friendship and courage - Maggie Blue, strongwilled and isolated,  sees her enemy from school taken through a window to a parallel world by one of their teachers and determines to follow, whatever the cost.  With the help of irascible cat, Hoagy, they discover a world where happiness is being stolen - and they must do everything they can not to be caught up in its web of destruction.&lt;/b&gt;&lt;br&gt;&lt;br&gt;Maggie Blue is an outsider, both at home and at school. She lives with her eccentric aunt Esme, and has no friends other than the irascible Hoagy, a stray cat who can talk to her.  When Magge sees Ida, her foe from school, being taken through a window to another world by one of their teachers who has transformed into a wolf, she is determined to save her, whatever the cost. But the dark world is full of danger, a place where happiness is valued above all else, and Maggie discovers that her role is far more important than anyone could have guessed. A thrilling and gripping tale of friendship, courage and the power of being yourself.&lt;/p&gt;"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1213/40509109-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1213/40509109-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40509109-01-965832"
					}
				}
			},
			{
				"titleId": "40581998-01-968304",
				"isbn13": "9781493431632",
				"format": "EPUB",
				"name": "Brave: A Teen Girl's Guide to Beating Worry and Anxiety",
				"contributors": [
					{
						"contributorId": "225990",
						"name": "Sissy Goff",
						"firstName": "Sissy",
						"middleName": "",
						"lastName": "Goff",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-02-02",
					"imprint": "Baker Publishing Group"
				},
				"classifications": {
					"bic2": [
						"VS",
						"VFJS",
						"YQX",
						"YQR"
					],
					"dewey": [
						"616.8522008352"
					],
					"interestAge": [
						13,
						19
					]
				},
				"edition": "",
				"language": "en",
				"descriptions": [
					"As a parent, you can use certain strategies to help your teenage daughter when she struggles with worry and anxiety. But it is also important that she learns how to work through her emotions on her own, especially as she approaches adulthood. This guide--created for girls ages 13 to 18--will help your daughter understand anxiety's roots and why her brain is often working against her when she starts to worry. With teen-friendly information, stories, and self-discovery exercises, including journaling and drawing prompts, she will learn practical ways to fight back when worries come up. She will find more of her voice and her confidence. In essence, she will find more of herself and the brave, strong, deeply loved girl God made her to be."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/646/40581998-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/646/40581998-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40581998-01-968304"
					}
				}
			},
			{
				"titleId": "40606179-01-968477",
				"isbn13": "9781492635260",
				"format": "EPUB",
				"name": "Where the Road Leads Us",
				"contributors": [
					{
						"contributorId": "393249",
						"name": "Robin Reul",
						"firstName": "Robin",
						"middleName": "",
						"lastName": "Reul",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-04-06",
					"country": "US",
					"imprint": "Sourcebooks Inc"
				},
				"classifications": {
					"bic2": [
						"Y"
					],
					"interestAge": [
						14,
						18
					]
				},
				"language": "en",
				"descriptions": [
					"<p>\"A beautiful, tender and thoughtful meditation on finding your way.\"—<strong>Nicola Yoon, #1 <em>New York Times</em> bestselling author of <em>Everything, Everything</em> and <em>The Sun Is Also a Star </em></strong></p>\n<p><strong>A heartfelt and hilarious adventure about two teens trying to find their way, for fans of Jennifer Niven and Nicola Yoon.</strong></p>\n<p>Jack is on the verge of leaving for college, but before he does, he wants to track down his estranged brother, Alex and find some closure in the wake of their father's death. Meanwhile, Hallie has just found out some upsetting news about a friend in Oregon, and she has a small window to go see him before it's too late.</p>\n<p>Jack and Hallie are practically strangers. They shared a class together years ago and haven't seen each other since, though they have more in common than they'd ever imagine. And when fate puts them into the same rideshare to the bus terminal, it kicks off an unconventional and hysterical adventure that may lead them to their own true selves…and maybe to each other.</p>\n<p><strong>Additional praise for <em>Where the Road Leads Us</em>:</strong></p>\n<p>\"A lovely, compassionate, and compulsive read.\"—<strong>Kathleen Glasgow, <em>New York Times</em> bestselling author of <em>Girl in Pieces</em> and <em>How to Make Friends with the Dark</em></strong></p>\n<p>\"A soul-filling, raw, love song of a novel.\"—<strong>Jennifer Niven, #1 <em>New York Times</em> bestselling author of <em>All the Bright Places </em></strong></p>\n<p>\"Propels you through a heartfelt adventure. I couldn't put it down.\"—<strong>Jeff Garvin, author of Lambda Literary Award finalist <em>Symptoms of Being Human </em></strong></p>\n<p>\"Anyone who has faced loss and uncertainty in their life will relate to this emotionally honest, hopeful book.\"—<strong>Misa Sugiura, author of <em>It's Not Like It's a Secret</em> and <em>This Time Will Be Different</em></strong></p>\n<p>\"A tender and heartfelt read with an ending both hopeful and sincere, and readers will happily share the ride.\"—<strong><em>BCCB</em></strong></p>\n<p>\"A feel-good story with depth.\"—<strong><em>Kirkus Reviews</em></strong></p>\n<p><strong>Also by Robin Reul:</strong></p>\n<p><em>My Kind of Crazy</em></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1036/40606179-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1036/40606179-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40606179-01-968477"
					}
				}
			},
			{
				"titleId": "40620061-01-968542",
				"isbn13": "9781684036387",
				"isbn10": "1684036380",
				"format": "EPUB",
				"name": "The OCD Workbook for Teens: Mindfulness and CBT Skills to Help You Overcome Unwanted Thoughts and Compulsions",
				"contributors": [
					{
						"contributorId": "286614",
						"name": "Jon Hershfield",
						"firstName": "Jon",
						"middleName": "",
						"lastName": "Hershfield",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "502672",
						"name": "Sean Shinnock",
						"firstName": "Sean",
						"middleName": "",
						"lastName": "Shinnock",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2021-03-01",
					"imprint": "New Harbinger Publications"
				},
				"classifications": {
					"interestAge": [
						13,
						19
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>Don&rsquo;t let OCD symptoms stand in the way of living your life!</b></p><p>If you&rsquo;re a teen with obsessive-compulsive disorder (OCD), you may have intense, unwanted thoughts and behaviors that interfere with school, your social life, and just having fun. The good news is there are ways you can minimize these thoughts and behaviors, so you can get back to being a teen. This workbook will show you how!</p><p>In The OCD Workbook for Teens, therapist and OCD expert Jon Hershfield offers proven-effective mindfulness and cognitive behavioral therapy (CBT) skills to help you deal with your worst OCD symptoms. You&rsquo;ll learn how to stay present in the moment, manage obsessive thoughts, make peace with uncertainty, and live your life joyfully&mdash;without being slowed down by compulsions.</p><p>This isn&rsquo;t just a workbook to help you survive OCD. It&rsquo;s a workbook to help you thrive&mdash;in all aspects of life.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/40620061-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/40620061-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40620061-01-968542"
					}
				}
			},
			{
				"titleId": "40630119-01-969090",
				"isbn13": "9781608687398",
				"isbn10": "1608687392",
				"format": "EPUB",
				"name": "Be You, Only Better: Real-Life Self-Care for Young Adults (and Everyone Else)",
				"contributors": [
					{
						"contributorId": "427703",
						"name": "Kristi Hugstad",
						"firstName": "Kristi",
						"middleName": "",
						"lastName": "Hugstad",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-03-16",
					"country": "US",
					"imprint": "New World Library"
				},
				"classifications": {
					"bic2": [
						"YXL"
					],
					"interestAge": [
						13,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"Along with all the perks of becoming an adult come challenges and the need to learn skills that help you self-regulate as you venture into new experiences. Highlighting five key areas of life &mdash; physical, mental, emotional, social, and financial &mdash; <em>Be You, Only Better</em> offers science- and experience-backed tools and easy-to-implement techniques for success. Skill-building and self-care practices &mdash; such as journaling, getting enough sleep and exercise, embracing nature, managing time and money, and practicing gratitude, mindfulness, and optimism &mdash; are presented, and each is illustrated with the story of a real young person. These practices will help you create a resilient foundation for your powerful future. You&rsquo;ll discover a wonderfully accessible lifeline and a realistically inspiring guide to leading &mdash; and loving &mdash; your best possible life."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1605/40630119-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1605/40630119-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40630119-01-969090"
					}
				}
			},
			{
				"titleId": "40684434-01-970955",
				"isbn13": "9781684035472",
				"isbn10": "1684035473",
				"format": "EPUB",
				"name": "The DBT Skills Workbook for Teen Self-Harm: Practical Tools to Help You Manage Emotions and Overcome Self-Harming Behaviors",
				"contributors": [
					{
						"contributorId": "230131",
						"name": "Sheri Van Dijk",
						"firstName": "Sheri",
						"middleName": "",
						"lastName": "Van Dijk",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-03-01",
					"imprint": "New Harbinger Publications"
				},
				"classifications": {
					"interestAge": [
						13,
						19
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>Put an end to self-harming behaviors&mdash;once and for all.</b></p><p>Do you cut or self-harm? Do you feel like it gives you a sense of control in a world where you so often feel helpless and powerless? Do you do it to distract from emotional pain, or just feel something other than total numbness? There&#39;s a long list of reasons why you may self-harm. But regardless of the reason or the method, the truth is that self-harm is a destructive&mdash;and potentially deadly&mdash;way to deal with emotional pain. Fortunately, there are healthier and safer ways to manage your emotions.&#160;</p><p>In The DBT Skills Workbook for Teen Self-Harm, dialectical behavior therapy (DBT) expert Sheri Van Dijk offers powerful skills to help you manage your emotions, so you won&#39;t have to rely on self-destructive behaviors. Whether you&#39;re actively engaging in self-harm by injuring your body, or participating in other self-destructive behaviors such as substance abuse or disordered eating, this workbook will help you create your own action plan for change.</p><p>This workbook will guide you through four essential DBT skills:</p><ul><li><b>Mindfulness </b>shows you how to experience emotion without having to act on it</li><li><b>Distress tolerance</b> teaches you how to deal with the urge to self-harm</li><li><b>Emotional regulation</b> allows you to understand and control painful feelings</li><li><b>Interpersonal effectiveness </b>helps you build self-respect and minimize feelings of worthlessness and hopelessness</li></ul> &#160; <p>Life can be painful, but you don&rsquo;t need to face this pain all on your own. With support, and the skills outlined in this workbook, you&rsquo;ll gain the tools you need to manage difficult thoughts and feelings in safer, healthier ways.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/40684434-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/40684434-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40684434-01-970955"
					}
				}
			},
			{
				"titleId": "40684462-01-970983",
				"isbn13": "9781800435209",
				"format": "EPUB",
				"name": "Voices of Teenage Transplant Survivors: Miracle-Like",
				"contributors": [
					{
						"contributorId": "508505",
						"name": "Susan J. Sample",
						"firstName": "Susan J.",
						"middleName": "",
						"lastName": "Sample",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-03-03",
					"country": "GB",
					"imprint": "Emerald Publishing Limited"
				},
				"classifications": {
					"bic2": [
						"MN",
						"VF"
					]
				},
				"language": "en",
				"descriptions": [
					"<p>While the physical and emotional trials of waiting on transplant lists are featured in popular media, the struggles recipients face years after surgery are not. <em>Voices of Teenage Transplant Survivors</em> introduces illness narratives from an unrecognized patient population: recipients of heart, liver, and kidney transplants. Offering unique narratives by adolescents who use poetry to explore issues surrounding the changing body, independence, identity, and mortality, the book showcases a message of healing and voices of hope amid uncertainty.</p>\n<p>Illuminating the physical, psychological, and existential challenges confronted by adolescents for which organ rejection and side effects loom in their future, Sample details the poetry workshops where these adolescents articulated experiences silenced by family, friends, and the culture of medicine. She includes close readings and analyses of their writings, along with writing prompts and references to narrative medicine theory. This powerful book offers something new for medical and health professionals, medical humanities researchers, students, and the public.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1198/40684462-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1198/40684462-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40684462-01-970983"
					}
				}
			},
			{
				"titleId": "40734984-01-972691",
				"isbn13": "9781641605434",
				"isbn10": "164160543X",
				"format": "EPUB",
				"name": "Thrill Seekers: 15 Remarkable Women in Extreme Sports",
				"contributors": [
					{
						"contributorId": "406233",
						"name": "Ann McCallum Staats",
						"firstName": "Ann",
						"middleName": "",
						"lastName": "McCallum Staats",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-03-02",
					"imprint": "Chicago Review Press"
				},
				"series": {
					"name": "Women of Power"
				},
				"classifications": {
					"interestAge": [
						13,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>\"Ann McCallum Staats has written an uplifting book profiling a handful of extraordinary women whose example proves that nothing can or should hold women back. These women push the boundaries of what was believed possible, achieving the impossible.\" </b>—Milbry Polk, author of Women of Discovery, and member of the Explorers Club board of directors </p><p><b>Encompassing a diverse selection of women in extreme and unique sports, this book shares the stories of bold and daring thrill-seekers </b></p><p>What is the allure of the extreme? Who are the women who seek out and excel at sports outside the conventional, such as cave diving, wingsuit flying, or Formula 1 racing?  </p><p>This collection of adventure dynamos is as fascinating as it is empowering. Thrill Seekers introduces readers to a diverse and fascinating selection of women whose determination, grit, and courage have propelled each of them into a life far from the sidelines.  </p><p>Each chapter introduces readers to modern role models and leaders, change-makers who opt into a life of risk—but one of astonishing rewards.  </p><p><b>Inspire young people to approach life with the same bold resolve. </b></p><p><b>Women of Power</b>. Bold books to inspire bold moves.  </p><p>Thrill Seekers is the debut title in the new <b>Women of Power </b>series. Women of Power is a timely, inclusive, international, modern biography series that profiles 15 diverse, modern women who are changing the world in their field while empowering others to follow their dreams.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/639/40734984-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/639/40734984-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40734984-01-972691"
					}
				}
			},
			{
				"titleId": "40976017-01-977214",
				"isbn13": "9781529501438",
				"isbn10": "1529501431",
				"format": "EPUB",
				"name": "The Outlaws Scarlett and Browne",
				"contributors": [
					{
						"contributorId": "167172",
						"name": "Jonathan Stroud",
						"firstName": "Jonathan",
						"middleName": "",
						"lastName": "Stroud",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-04-01",
					"country": "GB",
					"imprint": "Walker Books"
				},
				"series": {
					"name": "Scarlett and Browne"
				},
				"classifications": {
					"bic2": [
						"YFCF",
						"YFH"
					],
					"interestAge": [
						12,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>Set in a broken, future England, where gunfights and monsters collide, this is the exciting first title in a phenomenal fantasy teen series by the bestselling children's novelist.</b>\"You won't be able to put this down. A classic in the making.\"<b> – Eoin Colfer</b>\"Perfectly paced, beautifully written and bursting with black humour and bold ideas.\" <b>– Philip Reeve</b>\"\"Imaginative, original, taut and with multi-layered protagonists... A wild ride.\" <b>– Jo Cotterill</b>\"Scarlett and Browne is phenomenal, unputdownable storytelling of the highest order.\" <b>– Piers Torday    </b>England has been radically changed by a series of catastrophes – large cities have disappeared and London has been replaced by a lagoon. The surviving population exists in fortified towns where they cling to traditional ways, while strangely evolved beasts prowl the wilderness beyond. Conformity is rigidly enforced and those who fall foul of the rules are persecuted: some are killed, others are driven out into the wilds. Only a few fight back – and two of these outlaws, Scarlett McCain and Albert Browne, display an audacity and talent that makes them legends.\"Brilliant from start to finish.\" <b>– SFX</b>\"Stroud’s writing is a treat; brilliantly crafted world building, taut action scenes, fabulous villains and witty dialogue. A wild ride indeed, and the first in a series.\" <b>– The Observer</b>\"Another triumph. This adventure – starring a pair of charismatic anti-heroes, intensely cinematic action laced with characteristically dry wit, and a mash-up genres – crammed with gun fights, monsters and shadowy government operatives. Pitched for younger teens, but I expect discerning readers of 10 and up to devour it.\" <b>– The Bookseller</b>\"A unique blend of Wild West-inspired action and fantasy, this is a brilliant new tale from the author of Lockwood & Co. It's bold, funny and original, and older, more adventurous readers will love it from start to finish.\" <b>– The Week Junior</b></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/40976017-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1231/40976017-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40976017-01-977214"
					}
				}
			},
			{
				"titleId": "41129102-01-982521",
				"isbn13": "9780062880475",
				"isbn10": "0062880470",
				"format": "EPUB",
				"name": "Pumpkin",
				"contributors": [
					{
						"contributorId": "201220",
						"name": "Julie Murphy",
						"firstName": "Julie",
						"middleName": "",
						"lastName": "Murphy",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-05-25",
					"imprint": "HarperCollins"
				},
				"series": {
					"name": "Dumplin'"
				},
				"classifications": {
					"bic2": [
						"YXS",
						"YFB"
					],
					"interestAge": [
						13,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p><strong>Return to the beloved world of Julie Murphy&#8217;s #1 <em>New York Times</em> bestselling <em>Dumplin&#8217;&#8212;</em>now a popular Netflix feature film starring Jennifer Aniston<em>&#8212;</em>in this fabulously joyful, final companion novel about drag, prom, and embracing your inner Queen.</strong></p><p>Waylon Russell Brewer is a fat, openly gay boy stuck in the small West Texas town of Clover City. His plan is to bide his time until he can graduate, move to Austin with his twin sister, Clementine, and finally go Full Waylon so that he can live his Julie-the-hills-are-alive-with-the-sound-of-music-Andrews truth.</p><p>So when Clementine deviates from their master plan right after Waylon gets dumped, he throws caution to the wind and creates an audition tape for his favorite TV drag show, <em>Fiercest of Them All</em>. What he doesn&#8217;t count on is the tape getting accidentally shared with the entire school. . . . As a result, Waylon is nominated for prom queen as a joke. Clem&#8217;s girlfriend, Hannah Perez, also receives a joke nomination for prom king.</p><p>Waylon and Hannah decide there&#8217;s only one thing to do: run&#8212;and leave high school with a bang. A very glittery bang. Along the way, Waylon discovers that there is a lot more to running for prom court than campaign posters and plastic crowns, especially when he has to spend so much time with the very cute and infuriating prom king nominee Tucker Watson.</p><p>Waylon will need to learn that the best plan for tomorrow is living for today . . . especially with the help of some fellow queens. . . .</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1174/41129102-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1174/41129102-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/41129102-01-982521"
					}
				}
			},
			{
				"titleId": "41145308-01-983121",
				"isbn13": "9781524871673",
				"isbn10": "1524871672",
				"format": "EPUB",
				"name": "For All You Do: Self-Care and Encouragement for Teachers",
				"contributors": [
					{
						"contributorId": "425863",
						"name": "Peter Mishler",
						"firstName": "Peter",
						"middleName": "",
						"lastName": "Mishler",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-05-18",
					"imprint": "Andrews McMeel Publishing"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p><b>A perfect way to show teachers you care this holiday season.</b><b>Start the year&#160;off with a renewed commitment to yourself and your profession. A dynamic book of positive affirmations, self-care suggestions, and relatable, honest reflections to empower teachers everywhere.</b></p><p> Today&#39;s teachers face incredible challenges as they&#39;re asked to do more with less. With above-and-beyond responsibilities that include advocacy, counseling, and crisis control, teachers are being recognized as some of the most indispensable workers in our society. Award-winning educator and prize-winning poet Peter Mishler frames the most impactful experiences from his teaching life as straightforward, candid stories and reflections in his new book&#160;<b>For All You Do: Self-Care and Encouragement for Teachers</b>. </p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1179/41145308-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1179/41145308-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/41145308-01-983121"
					}
				}
			},
			{
				"titleId": "41148040-01-983971",
				"isbn13": "9780241989470",
				"isbn10": "0241989477",
				"format": "EPUB",
				"name": "Open Water: Winner of the Costa First Novel Award 2021",
				"contributors": [
					{
						"contributorId": "515875",
						"name": "Caleb Azumah Nelson",
						"firstName": "Caleb Azumah",
						"middleName": "",
						"lastName": "Nelson",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-02-04",
					"country": "GB",
					"imprint": "Penguin Books Ltd"
				},
				"classifications": {
					"bic2": [
						"FA",
						"FRD"
					],
					"interestAge": [
						14,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>WINNER OF THE COSTA FIRST NOVEL AWARD 2021WINNER OF DEBUT NOVEL OF THE YEAR AT THE BRITISH BOOK AWARDS 2022A No.1 BESTSELLER IN THE TIMES</b><b>'A tender and touching love story, beautifully told' Observer </b><b>'Hands-down the best debut I've read in years' The Times 'A beautiful and powerful novel about the true and sometimes painful depths of love' Candice Carty-Williams, bestselling author of QUEENIE </b> <b>'An unforgettable debut... it's Sally Rooney meets Michaela Coel meets Teju Cole' New York Times</b><b>'A love song to Black art and thought' Yaa Gyasi, bestselling author of HOMEGOING and TRANSCENDENT KINGDOM </b> Two young people meet at a pub in South East London. Both are Black British, both won scholarships to private schools where they struggled to belong, both are now artists - he a photographer, she a dancer - trying to make their mark in a city that by turns celebrates and rejects them. Tentatively, tenderly, they fall in love. But two people who seem destined to be together can still be torn apart by fear and violence.At once an achingly beautiful love story and a potent insight into race and masculinity, Open Water asks what it means to be a person in a world that sees you only as a Black body, to be vulnerable when you are only respected for strength, to find safety in love, only to lose it. With gorgeous, soulful intensity, Caleb Azumah Nelson has written the most essential British debut of recent years.<b>'An amazing debut novel. You should read this book. Let's hear it for Caleb Azumah Nelson, also known as the future' Benjamin Zephaniah</b><b>'A short, poetic and intellectual meditation on art and a relationship between a young couple' Bernardine Evaristo, author of GIRL, WOMAN, OTHER</b><b>'A very touching and heartfelt book' Diana Evans, award-winning author of ORDINARY PEOPLE</b><b>'A lyrical modern love story, brilliant on music and art, race and London life, I enjoyed it hugely' David Nicholls, author of ONE DAY and SWEET SORROW'Caleb is a star in the making' Nikesh Shukla, editor of THE GOOD IMMIGRANT and BROWN BABY'A stunning piece of art' Bolu Babalola, bestselling author of LOVE IN COLOUR</b><b>'For those that are missing the tentative depiction of love in Normal People, Caleb Azumah Nelson's Open Water is set to become one of 2021's unmissable books. Utterly transporting, it'll leave you weeping and in awe.' Stylist </b> <b>'</b><b>An exhilarating new voice in British fiction' Vogue</b><b>'</b><b>A poetic novel about Black identity and first love in the capital from one of Britain's most exciting young voices</b>' <b>Harper's Bazaar</b><b>'An intense, elegant debut' Guardian</b><b>WINNER OF THE COSTA FIRST NOVEL AWARD WINNER OF DEBUT NOVEL OF THE YEAR AT THE BRITISH BOOK AWARDS</b><b>SHORTLISTED FOR THE SUNDAY TIMES YOUNG WRITER OF THE YEAR AWARD</b> <b>WINNER OF THE BAD FORM BOOK OF THE YEAR AWARDSHORTLISTED FOR WATERSTONES BOOK OF THE YEARLONGLISTED FOR THE DYLAN THOMAS PRIZE, THE DESMOND ELLIOTT PRIZE AND THE GORDON BURN PRIZE A NATIONAL BOOK AWARD '5 UNDER 35' HONOREE</b>  <b>Caleb Azumah Nelson's new novel SMALL WORLDS is available now</b></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1484/41148040-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1484/41148040-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/41148040-01-983971"
					}
				}
			},
			{
				"titleId": "41148042-01-983973",
				"isbn13": "9780241517239",
				"isbn10": "0241517230",
				"format": "EPUB",
				"name": "The Beautiful Struggle",
				"contributors": [
					{
						"contributorId": "276082",
						"name": "Ta-Nehisi Coates",
						"firstName": "Ta-Nehisi",
						"middleName": "",
						"lastName": "Coates",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-02-04",
					"country": "GB",
					"imprint": "Penguin Random House Children's UK"
				},
				"classifications": {
					"bic2": [
						"YFY",
						"YXN",
						"YXF"
					],
					"interestAge": [
						13,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<p><b>*An extraordinary coming-of-age story, adapted from the adult memoir by the #1 New York Times bestselling author of The Water Dancer and Between the World and Me*</b><b>'Ta-Nehisi Coates is the young James Joyce of the hip-hop generation' Walter Mosley</b>This was the abyss where, unguided, black boys were swallowed whole, only to re-emerge on corners and prison tiersTa-Nehisi Coates grew up in the tumultuous 1980's in Baltimore known, back then as the murder capital of the United States.With seven siblings, four mothers, and one highly unconventional father: Paul Coates, a larger-than-life Vietnam Vet, Black Panther, Ta-Nehisi's coming of age story is gripping and lays bare the troubled, often violent life of the inner-city, and the author's experience as a young black person in itWith candor, Ta-Nehisi Coates details the challenges on the streets and within one's family, especially the eternal struggle for peace between a father and son and the important role family plays in such circumstances.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1484/41148042-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1484/41148042-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/41148042-01-983973"
					}
				}
			},
			{
				"titleId": "41153365-01-984430",
				"isbn13": "9781684036738",
				"isbn10": "1684036739",
				"format": "EPUB",
				"name": "Learning to Breathe: A Mindfulness Curriculum for Adolescents to Cultivate Emotion Regulation, Attention, and Performance",
				"contributors": [
					{
						"contributorId": "511706",
						"name": "Patricia C. Broderick",
						"firstName": "Patricia C.",
						"middleName": "",
						"lastName": "Broderick",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-06-01",
					"imprint": "New Harbinger Publications"
				},
				"classifications": {},
				"edition": "Second Edition",
				"language": "en",
				"descriptions": [
					"<p><b>A fully revised and updated second edition, including new research and skills in the areas of trauma and compassion</b></p><p> Disruptive behavior in the classroom, poor academic performance, and out-of-control emotions: if you work with adolescents, you are well-aware of the challenges this age group presents, as well as how much time can be lost on your lessons while dealing with this behavior. What if there was a way to calm these students down and arm them with the mindfulness skills needed to really excel in school and life? </p><p> Written by mindfulness expert and licensed clinical psychologist Patricia C. Broderick, Learning to Breathe is a secular program that tailors the teaching of mindfulness to the developmental needs of adolescents to help them understand their thoughts and feelings and manage distressing emotions. Students will be empowered by learning important mindfulness meditation skills that help them improve emotion regulation, reduce stress, improve overall performance, and, perhaps most importantly, develop their attention.&#160; </p><p> Since its publication nearly a decade ago, the L2B program has transformed classrooms across the US, and has received praise from educators, parents, and mental health professionals alike. This fully revised and updated second edition offers the same powerful mindfulness interventions, and includes compelling new research and skills in the areas of trauma and compassion. </p><p> The book integrates certain themes of mindfulness-based stress reduction (MBSR), developed by Jon Kabat-Zinn, into a program that is shorter, more accessible to students, and compatible with school curricula. This easy-to-use manual is designed to be used by teachers, but can also be used by any mental health provider teaching adolescents emotion regulation, stress reduction and mindfulness skills. The book is structured around six themes built upon the acronym BREATHE, and each theme has a core message: Body, Reflection, Emotions, Attention, Tenderness, and Healthy Mind Habits, and Empowerment. </p><p> Along with&#160;The Learning to Breathe Student Workbook, this is the perfect tool for empowering students as they grapple with the psychological tasks of adolescence. Make this new edition a part of your professional library today! </p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/41153365-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1216/41153365-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/41153365-01-984430"
					}
				}
			},
			{
				"titleId": "100081727-04-52763",
				"isbn13": "9780739372319",
				"isbn10": "",
				"format": "MP3",
				"name": "The Boggart",
				"contributors": [
					{
						"contributorId": "235313",
						"name": "Susan Cooper",
						"firstName": "Susan",
						"middleName": "",
						"lastName": "Cooper",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "853270",
						"name": "David Rintoul",
						"firstName": "David",
						"middleName": "",
						"lastName": "Rintoul,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2013-04-30",
					"imprint": "Penguin Random House"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"<b>Centuries old and thousands of miles from home.</b> When Emily and Jess Volnik's family inherits a remote, crumbling Scottish castle, they also inherit the Boggart--an invisible, mischievous spirit who's been playing tricks on residents of Castle Keep for generations. Then the Boggart is trapped in a rolltop desk and inadvertently shipped to the Volniks' home in Toronto, where nothing will ever be the same--for the Volniks or the Boggart. In a world that doesn't believe in magic, the Boggart's pranks wreak havoc. And even the newfound joys of peanut butter and pizza and fudge sauce eventually wear thin for the Boggart. He wants to go home--but his only hope lies in a risky and daring blend of modern technology and ancient magic."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100081727-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100081727-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100081727-04-52763"
					}
				}
			},
			{
				"titleId": "100082478-04-50160",
				"isbn13": "9780307704566",
				"isbn10": "",
				"format": "MP3",
				"name": "The Ultimate Happiness Prescription: 7 Keys to Joy and Enlightenment",
				"contributors": [
					{
						"contributorId": "167089",
						"name": "Deepak Chopra",
						"firstName": "Deepak",
						"middleName": "",
						"lastName": "Chopra",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "167089",
						"name": "Deepak Chopra",
						"firstName": "Deepak",
						"middleName": "",
						"lastName": "Chopra",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2009-11-17",
					"imprint": "Penguin Random House"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<b>New York Times bestselling author Deepak Chopra shares the spiritual practices that will help us to uncover the true secrets of joy in the most difficult times.</b>Happiness is something everyone desires. Yet how to find happiness—or even if we deserve to—remains a mystery. The goal of life is the expansion of happiness, but today’s society reinforces the belief that fulfillment comes from achieving success, wealth, and good relationships. Chopra tells us that the opposite is true: All success in life is the by-product of happiness, not the cause. In this book, Chopra shows us seven keys for a life based on a sense of your \"true self\" lying beyond the ebb and flow of daily living. Simple daily exercises can lead to eliminating the root causes of unhappiness and help you to: • Recognize real happiness and not settle for less• Find true self-esteem, which doesn’t depend on anything outside you• Return to the state of joy, peace, and spontaneous fulfillment that is your natural birthright• Focus on the present and learn to live it fully• Experience enlightenment After all avenues to happiness have been explored, only one path is left: the journey to enlightenment. In The Ultimate Happiness Prescription, we are taken on an inspiring journey to learn the secrets for living mindfully and with effortless spontaneity for the true self, the only place untouched by trouble and misfortune."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100082478-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100082478-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100082478-04-50160"
					}
				}
			},
			{
				"titleId": "100082891-04-76707",
				"isbn13": "9780792751694",
				"isbn10": "",
				"format": "MP3",
				"name": "Julius Caesar",
				"contributors": [
					{
						"contributorId": "412586",
						"name": "Tom Wheelwright",
						"firstName": "Tom",
						"middleName": "",
						"lastName": "Wheelwright",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "127607",
						"name": "William Shakespeare",
						"firstName": "William",
						"middleName": "",
						"lastName": "Shakespeare",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "412699",
						"name": "Robert T. Kiyosaki",
						"firstName": "Robert T.",
						"middleName": "",
						"lastName": "Kiyosaki",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "870267",
						"name": "Laure Pierre Arthur",
						"firstName": "Laure,",
						"middleName": "",
						"lastName": "Pierre Arthur",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "870268",
						"name": "E.A. Copen",
						"firstName": "E.A.",
						"middleName": "",
						"lastName": "Copen,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "857389",
						"name": "Cast A Full",
						"firstName": "Cast,",
						"middleName": "",
						"lastName": "A Full",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "941363",
						"name": "Michael Feast",
						"firstName": "Michael",
						"middleName": "",
						"lastName": "Feast,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2005-06-01",
					"imprint": "Blackstone Audio"
				},
				"series": {
					"name": "The Arkangel Shakespeare Collection"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>At the heart of this tragic history is one of Shakespeare's most noble characters, the statesman Brutus, who is caught in a devastating conflict between private affection and public duty.</p><p>Julius Caesar has become the most powerful man in the Rome. Does his power now threaten the very existence of the Republic itself? A conspiracy is hatched, one that will have fatal consequences not only for Caesar and the conspirators but for the future history of the ancient world. </p><p>Brutus is played by John Bowe and Mark Antony by Adrian Lester. Michael Feast is Caesar.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100082891-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100082891-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100082891-04-76707"
					}
				}
			},
			{
				"titleId": "100083903-04-49087",
				"isbn13": "9780739368114",
				"isbn10": "",
				"format": "MP3",
				"name": "The Diamond of Darkhold: The Fourth Book of Ember",
				"contributors": [
					{
						"contributorId": "167330",
						"name": "Jeanne DuPrau",
						"firstName": "Jeanne",
						"middleName": "",
						"lastName": "DuPrau",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "854767",
						"name": "Katherine Kellgren",
						"firstName": "Katherine",
						"middleName": "",
						"lastName": "Kellgren,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2008-08-26",
					"imprint": "Penguin Random House"
				},
				"series": {
					"name": "Book of Ember"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"It’s been several months since Lina and Doon escaped the dying city of Ember and, along with the rest of their people, joined the town of Sparks. Now, struggling through the harsh winter aboveground, they find an unusual book. Torn up and missing most of its pages, it alludes to a mysterious device from before the Disaster, which they believe is still in Ember. Together, Lina and Doon must go back underground to retrieve what was lost and bring light to a dark world.In the fourth Book of Ember, bestselling author Jeanne DuPrau juxtaposes yet another action-packed adventure with powerful themes about hope, learning, and the search for truth."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100083903-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100083903-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100083903-04-49087"
					}
				}
			},
			{
				"titleId": "100083972-04-124329",
				"isbn13": "9781937091637",
				"isbn10": "",
				"format": "MP3",
				"name": "The Curious Case of Benjamin Button",
				"contributors": [
					{
						"contributorId": "130973",
						"name": "F. Scott Fitzgerald",
						"firstName": "F. Scott",
						"middleName": "",
						"lastName": "Fitzgerald",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "858140",
						"name": "B.J. Harrison",
						"firstName": "B.J.",
						"middleName": "",
						"lastName": "Harrison,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2008-10-05",
					"imprint": "B.J. Harrison"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Benjamin Button was literally born an old man. He lived a backwards life, for his body grew younger as the years passed him by. Come and listen to the original, unabridged story by F. Scott Fitzgerald which inspired the movie."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100083972-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100083972-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100083972-04-124329"
					}
				}
			},
			{
				"titleId": "100084315-04-32956",
				"isbn13": "9781427205131",
				"isbn10": "",
				"format": "MP3",
				"name": "Ender in Exile",
				"contributors": [
					{
						"contributorId": "192329",
						"name": "Orson Scott Card",
						"firstName": "Orson Scott",
						"middleName": "",
						"lastName": "Card",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "7113",
						"name": "Various Narrators",
						"firstName": "Various",
						"middleName": "",
						"lastName": "Narrators",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "306058",
						"name": "David Birney",
						"firstName": "David",
						"middleName": "",
						"lastName": "Birney",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "368127",
						"name": "Cassandra Campbell",
						"firstName": "Cassandra",
						"middleName": "",
						"lastName": "Campbell",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "386552",
						"name": "Stefan Rudnicki",
						"firstName": "Stefan",
						"middleName": "",
						"lastName": "Rudnicki",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "859908",
						"name": "Card Emily Janice",
						"firstName": "Card,",
						"middleName": "",
						"lastName": "Emily Janice",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "861832",
						"name": "Don Leslie",
						"firstName": "Don",
						"middleName": "",
						"lastName": "Leslie,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2008-11-11",
					"imprint": "Macmillan Audio"
				},
				"series": {
					"name": "Ender Saga"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>Orson Scott Card returns to his best-selling series with a new Ender novel, Ender in Exile.At the close of Ender's Game, Andrew Wiggin – called Ender by everyone – is told that he can no longer live on Earth, and he realizes that this is the truth. He has become far more than just a boy who won a game: he is the Savior of Earth, a hero, a military genius whose allegiance is sought by every nation of the newly shattered Earth Hegemony. He is offered the choice of living in isolation on Eros, at one of the Hegemony's training facilities, but instead the twelve-year-old chooses to leave his home world and begin the long relativistic journey out to the colonies. With him went his sister Valentine, and the core of the artificial intelligence that would become Jane.The story of those years has never been told… until now.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100084315-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100084315-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100084315-04-32956"
					}
				}
			},
			{
				"titleId": "100084329-04-0493",
				"isbn13": "9789629544317",
				"isbn10": "",
				"format": "MP3",
				"name": "The Eagle of the Ninth",
				"contributors": [
					{
						"contributorId": "153969",
						"name": "Rosemary Sutcliff",
						"firstName": "Rosemary",
						"middleName": "",
						"lastName": "Sutcliff",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "898056",
						"name": "Charlie Simpson",
						"firstName": "Charlie",
						"middleName": "",
						"lastName": "Simpson,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2006-05-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"Roman Britain: Marcus Flavius Aquila, a young centurion is forced into retirement after a wound in his first major engagement against a rebel British tribe. It allows him the freedom to embark upon a dangerous mission to find out what happened to the Ninth Legion which, years before, disappeared in the savage lands of the Picts. Will he find out what happened to the men, led by his father, who never returned? And will he recover the Eagle, the symbol of Roman dominance and power? This junior classic has never been out of print since it was first published over fifty years ago. It is now presented in a fresh abridgement read in exciting manner by Charlie Simpson."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100084329-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100084329-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100084329-04-0493"
					}
				}
			},
			{
				"titleId": "100084515-04-36569",
				"isbn13": "9781442353008",
				"isbn10": "",
				"format": "MP3",
				"name": "Witch World",
				"contributors": [
					{
						"contributorId": "234583",
						"name": "Christopher Pike",
						"firstName": "Christopher",
						"middleName": "",
						"lastName": "Pike",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "858092",
						"name": "Justine Eyre",
						"firstName": "Justine",
						"middleName": "",
						"lastName": "Eyre,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2012-11-13",
					"imprint": "Simon & Schuster"
				},
				"series": {
					"name": "Witch World"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>Jessie never suspected that witches are real, or that she is one, in the start of this paranormal suspense saga from #1 New York Times bestselling author Christopher Pike.</b>Heading off for a weekend in Las Vegas with her friends, Jessie Ralle has only one worry—how to make it through the road trip in the same car with her Ex, Jimmy Kelter. The guy who broke her heart five months ago when he dumped her for no reason. The guy who’s finally ready to tell her why he did it, because he wants her back. But what Jessie doesn’t realize is that Jimmy is the least of her problems. In Las Vegas she meets Russ, a mesmerizing stranger who shows her how to gamble, and who never seems to lose. Curious, Jessie wants to know his secret, and in response, alone in his hotel room, he teaches her a game that opens a door to another reality. To Witch World. Suddenly Jessie discovers that she’s stumbled into a world where some people can do the impossible, and others may not even be human. Are there really witches? Is she one of them? Originally published as Witch World, this classic edge-of-your-seat thrill ride from #1 bestselling author Christopher Pike keeps you guessing right until the last page."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100084515-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100084515-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100084515-04-36569"
					}
				}
			},
			{
				"titleId": "100085050-04-82487",
				"isbn13": "9781478903529",
				"isbn10": "",
				"format": "MP3",
				"name": "Sometimes You Win, Sometimes You Learn - for Teens: How to Turn a Loss into a Win",
				"contributors": [
					{
						"contributorId": "190161",
						"name": "John C. Maxwell",
						"firstName": "John C.",
						"middleName": "",
						"lastName": "Maxwell",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "856936",
						"name": "Chris Sorensen",
						"firstName": "Chris",
						"middleName": "",
						"lastName": "Sorensen,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-02-24",
					"imprint": "Hachette Audio"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>#1 New York Times bestselling author John C. Maxwell brings his common sense self-help lessons to teens!</b>  Any setback--a championship loss, a bad grade, a botched audition-can be seen as a step forward when teens possess the right tools to turn that loss into a gain of knowledge. Drawing on nearly fifty years of leadership experience, Dr. Maxwell provides a roadmap for becoming a true learner, someone who wins in the face of problems, failures, and losses.   The teachings from Sometimes You Win, Sometimes You Learn have been edited and adapted just for teens. This Young Readers edition features all-new stories of real life figures that overcame adversity early in their lives, including entrepreneur Steve Jobs, Olympic Gold Medalists Gabby Douglas and Mikaela Shiffrin, and Nobel Peace Prize nominee Malala Yousafzai."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100085050-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100085050-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100085050-04-82487"
					}
				}
			},
			{
				"titleId": "100085475-04-5031",
				"isbn13": "9781580814706",
				"isbn10": "",
				"format": "MP3",
				"name": "A Lesson Before Dying",
				"contributors": [
					{
						"contributorId": "426215",
						"name": "Romulus Linney",
						"firstName": "Romulus",
						"middleName": "",
						"lastName": "Linney",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "853052",
						"name": "Full Cast",
						"firstName": "Full",
						"middleName": "",
						"lastName": "Cast,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "887936",
						"name": "Keith Glover",
						"firstName": "Keith",
						"middleName": "",
						"lastName": "Glover,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2002-05-10",
					"imprint": "L.A. Theatre Works"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Based on Ernest J. Gaines’ National Book Critics Circle Award-winning novel, A Lesson Before Dying is set in a small Louisiana Cajun community in the late 1940’s. Jefferson, a young illiterate black man, is falsely convicted of murder and is sentenced to death. Grant Wiggins, the plantation schoolteacher, agrees to talk with the condemned man. The disheartened Wiggins had once harbored dreams of escaping from his impoverished youth, yet he returned to his home town after university, to teach children whose lives seemed as unpromising as Jefferson’s. The two men forge a bond as they come to understand what it means to resist and defy one’s own fate.An L.A. Theatre Works full-cast performance featuring:Rick Foucheux as Paul BoninKeith Glover as Grant WigginsJamahl Marsh as JeffersonLinda Powell as Vivian BaptisteJefferson A. Russell as Reverend Moses AmbroseJerry Whiddon as Sam GuidryBeatrice Winde as Emma GlennDirected by Nick Olcott. Recorded at Voice of America in Washington DC."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100085475-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100085475-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100085475-04-5031"
					}
				}
			},
			{
				"titleId": "100086071-04-26325",
				"isbn13": "9789629544157",
				"isbn10": "",
				"format": "MP3",
				"name": "Anne of Avonlea",
				"contributors": [
					{
						"contributorId": "127621",
						"name": "L.M. Montgomery",
						"firstName": "L.M.",
						"middleName": "",
						"lastName": "Montgomery",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "857488",
						"name": "Liza Ross",
						"firstName": "Liza",
						"middleName": "",
						"lastName": "Ross,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2000-01-30",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {
					"interestAge": [
						4,
						12
					]
				},
				"language": "en",
				"descriptions": [
					"Anne of Avonlea"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086071-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086071-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100086071-04-26325"
					}
				}
			},
			{
				"titleId": "100086211-04-15035",
				"isbn13": "9789629548230",
				"isbn10": "",
				"format": "MP3",
				"name": "Robert Browning",
				"contributors": [
					{
						"contributorId": "131046",
						"name": "Robert Browning",
						"firstName": "Robert",
						"middleName": "",
						"lastName": "Browning",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "853572",
						"name": "Patience Tomlinson",
						"firstName": "Patience",
						"middleName": "",
						"lastName": "Tomlinson,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "863257",
						"name": "David Timson",
						"firstName": "David",
						"middleName": "",
						"lastName": "Timson,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2010-05-01",
					"imprint": "Naxos Audiobooks"
				},
				"series": {
					"name": "Great Poets"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Robert Browning’s popular poems The Pied Piper of Hamelin and How They Brought the Good News are often anthologised, but it is in his dramatic lyrics such as My Last Duchess and the chilling Porphyria’s Lover that his poetic genius shines. Browning, with his unusual use of language, can be a challenging poet, but one who is always rewarding. This selection shows the many imaginative facets of this often neglected Victorian poet."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086211-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086211-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100086211-04-15035"
					}
				}
			},
			{
				"titleId": "100086297-04-7007",
				"isbn13": "9789629547172",
				"isbn10": "",
				"format": "MP3",
				"name": "Great Speeches in History",
				"contributors": [
					{
						"contributorId": "135734",
						"name": "Various Authors",
						"firstName": "Various",
						"middleName": "",
						"lastName": "Authors",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "556788",
						"name": "Elizabeth Bell",
						"firstName": "Elizabeth",
						"middleName": "",
						"lastName": "Bell",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "860235",
						"name": "Peter Marinker",
						"firstName": "Peter",
						"middleName": "",
						"lastName": "Marinker,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "860761",
						"name": "Samuel West",
						"firstName": "Samuel",
						"middleName": "",
						"lastName": "West,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "875844",
						"name": "Norman Rodway",
						"firstName": "Norman",
						"middleName": "",
						"lastName": "Rodway,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "1996-06-03",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"From Socrates to Charles I, Danton to Lincoln – here are some of history’s most significant figures with their most important speeches. Fighting for justice, for freedom of speech, and sometimes even for their own lives, these orators demonstrate the finest resources of language in the service of the most dramatic issues of their day."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086297-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086297-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100086297-04-7007"
					}
				}
			},
			{
				"titleId": "100086604-04-5171",
				"isbn13": "9781577313656",
				"isbn10": "",
				"format": "MP3",
				"name": "Way of the Peaceful Warrior",
				"contributors": [
					{
						"contributorId": "158482",
						"name": "Dan Millman",
						"firstName": "Dan",
						"middleName": "",
						"lastName": "Millman",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "158482",
						"name": "Dan Millman",
						"firstName": "Dan",
						"middleName": "",
						"lastName": "Millman",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "1997-01-01",
					"imprint": "New World Library"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"This book has become one of the most beloved spiritual sagas of our time. Shared among friends and families, this million copy word of mouth bestseller has inspired men and women of all ages in more than twenty languages worldwide. Despite his success, college student and world-champion athlete Dan Millman, is haunted by a feeling that something is missing from his life. Awakened one night by dark dreams, he wanders into an all night gas station, meets an old man named Socrates, and his world is changed forever. Guided by this eccentric old warrior, drawn to an elusive young woman named Joy, Dan begins a spiritual odyssey into realms of light and shadow, romance and mystery, toward a final confrontation that will deliver or destroy him. This classic tale, told with heart and humor, speaks to the peaceful warrior in each of us. Countless readers have been moved to laughter and tears, even moments of illumination, as they rediscover life’s larger meaning and purpose. Journey with Dan on the peaceful warrior’s path to unreasonable happiness and find out for yourself why this book changes lives."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086604-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086604-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100086604-04-5171"
					}
				}
			},
			{
				"titleId": "100086850-04-76769",
				"isbn13": "9780792751892",
				"isbn10": "",
				"format": "MP3",
				"name": "Twelfth Night",
				"contributors": [
					{
						"contributorId": "870267",
						"name": "Laure Pierre Arthur",
						"firstName": "Laure,",
						"middleName": "",
						"lastName": "Pierre Arthur",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "127607",
						"name": "William Shakespeare",
						"firstName": "William",
						"middleName": "",
						"lastName": "Shakespeare",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "412586",
						"name": "Tom Wheelwright",
						"firstName": "Tom",
						"middleName": "",
						"lastName": "Wheelwright",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "412699",
						"name": "Robert T. Kiyosaki",
						"firstName": "Robert T.",
						"middleName": "",
						"lastName": "Kiyosaki",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "870268",
						"name": "E.A. Copen",
						"firstName": "E.A.",
						"middleName": "",
						"lastName": "Copen,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "7113",
						"name": "Various Narrators",
						"firstName": "Various",
						"middleName": "",
						"lastName": "Narrators",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "266066",
						"name": "Amanda Root",
						"firstName": "Amanda",
						"middleName": "",
						"lastName": "Root",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "578751",
						"name": "Jonathan Firth",
						"firstName": "Jonathan",
						"middleName": "",
						"lastName": "Firth",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "860681",
						"name": "Niamh Cusack",
						"firstName": "Niamh",
						"middleName": "",
						"lastName": "Cusack,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "916829",
						"name": "Dinsdale Landen",
						"firstName": "Dinsdale",
						"middleName": "",
						"lastName": "Landen,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2005-04-15",
					"imprint": "Blackstone Audio"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>Shakespeare’s most sophisticated comedy is a riotous tale of hopelessly unrequited passions and mistaken identity.</p><p>Duke Orsino is in love with the noblewoman Olivia. She, however, has fallen for his servant Cesario, who is actually Viola, a woman disguised as a man, who loves Orsino: confusion is rife. Meanwhile, Olivia’s arrogant steward Malvolio is cruelly tricked by her uncle Sir Toby Belch, his friend Sir Andrew Aguecheek, and the maidservant Maria into believing his mistress loves him.</p><p>Niamh Cusack is Viola, Jonathan Firth is Orsino, Amanda Root plays Olivia, Dinsdale Landen plays Sir Toby Belch, and Julian Glover is Malvolio.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086850-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086850-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100086850-04-76769"
					}
				}
			},
			{
				"titleId": "100087343-04-113193",
				"isbn13": "9781615441884",
				"isbn10": "",
				"format": "MP3",
				"name": "Mindfulness Meditation in Everyday Life",
				"contributors": [
					{
						"contributorId": "898968",
						"name": "Zinn Jon Kabat",
						"firstName": "Zinn,",
						"middleName": "",
						"lastName": "Jon Kabat",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "898968",
						"name": "Zinn Jon Kabat",
						"firstName": "Zinn,",
						"middleName": "",
						"lastName": "Jon Kabat",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2011-04-22",
					"imprint": "Better Listen"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"In this follow-up to Mindfulness Meditation in Everyday Life, Kabat-Zinn adds a decidedly American flair to the elusive art of living fully in each moment as it unfolds. This product includes guided instruction in mindful walking, sitting meditation, mindful hatha yoga, and also Kabat-Zinn's responses to questions from workshop participants, which may help deepen both one's understanding and commitment to the cultivation of mindfulness."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100087343-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100087343-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100087343-04-113193"
					}
				}
			},
			{
				"titleId": "100087618-04-122861",
				"isbn13": "9781518911293",
				"isbn10": "",
				"format": "MP3",
				"name": "Michael Jordan: In His Own Words",
				"contributors": [
					{
						"contributorId": "852548",
						"name": "Geoffrey Giuliano",
						"firstName": "Geoffrey",
						"middleName": "",
						"lastName": "Giuliano,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "534",
						"name": "Various",
						"firstName": "",
						"middleName": "",
						"lastName": "Various",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-06-19",
					"imprint": "Author's Republic"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Michael Jordan is not only the greatest basketball player of all time, but also an international figure and genuine role model. Jordan's inspirational story is one of intense personal struggle and unequaled success not only on the hardwood but also as a respected actor, international businessman, a compassionate humanitarian, and a loving son, husband, and father. Michael's own voice is woven throughout with other famous voices culled from the author's exclusive audio archives; including Scottie Pippin, President Bill Clinton, Shaquille O'Neal, and NBA Commissioner David Stern."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100087618-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100087618-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100087618-04-122861"
					}
				}
			},
			{
				"titleId": "100088753-04-47728",
				"isbn13": "9780739385791",
				"isbn10": "",
				"format": "MP3",
				"name": "Parvana's Journey",
				"contributors": [
					{
						"contributorId": "146384",
						"name": "Deborah Ellis",
						"firstName": "Deborah",
						"middleName": "",
						"lastName": "Ellis",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "867455",
						"name": "Meera Simhan",
						"firstName": "Meera",
						"middleName": "",
						"lastName": "Simhan,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2009-08-11",
					"imprint": "Penguin Random House"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"‘My life is dust and rocks and rude boys and skinny babies, and long days of searching for my mother when I don’t have the faintest idea where she might be.’Parvana is alone. Her father is dead. A refugee in a land full of dangers, she must travel across Afghanistan to find her mother and sisters.As she travels, Parvana finds friends — a starving, orphaned baby; a strange, hostile boy; a solitary girl who darts in and out of the minefields to find food. Perhaps, with their help, she may one day be reunited with her family..."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100088753-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100088753-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100088753-04-47728"
					}
				}
			},
			{
				"titleId": "100089714-04-69793",
				"isbn13": "9781467663496",
				"isbn10": "",
				"format": "MP3",
				"name": "Lots of Laughs!",
				"contributors": [
					{
						"contributorId": "223508",
						"name": "Nicholson Baker",
						"firstName": "Nicholson",
						"middleName": "",
						"lastName": "Baker",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "161923",
						"name": "Neil Gaiman",
						"firstName": "Neil",
						"middleName": "",
						"lastName": "Gaiman",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "200339",
						"name": "Ron Carlson",
						"firstName": "Ron",
						"middleName": "",
						"lastName": "Carlson",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "242990",
						"name": "Etgar Keret",
						"firstName": "Etgar",
						"middleName": "",
						"lastName": "Keret",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "264225",
						"name": "John Updike",
						"firstName": "John",
						"middleName": "",
						"lastName": "Updike",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "270776",
						"name": "Leonard Michaels",
						"firstName": "Leonard",
						"middleName": "",
						"lastName": "Michaels",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "960767",
						"name": "David Schickler",
						"firstName": "David",
						"middleName": "",
						"lastName": "Schickler,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "391569",
						"name": "John Guare",
						"firstName": "John",
						"middleName": "",
						"lastName": "Guare",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "863224",
						"name": "Christina Pickles",
						"firstName": "Christina",
						"middleName": "",
						"lastName": "Pickles,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "988571",
						"name": "Charles Keating",
						"firstName": "Charles",
						"middleName": "",
						"lastName": "Keating,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "991650",
						"name": "David Rakoff",
						"firstName": "David",
						"middleName": "",
						"lastName": "Rakoff,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "1021147",
						"name": "Isaiah Sheffer",
						"firstName": "Isaiah",
						"middleName": "",
						"lastName": "Sheffer,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "1021155",
						"name": "Thomas Gibson",
						"firstName": "Thomas",
						"middleName": "",
						"lastName": "Gibson,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "1021156",
						"name": "Laura Esterman",
						"firstName": "Laura",
						"middleName": "",
						"lastName": "Esterman,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2005-04-01",
					"imprint": "Symphony Space"
				},
				"series": {
					"name": "Selected Shorts"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Selected Short's most popular volume! Over three hours of stories to tickle your funny bone.<ul> <li>\n\nNicholson Baker's \"Subsoil\"\nperformed by Thomas Gibson\nA darkly comic thriller about a tractor historian besieged by man-eating potatoes.\n\n<li>David Schickler's \"Jamaica\"\nperformed by Isaiah Sheffer\nA man with his head stuck between the banisters has no choice but to listen in on his wife's \"Gorgon Book Club.\"\n\n<li>Neil Gaiman's \"Chivalry\"\nperformed by Christina Pickles\nA delicious tale of an elderly British matron who buys the Holy Grail at a rummage sale.\n\n<li>Leonard Michaels' \"Nachman from Los Angeles\"\nperformed by David Rakoff\nA wonderfully silly tale of misadventure on a college campus.\n\n<li>Etgar Keret's \"Fatso\"\nperformed by John Guare\nAn offbeat romance with a very comic nightly ritual.</li></ul>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100089714-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100089714-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100089714-04-69793"
					}
				}
			},
			{
				"titleId": "100090364-04-8863",
				"isbn13": "9780545222501",
				"isbn10": "",
				"format": "MP3",
				"name": "What I Saw and How I Lied",
				"contributors": [
					{
						"contributorId": "228562",
						"name": "Judy Blundell",
						"firstName": "Judy",
						"middleName": "",
						"lastName": "Blundell",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "859484",
						"name": "Caitlin Greer",
						"firstName": "Caitlin",
						"middleName": "",
						"lastName": "Greer,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2009-10-01",
					"imprint": "Scholastic"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"This National Book Award winner set during the aftermath of WWII is now available in paperback!When Evie's father returned home from World War II, the family fell back into its normal life pretty quickly.  But Joe Spooner brought more back with him than just good war stories.  When movie-star handsome Peter Coleridge, a young ex-GI who served in Joe's company in postwar Austria, shows up, Evie is suddenly caught in a complicated web of lies that she only slowly recognizes.  She finds herself falling for Peter, ignoring the secrets that surround him . . . until a tragedy occurs that shatters her family and breaks her life in two."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100090364-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100090364-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100090364-04-8863"
					}
				}
			},
			{
				"titleId": "100090775-04-15036",
				"isbn13": "9789629549596",
				"isbn10": "",
				"format": "MP3",
				"name": "Samuel Taylor Coleridge",
				"contributors": [
					{
						"contributorId": "130807",
						"name": "Samuel Taylor Coleridge",
						"firstName": "Samuel Taylor",
						"middleName": "",
						"lastName": "Coleridge",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "854768",
						"name": "Anton Lesser",
						"firstName": "Anton",
						"middleName": "",
						"lastName": "Lesser,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "855265",
						"name": "Sarah Woodward",
						"firstName": "Sarah",
						"middleName": "",
						"lastName": "Woodward,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "856029",
						"name": "Benjamin Soames",
						"firstName": "Benjamin",
						"middleName": "",
						"lastName": "Soames,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "857324",
						"name": "John Moffatt",
						"firstName": "John",
						"middleName": "",
						"lastName": "Moffatt,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "863257",
						"name": "David Timson",
						"firstName": "David",
						"middleName": "",
						"lastName": "Timson,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "873667",
						"name": "Michael Sheen",
						"firstName": "Michael",
						"middleName": "",
						"lastName": "Sheen,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2010-05-01",
					"imprint": "Naxos Audiobooks"
				},
				"series": {
					"name": "Great Poets"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Samuel Taylor Coleridge, in collaboration with his friend William Wordsworth, revolutionised English poetry; in 1798 they produced their Lyrical Ballads, poems of imagination and reflection using ‘the language of men’. They pointed the way forward for a generation of Romantic poets. Coleridge’s addiction to opium affected his poetic output, and yet the handful of poems he did produce were innovative. These ranged from the quietly conversational to the wildly imagined, and include two of the greatest in English literature: Kubla Khan and The Rime of the Ancient Mariner."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100090775-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100090775-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100090775-04-15036"
					}
				}
			},
			{
				"titleId": "100090866-04-139668",
				"isbn13": "9781504777315",
				"isbn10": "",
				"format": "MP3",
				"name": "Legion",
				"contributors": [
					{
						"contributorId": "134690",
						"name": "Julie Kagawa",
						"firstName": "Julie",
						"middleName": "",
						"lastName": "Kagawa",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "237490",
						"name": "Caitlin Davies",
						"firstName": "Caitlin",
						"middleName": "",
						"lastName": "Davies",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "377591",
						"name": "MacLeod Andrews",
						"firstName": "MacLeod",
						"middleName": "",
						"lastName": "Andrews",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "853170",
						"name": "Tristan Morris",
						"firstName": "Tristan",
						"middleName": "",
						"lastName": "Morris,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "865622",
						"name": "Chris Patton",
						"firstName": "Chris",
						"middleName": "",
						"lastName": "Patton,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2017-04-25",
					"imprint": "Blackstone Audio"
				},
				"series": {
					"name": "The Talon Saga"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p>From the limitless imagination of Julie Kagawa comes the next thrilling novel of the Talon Saga.</p><p>The legions will be unleashed, and no human, rogue dragon, or former dragonslayer can stand against the coming horde.</p><p>Dragon hatchling Ember Hill was never prepared to find love at all—dragons do not suffer human emotions—let alone with a human, and a former dragonslayer at that. With Garret, an ex-soldier of St. George, dying at her feet after sacrificing his freedom and his life to expose the deepest of betrayals, Ember knows only that nothing she was taught by the dragon organization Talon is true. About humans, about rogue dragons, about herself and what she’s capable of doing and feeling.</p><p>In the face of great loss, Ember vows to stand with rogue dragon Riley against St. George and her own twin brother, Dante—the heir apparent to all of Talon, and the boy who will soon unleash the greatest threat and terror dragonkind has ever known. Talon is poised to take over the world, and the abominations they have created will soon take to the skies, darkening the world with the promise of blood and death to those who will not yield.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100090866-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100090866-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100090866-04-139668"
					}
				}
			},
			{
				"titleId": "100091096-04-46193",
				"isbn13": "9780739330906",
				"isbn10": "",
				"format": "MP3",
				"name": "Gathering Blue",
				"contributors": [
					{
						"contributorId": "181340",
						"name": "Lois Lowry",
						"firstName": "Lois",
						"middleName": "",
						"lastName": "Lowry",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "863767",
						"name": "Katherine Borowitz",
						"firstName": "Katherine",
						"middleName": "",
						"lastName": "Borowitz,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2008-07-01",
					"imprint": "Penguin Random House"
				},
				"series": {
					"name": "Giver Quartet"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"Lois Lowry’s Gathering Blue continues the quartet beginning with the quintessential dystopian novel, The Giver, followed by Messenger and Son.Kira, an orphan with a twisted leg, lives in a world where the weak are cast aside. She fears for her future until she is spared by the all-powerful Council of Guardians. Kira is a gifted weaver and is given a task that no other community member can do. While her talent keeps her alive and brings certain privileges, Kira soon realizes she is surrounded by many mysteries and secrets. No one must know of her plans to uncover the truth about her world and see what places exist beyond."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100091096-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100091096-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100091096-04-46193"
					}
				}
			},
			{
				"titleId": "100091486-04-0686",
				"isbn13": "9789629545918",
				"isbn10": "",
				"format": "MP3",
				"name": "A Portrait of the Artist as a Young Man",
				"contributors": [
					{
						"contributorId": "130333",
						"name": "James Joyce",
						"firstName": "James",
						"middleName": "",
						"lastName": "Joyce",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "237519",
						"name": "Jim Norton",
						"firstName": "Jim",
						"middleName": "",
						"lastName": "Norton",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2005-08-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"This fictionalised portrait of Joyce’s youth is one of the most vivid accounts of the growth from childhood to adulthood. Dublin at the turn of the century provides the backdrop as Stephen Dedalus moves from town and society, towards the irrevocable decision to leave. It was the decision made by Joyce himself which resulted in the mature novels Ulysses and Finnegans Wake. Read unabridged by the incomparable Joyce expert, Jim Norton."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100091486-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100091486-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100091486-04-0686"
					}
				}
			},
			{
				"titleId": "100092152-04-26286",
				"isbn13": "9789629548537",
				"isbn10": "",
				"format": "MP3",
				"name": "Tibet – In a Nutshell",
				"contributors": [
					{
						"contributorId": "968255",
						"name": "Jonathan Gregson",
						"firstName": "Jonathan",
						"middleName": "",
						"lastName": "Gregson,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "853270",
						"name": "David Rintoul",
						"firstName": "David",
						"middleName": "",
						"lastName": "Rintoul,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2009-06-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"‘In a Nutshell’, the new 1-CD audiobook series from Naxos AudioBooks, continues with a fascinating history of Tibet. Part of China for many years, yet with a clearly distinctive culture (with the central devotion of its people being to Buddhism and the Dalai Lama), Tibet has a unique character in the panoply of world nations. Here we have an independent view of its history and the customs and beliefs of its people – and a commentary on the current situation."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100092152-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100092152-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100092152-04-26286"
					}
				}
			},
			{
				"titleId": "100092305-04-19987",
				"isbn13": "9780545448550",
				"isbn10": "",
				"format": "MP3",
				"name": "The Scorpio Races",
				"contributors": [
					{
						"contributorId": "228569",
						"name": "Maggie Stiefvater",
						"firstName": "Maggie",
						"middleName": "",
						"lastName": "Stiefvater",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "211498",
						"name": "Steve West",
						"firstName": "Steve",
						"middleName": "",
						"lastName": "West",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "820758",
						"name": "Fiona Hardingham",
						"firstName": "Fiona",
						"middleName": "",
						"lastName": "Hardingham,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2011-10-18",
					"imprint": "Scholastic"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"Some race to win. Others race to survive.   It happens at the start of every November: the Scorpio Races. Riders attempt to keep hold of their water horses long enough to make it to the finish line.     Some riders live.   Others die.   At age nineteen, Sean Kendrick is the returning champion. He is a young man of few words, and if he has any fears, he keeps them buried deep, where no one else can see them.     Puck Connolly is different. She never meant to ride in the Scorpio Races. But fate hasn't given her much of a choice. So she enters the competition - the first girl ever to do so. She is in no way prepared for what is going to happen.   As she did in her bestselling Shiver trilogy, author Maggie Stiefvater takes us to the breaking point, where both love and life meet their greatest obstacles, and only the strong of heart can survive. The Scorpio Races is an unforgettable reading experience."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100092305-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100092305-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100092305-04-19987"
					}
				}
			},
			{
				"titleId": "100092306-04-19984",
				"isbn13": "9780545437042",
				"isbn10": "",
				"format": "MP3",
				"name": "Icefall",
				"contributors": [
					{
						"contributorId": "540675",
						"name": "Matthew J. Kirby",
						"firstName": "Matthew J.",
						"middleName": "",
						"lastName": "Kirby",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "854775",
						"name": "Jenna Lamia",
						"firstName": "Jenna",
						"middleName": "",
						"lastName": "Lamia,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2011-10-01",
					"imprint": "Scholastic"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"Critically acclaimed author Matthew J. Kirby deftly weaves a stunning coming-of-age tale with chilling cleverness and subtle suspense that will leave readers racing breathlessly to the end.Trapped in a hidden fortress tucked between towering mountains and a frozen sea, Solveig--along with her brother the crown prince, their older sister, and an army of restless warriors--anxiously awaits news of her father's victory at battle. But as winter stretches on, and the unending ice refuses to break, terrible acts of treachery soon make it clear that a traitor lurks in their midst. Solveig must also embark on a journey to find her own path. Yet, a malevolent air begins to seep through the fortress walls, as a smothering claustrophobia slowly turns these prisoners of winter against one another.Those charged with protecting the king's children are all suspect, and the siblings must choose their allies wisely. But who can be trusted so far from their father's watchful eye? Can Solveig survive the long winter months and expose the traitor before he manages to destroy a kingdom?"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100092306-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100092306-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100092306-04-19984"
					}
				}
			},
			{
				"titleId": "100092401-04-26369",
				"isbn13": "9789629546816",
				"isbn10": "",
				"format": "MP3",
				"name": "Waiting for Godot",
				"contributors": [
					{
						"contributorId": "151727",
						"name": "Samuel Beckett",
						"firstName": "Samuel",
						"middleName": "",
						"lastName": "Beckett",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "147962",
						"name": "David Burke",
						"firstName": "David",
						"middleName": "",
						"lastName": "Burke",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "368180",
						"name": "Sean Barrett",
						"firstName": "Sean",
						"middleName": "",
						"lastName": "Barrett",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "856598",
						"name": "Nigel Anthony",
						"firstName": "Nigel",
						"middleName": "",
						"lastName": "Anthony,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "953629",
						"name": "Terence Rigby",
						"firstName": "Terence",
						"middleName": "",
						"lastName": "Rigby,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2006-02-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Samuel Beckett, one of the great avant-garde Irish dramatists and writers of the second half of the twentieth century, was born on 13 April 1906. He died in 1989. He won the Nobel Prize for Literature in 1969. His centenary will be celebrated throughout 2006 with performances of his major plays, but the most popular of them all will be, without doubt, the play with which he first made his name, Waiting for Godot. It opened the gates to the theatre of the absurd as four men appear on the stage, apparently with purpose but (perhaps) waiting for someone called Godot. It is stark, funny, bemusing and still deeply affecting half a century since its first production. In this new recording for audiobook, John Tydeman, for many years head of BBC Radio Drama, takes a fresh look at one of the milestones in Western drama. It follows the highly acclaimed recordings of Beckett’s Trilogy, Molloy, Malone Dies and The Unnamable published by Naxos AudioBooks."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100092401-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100092401-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100092401-04-26369"
					}
				}
			},
			{
				"titleId": "100094265-04-26492",
				"isbn13": "9789629548698",
				"isbn10": "",
				"format": "MP3",
				"name": "Far From the Madding Crowd",
				"contributors": [
					{
						"contributorId": "130314",
						"name": "Thomas Hardy",
						"firstName": "Thomas",
						"middleName": "",
						"lastName": "Hardy",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "860363",
						"name": "Neville Jason",
						"firstName": "Neville",
						"middleName": "",
						"lastName": "Jason,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2009-09-01",
					"imprint": "Naxos Audiobooks"
				},
				"series": {
					"name": "Complete Classics"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"Far from the Madding Crowd was Hardy’s fourth novel, gaining significant popularity and critical attention. It tells of Gabriel, an up-and-coming shepherd, who falls in love with a proud and vain young beauty Bathsheba, who refuses his offer of marriage as she values her independence too much. The novel can be described as an early piece of feminist literature and is regularly studied in schools. This is part of the ‘Young Adult Classics’ series launched by Naxos AudioBooks in 2009."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100094265-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100094265-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100094265-04-26492"
					}
				}
			},
			{
				"titleId": "100094484-04-47048",
				"isbn13": "9780739360811",
				"isbn10": "",
				"format": "MP3",
				"name": "Lirael",
				"contributors": [
					{
						"contributorId": "128169",
						"name": "Garth Nix",
						"firstName": "Garth",
						"middleName": "",
						"lastName": "Nix",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "868822",
						"name": "Tim Curry",
						"firstName": "Tim",
						"middleName": "",
						"lastName": "Curry,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2002-05-14",
					"imprint": "Penguin Random House"
				},
				"series": {
					"name": "Abhorsen | The Old Kingdom"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"Lirael has never felt like a true daughter of the Clayr. Abandoned by her mother, ignorant of her father's identity, Lirael resembles no one else in her large extended family living in the Clayr's glacier.  She doesn't even have the Sight--the ability to See into the present and possibly futures--that is the very birthright of the Clayr.Nonetheless, it is Lirael in whose hands the fate of the Old Kingdom lies.  She must undertake a desperate mission under the growing shadow of an ancient evil--one that opposes the Royal Family, blocks the Sight of the Clayr, and threatens to break the very boundary between Life and Death itself.  With only her faithful companion, the Disreputable Dog to help her, Lirael must find the courage to seek her own hidden destiny."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100094484-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100094484-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100094484-04-47048"
					}
				}
			},
			{
				"titleId": "100094676-04-143532",
				"isbn13": "9781488202568",
				"isbn10": "",
				"format": "MP3",
				"name": "Lifeblood: Supernatural War Threatens Everlife Realms",
				"contributors": [
					{
						"contributorId": "133019",
						"name": "Gena Showalter",
						"firstName": "Gena",
						"middleName": "",
						"lastName": "Showalter",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "852779",
						"name": "Barrie Kreinik",
						"firstName": "Barrie",
						"middleName": "",
						"lastName": "Kreinik,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "853063",
						"name": "Emma Galvin",
						"firstName": "Emma",
						"middleName": "",
						"lastName": "Galvin,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "862232",
						"name": "Zachary Webber",
						"firstName": "Zachary",
						"middleName": "",
						"lastName": "Webber,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2017-02-28",
					"imprint": "HarperCollins"
				},
				"series": {
					"name": "Everlife"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"\"Utterly unique and absolutely riveting—I couldn’t put it down! What a marvelously cool world.\" —Sarah J. Maas, <em>New York Times</em> bestselling author, on <em>Firstlife</em><strong>Don’t miss book two in the heart-stopping <em>New York Times</em> bestselling Everlife series by Gena Showalter.</strong><strong>\"My Firstlife is over, but my Everlife is only now beginning.\" </strong>With her last living breath, Tenley \"Ten\" Lockwood made her choice and picked her realm in the Everlife. Now, as the war between Troika and Myriad rages, she must face the consequences. Because Ten possesses a rare supernatural ability to absorb and share light, the Powers That Be have the highest expectations for her future—and the enemy wants her neutralized. Fighting to save her Secondlife, she must learn about her realm from the ground up while launching her first mission: convincing a select group of humans to join her side before they die. No pressure, right?  But Ten's competition is Killian, the boy she can't forget—the one who gave up everything for her happiness. He has only one shot at redemption: beating Ten at a game she's never even played. As their throw-downs heat up, so do their undeniable feelings, and soon, Ten will have to make another choice. Love…or victory.<strong>Books in the Everlife series:</strong><em>Firstlife</em><em>Lifeblood</em><em>Everlife</em>  <p>In the heart-stopping Everlife series by Gena Showalter, Lifeblood is the second book that continues the story of Tenley Lockwood as she navigates the war between Troika and Myriad and fights to save her Secondlife.</p><p>HarperCollins 2024</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100094676-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100094676-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100094676-04-143532"
					}
				}
			},
			{
				"titleId": "100095116-04-45100",
				"isbn13": "9780739342138",
				"isbn10": "",
				"format": "MP3",
				"name": "Beloved: Pulitzer Prize Winner",
				"contributors": [
					{
						"contributorId": "167544",
						"name": "Toni Morrison",
						"firstName": "Toni",
						"middleName": "",
						"lastName": "Morrison",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "167544",
						"name": "Toni Morrison",
						"firstName": "Toni",
						"middleName": "",
						"lastName": "Morrison",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2006-05-16",
					"imprint": "Penguin Random House"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<b>PULITZER PRIZE WINNER •</b> <b>NEW YORK TIMES</b><b> BESTSELLER • A spellbinding novel that transforms history into a story as powerful as Exodus and as intimate as a lullaby. With a new afterword by the author. This \"brutally powerful, mesmerizing story\" (People) is an unflinchingly look into the abyss of slavery, from the acclaimed Nobel Prize winner.</b>Sethe was born a slave and escaped to Ohio, but eighteen years later she is still not free. Sethe has too many memories of Sweet Home, the beautiful farm where   so many hideous things happened. And Sethe’s new home is haunted by the ghost of   her baby, who died nameless and whose tombstone is engraved with a single word: Beloved. \"A masterwork.... Wonderful.... I can’t imagine American literature without it.\" —John Leonard, Los Angeles Times"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100095116-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100095116-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100095116-04-45100"
					}
				}
			},
			{
				"titleId": "37674168-01-855254",
				"isbn13": "9781788005937",
				"isbn10": "1788005937",
				"format": "EPUB",
				"name": "Orion Lost",
				"contributors": [
					{
						"contributorId": "458966",
						"name": "Alastair Chisholm",
						"firstName": "Alastair",
						"middleName": "",
						"lastName": "Chisholm",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-01-09",
					"imprint": "Nosy Crow"
				},
				"classifications": {
					"bic2": [
						"YFG"
					],
					"interestAge": [
						9,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"<p>After a catastrophic Unknown Event leaves the colony ship Orion stranded deep in space, it's up to thirteen-year-old Beth and her friends to navigate through treacherous and uncharted territory and reach safety.</p><p>But a heavily damaged ship, a mysterious alien species, space pirates, and an Artificial Intelligence which Beth suspects may be lying to her mean that getting home has never been so difficult.</p><p>Hugely gripping, with incredible twists and a fast-paced, action-packed story, this is an unputdownable science fiction adventure - perfect for fans of Mortal Engines and Star Wars.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/37674168-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/37674168-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/37674168-01-855254"
					}
				}
			},
			{
				"titleId": "38044592-01-858753",
				"isbn13": "9781788007252",
				"isbn10": "1788007255",
				"format": "EPUB",
				"name": "The Bigwoof Conspiracy",
				"contributors": [
					{
						"contributorId": "460210",
						"name": "Dashe Roberts",
						"firstName": "Dashe",
						"middleName": "",
						"lastName": "Roberts",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-02-06",
					"imprint": "Nosy Crow"
				},
				"series": {
					"name": "Sticky Pines"
				},
				"classifications": {
					"bic2": [
						"YFCF",
						"YFG"
					],
					"interestAge": [
						9,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"<p>When twelve-year-old, UFO-obsessed, Lucy Sladan sneaks out in the middle of a thunderstorm to investigate the unexplained disappearances in her hometown of Sticky Pines, she finds more than she bargained for: a huge hairy creature, a thirteen-year-old stranger named Milo Fisher and a deep-rooted secret.Together, Lucy and Milo become entwined in a mystery that threatens to engulf the whole town of Sticky Pines and its weird and wonderful residents.Sticky Pines: The Bigwoof Conspiracy is the debut novel for children by the talented Dashe Roberts.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38044592-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38044592-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/38044592-01-858753"
					}
				}
			},
			{
				"titleId": "38044593-01-858754",
				"isbn13": "9781788001137",
				"isbn10": "1788001133",
				"format": "EPUB",
				"name": "The Monster in the Lake",
				"contributors": [
					{
						"contributorId": "213431",
						"name": "Louie Stowell",
						"firstName": "Louie",
						"middleName": "",
						"lastName": "Stowell",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "407498",
						"name": "Davide Ortu",
						"firstName": "Davide",
						"middleName": "",
						"lastName": "Ortu",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-01-09",
					"imprint": "Nosy Crow"
				},
				"classifications": {
					"bic2": [
						"YFH"
					],
					"interestAge": [
						9,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Kit is a wizard.</p><p>The youngest wizard in the world, in fact. But her magic keeps going wrong, and all kinds of weird stuff has started happening - exploding fireballs, animals talking when they shouldn't be, and a very strange new arrival in a nearby park. So Kit and her two best friends - along with their local librarian - set off to investigate, and to save the world... again.</p><p>Brilliantly illustrated throughout by Davide Ortu, The Monster is the Lake is the funny, exciting, action-packed sequel to The Dragon in the Library.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38044593-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38044593-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/38044593-01-858754"
					}
				}
			},
			{
				"titleId": "38537840-01-866211",
				"isbn13": "9781788451178",
				"isbn10": "1788451171",
				"format": "EPUB",
				"name": "Big Change for Stuart",
				"contributors": [
					{
						"contributorId": "166887",
						"name": "Lissa Evans",
						"firstName": "Lissa",
						"middleName": "",
						"lastName": "Evans",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-02-01",
					"country": "GB",
					"imprint": "David Fickling Books Ltd"
				},
				"series": {
					"name": "Stuart"
				},
				"classifications": {
					"bic2": [
						"YFB"
					],
					"interestAge": [
						9,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Stuart Horten (aged ten, but looks younger) is now the owner of a Magician's Workshop - a treasure trove of illusions and the gateway to seven magical adventures. Except that without his great-uncle's last will and testament, Stuart can't actually prove the workshop is his.Can he solve the puzzles and find the will before it's too late? Or will the looming danger and increasing risks ruin his friendships for good?</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38537840-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38537840-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/38537840-01-866211"
					}
				}
			},
			{
				"titleId": "38620359-01-870418",
				"isbn13": "9781788007825",
				"isbn10": "1788007824",
				"format": "EPUB",
				"name": "Magnificent Mabel and the Rabbit Riot",
				"contributors": [
					{
						"contributorId": "463435",
						"name": "Ruth Quayle",
						"firstName": "Ruth",
						"middleName": "",
						"lastName": "Quayle",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "463436",
						"name": "Julia Christians",
						"firstName": "Julia",
						"middleName": "",
						"lastName": "Christians",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-02-06",
					"imprint": "Nosy Crow"
				},
				"series": {
					"name": "Magnificent Mabel"
				},
				"classifications": {
					"bic2": [
						"YFQ"
					],
					"interestAge": [
						6,
						8
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Sometimes life isn't even fair for Mabel Chase. Like for instance she doesn't have one single pet in her whole life. And people in her class are always losing their teeth. And she doesn't have a sprinkler in her own garden.</p><p>Introducing a truly hilarious and one-of-a-kind new character: Magnificent Mabel!</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38620359-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38620359-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/38620359-01-870418"
					}
				}
			},
			{
				"titleId": "38630834-01-872514",
				"isbn13": "9781788007917",
				"isbn10": "1788007913",
				"format": "EPUB",
				"name": "A Forever Home for Tilly",
				"contributors": [
					{
						"contributorId": "170438",
						"name": "Linda Chapman",
						"firstName": "Linda",
						"middleName": "",
						"lastName": "Chapman",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "149573",
						"name": "Sophy Williams",
						"firstName": "Sophy",
						"middleName": "",
						"lastName": "Williams",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-03-05",
					"imprint": "Nosy Crow"
				},
				"series": {
					"name": "Forever Homes"
				},
				"classifications": {
					"bic2": [
						"YFP",
						"YFN"
					],
					"interestAge": [
						5,
						7
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Nine-year-old twins Grace and Jack run the Forever Homes rehoming service. Whether it's a cheeky puppy or a shy kitten, they're determined to pair every animal with their perfect owner, and have lots of adventures along the way!</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38630834-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38630834-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/38630834-01-872514"
					}
				}
			},
			{
				"titleId": "38630840-01-872520",
				"isbn13": "9781788007795",
				"isbn10": "1788007794",
				"format": "EPUB",
				"name": "Talking to the Moon",
				"contributors": [
					{
						"contributorId": "665275",
						"name": "S.E. Durrant",
						"firstName": "S.E.",
						"middleName": "",
						"lastName": "Durrant",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-03-05",
					"imprint": "Nosy Crow"
				},
				"classifications": {
					"bic2": [
						"YFN"
					],
					"interestAge": [
						9,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Iris's grandmother, Mimi, has started to put jam on her scrambled eggs and tie yellow ribbons around her fingers to remind her of stuff. Her house, always full of things, is becoming harder and harder to navigate, and when Iris goes to stay, she feels as if a whole life is becoming muddled up. As her grandmother's memory fades, a mystery is uncovered. Who is Coral, and what happened to her?</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38630840-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38630840-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/38630840-01-872520"
					}
				}
			},
			{
				"titleId": "38630872-01-872551",
				"isbn13": "9781788007092",
				"isbn10": "1788007093",
				"format": "EPUB",
				"name": "DustRoad",
				"contributors": [
					{
						"contributorId": "288811",
						"name": "Tom Huddleston",
						"firstName": "Tom",
						"middleName": "",
						"lastName": "Huddleston",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-03-05",
					"imprint": "Nosy Crow"
				},
				"series": {
					"name": "Floodworld"
				},
				"classifications": {
					"bic2": [
						"YFC",
						"YFG"
					],
					"interestAge": [
						9,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"<p>The sequel to FloodWorld, this equally cinematic book tells the story of Kara and Joe's adventures in the US, as they travel with a band of ideological outlaws, hell-bent on destroying the Mariners and stealing their world.Can the kids come up with a plan to stop the seemingly inevitable destruction?</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38630872-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38630872-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/38630872-01-872551"
					}
				}
			},
			{
				"titleId": "38743228-01-877354",
				"isbn13": "9781788952606",
				"isbn10": "178895260X",
				"format": "EPUB",
				"name": "The Coral Kingdom",
				"contributors": [
					{
						"contributorId": "170438",
						"name": "Linda Chapman",
						"firstName": "Linda",
						"middleName": "",
						"lastName": "Chapman",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "368350",
						"name": "Mirelle Ortega",
						"firstName": "Mirelle",
						"middleName": "",
						"lastName": "Ortega",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-02-28",
					"imprint": "Stripes Publishing"
				},
				"series": {
					"name": "Mermaids Rock"
				},
				"classifications": {
					"bic2": [
						"YFH",
						"YFB"
					],
					"interestAge": [
						7,
						9
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Welcome to Mermaids Rock! The entrance to the mermaid realm in the deep, blue ocean…</p>Marina is new in Mermaids Rock, having travelled the world with her scientist dad, and she can’t wait to make friends! She meets a gang of mermaids who love animals and the environment as much as she does and the group soon face their first challenge… The beautiful coral caves nearby have been damaged. Who could have caused the destruction? And are they dangerous?<p>From the author of STAR FRIENDS comes the first in an exciting new series about the wonders of the ocean, perfect for fans of RAINBOW MAGIC, Barbie Dolphin Magic and Holly Webb.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38743228-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38743228-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/38743228-01-877354"
					}
				}
			},
			{
				"titleId": "38743314-01-877433",
				"isbn13": "9781788492003",
				"isbn10": "1788492005",
				"format": "EPUB",
				"name": "Chasing Ghosts: An Arctic Adventure",
				"contributors": [
					{
						"contributorId": "158436",
						"name": "Nicola Pierce",
						"firstName": "Nicola",
						"middleName": "",
						"lastName": "Pierce",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-03-09",
					"country": "IE",
					"imprint": "The O'Brien Press"
				},
				"classifications": {
					"bic2": [
						"YFT",
						"YNH"
					],
					"interestAge": [
						9,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"<p>An enthralling novel of two intertwining stories based on real events in 19th century Ireland and the Canadian Arctic.</p>\n\n<p>Two ships Arctic-bound, <em>HMS Erebus</em> and <em>Terror</em>, leave London in 1845, captained by the aging Sir John Franklin. How long they’ll be gone depends on the ice. Meanwhile, second-in-command, Francis Crozier, worries about their inexperienced crew.  </p>\n\n<p>In Derry, little Weesy Coppin dies of a fever but, as far as her sister Ann and brother William are concerned, her spirit returns to haunt them. While an anxious world waits for news of the Artic explorers, the Coppin family try to understand what is going in their home. But, then, one night, all is revealed when the truth literally steps out of the shadows.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38743314-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/38743314-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/38743314-01-877433"
					}
				}
			},
			{
				"titleId": "39226152-01-915193",
				"isbn13": "9781788952736",
				"isbn10": "1788952731",
				"format": "EPUB",
				"name": "The Floating Forest",
				"contributors": [
					{
						"contributorId": "170438",
						"name": "Linda Chapman",
						"firstName": "Linda",
						"middleName": "",
						"lastName": "Chapman",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "368350",
						"name": "Mirelle Ortega",
						"firstName": "Mirelle",
						"middleName": "",
						"lastName": "Ortega",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2020-06-25",
					"imprint": "Stripes Publishing"
				},
				"series": {
					"name": "Mermaids Rock"
				},
				"classifications": {
					"bic2": [
						"YFH"
					],
					"interestAge": [
						7,
						9
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Welcome to Mermaids Rock! The entrance to the mermaid realm in the deep, blue ocean…</p><p>Coralie is overjoyed when she visits a beautiful kelp forest, where she meets an adorable sea lion and finds a mystery treasure map! After telling her friends about it, they're excited to search for the treasure, but when they arrive they find the forest has been destroyed. With no protection from the plants, the animals are in danger, and the friends must do everything they can to save the creatures before it’s too late…</p><p>From the author of STAR FRIENDS comes the second book in a delightful new series about the wonders of the ocean, perfect for fans of RAINBOW MAGIC, Barbie Dolphin Magic and Holly Webb.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/39226152-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/39226152-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39226152-01-915193"
					}
				}
			},
			{
				"titleId": "39683995-01-927897",
				"isbn13": "9781913102388",
				"isbn10": "1913102386",
				"format": "EPUB",
				"name": "The Midnight Swan",
				"contributors": [
					{
						"contributorId": "167547",
						"name": "Catherine Fisher",
						"firstName": "Catherine",
						"middleName": "",
						"lastName": "Fisher",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-10-01",
					"imprint": "Firefly Press Limited"
				},
				"series": {
					"name": "The Clockwork Crow"
				},
				"classifications": {
					"bic2": [
						"YFT",
						"YFH",
						"YFD"
					],
					"interestAge": [
						8,
						12
					]
				},
				"language": "en",
				"descriptions": [
					"<p>With an invisible girl, a parliament of owls and a pen that writes by itself, the journey to the Garden of the Midnight Swan might be Seren's most dangerous adventure yet. In this third book of the award-winning The Clockwork Crow series, Seren and Tomos must try to help the Crow find the way back to his human form. But why is Captain Jones enquiring about Seren's past? How have the sinister Fair Family gate-crashed the Midsummer Ball, and what is the one desire of the mysterious Midnight Swan?</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/39683995-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/39683995-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39683995-01-927897"
					}
				}
			},
			{
				"titleId": "39808934-01-934357",
				"isbn13": "9781788006316",
				"isbn10": "1788006313",
				"format": "EPUB",
				"name": "Another Twist in the Tale",
				"contributors": [
					{
						"contributorId": "404847",
						"name": "Catherine Bruton",
						"firstName": "Catherine",
						"middleName": "",
						"lastName": "Bruton",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2020-11-05",
					"imprint": "Nosy Crow"
				},
				"classifications": {
					"bic2": [
						"YFA",
						"YFC",
						"YFT"
					],
					"interestAge": [
						9,
						12
					]
				},
				"language": "en",
				"descriptions": [
					"<p>You have heard, no doubt, the tale of Master Oliver Twist - that rags-to-riches boy; the parish orphan who became heir to the Brownlow fortune. But what few know is that there was a second Twist - a girl, brought into this world moments ahead of her brother.</p><p>This is the story of Twill Twist - and her journey through the gambling dens and workhouses of London, as she attempts to make a life for herself, rescue her friends, and uncover the mystery of her past - while meeting some familiar faces along the way...</p><p>Re-discover the Artful Dodger, Fagin, and Oliver Twist himself, along with a host of fantastic new heroes and villains, in this brilliantly-imagined, rip-roaring sequel to Dickens' much-loved classic.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/39808934-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/39808934-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/39808934-01-934357"
					}
				}
			},
			{
				"titleId": "40361535-01-956894",
				"isbn13": "9781788006330",
				"isbn10": "178800633X",
				"format": "EPUB",
				"name": "The Wizard in the Woods",
				"contributors": [
					{
						"contributorId": "213431",
						"name": "Louie Stowell",
						"firstName": "Louie",
						"middleName": "",
						"lastName": "Stowell",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "407498",
						"name": "Davide Ortu",
						"firstName": "Davide",
						"middleName": "",
						"lastName": "Ortu",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2021-01-14",
					"imprint": "Nosy Crow"
				},
				"classifications": {
					"bic2": [
						"YFC",
						"YFH",
						"YFB"
					],
					"interestAge": [
						7,
						9
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Kit, Josh and Alita are heading back to school - and they're excited to discover that they're getting a brand new library, which also means getting their own wizard librarian... and a dragon! But when something VERY BAD happens at the new library, it's up to Kit and her friends to save the world one more time.</p>\n\n<p>The third instalment in the funny, exciting, magical, and action-packed Dragon in the Library series, brilliantly illustrated throughout by Davide Ortu.</p>\n\n<p>Have you read the other books in the series? Look out for:</p>\n\n<p>The Dragon in the Library</p>\n<p>The Monster in the Lake</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/40361535-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/40361535-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40361535-01-956894"
					}
				}
			},
			{
				"titleId": "40394204-01-957481",
				"isbn13": "9781633537378",
				"isbn10": "1633537374",
				"format": "EPUB",
				"name": "Embracing the Awkward: A Guide for Teens to Succeed at School, Life and Relationships",
				"contributors": [
					{
						"contributorId": "497337",
						"name": "JOSHUA RODRIGUEZ",
						"firstName": "JOSHUA",
						"middleName": "",
						"lastName": "RODRIGUEZ",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2018-05-15",
					"imprint": "Mango Media"
				},
				"classifications": {
					"bic2": [
						"YXL",
						"YXS"
					],
					"interestAge": [
						12,
						18
					]
				},
				"language": "en",
				"descriptions": [
					"<b>For teenagers feeling overwhelmed, &ldquo;this is one of the best guides out there today&rdquo; (Sean Covey, bestselling author of The 7 Habits of Highly Effective Teens).</b> &#160; Young adults struggle with lots of issues&mdash;finishing school, finding a career, finding a partner, and most importantly, figuring out who they are. It can be overwhelming, especially when it seems like the people around you have it figured out. You may even have questions that you&rsquo;d never feel comfortable talking about for fear of being judged or even rejected. Don&rsquo;t worry, you don&rsquo;t have to navigate life alone. There&rsquo;s much untapped potential in you that the world has yet to see, and Embracing the Awkward, by popular YouTuber The Josh Speaks, is a guide to becoming your best self. With lots of ideas, specific suggestions, and exercises, this down-to-earth book helps you take small steps toward being somebody great, and reveals how to: &middot; Approach people &middot; Lead into conversations with groups of people &middot; Make strong friendships in school &middot; Approach your crushes and ask them out &middot; Deal with failure and rejection &middot; Maintain family relationships and more"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/25/40394204-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/25/40394204-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40394204-01-957481"
					}
				}
			},
			{
				"titleId": "40669751-01-969815",
				"isbn13": "9781913102340",
				"isbn10": "1913102343",
				"format": "EPUB",
				"name": "Monster Max and the Bobble Hat of Forgetting: and the Bobble Hat of Forgetting",
				"contributors": [
					{
						"contributorId": "206316",
						"name": "Robin Bennett",
						"firstName": "Robin",
						"middleName": "",
						"lastName": "Bennett",
						"attr": "By (author)",
						"type": "author"
					},
					{
						"contributorId": "508330",
						"name": "Tom Tinn-Disbury",
						"firstName": "Tom",
						"middleName": "",
						"lastName": "Tinn-Disbury",
						"attr": "Illustrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2021-02-18",
					"imprint": "Firefly Press Limited"
				},
				"classifications": {
					"bic2": [
						"YFC",
						"YFH",
						"YFQ"
					],
					"interestAge": [
						7,
						9
					]
				},
				"language": "en",
				"descriptions": [
					"<p>This is Max. Everything normal here. Nothing weird about Max ... until he burps.When Max burps he becomes a huge monster, with teeth like swords, who can jump over buildings, roar and eat whole dustbins. It’s great being a monster and saving people, his aim ‘to protect and do good stuff’, unless he sneezes when he didn’t mean to, changes back, and finds himself far from home in just his pants.But something starts causing a lot of damage in their quiet suburb, and it isn’t Max. His nemesis,  Peregrine, a boy his age, is relentlessly on the trail of this monster, and has invented his POOP (Portable Operating Omni Prison) machine to trap it. Max has to catch the real culprit, before Peregrine can catch him...An irresistible mix of slapstick comedy and action adventure, packed full of chases, inventions, battles and bum jokes. First in a series for 7-9s.‘Bonkers from start to finish. And I mean that in a GOOD way’ - Philip Ardagh</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/40669751-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/40669751-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40669751-01-969815"
					}
				}
			},
			{
				"titleId": "40739862-01-972709",
				"isbn13": "9780717192519",
				"isbn10": "0717192512",
				"format": "EPUB",
				"name": "You've Got This: Learn to love yourself and truly shine in your teens and beyond",
				"contributors": [
					{
						"contributorId": "521414",
						"name": "Tammy Darcy",
						"firstName": "Tammy",
						"middleName": "",
						"lastName": "Darcy",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-03-26",
					"imprint": "Gill Books"
				},
				"classifications": {
					"bic2": [
						"YX",
						"YXL",
						"YXS",
						"YNM",
						"YXAX",
						"YXA"
					],
					"interestAge": [
						12,
						14
					]
				},
				"language": "en",
				"descriptions": [
					"<p>The ultimate guide to embracing your individuality, loving yourself and learning to truly shine &ndash;  in your teens and beyond.</p> <p>It’s a paradox familiar to many parents: girls are achieving like never before, yet they are consumed with doubt and anxiety on the inside. Girls worry about how they look, what people think, whether to play sports, why they are not getting ‘perfect’ grades, and how many likes and followers they have online. This positive and empowering guide is designed to help girls find their place in the world and grab life with both hands.</p><p>Full of practical information on making new friends, staying positive, the online world and ways to take care of yourself, this handbook will boost your child’s happiness, self-esteem, positive thinking, mindfulness and resilience.</p><p>‘A powerful, practical must-read for teenage girls in Ireland.’ <b>Niamh Fitzpatrick, psychologist and author</b></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/40739862-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/40739862-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40739862-01-972709"
					}
				}
			},
			{
				"titleId": "40739954-01-972788",
				"isbn13": "9781788451369",
				"isbn10": "1788451368",
				"format": "EPUB",
				"name": "Shades of Scarlet",
				"contributors": [
					{
						"contributorId": "195426",
						"name": "Anne Fine",
						"firstName": "Anne",
						"middleName": "",
						"lastName": "Fine",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-03-04",
					"country": "GB",
					"imprint": "David Fickling Books Ltd"
				},
				"classifications": {
					"bic2": [
						"YFB"
					],
					"interestAge": [
						13,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<p>When Mum gives her the notebook, Scarlet should be happy. It's beautiful, with its shiny scarlet cover and its blank pages full of promise. But Scarlet is absolutely NOT in the mood for a peace offering.Does Mum really think she can tear their family apart and expect Scarlet to be happy about it?Scarlet decides there's only one thing she can write in the notebook. The truth, about everything . . .</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/40739954-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1192/40739954-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40739954-01-972788"
					}
				}
			},
			{
				"titleId": "40764228-01-974409",
				"isbn13": "9781644501962",
				"isbn10": "1644501961",
				"format": "EPUB",
				"name": "Teen Angst Mix Tape Vol. 1: Poetry, Journals, Diaries & Love Letters",
				"publication": {
					"date": "2021-03-17",
					"imprint": "4 Horsemen Publications, Inc."
				},
				"series": {
					"name": "Teen Angst Collection"
				},
				"classifications": {
					"bic2": [
						"WHX",
						"BJ"
					],
					"interestAge": [
						12,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>High school is the absolute worst… </b>\n\nLooking back, it’s easy to say that it wasn’t that bad—but in the moment, it really was the end of the world. Now, you probably don’t even remember the name of your nemesis or the face of your secret crush, but you recorded it somewhere, didn’t you? \n\nWe all have them collecting dust on a shelf, in a box under the bed, or hidden away in the attic where no one can find them: that journal, diary, or even composition book full of your teen angst. \nWe want them. In the raw. Unedited. All the teen angst you can hit us with. \n\nTake a picture of the journal, the page, all of the angsty doodles, the sappy love letters, and more. We will share them with the world! Let’s giggle as we recall those epic days where everything was the Most Important Thing in the World."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40764228-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40764228-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40764228-01-974409"
					}
				}
			},
			{
				"titleId": "40912939-01-976924",
				"isbn13": "9781617759710",
				"isbn10": "1617759716",
				"format": "EPUB",
				"name": "They Better Call Me Sugar: My Journey from the Hood to the Hardwood",
				"contributors": [
					{
						"contributorId": "515913",
						"name": "Sugar Rodgers",
						"firstName": "Sugar",
						"middleName": "",
						"lastName": "Rodgers",
						"attr": "By (author)",
						"type": "author"
					}
				],
				"publication": {
					"date": "2021-05-04",
					"imprint": "Akashic Books"
				},
				"classifications": {
					"interestAge": [
						11,
						18
					]
				},
				"language": "en",
				"descriptions": [
					"<p><strong>In unflinchingly honest prose, Sugar Rodgers shares her inspiring story of overcoming tremendous odds to become an all-star in the WNBA.</strong></p><p>A Booklist 2022 Top Ten Quick Pick for Reluctant Readers</p><p>&#34;WNBA All-Star Sugar Rodgers doesn&#8217;t hold back in her memoir.&#34;--<b>New York Amsterdam News</b></p><p>&#34;<em>They Better Call Me Sugar</em> is fabulous--so infinitely readable and engaging. Sugar Rodgers is such a clear-eyed and thoughtful writer and a huge inspiration. There are so many young people I can't wait to give this book to.&#34;--<strong>Jacqueline Woodson</strong>, author of <em>Brown Girl Dreaming</em>, former National Ambassador for Young People's Literature</p><p>&#34;If it is one thing many of us have been doing a lot lately is spending more time curling up with favorite books of ours. Our book games have been strong lately and that is always a positive. Here is a very athletic way to heighten that need for read--add a dash of Sugar to your bookshelves.&#34;--<b>Beyond the W</b></p><p>&#34;Rodgers wrote the book for her younger self, but the book is perfect for young readers, starting in middle school, and also young athletes. Rodgers' goal is to use her toughest moments to inspire those who read it.&#34;--<b>The Black Sportswoman</b></p><p>&#34;In her inspiring and candid debut memoir, WNBA star Sugar Rodgers opens up about her challenging youth and her path to college, a successful career and a fulfilling, empowered life.&#34;--<b>Ms. Magazine</b></p><p>&#34;Rodgers' memoir...personally details a young girl growing up in dire poverty in Suffolk, Va., who lost her mother when she was a teenager, saw both of her siblings go in and out of prison, and witnessed shootings in her neighborhood. Yet she kept on striving.&#34;--<b>Minnesota Spokesman-Recorder</b></p><p>&#34;Describing her upbringing under less-than-ideal conditions in Suffolk, [Sugar's book] has gotten some quality reviews.&#34;--<b>Virginian-Pilot</b></p><p>&#34;An inherently compelling memoir...A simply fascinating and ultimately inspiring story.&#34;--<b>Midwest Book Review</b></p><p>Growing up in dire poverty in Suffolk, Virginia, Sugar (born Ta'Shauna) Rodgers never imagined that she would become an all-star player in the WNBA (Women's National Basketball Association). Both of her siblings were in and out of prison throughout much of her childhood and shootings in her neighborhood were commonplace. For Sugar this was just a fact of life.</p> <p>While academics wasn't a high priority for Sugar and many of her friends, athletics always played a prominent role. She mastered her three-point shot on a net her brother put up just outside their home, eventually becoming so good that she could hustle local drug dealers out of money in one-on-one contests.</p> <p>With the love and support of her family and friends, Sugar's performance on her high school basketball team led to her recruitment by the Georgetown Hoyas, and her eventual draft into the WNBA in 2013 by the Minnesota Lynx (who won the WNBA Finals in Sugar's first year). The first of her family to attend college, Sugar speaks of her struggles both academically and as an athlete with raw honesty.</p> <p>Sugar's road to a successful career as a professional basketball player is fraught with sadness and death--including her mother's death when she's fourteen, which leaves Sugar essentially homeless. Throughout it all, Sugar clings to basketball as a way to keep herself focused and sane.</p> <p>And now Sugar shares her story as a message of hope and inspiration for young girls and boys everywhere, but especially those growing up in economically challenging conditions. Never sugarcoating her life experiences, she delivers a powerful message of discipline, perseverance, and always believing in oneself.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40912939-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1193/40912939-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/40912939-01-976924"
					}
				}
			},
			{
				"titleId": "100084000-04-131424",
				"isbn13": "9781590308639",
				"format": "MP3",
				"name": "Siddhartha",
				"contributors": [
					{
						"contributorId": "5949",
						"name": "Herman Hesse",
						"firstName": "Herman",
						"middleName": "",
						"lastName": "Hesse",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "5949",
						"name": "Herman Hesse",
						"firstName": "Herman",
						"middleName": "",
						"lastName": "Hesse",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-03-25",
					"imprint": "Better Listen"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"This classic of 20th-century literature, translated by Sherab Chodzin Kohn, chronicles the spiritual evolution of a man living in India at the time of the Buddha – a spiritual journey that has inspired generations of readers. Here is a fresh translation from Sherab Chodzin Kohn, a gifted translator and longtime student of Buddhism and Eastern philosophy. Kohn’s flowing, poetic translation conveys the philosophical and spiritual nuances of Hermann Hesse’s text, paying special attention to the qualities of meditative experience. On the subject of sacred literature, Hesse once said: \"The very oldest works age the least.\" The same may one day be said of his Nobel Prize-winning masterpiece, as astonishing today as it was when first published nearly 80 years ago."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100084000-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100084000-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100084000-04-131424"
					}
				}
			},
			{
				"titleId": "100086848-04-76662",
				"isbn13": "9780792751571",
				"format": "MP3",
				"name": "As You Like It",
				"contributors": [
					{
						"contributorId": "20502",
						"name": "Tom Wheelwright",
						"firstName": "Tom",
						"middleName": "",
						"lastName": "Wheelwright",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "70",
						"name": "William Shakespeare",
						"firstName": "William",
						"middleName": "",
						"lastName": "Shakespeare",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "4253",
						"name": "Robert T. Kiyosaki",
						"firstName": "Robert",
						"middleName": "T.",
						"lastName": "Kiyosaki",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "67950",
						"name": "Pierre Arthur Laure",
						"firstName": "Pierre",
						"middleName": "Arthur",
						"lastName": "Laure",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "80716",
						"name": "E.A. Copen",
						"firstName": "E.A.",
						"middleName": "",
						"lastName": "Copen",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "1633",
						"name": "Full Cast",
						"firstName": "Full",
						"middleName": "",
						"lastName": "Cast",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "22541",
						"name": "Niamh Cusack",
						"firstName": "Niamh",
						"middleName": "",
						"lastName": "Cusack",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "27604",
						"name": "Gerard Murphy",
						"firstName": "Gerard",
						"middleName": "",
						"lastName": "Murphy",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "29933",
						"name": "Stephen Mangan",
						"firstName": "Stephen",
						"middleName": "",
						"lastName": "Mangan",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "51029",
						"name": "Victoria Hamilton",
						"firstName": "Victoria",
						"middleName": "",
						"lastName": "Hamilton",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2005-10-15",
					"imprint": "Blackstone Audio"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>This pastoral is one of Shakespeare’s best-loved comedies, due to its delightful heroine, the wise, witty, and virtuous Rosalind, who complicates her love life by disguising herself as a young man.</p><p>ACT IScene 1. Orlando, the youngest son of Sir Rowland de Boys, has been kept \"rustically at home\" by his older brother, Oliver; he has been denied his inheritance and any formal education. When Orlando demands his birthright, the brothers come to blows. Charles the Wrestler describes how the old duke has been banished by his younger brother Frederick and has gone to live in the Forest of Arden. His daughter Rosalind has stayed at court with Celia, Frederick’s daughter. Hearing that Charles and Orlando are to wrestle the following day, Oliver lies to Charles, claiming that Orlando intends, if necessary, to resort to foul play in order to win the fight.</p><p>Scene 2. The courtier Le Beau urges Rosalind and Celia to watch the wrestling. They try to persuade the youthful Orlando not to fight, but he is determined to go ahead and succeeds in beating Charles. Frederick congratulates the victor but is displeased to learn of his parentage. Le Beau suggest that, the duke being so unpredictable, Orlando would be wise to leave the court. Orlando, who has fallen for the \"heavenly Rosalind,\" follows his advice.</p><p>Scene 3. Rosalind is telling Celia of her love for Orlando when Duke Frederick enters and banishes her from the court. Celia insists on accompanying her cousin and they decide to travel in disguise: Rosalind as a youth called Ganymede and Celia as his sister, Aliena. Their sole companion is to be the court fool Touchstone.</p><p>ACT IIScene 1. Duke Senior extols the joys of the hard, rustic life. A lord describes the melancholy Jaques’ distress at the brutality of the hunt.</p><p>Scene 2. Duke Frederick has learnt of the flight of Celia and Rosalind.</p><p>Scene 3. Orlando is warned by Adam, his father’s aged servant, that Oliver has resolved to murder him. Adam urges Orlando to escape, offering him his savings and his service.</p><p>Scene 4. Rosalind, Celia, and Touchstone are now in the Forest of Arden, where they overhear Silvius telling the shepherd Corin of his unrequited love for the scornful Phebe. The tired travelers ask for help and decide to buy Corin’s cottage and sheep.</p><p>Scene 5. Jaques, Amiens, and others sing together.</p><p>Scene 6. When Adam becomes faint with hunger and exhaustion, Orlando promises to find him food.</p><p>Scene 7. Jaques eulogizes Touchstone’s wisdom. As the exiled courtiers prepare to eat, Orlando enters brandishing his sword and demanding food. The Duke disarms him by graciously inviting him to eat. Whilst Orlando goes back to fetch Adam, Jaques ponders on the seven stages of life, from infancy to senility. The duke is delighted to learn that Orlando is the son of \"the good Sir Rowland.\"</p><p>ACT IIIScene 1. Duke Frederick commands Oliver to find his missing brother and \"bring him dead or living.\"</p><p>Scene 2. Orlando wanders through the forest hanging verses in praise of Rosalind upon the trees. Rosalind derides the clumsy style until she realizes that their author is Orlando. When he arrives with Jaques, Rosalind (dressed as the boy Ganymede) draws him out on the subject of his love. She promises to cure him of his passion if he comes to her daily and woos her as if she were Rosalind.</p><p>Scene 3. Touchstone proposes to Audrey. Jaques intervenes, persuading them against being married by the ill-educated priest Sir Oliver Mar-Text.</p><p>Scene 4. Rosalind is devastated that Orlando has not come to woo her as he promised.</p><p>Scene 5. Silvius woos Phebe ardently, but she rebuffs his advances. When Rosalind accuses the shepherdess of pride Phebe is instantly infatua</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086848-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100086848-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100086848-04-76662"
					}
				}
			},
			{
				"titleId": "100095671-04-7008",
				"isbn13": "9789629546885",
				"isbn10": "",
				"format": "MP3",
				"name": "King Lear",
				"contributors": [
					{
						"contributorId": "127607",
						"name": "William Shakespeare",
						"firstName": "William",
						"middleName": "",
						"lastName": "Shakespeare",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "857748",
						"name": "Paul Scofield",
						"firstName": "Paul",
						"middleName": "",
						"lastName": "Scofield,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "885828",
						"name": "Alec McCowen",
						"firstName": "Alec",
						"middleName": "",
						"lastName": "McCowen,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "885829",
						"name": "Kenneth Branagh",
						"firstName": "Kenneth",
						"middleName": "",
						"lastName": "Branagh,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2001-05-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"The tragedy of King Lear receives an outstanding performance in an all-star cast led by Britain’s senior classical actor, Paul Scofield. He is joined by Alec McCowen as Gloucester, Kenneth Branagh as The Fool, Harriet Walter as Gonerill, Sara Kestelman as Regan and Emilia Fox as Cordelia. This is the ninth recording of Shakespeare plays undertaken by Naxos AudioBooks in conjunction with Cambridge University Press, and is directed by John Tydeman. It was released to mark the eightieth birthday of Paul Scofield in January 2002."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100095671-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100095671-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100095671-04-7008"
					}
				}
			},
			{
				"titleId": "100095789-04-26448",
				"isbn13": "9789629544089",
				"isbn10": "",
				"format": "MP3",
				"name": "Just So Stories",
				"contributors": [
					{
						"contributorId": "127611",
						"name": "Rudyard Kipling",
						"firstName": "Rudyard",
						"middleName": "",
						"lastName": "Kipling",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "753647",
						"name": "Geoffrey Palmer",
						"firstName": "Geoffrey",
						"middleName": "",
						"lastName": "Palmer",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2002-01-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"I am the cat who walks by himself and all places are alike to me’ Here are the delightful stories which Kipling first told his own children before setting them down on paper. How the Camel got his Hump, How the Leopard got his spots, How the Elephant got his Trunk, The Butterfly that Stamped, and many others. They remain popular, entertaining every generation, partly because of the story and partly because of the vivid way they are written. To hear them – unabridged as they are here – is to enjoy them in their original form."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100095789-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100095789-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100095789-04-26448"
					}
				}
			},
			{
				"titleId": "100095991-04-51798",
				"isbn13": "9781621880868",
				"isbn10": "",
				"format": "MP3",
				"name": "Take Your Best Shot: Do Something Bigger Than Yourself",
				"contributors": [
					{
						"contributorId": "225291",
						"name": "Austin Gutwein",
						"firstName": "Austin",
						"middleName": "",
						"lastName": "Gutwein",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "225290",
						"name": "Todd Hillard",
						"firstName": "Todd",
						"middleName": "",
						"lastName": "Hillard",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "860285",
						"name": "Brandon Batchelar",
						"firstName": "Brandon",
						"middleName": "",
						"lastName": "Batchelar,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2012-08-07",
					"imprint": "Oasis Audio"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Only God could weave a story that would captivate people all over the world, bring thousands of people from 17 countries to a free-throw line, raise over a million dollars in international AIDS relief, and build a school and medical clinic in Zambia. And only God could do it through the hands of a nine-year-old boy. Austin made a difference by shooting hoops. Take Your Best Shot captures Austin’s amazing adventure and challenges listeners that no matter where you are, no matter what your skills are, no matter what your age, you can make a difference! You can do something bigger than yourself.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100095991-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100095991-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100095991-04-51798"
					}
				}
			},
			{
				"titleId": "100096642-04-11662",
				"isbn13": "9789629544348",
				"isbn10": "",
				"format": "MP3",
				"name": "Stories from Shakespeare 3",
				"contributors": [
					{
						"contributorId": "863257",
						"name": "David Timson",
						"firstName": "David",
						"middleName": "",
						"lastName": "Timson,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "853568",
						"name": "Juliet Stevenson",
						"firstName": "Juliet",
						"middleName": "",
						"lastName": "Stevenson,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "867196",
						"name": "Beale Simon Russell",
						"firstName": "Beale,",
						"middleName": "",
						"lastName": "Simon Russell",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2008-01-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"Two leading English classical actors, Juliet Stevenson and Simon Russell Beale, open the doors to eight important plays, including Much Ado About Nothing, Antony and Cleopatra, The Winter’s Tale, Measure for Measure, and All’s Well That Ends Well. These newly written introductions by David Timson have proved eminently useful for young audiences coming to Shakespeare for the first time. Explained clearly, the introductions also feature numerous excerpts from the plays themselves."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100096642-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100096642-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100096642-04-11662"
					}
				}
			},
			{
				"titleId": "100096931-04-3329",
				"isbn13": "9789629547776",
				"isbn10": "",
				"format": "MP3",
				"name": "Stories from Shakespeare – The Plantagenets",
				"contributors": [
					{
						"contributorId": "863257",
						"name": "David Timson",
						"firstName": "David",
						"middleName": "",
						"lastName": "Timson,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "1633",
						"name": "Full Cast",
						"firstName": "Full",
						"middleName": "",
						"lastName": "Cast",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "854768",
						"name": "Anton Lesser",
						"firstName": "Anton",
						"middleName": "",
						"lastName": "Lesser,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2008-07-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"Naxos AudioBooks presents the history of the Plantaganets as seen through the eyes of Shakespeare. These easy-to-understand introductions feature key speeches and scenes from the plays themselves, and are very accessible for children approaching Shakespeare for the first time, as well as being an invaluable aid to the history of the Plantaganets, from Richard II to Richard III. This set covers: Richard II, Henry IV parts 1 and 2, Henry V, Henry VI parts 1, 2, and 3 and Richard III. Read by an outstanding cast of English classical actors, and introduced by Anton Lesser."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100096931-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100096931-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100096931-04-3329"
					}
				}
			},
			{
				"titleId": "100096949-04-47246",
				"isbn13": "9780739379905",
				"isbn10": "",
				"format": "MP3",
				"name": "Marcelo in the Real World",
				"contributors": [
					{
						"contributorId": "925927",
						"name": "Francisco Stork",
						"firstName": "Francisco",
						"middleName": "",
						"lastName": "Stork,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "863117",
						"name": "Lincoln Hoppe",
						"firstName": "Lincoln",
						"middleName": "",
						"lastName": "Hoppe,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2009-03-10",
					"imprint": "Penguin Random House"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"Marcelo Sandoval hears music that nobody else can hear–part of an autism-like condition that no doctor has been able to identify. But his father has never fully believed in the music or Marcelo’s differences, and he challenges Marcelo to work in the mailroom of his law firm for the summer. . . to join \"the real world.\"There Marcelo meets Jasmine, his beautiful and surprising coworker, and Wendell, the son of another partner in the firm. He learns about competition and jealousy, anger and desire. But it’s a picture he finds in a file–a picture of a girl with half a face–that truly connects him with the real world: its suffering, its injustice, and what he can do to fight.Reminiscent of The Curious Incident of the Dog in the Night-Time in the intensity and purity of its voice, this extraordinary audiobook is a love story, a legal drama, and a celebration of the music each of us hears inside."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100096949-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100096949-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100096949-04-47246"
					}
				}
			},
			{
				"titleId": "100097249-04-45464",
				"isbn13": "9780739314685",
				"isbn10": "",
				"format": "MP3",
				"name": "Cold Mountain",
				"contributors": [
					{
						"contributorId": "386597",
						"name": "Charles Frazier",
						"firstName": "Charles",
						"middleName": "",
						"lastName": "Frazier",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "386597",
						"name": "Charles Frazier",
						"firstName": "Charles",
						"middleName": "",
						"lastName": "Frazier",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2004-02-03",
					"imprint": "Penguin Random House"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<b>NOW A MAJOR MOTION PICTURE</b>One of the most acclaimed novels in recent memory, Charles Frazier's <b>Cold Mountain</b> is a masterpiece that is at once an enthralling adventure, a stirring love story, and a luminous evocation of a vanished American in all its savagery, solitude, and splendor.  Sorely wounded and fatally disillusioned in the fighting at Petersburg, Inman, a Confederate soldier, decides to walk back to his home in the Blue Ridge Mountains and to Ada, the woman he loved there years before.  His trek across the disintegrating South brings him into intimate and sometimes lethal converse with slaves and marauders, bounty hunters and witches, both helpful and malign.  At the same time, Ada is trying to revive her father's derelict farm and learn to survive in a world where the old certainties have been swept away.  As it interweaves their stories, <b>Cold Mountain</b> asserts itself as an authentic American <b>Odyssey</b>--hugely powerful, majestically lovely, and keenly moving."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100097249-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100097249-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100097249-04-45464"
					}
				}
			},
			{
				"titleId": "100097397-04-141995",
				"isbn13": "9781524776381",
				"isbn10": "",
				"format": "MP3",
				"name": "Little Monsters",
				"contributors": [
					{
						"contributorId": "671067",
						"name": "Kara Thomas",
						"firstName": "Kara",
						"middleName": "",
						"lastName": "Thomas",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "377477",
						"name": "Brittany Pressley",
						"firstName": "Brittany",
						"middleName": "",
						"lastName": "Pressley",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "863288",
						"name": "Phoebe Strole",
						"firstName": "Phoebe",
						"middleName": "",
						"lastName": "Strole,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2017-07-25",
					"imprint": "Penguin Random House"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>For fans of Pretty Little Liars, Little Monsters is a new psychological thriller, from the author of The Darkest Corners, about appearances versus reality and the power of manipulation amongst teenage girls.</b>   Kacey is the new girl in Broken Falls. When she moved in with her father, she stepped into a brand-new life. A life with a stepbrother, a stepmother, and strangest of all, an adoring younger half sister.    Kacey’s new life is eerily charming compared with the wild highs and lows of the old one she lived with her volatile mother. And everyone is so nice in Broken Falls—she’s even been welcomed into a tight new circle of friends. Bailey and Jade invite her to do everything with them.   Which is why it’s so odd when they start acting distant. And when they don’t invite her to the biggest party of the year, it doesn't exactly feel like an accident.    But Kacey will never be able to ask, because Bailey never makes it home from that party. Suddenly, Broken Falls doesn’t seem so welcoming after all—especially once everyone starts looking to the new girl for answers.    Kacey is about to learn some very important lessons: Sometimes appearances can be deceiving. Sometimes when you’re the new girl, you shouldn’t trust anyone.<b><b>Praise for Little Monsters:</b></b>\"<b>Thomas creates a disturbing portrait </b>of how bad news and gossip can curdle when mixed together.\"-Oprah.com\"<b>An eerie and masterly psychological thrille</b>r...[that] culminates in a shocking and disturbing ending. Thomas expertly captures the pointed nuances and the fickle, manipulative bonds of adolescent girls’ friendships.\"-SLJ\"<b>Taut and suspenseful.</b>..this gritty page-turner will easily hook a broad range of readers\"-Booklist\"<b>An intense psychological thriller</b> that all but ensures the lights will be left on between dusk and dawn.\"-Publishers Weekly\"Gritty and realistic...<b>this mystery will leave readers in awe.</b>\"-VOYA\"<b>A twisted story of obsession and manipulation</b>, Little Monsters captivated me right up to its surprising conclusion—and left me wondering how well I really know my friends.\"-Chelsea Sedoti, author of The Hundred Lies of Lizzie Lovett"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100097397-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100097397-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100097397-04-141995"
					}
				}
			},
			{
				"titleId": "100097602-04-54536",
				"isbn13": "9781442357587",
				"isbn10": "",
				"format": "MP3",
				"name": "Crash",
				"contributors": [
					{
						"contributorId": "182401",
						"name": "Lisa McMann",
						"firstName": "Lisa",
						"middleName": "",
						"lastName": "McMann",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "386613",
						"name": "Allyson Ryan",
						"firstName": "Allyson",
						"middleName": "",
						"lastName": "Ryan",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2013-01-08",
					"imprint": "Simon & Schuster"
				},
				"series": {
					"name": "Visions"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>If what you see is what you get, Jules is in serious trouble. The suspenseful first in a series from the New York Times bestselling author of the Wake trilogy.</b>Jules lives with her family above their restaurant, which means she smells like pizza most of the time and drives their double-meatball-shaped food truck to school. It’s not a recipe for popularity, but she can handle that. What she can’t handle is the recurring vision that haunts her. Over and over, Jules sees a careening truck hit a building and explode...and nine body bags in the snow. The vision is everywhere—on billboards, television screens, windows—and she’s the only one who sees it. And the more she sees it, the more she sees. The vision is giving her clues, and soon Jules knows what she has to do. Because now she can see the face in one of the body bags, and it’s someone she knows. Someone she has been in love with for as long as she can remember. In this riveting start to a gripping series from New York Times bestselling author Lisa McMann, Jules has to act—and act fast—to keep her vision from becoming reality."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100097602-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100097602-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100097602-04-54536"
					}
				}
			},
			{
				"titleId": "100097905-04-22787",
				"isbn13": "9780545477222",
				"isbn10": "",
				"format": "MP3",
				"name": "The False Prince (The Ascendance Series, Book 1)",
				"contributors": [
					{
						"contributorId": "673319",
						"name": "Jennifer A. Nielsen",
						"firstName": "Jennifer A.",
						"middleName": "",
						"lastName": "Nielsen",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "883530",
						"name": "Charlie McWade",
						"firstName": "Charlie",
						"middleName": "",
						"lastName": "McWade,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2012-04-01",
					"imprint": "Scholastic"
				},
				"series": {
					"name": "Ascendance Trilogy"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"New York Times bestseller The False Prince thrills with wild twists and turns, danger and deceit, and the revelation of hidden identities that will have readers rushing breathlessly to the end.In a discontented kingdom, civil war is brewing. To unify the divided people, Conner, a nobleman of the court, devises a cunning plan to find an impersonator of the king's long-lost son and install him as a puppet prince. Four orphans are recruited to compete for the role, including a defiant boy named Sage. Sage knows that Conner's motives are more than questionable, yet his life balances on a sword's point -- he must be chosen to play the prince or he will certainly be killed. But Sage's rivals have their own agendas as well.As Sage moves from a rundown orphanage to Conner's sumptuous palace, layer upon layer of treachery and deceit unfold, until finally, a truth is revealed that, in the end, may very well prove more dangerous than all of the lies taken together.An extraordinary adventure filled with danger and action, lies and deadly truths that will have readers clinging to the edge of their seats.<b>And don't miss the highly anticipated fourth book in the series, The Captive Kingdom, coming October 2020!</b>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100097905-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100097905-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100097905-04-22787"
					}
				}
			},
			{
				"titleId": "100098306-04-26484",
				"isbn13": "9789629547660",
				"isbn10": "",
				"format": "MP3",
				"name": "Tess of the D'Urbervilles",
				"contributors": [
					{
						"contributorId": "130314",
						"name": "Thomas Hardy",
						"firstName": "Thomas",
						"middleName": "",
						"lastName": "Hardy",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "216863",
						"name": "Imogen Stubbs",
						"firstName": "Imogen",
						"middleName": "",
						"lastName": "Stubbs",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2009-02-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Socially critical and emotionally complex, Tess of the D’Urbervilles is Hardy’s masterpiece. It tells the story of Tess Durbeyfield, forced by her family’s poverty to claim kinship with the wealthy D’Urbervilles. Violated by the son Alec; her hopes of rebuilding her life with the gentle and bookish Angel Clare founder when he learns of her past. Set among the lush pastures and bleak uplands of Hardy’s imagined Wessex, and filled with unforgettable images of tenderness and tragedy, the story examines conventional morality through Tess herself: one of the best-loved characters in English literature. Sensitively read by Imogen Stubbs."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100098306-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100098306-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100098306-04-26484"
					}
				}
			},
			{
				"titleId": "100098325-04-45276",
				"isbn13": "9780739384749",
				"isbn10": "",
				"format": "MP3",
				"name": "Broken Open: How Difficult Times Can Help Us Grow",
				"contributors": [
					{
						"contributorId": "243027",
						"name": "Elizabeth Lesser",
						"firstName": "Elizabeth",
						"middleName": "",
						"lastName": "Lesser",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "869099",
						"name": "Susan Denaker",
						"firstName": "Susan",
						"middleName": "",
						"lastName": "Denaker,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2008-12-30",
					"imprint": "Penguin Random House"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<b>NEW YORK TIMES BESTSELLER • This inspiring guide to healing and growth illuminates the richness and potential of every life, even in the face of loss and adversity.</b>In the more than twenty-five years since she co-founded Omega Institute—now the world’s largest center for spiritual retreat and personal growth—Elizabeth Lesser has been an intimate witness to the ways in which people weather change and transition. In a beautifully crafted blend of moving stories, humorous insights, practical guidance, and personal memoir, she offers tools to help us make the choice we all face in times of challenge: Will we be broken down and defeated, or broken open and transformed? Lesser shares tales of ordinary people who have risen from the ashes of illness, divorce, loss of a job or a loved one—stronger, wiser, and more in touch with their purpose and passion. And she draws on the world’s great spiritual and psychological traditions to support us as we too learn to break open and blossom into who we were meant to be."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100098325-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100098325-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100098325-04-45276"
					}
				}
			},
			{
				"titleId": "100098506-04-46171",
				"isbn13": "9780307876997",
				"isbn10": "",
				"format": "MP3",
				"name": "Full Catastrophe Living: Using the Wisdom of Your Body and Mind to Face Stress, Pain, and Illness",
				"contributors": [
					{
						"contributorId": "169555",
						"name": "Jon Kabat-Zinn",
						"firstName": "Jon",
						"middleName": "",
						"lastName": "Kabat-Zinn",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "169555",
						"name": "Jon Kabat-Zinn",
						"firstName": "Jon",
						"middleName": "",
						"lastName": "Kabat-Zinn",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2007-12-11",
					"imprint": "Penguin Random House"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Stress. It is everywhere around us. Even worse, it gets inside us: sapping our energy, undermining our health, and making us more vulnerable to anxiety, depression, and disease. Now, based on Dr. Jon Kabat-Zinn’s renowned mindfulness-based stress reduction program, this groundbreaking book shows you how to use natural, medically proven methods to soothe and heal your body, mind, and spirit. By using the practices described within, you can learn to manage chronic pain resulting from illness and/or stress related disorders…discover the roles that anger and tension play in heart disease… reduce anxiety and feelings of panic…improve overall quality of life and relationships through mindfulness meditation and mindful yoga. More timely than ever before, <b>Full Catastrophe Living</b> is a book for the young and the old, the well, the ill, and anyone trying to live a healthier and saner life in today’s world."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100098506-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100098506-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100098506-04-46171"
					}
				}
			},
			{
				"titleId": "100098687-04-47005",
				"isbn13": "9780739336847",
				"isbn10": "",
				"format": "MP3",
				"name": "Life as we Knew It",
				"contributors": [
					{
						"contributorId": "228524",
						"name": "Susan Beth Pfeffer",
						"firstName": "Susan Beth",
						"middleName": "",
						"lastName": "Pfeffer",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "859304",
						"name": "Emily Bauer",
						"firstName": "Emily",
						"middleName": "",
						"lastName": "Bauer,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2006-09-12",
					"imprint": "Penguin Random House"
				},
				"series": {
					"name": "Life As We Knew It"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"When Miranda first hears the warnings that a meteor is headed on a collision path with the moon, they just sound like an excuse for extra homework assignments. But her disbelief turns to fear in a split second as the entire world witnesses a lunar impact that knocks the moon closer in orbit, catastrophically altering the earth’s climate.             Everything else in Miranda’s life fades away as supermarkets run out of food, gas goes up to more than ten dollars a gallon, and school is closed indefinitely.  But what Miranda and her family don’t realize is that the worst is yet to come. Told in Miranda’s diary entries, this is a heart-pounding account of her struggle to hold on to the most important resource of all–hope–in an increasingly desperate and unfamiliar time."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100098687-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100098687-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100098687-04-47005"
					}
				}
			},
			{
				"titleId": "100098691-04-51425",
				"isbn13": "9781608148370",
				"isbn10": "",
				"format": "MP3",
				"name": "Soul Surfer Devotions",
				"contributors": [
					{
						"contributorId": "189747",
						"name": "Bethany Hamilton",
						"firstName": "Bethany",
						"middleName": "",
						"lastName": "Hamilton",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "931574",
						"name": "Eleni Pappageorge",
						"firstName": "Eleni",
						"middleName": "",
						"lastName": "Pappageorge,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2011-04-01",
					"imprint": "Oasis Audio"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Her story is amazing enough to inspire a major motion picture. Back on the surfboard just one month after losing her arm in a shark attack, professional surfer Bethany Hamilton became the cover girl of courage, inspiring millions around the world. In this devotional, Bethany speaks straight to her \"soul sisters,\" teen girls, about the challenges of facing your fears, living your faith, and letting God take you on an epic ride. Listen to the audio about how to stand up for your faith, make a difference, and avoid wipeouts. Hear Bethany’s prayers and then journal your own. Learn about the highs of extreme sports and extreme faith.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100098691-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100098691-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100098691-04-51425"
					}
				}
			},
			{
				"titleId": "100099368-04-14513",
				"isbn13": "9780545285384",
				"isbn10": "",
				"format": "MP3",
				"name": "A Curse Dark As Gold",
				"contributors": [
					{
						"contributorId": "673334",
						"name": "Elizabeth C. Bunce",
						"firstName": "Elizabeth C.",
						"middleName": "",
						"lastName": "Bunce",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "859662",
						"name": "Charlotte Parry",
						"firstName": "Charlotte",
						"middleName": "",
						"lastName": "Parry,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2010-11-01",
					"imprint": "Scholastic"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"This ravishing winner of the ALA's William C. Morris YA Debut Award is a fairy tale, spun with a mystery, woven with a family story, and shot through with romance.The gold thread promises Charlotte Miller a chance to save her family's beloved woolen mill. It promises a future for her sister, jobs for her townsfolk, security against her grasping uncle -- maybe even true love.  To get the thread, Charlotte must strike a bargain with its maker, the mysterious Jack Spinner. But the gleam of gold conjures a shadowy past -- secrets ensnaring generations of Millers. And Charlotte's mill, her family, her love -- what do those matter to a stranger who can spin straw into gold?   This is an award-winning and wholly original retelling of \"Rumplestiltskin.\""
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100099368-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100099368-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100099368-04-14513"
					}
				}
			},
			{
				"titleId": "100099376-04-15041",
				"isbn13": "9789629549640",
				"isbn10": "",
				"format": "MP3",
				"name": "John Donne",
				"contributors": [
					{
						"contributorId": "150080",
						"name": "John Donne",
						"firstName": "John",
						"middleName": "",
						"lastName": "Donne",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "218196",
						"name": "Geoffrey Whitehead",
						"firstName": "Geoffrey",
						"middleName": "",
						"lastName": "Whitehead",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "334084",
						"name": "Will Keen",
						"firstName": "Will",
						"middleName": "",
						"lastName": "Keen",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2010-06-01",
					"imprint": "Naxos Audiobooks"
				},
				"series": {
					"name": "Great Poets"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Sophisticated wit and intense emotion, religious fervour and erotic sensuality, delight in life’s pleasures and fascination with death, are all to be found in the paradoxical poetry of John Donne. One of the foremost metaphysical poets, Donne’s ingenious metaphors and inspired use of language has earned him affection and reverence in near equal measure to Shakespeare. This collection of his finest poetry showcases the diverse range of his work, and includes Death Be Not Proud, A Hymn to God the Father, For Whom the Bell Tolls, Go Catch a Falling Star, The Flea and To His Mistress Going to Bed."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100099376-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100099376-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100099376-04-15041"
					}
				}
			},
			{
				"titleId": "100099932-04-49751",
				"isbn13": "9780739345191",
				"isbn10": "",
				"format": "MP3",
				"name": "The People of Sparks: The Second Book of Ember",
				"contributors": [
					{
						"contributorId": "167330",
						"name": "Jeanne DuPrau",
						"firstName": "Jeanne",
						"middleName": "",
						"lastName": "DuPrau",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "887912",
						"name": "Wendy Dillon",
						"firstName": "Wendy",
						"middleName": "",
						"lastName": "Dillon,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2004-05-25",
					"imprint": "Penguin Random House"
				},
				"series": {
					"name": "The City of Ember"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"The People of Sparks picks up where The City of Ember leaves off. Lina and Doon have emerged from the underground city to the exciting new world above, and it isn’t long before they are followed by the other inhabitants of Ember. The Emberites soon come across a town where they are welcomed, fed, and given places to sleep. But the town’s resources are limited and it isn’t long before resentment begins to grow between the two groups. When anonymous acts of vandalism push them toward violence, it’s up to Lina and Doon to discover who’s behind the vandalism and why, before it’s too late."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100099932-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100099932-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100099932-04-49751"
					}
				}
			},
			{
				"titleId": "100100334-04-136998",
				"isbn13": "9781338119299",
				"isbn10": "",
				"format": "MP3",
				"name": "Wrath of the Storm (Mark of the Thief, Book 3)",
				"contributors": [
					{
						"contributorId": "673319",
						"name": "Jennifer A. Nielsen",
						"firstName": "Jennifer A.",
						"middleName": "",
						"lastName": "Nielsen",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "377591",
						"name": "MacLeod Andrews",
						"firstName": "MacLeod",
						"middleName": "",
						"lastName": "Andrews",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2017-01-31",
					"imprint": "Scholastic"
				},
				"series": {
					"name": "Mark of the Thief"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"NYT and USA Today bestselling author Jennifer A. Nielsen delivers the action-packed conclusion to her magical Mark of the Thief trilogy!Trouble has a way of seeking out Nicolas Calva, and it's not likely to leave him alone any time soon. With Caesar's magic bulla, the Malice of Mars, and the possibility of a Jupiter Stone in play, all the powers of Rome are circling Nic. He'll have to maneuver his way through scheming government officials and reawakened magical beasts to save the Empire. Can he manage to keep his friends and family safe, claim his own freedom once and for all, and rescue the Empire -- before the magic gets the better of him?With twists and turns on every page, critically acclaimed author Jennifer Nielsen weaves an epic, action-packed conclusion to her extraordinary Mark of the Thief trilogy."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100100334-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100100334-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100100334-04-136998"
					}
				}
			},
			{
				"titleId": "100100359-04-137014",
				"isbn13": "9781338157260",
				"isbn10": "",
				"format": "MP3",
				"name": "Sea Change",
				"contributors": [
					{
						"contributorId": "234768",
						"name": "Aimee Friedman",
						"firstName": "Aimee",
						"middleName": "",
						"lastName": "Friedman",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "882682",
						"name": "Nora Hunter",
						"firstName": "Nora",
						"middleName": "",
						"lastName": "Hunter,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2016-11-29",
					"imprint": "Scholastic"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"Bestselling author Aimee Friedman is back, with her signature combination of warmth and humor.  And with this book, she adds a touch of fantasy. . .Lifetime Original Movie!New York Times bestselling author Aimee Friedman is back, with her signature combination of warmth and humor. And with this book, she adds a touch of fantasy. . .Sixteen-year-old Miranda Merchant is great at science. . .and not so great with boys. After major drama with her boyfriend and (now ex) best friend, she's happy to spend the summer on small, mysterious Selkie Island, helping her mother sort out her late grandmother's estate.There, Miranda finds new friends and an island with a mysterious, mystical history, presenting her with facts her logical, scientific mind can't make sense of. She also meets Leo, who challenges everything she thought she knew about boys, friendship. . .and reality."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100100359-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100100359-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100100359-04-137014"
					}
				}
			},
			{
				"titleId": "100100519-04-49822",
				"isbn13": "9780739330890",
				"isbn10": "",
				"format": "MP3",
				"name": "The Prophet of Yonwood: The Third Book of Ember",
				"contributors": [
					{
						"contributorId": "167330",
						"name": "Jeanne DuPrau",
						"firstName": "Jeanne",
						"middleName": "",
						"lastName": "DuPrau",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "896051",
						"name": "Baker Becky Ann",
						"firstName": "Baker,",
						"middleName": "",
						"lastName": "Becky Ann",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2006-05-09",
					"imprint": "Penguin Random House"
				},
				"series": {
					"name": "Book of Ember"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"It’s 50 years before the settlement of the city of Ember, and the world is in crisis. War looms on the horizon as 11-year-old Nickie and her aunt travel to the small town of Yonwood, North Carolina. There, one of the town’s respected citizens has had a terrible vision of fire and destruction. Her garbled words are taken as prophetic instruction on how to avoid the coming disaster. If only they can be interpreted correctly. . . .As the people of Yonwood scramble to make sense of the woman’s mysterious utterances, Nickie explores the oddities she finds around town—her great-grandfather’s peculiar journals and papers, a reclusive neighbor who studies the heavens, a strange boy who is fascinated with snakes—all while keeping an eye out for ways to help the world. Is this vision her chance? Or is it already too late to avoid a devastating war?In this prequel to the acclaimed The City of Ember and The People of Sparks, Jeanne DuPrau investigates how, in a world that seems out of control, hope and comfort can be found in the strangest of places."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100100519-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100100519-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100100519-04-49822"
					}
				}
			},
			{
				"titleId": "100100649-04-26276",
				"isbn13": "9789629546618",
				"isbn10": "",
				"format": "MP3",
				"name": "John Keats",
				"contributors": [
					{
						"contributorId": "152474",
						"name": "John Keats",
						"firstName": "John",
						"middleName": "",
						"lastName": "Keats",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "860761",
						"name": "Samuel West",
						"firstName": "Samuel",
						"middleName": "",
						"lastName": "West,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "873667",
						"name": "Michael Sheen",
						"firstName": "Michael",
						"middleName": "",
						"lastName": "Sheen,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2007-07-01",
					"imprint": "Naxos Audiobooks"
				},
				"series": {
					"name": "The Great Poets"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Naxos AudioBooks continues its new series of Great Poets – represented by a collection of their most popular poems  – with John Keats. Although this man had a short life, he produced a series of outstanding poems – many of which appeared first in letters to his sister. He was largely unappreciated during his lifetime, and died in Rome at the age of 26. Most of his 150 poems were written in just nine extraordinary months in 1819. This selection contains some of his finest works, the principal Odes, La Belle Dame Sans Merci, Old Meg and Much Have I Travelled."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100100649-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100100649-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100100649-04-26276"
					}
				}
			},
			{
				"titleId": "100101156-04-1720",
				"isbn13": "9789629546557",
				"isbn10": "",
				"format": "MP3",
				"name": "Emily Dickinson",
				"contributors": [
					{
						"contributorId": "131114",
						"name": "Emily Dickinson",
						"firstName": "Emily",
						"middleName": "",
						"lastName": "Dickinson",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "365580",
						"name": "Teresa Gallagher",
						"firstName": "Teresa",
						"middleName": "",
						"lastName": "Gallagher",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2008-02-01",
					"imprint": "Naxos Audiobooks"
				},
				"series": {
					"name": "Great Poets"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Born in Massachusetts in 1830, Emily Dickinson composed over 1770 poems; but apart from her closest friends, no-one knew she was writing at all. Only after her death was her astonishing output discovered and published. A reclusive figure for much of her life, few could have imagined the range of her subjects, the intensity of her imagination or the powerful delicacy of her writing. Emily Dickinson is one of America’s greatest writers. This selection includes 147 of her best known poems, and is a perfect introduction to her unique voice."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100101156-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100101156-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100101156-04-1720"
					}
				}
			},
			{
				"titleId": "100101240-04-15021",
				"isbn13": "9789629549343",
				"isbn10": "",
				"format": "MP3",
				"name": "Anna Karenina",
				"contributors": [
					{
						"contributorId": "130312",
						"name": "Leo Tolstoy",
						"firstName": "Leo",
						"middleName": "",
						"lastName": "Tolstoy",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "292520",
						"name": "Kate Lock",
						"firstName": "Kate",
						"middleName": "",
						"lastName": "Lock",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2010-03-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Anna Karenina is beautiful, married to a successful man, and has a son whom she adores. But a chance meeting at a train station in Moscow sets her passionate heart alight, and she is defenceless in the face of Count Vronsky’s adoration. Having defied the rules of nineteenth-century Russian society, Anna is forced to pay a heavy price. Human nature, with all its failings, is the fabric of which this great and intense work is composed. Anna Karenina has been described as the perfect Russian novel. Translated by Aylmer and Louise Maude."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100101240-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100101240-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100101240-04-15021"
					}
				}
			},
			{
				"titleId": "100101327-04-7016",
				"isbn13": "9789629545970",
				"isbn10": "",
				"format": "MP3",
				"name": "Ulysses",
				"contributors": [
					{
						"contributorId": "130333",
						"name": "James Joyce",
						"firstName": "James",
						"middleName": "",
						"lastName": "Joyce",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "237519",
						"name": "Jim Norton",
						"firstName": "Jim",
						"middleName": "",
						"lastName": "Norton",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "868448",
						"name": "Marcella Riordan",
						"firstName": "Marcella",
						"middleName": "",
						"lastName": "Riordan,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2004-05-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Ulysses is one of the greatest literary works in the English language. In his remarkable tour de force, Joyce catalogues one day – 16 June 1904 – in immense detail as Leopold Bloom wanders through Dublin, talking, observing, musing – and always remembering Molly, his passionate, wayward wife. Set in the shadow of Homer’s Odyssey, internal thoughts – Joyce’s famous stream of consciousness – give physical reality extra colour and perspective. This long-awaited unabridged recording of James Joyce’s Ulysses is released to coincide with the hundredth anniversary of ‘Bloomsday’. Regarded by many as the single most important novel of the twentieth century, the abridged recording by Norton and Riordan released in 1994, the first year of Naxos AudioBooks, is a proven bestseller. Now the two return – having recorded most of Joyce’s other work – in a newly recorded unabridged production directed by Joyce expert Roger Marsh."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100101327-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100101327-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100101327-04-7016"
					}
				}
			},
			{
				"titleId": "100101333-04-26478",
				"isbn13": "9789629545741",
				"isbn10": "",
				"format": "MP3",
				"name": "The Adventures of Huckleberry Finn",
				"contributors": [
					{
						"contributorId": "130191",
						"name": "Mark Twain",
						"firstName": "Mark",
						"middleName": "",
						"lastName": "Twain",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "863340",
						"name": "Garrick Hagon",
						"firstName": "Garrick",
						"middleName": "",
						"lastName": "Hagon,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2005-10-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {
					"interestAge": [
						13,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"Floating down the Mississippi on their raft, Huckleberry Finn and Jim, a runaway slave, find life filled with excitement and the spirit of adventure. Join Huck and Jim and their old friend Tom Sawyer as they come up against low-down thieves and murderers, whilst being chased by Huck’s evil, drunken father who is after Huck’s treasure. It is a trip that you will never tire of. In this new unabridged recording, Garrick Hagon brings his remarkable powers of vocal characterisation to the unforgettable portraits created by Twain."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100101333-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100101333-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100101333-04-26478"
					}
				}
			},
			{
				"titleId": "100101790-04-44723",
				"isbn13": "9780739360828",
				"isbn10": "",
				"format": "MP3",
				"name": "Abhorsen",
				"contributors": [
					{
						"contributorId": "128169",
						"name": "Garth Nix",
						"firstName": "Garth",
						"middleName": "",
						"lastName": "Nix",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "868822",
						"name": "Tim Curry",
						"firstName": "Tim",
						"middleName": "",
						"lastName": "Curry,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2003-04-08",
					"imprint": "Penguin Random House"
				},
				"series": {
					"name": "Abhorsen | The Old Kingdom"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"Before she went to join Sam and Mogget downstairs, Lirael paused for a moment to look at herself in the tall silver mirror that hung on the wall of her room.  The image that faced her bore little resemblance to the Second Assistant Librarian of the Clayr.  She saw a warlike and grim young woman, dark hair bound back with a silver cord rather than hanging free to disguise her face.  She no longer wore her librarian's waistcoat, and she had a long Nehima at her side rather than a library-issue dagger.  but she had kept her library whistle, tucking it into the small pouch at her belt.  Though she was many, many leagues from any help the whistle might summon, she felt the need to cling to some small part of her past and her identity.She had become an Abhorsen, Lirael thought, at least on the outside."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100101790-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100101790-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100101790-04-44723"
					}
				}
			},
			{
				"titleId": "100102313-04-58205",
				"isbn13": "9781481593939",
				"isbn10": "",
				"format": "MP3",
				"name": "Ender's World: Fresh Perspectives on the SF Classic Ender's Game",
				"contributors": [
					{
						"contributorId": "192329",
						"name": "Orson Scott Card",
						"firstName": "Orson Scott",
						"middleName": "",
						"lastName": "Card",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "386552",
						"name": "Stefan Rudnicki",
						"firstName": "Stefan",
						"middleName": "",
						"lastName": "Rudnicki",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "820744",
						"name": "de Cuir Gabrielle",
						"firstName": "de",
						"middleName": "",
						"lastName": "Cuir, Gabrielle",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "852383",
						"name": "Arthur Morey",
						"firstName": "Arthur",
						"middleName": "",
						"lastName": "Morey,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "907969",
						"name": "Janis Ian",
						"firstName": "Janis",
						"middleName": "",
						"lastName": "Ian,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2013-04-02",
					"imprint": "Blackstone Audio"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>Orson Scott Card’s Ender’s Game is a classic of science fiction. Though it began its life as a short story, it was later expanded into a Hugo and Nebula Award–winning novel, served as a springboard for a much larger universe of stories, and finally, has been made into a feature film.</p> <p>In Ender’s World over a dozen writers of science fiction, fantasy, and young adult books offer new perspectives on the 1985 novel, along with insights gleaned from other Ender stories that fit within the Ender’s Game chronology, including Ender in Exile and Ender’s Shadow. In addition, military strategists Colonel Tom Ruby and Captain John Schmitt offer insight into the human-Formic war. Also included is a contribution from Aaron Johnston, the coauthor of the Formic Wars prequel novels.</p> <p>The collection’s insightful analyses and moving personal essays are rounded out with short pieces answering more technically oriented questions about the Ender universe, including why the Battle Room is a cube and why the military recruited their soldiers as children.</p> <p>Edited by Orson Scott Card himself, who also provides an introduction to the anthology as well as to the individual essays, Ender’s World is aimed both at readers who have kept up with the many books that came after and at those who simply want to revisit the original novel.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100102313-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100102313-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100102313-04-58205"
					}
				}
			},
			{
				"titleId": "100104463-04-78994",
				"isbn13": "9781442376458",
				"isbn10": "",
				"format": "MP3",
				"name": "Gasp",
				"contributors": [
					{
						"contributorId": "182401",
						"name": "Lisa McMann",
						"firstName": "Lisa",
						"middleName": "",
						"lastName": "McMann",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "852432",
						"name": "Joy Osmanski",
						"firstName": "Joy",
						"middleName": "",
						"lastName": "Osmanski,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-06-03",
					"imprint": "Simon & Schuster"
				},
				"series": {
					"name": "Visions"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<b>The visions aren’t stopping, and neither is the danger in this series conclusion from the New York Times bestselling author of the Wake trilogy.</b>After narrowly surviving two harrowing tragedies, Jules now fully understands the importance of the visions that she and those around her are experiencing. She’s convinced that if the vision curse passed from her to Sawyer after she saved him, then it must now have passed from Sawyer to one of the people he saved. That means it’s up to Jules to figure out which of the school shooting survivors is now suffering from visions of another crisis. And once she realizes who it is, she has to convince that survivor that this isn’t all crazy—that the images are of something real. Something imminent. As the danger escalates in this conclusion to the Visions series, Jules wonders if she’ll finally find out why and how this is happening—before it’s too late to prevent disaster."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100104463-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100104463-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100104463-04-78994"
					}
				}
			},
			{
				"titleId": "100104591-04-9493",
				"isbn13": "9789629544744",
				"isbn10": "",
				"format": "MP3",
				"name": "More Classic American Short Stories",
				"contributors": [
					{
						"contributorId": "130388",
						"name": "Ambrose Bierce",
						"firstName": "Ambrose",
						"middleName": "",
						"lastName": "Bierce",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "130975",
						"name": "Kate Chopin",
						"firstName": "Kate",
						"middleName": "",
						"lastName": "Chopin",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "131013",
						"name": "Stephen Crane",
						"firstName": "Stephen",
						"middleName": "",
						"lastName": "Crane",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "131069",
						"name": "James Fenimore Cooper",
						"firstName": "James Fenimore",
						"middleName": "",
						"lastName": "Cooper",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "131136",
						"name": "O. Henry",
						"firstName": "O.",
						"middleName": "",
						"lastName": "Henry",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "857488",
						"name": "Liza Ross",
						"firstName": "Liza",
						"middleName": "",
						"lastName": "Ross,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "863340",
						"name": "Garrick Hagon",
						"firstName": "Garrick",
						"middleName": "",
						"lastName": "Hagon,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2007-03-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Here are eight stories from master American writers of the nineteenth century. They vary from sinister tales by Ambrose Bierce – why is that window boarded up? – and a reflective moment in the life of a woman without children, forced to look after children, to classic short stories by O. Henry and Stephen Crane. There is even an elegiac description of an eclipse by James Fenimore Cooper, author of The Last of the Mohicans. Read with sensitivity and skill by Garrick Hagon and Liza Ross."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100104591-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100104591-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100104591-04-9493"
					}
				}
			},
			{
				"titleId": "100105011-04-107215",
				"isbn13": "9780062440549",
				"isbn10": "",
				"format": "MP3",
				"name": "Flamecaster",
				"contributors": [
					{
						"contributorId": "181160",
						"name": "Cinda Williams Chima",
						"firstName": "Cinda Williams",
						"middleName": "",
						"lastName": "Chima",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "368216",
						"name": "Kim Mai Guest",
						"firstName": "Kim Mai",
						"middleName": "",
						"lastName": "Guest",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2016-04-05",
					"imprint": "HarperCollins"
				},
				"series": {
					"name": "Shattered Realms"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Set in the world of the <em>New York Times </em>bestselling Seven Realms series, a generation later, this is a breathtaking story of dark magic, chilling threats, and two unforgettable characters walking a knife-sharp line between life and death. This dazzling beginning to a new series is indispensable for fans of Cinda Williams Chima and a perfect starting point for readers who are new to her work.</p><p>Adrian sul’Han, known as Ash, is a trained healer with a powerful gift of magic—and a thirst for revenge. Ash is forced into hiding after a series of murders throws the queendom into chaos. Now he’s closer than ever to killing the man responsible, the cruel king of Arden. With time running out, Ash faces an excruciating choice: Can he use his powers not to save a life but to take it?Abandoned at birth, Jenna Bandelow was told that the magemark on the back of her neck would make her a target. But when the King’s Guard launches a relentless search for a girl with a mark like hers, Jenna assumes that it has more to do with her role as a saboteur than any birth-based curse. Though Jenna doesn’t know why she’s being hunted, she knows that she can’t get caught. Eventually, Ash’s and Jenna’s paths will collide in Arden. Thrown together by chance and joined by their hatred of the ruthless king, they will come to rescue each other in ways they cannot yet imagine.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100105011-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100105011-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100105011-04-107215"
					}
				}
			},
			{
				"titleId": "100105051-04-87981",
				"isbn13": "9781780003665",
				"isbn10": "",
				"format": "MP3",
				"name": "The Scarlet Letter",
				"contributors": [
					{
						"contributorId": "130367",
						"name": "Nathaniel Hawthorne",
						"firstName": "Nathaniel",
						"middleName": "",
						"lastName": "Hawthorne",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "856860",
						"name": "Kate Harper",
						"firstName": "Kate",
						"middleName": "",
						"lastName": "Harper,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-01-01",
					"imprint": "The Copyright Group"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Nathaniel Hawthorne’s novel The Scarlet Letter is a dramatic story. The plot progresses through a series of theatrical set pieces, such as the three incidents on the scaffold, Hester Prynne’s confrontation with the Governor and her liaison with Mr Dimmesdale in the forest glade. The author’s vivid, descriptive writing creates strong images of his protagonists in the minds of his readers, and this powerful visual impact heightens the sense of conflict within, and between the characters."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100105051-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100105051-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100105051-04-87981"
					}
				}
			},
			{
				"titleId": "100105336-04-79533",
				"isbn13": "9780545749794",
				"isbn10": "",
				"format": "MP3",
				"name": "If You're Reading This",
				"contributors": [
					{
						"contributorId": "524270",
						"name": "Trent Reedy",
						"firstName": "Trent",
						"middleName": "",
						"lastName": "Reedy",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "386561",
						"name": "Ramon de Ocampo",
						"firstName": "Ramon",
						"middleName": "",
						"lastName": "de Ocampo",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "524270",
						"name": "Trent Reedy",
						"firstName": "Trent",
						"middleName": "",
						"lastName": "Reedy",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-08-26",
					"imprint": "Scholastic"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"From the author of Words in the Dust and Divided We Fall:  A heartwarming book about a son reconnecting with the father he lost in Afghanistan.Mike was seven when his father was killed in mysterious circumstances in Afghanistan. Eight years later, the family still hasn't recovered: Mike's mom is overworked and overprotective; his younger sister Mary feels no connection to the father she barely remembers; and in his quest to be \"the man of the family,\" Mike knows he's missing out on everyday high school life. Then, out of the blue, Mike receives a letter from his father -- the first of a series Dad wrote  in Afghanistan, just in case he didn't come home, meant to share some wisdom with his son on the eve of Mike's 16th birthday. As the letters come in, Mike revels in spending time with his dad again, and takes his encouragement to try new things -- to go out for the football team, and ask out the beautiful Isma. But who's been keeping the letters all these years? And how did Dad actually die? As the answers to these mysteries are revealed, Mike and his family find a way to heal and move forward at last."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100105336-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100105336-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100105336-04-79533"
					}
				}
			},
			{
				"titleId": "100105769-04-63504",
				"isbn13": "9781442364325",
				"isbn10": "",
				"format": "MP3",
				"name": "Bang",
				"contributors": [
					{
						"contributorId": "182401",
						"name": "Lisa McMann",
						"firstName": "Lisa",
						"middleName": "",
						"lastName": "McMann",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "852432",
						"name": "Joy Osmanski",
						"firstName": "Joy",
						"middleName": "",
						"lastName": "Osmanski,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2013-10-08",
					"imprint": "Simon & Schuster"
				},
				"series": {
					"name": "Visions"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<b>What Sawyer’s seeing might mean murder. The second \"dramatic, quick-paced thriller (Kirkus Reviews)\" in a series from the New York Times bestselling author of the Wake trilogy.</b>Jules should be happy. She saved a lot of people’s lives and she’s finally with Sawyer, pretty much the guy of her dreams. But the nightmare’s not over, because she somehow managed to pass the psycho vision stuff to Sawyer. Excellent. Feeling responsible for what he’s going through and knowing that people’s lives are at stake, Jules is determined to help him figure it all out. But Sawyer’s vision is so awful he can barely describe it, much less make sense of it. All he can tell her is there’s a gun, and eleven ear-splitting shots. Bang. Jules and Sawyer have to work out the details fast, because the visions are getting worse and that means only one thing: time is running out. But every clue they see takes them down the wrong path. If they can’t prevent the vision from happening, lives will be lost. And they may be among the casualties…"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100105769-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100105769-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100105769-04-63504"
					}
				}
			},
			{
				"titleId": "100106598-04-68399",
				"isbn13": "9781442368125",
				"isbn10": "",
				"format": "MP3",
				"name": "Tilt",
				"contributors": [
					{
						"contributorId": "234861",
						"name": "Ellen Hopkins",
						"firstName": "Ellen",
						"middleName": "",
						"lastName": "Hopkins",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "7113",
						"name": "Various Narrators",
						"firstName": "Various",
						"middleName": "",
						"lastName": "Narrators",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "377527",
						"name": "Kirby Heyborne",
						"firstName": "Kirby",
						"middleName": "",
						"lastName": "Heyborne",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "820727",
						"name": "Rebekkah Ross",
						"firstName": "Rebekkah",
						"middleName": "",
						"lastName": "Ross,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "856412",
						"name": "Madeleine Maby",
						"firstName": "Madeleine",
						"middleName": "",
						"lastName": "Maby,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-02-11",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<b>Love—good and bad—forces three teens’ worlds to tilt in a riveting novel from New York Times bestselling author Ellen Hopkins.</b>Three teens, three stories—all interconnected through their parents’ family relationships. As the adults pull away, caught up in their own dilemmas, the lives of the teens begin to tilt...​ Mikayla, almost eighteen, is over-the-top in love with Dylan, who loves her back. But what happens to that love when Mikayla gets pregnant the summer before their senior year—and decides to keep the baby? Shane turns sixteen that same summer and falls hard in love with his first boyfriend, Alex, who happens to be HIV positive. Shane has lived for four years with his little sister’s impending death. Can he accept Alex’s love, knowing that his life, too, will be shortened? Harley is fourteen—a good girl searching for new experiences, especially love from an older boy. She never expects to hurdle toward self-destructive extremes in order to define who she is and who she wants to be. Love, in all its forms, has crucial consequences in this standalone novel."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100106598-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100106598-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100106598-04-68399"
					}
				}
			},
			{
				"titleId": "100106615-04-73582",
				"isbn13": "9781937091774",
				"isbn10": "",
				"format": "MP3",
				"name": "David Copperfield: The Personal History, Experience and Observations of",
				"contributors": [
					{
						"contributorId": "127626",
						"name": "Charles Dickens",
						"firstName": "Charles",
						"middleName": "",
						"lastName": "Dickens",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "858140",
						"name": "B.J. Harrison",
						"firstName": "B.J.",
						"middleName": "",
						"lastName": "Harrison,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2013-01-01",
					"imprint": "B.J. Harrison"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"\"The most perfect of all the Dickens novels.\" (Virginia Woolf)\n\nDavid Copperfield is the tale of a boy who loses his parents at an early age, escapes the torturous conditions of working for his pitiless stepfather, and eventually determines to make something of himself. With a little luck and a lot of help along the way from some of the most colorful characters ever penned, David overcomes to achieve all for which he aspires. Featuring an unforgettable gallery of characters, including the cantankerous Miss Betsey, the merciless stepfather Mr. Murdstone, the obsequiously penniless Mr. Micawber, and the treacherous Uriah Heap, it is a tale so luxuriant in setting, so fabulous in character, and so pure in intent that though it was written 150 years ago, we still cheer with David during his triumph and weep with him in his suffering.\n\n\"Like many fond parents, I have in my heart of hearts a favorite child. And his name is David Copperfield.\" (From the preface by Charles Dickens)"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100106615-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100106615-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100106615-04-73582"
					}
				}
			},
			{
				"titleId": "100106982-04-74320",
				"isbn13": "9781843797746",
				"isbn10": "",
				"format": "MP3",
				"name": "The Great Poets: Wilfred Owen",
				"contributors": [
					{
						"contributorId": "194837",
						"name": "Wilfred Owen",
						"firstName": "Wilfred",
						"middleName": "",
						"lastName": "Owen",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "854768",
						"name": "Anton Lesser",
						"firstName": "Anton",
						"middleName": "",
						"lastName": "Lesser,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2013-11-13",
					"imprint": "Naxos Audiobooks"
				},
				"series": {
					"name": "Great Poets"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"No poet is more closely identified with the First World War than Wilfred Owen. His striking body of work, grim to the point of brutality yet, at the same time, majestic and awe-inspiring, defines the war for us. It is in each of these famous poems that Owen reflects on the four terrible months that he lived through; he conveys the experience of war, the death, the destruction and the filth, through a unique poetic language and a bold artistic vision. This anthology collects 49 of Owen’s iconic poems and serves not only as a perfect introduction to his verse but also as a commemoration of the sacrifice that was made by an entire generation of young men."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100106982-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100106982-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100106982-04-74320"
					}
				}
			},
			{
				"titleId": "100108342-04-67292",
				"isbn13": "9780545631617",
				"isbn10": "",
				"format": "MP3",
				"name": "A Corner of White (The Colors of Madeleine, Book 1)",
				"contributors": [
					{
						"contributorId": "184888",
						"name": "Jaclyn Moriarty",
						"firstName": "Jaclyn",
						"middleName": "",
						"lastName": "Moriarty",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "315764",
						"name": "Peter McGowan",
						"firstName": "Peter",
						"middleName": "",
						"lastName": "McGowan",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "368113",
						"name": "Andrew Eiden",
						"firstName": "Andrew",
						"middleName": "",
						"lastName": "Eiden",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "820758",
						"name": "Fiona Hardingham",
						"firstName": "Fiona",
						"middleName": "",
						"lastName": "Hardingham,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "898981",
						"name": "Kate Reinders",
						"firstName": "Kate",
						"middleName": "",
						"lastName": "Reinders,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2013-04-01",
					"imprint": "Scholastic"
				},
				"series": {
					"name": "The Colors of Madeleine"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"The first in a rousing, funny, genre-busting trilogy from bestseller Jaclyn Moriarty!This is a tale of missing persons. Madeleine and her mother have run away from their former life, under mysterious circumstances, and settled in a rainy corner of Cambridge (in our world).Elliot, on the other hand, is in search of his father, who disappeared on the night his uncle was found dead. The talk in the town of Bonfire (in the Kingdom of Cello) is that Elliot's dad may have killed his brother and run away with the Physics teacher. But Elliot refuses to believe it. And he is determined to find both his dad and the truth.As Madeleine and Elliot move closer to unraveling their mysteries, they begin to exchange messages across worlds -- through an accidental gap that hasn't appeared in centuries. But even greater mysteries are unfolding on both sides of the gap: dangerous weather phenomena called \"color storms;\" a strange fascination with Isaac Newton; the myth of the \"Butterfly Child,\" whose appearance could end the droughts of Cello; and some unexpected kisses..."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100108342-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100108342-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100108342-04-67292"
					}
				}
			},
			{
				"titleId": "100108615-04-73417",
				"isbn13": "9780553396256",
				"isbn10": "",
				"format": "MP3",
				"name": "And We Stay",
				"contributors": [
					{
						"contributorId": "555571",
						"name": "Jenny Hubbard",
						"firstName": "Jenny",
						"middleName": "",
						"lastName": "Hubbard",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "368148",
						"name": "Erin Spencer",
						"firstName": "Erin",
						"middleName": "",
						"lastName": "Spencer",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-07-08",
					"imprint": "Penguin Random House"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>A Michael L. Printz Honor Award Winner in the vein<b> of This is Where It Ends</b></b><b> \"A gentle, lyrical story of incomprehensible sorrow faced with quiet courage.\"—<b>ELIZABETH WEIN, New York Times bestselling author</b> \"Hubbard treats tragedy and new beginnings with a skilled, delicate hand.\"—<b>JOHN COREY WHALEY, author of Where Things Come Back, winner of the Michael L. Printz Award</b></b> Senior Paul Wagoner walks into his school with a stolen gun, threatens his girlfriend, Emily Beam, and then takes his own life. Soon after, angry and guilt-ridden Emily is sent to a boarding school in Amherst, Massachusetts, where two quirky fellow students and the spirit of Emily Dickinson offer helping hands. But it is up to Emily Beam to heal her own damaged self, to find the good behind the bad, hope inside the despair, and springtime under the snow. <b>A Boston Globe Best YA Novel of the Year A Kirkus Reviews Best Book of the Year  A Tayshas High School Reading List SelectionA North Carolina Young Adult book Award Nominee * \"</b>As <b>graceful </b>as a feather drifting down, this lyrical story delivers a deep journey of healing on a tragic theme.\"—Kirkus Reviews, <b>Starred</b> <b><b>* </b>\"</b>And We Stay is <b>a little gem of a book</b>. . . . there is certainly something for anyone looking for a good read with a strong, believable female lead who is working her hardest to overcome tragedy.\"—School Library Journal, <b>Starred</b> \"Hubbard’s writing is <b>elegant</b> and emotional.\"—Publisher’s Weekly \"This novel is accomplished, polished, and mixes prose and poetry to <b>stunning </b>effect.\"—Booklist  \"Hubbard . . . <b>captures perfectly</b> the turbulence of young love, the bonds of friendship, and the push-and-pull dynamic between teens and adults.\"—VOYA"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100108615-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100108615-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100108615-04-73417"
					}
				}
			},
			{
				"titleId": "100109706-04-76162",
				"isbn13": "9780739368312",
				"isbn10": "",
				"format": "MP3",
				"name": "Clariel",
				"contributors": [
					{
						"contributorId": "128169",
						"name": "Garth Nix",
						"firstName": "Garth",
						"middleName": "",
						"lastName": "Nix",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "857066",
						"name": "Graeme Malcolm",
						"firstName": "Graeme",
						"middleName": "",
						"lastName": "Malcolm,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-10-14",
					"imprint": "Penguin Random House"
				},
				"series": {
					"name": "Abhorsen | The Old Kingdom"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"The long-awaited fourth audiobook in the New York Times bestselling Old Kingdom series by Garth Nix.Award-winning author Garth Nix returns to the Old Kingdom with a thrilling prequel complete with dark magic, royalty, dangerous action, a strong heroine, and flawless world-building. This epic fantasy adventure is destined to be a classic, and is perfect for fans of Game of Thrones.Clariel is the daughter of one of the most notable families in the Old Kingdom, with blood relations to the Abhorsen and, most important, to the King. She dreams of living a simple life but discovers this is hard to achieve when a dangerous Free Magic creature is loose in the city, her parents want to marry her off to a killer, and there is a plot brewing against the old and withdrawn King Orrikan. When Clariel is drawn into the efforts to find and capture the creature, she finds hidden sorcery within herself, yet it is magic that carries great dangers. Can she rise above the temptation of power, escape the unwanted marriage, and save the King?"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100109706-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100109706-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100109706-04-76162"
					}
				}
			},
			{
				"titleId": "100109925-04-87774",
				"isbn13": "9781780003610",
				"isbn10": "",
				"format": "MP3",
				"name": "The Importance Of Being Earnest",
				"contributors": [
					{
						"contributorId": "127624",
						"name": "Oscar Wilde",
						"firstName": "Oscar",
						"middleName": "",
						"lastName": "Wilde",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "880797",
						"name": "Gielgud Sir John",
						"firstName": "Gielgud,",
						"middleName": "",
						"lastName": "Sir John",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "915571",
						"name": "Evans Dame Edith",
						"firstName": "Evans,",
						"middleName": "",
						"lastName": "Dame Edith",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-01-01",
					"imprint": "The Copyright Group"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"The Importance Of Being Earnest is undoubtedly Oscar Wilde’s best known  play probably due to its sharp wit that cannot help but enchant and entertain any reader or theatregoer.  Here his economic and finely honed words are delivered by a superb cast that is headed by England’s finest, namely Sir John Gielgud and Dame Edith Evans that help make this the ultimate listening experience for fans of classic theatre."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100109925-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100109925-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100109925-04-87774"
					}
				}
			},
			{
				"titleId": "100110091-04-74929",
				"isbn13": "9780062345790",
				"isbn10": "",
				"format": "MP3",
				"name": "Snow Like Ashes",
				"contributors": [
					{
						"contributorId": "224701",
						"name": "Sara Raasch",
						"firstName": "Sara",
						"middleName": "",
						"lastName": "Raasch",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "855360",
						"name": "Kate Rudd",
						"firstName": "Kate",
						"middleName": "",
						"lastName": "Rudd,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-10-14",
					"imprint": "HarperCollins"
				},
				"series": {
					"name": "Snow Like Ashes"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p>A striking fantasy tale of dark magic, dangerous politics, and discovering your true self—perfect for fans of <em>Game of Thrones</em>, <em>An Ember in the Ashes</em> and <em>A Court of Thorns and Roses</em>.</p><p>Sixteen years ago the Kingdom of Winter was conquered and its citizens enslaved, leaving them without magic or a monarch. Now the Winterians' only hope for freedom is the eight survivors who managed to escape, and who have been waiting for the opportunity to steal back Winter's magic and rebuild the kingdom ever since.</p><p>Orphaned as an infant during Winter's defeat, Meira has lived her whole life as a refugee. Training to be a warrior—and desperately in love with her best friend, Winter's future king—she would do anything to help Winter rise to power again.</p><p>So when scouts discover the location of the ancient locket that can restore Winter's magic, Meira decides to go after it herself—only to find herself thrust into a world of evil magic and dangerous politics—and ultimately comes to realize that her destiny is not, never has been, her own.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100110091-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100110091-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100110091-04-74929"
					}
				}
			},
			{
				"titleId": "100110137-04-76258",
				"isbn13": "9781442374836",
				"isbn10": "",
				"format": "MP3",
				"name": "Sublime",
				"contributors": [
					{
						"contributorId": "233987",
						"name": "Christina Lauren",
						"firstName": "Christina",
						"middleName": "",
						"lastName": "Lauren",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "863203",
						"name": "Elizabeth Louise",
						"firstName": "Elizabeth",
						"middleName": "",
						"lastName": "Louise,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "893227",
						"name": "Cal Wembly",
						"firstName": "Cal",
						"middleName": "",
						"lastName": "Wembly,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-10-14",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>True love may mean certain death in a ghostly affair of risk and passion from New York Times bestselling duo Christina Lauren, authors of Beautiful Bastard. Tahereh Mafi, New York Times bestselling author of Shatter Me calls Sublime \"a beautiful, haunting read.\"</b>When Lucy walks out of a frozen forest, wearing only a silk dress and sandals, she isn’t sure how she got there. But when she sees Colin, she knows for sure that she’s here for him. Colin has never been captivated by a girl the way he is by Lucy. With each passing day their lives intertwine, and even as Lucy begins to remember more of her life—and her death—neither of them are willing to give up what they have, no matter how impossible it is. And when Colin finds a way to physically be with Lucy, taking himself to the brink of death where his reality and Lucy’s overlap, the joy of being together for those brief stolen moments drowns out everything in the outside world. But some lines weren’t meant to be crossed…"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100110137-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100110137-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100110137-04-76258"
					}
				}
			},
			{
				"titleId": "100111291-04-68387",
				"isbn13": "9781442368095",
				"isbn10": "",
				"format": "MP3",
				"name": "Smoke",
				"contributors": [
					{
						"contributorId": "234861",
						"name": "Ellen Hopkins",
						"firstName": "Ellen",
						"middleName": "",
						"lastName": "Hopkins",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "386624",
						"name": "January Lavoy",
						"firstName": "January",
						"middleName": "",
						"lastName": "Lavoy",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "859578",
						"name": "Candace Thaxton",
						"firstName": "Candace",
						"middleName": "",
						"lastName": "Thaxton,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2013-09-10",
					"imprint": "Simon & Schuster"
				},
				"series": {
					"name": "Burned"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>Pattyn’s father is dead. Now she’s on the run in this riveting companion to New York Times bestseller Burned, which Kirkus Reviews calls \"a strong, painful, and tender piece about wresting hope from the depths of despair.\"</b>Pattyn Von Stratten’s father is dead, and Pattyn is on the run. After far too many years of abuse at the hands of her father, and after the tragic loss of her beloved Ethan and their unborn child, Pattyn is desperate for peace. Only her sister Jackie knows what happened that fatal night, but she is stuck at home with their mother, who clings to normalcy by allowing the truth to be covered up by their domineering community leaders. Her father might be finally gone, but without Pattyn, Jackie is desperately isolated. Alone and in disguise, Pattyn starts a new life as a migrant worker on a California ranch. But is it even possible to rebuild a life when everything you’ve known has burned to ash and lies seem far safer than the truth? Bestselling author Ellen Hopkins continues the riveting story of Pattyn Von Stratten she began in Burned to explore what it takes to rise from the ashes, put ghosts to rest, and step into a future."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100111291-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100111291-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100111291-04-68387"
					}
				}
			},
			{
				"titleId": "100111538-04-76777",
				"isbn13": "9780792751922",
				"isbn10": "",
				"format": "MP3",
				"name": "The Winter's Tale",
				"contributors": [
					{
						"contributorId": "127607",
						"name": "William Shakespeare",
						"firstName": "William",
						"middleName": "",
						"lastName": "Shakespeare",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "7113",
						"name": "Various Narrators",
						"firstName": "Various",
						"middleName": "",
						"lastName": "Narrators",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "338601",
						"name": "Eileen Atkins",
						"firstName": "Eileen",
						"middleName": "",
						"lastName": "Atkins",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "911088",
						"name": "Sinead Cusack",
						"firstName": "Sinead",
						"middleName": "",
						"lastName": "Cusack,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "984665",
						"name": "Ciaran Hinds",
						"firstName": "Ciaran",
						"middleName": "",
						"lastName": "Hinds,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "1021805",
						"name": "Paul Jesson",
						"firstName": "Paul",
						"middleName": "",
						"lastName": "Jesson,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2007-07-01",
					"imprint": "Blackstone Audio"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>King Leontes of Sicilia is seized by sudden and terrible jealousy of his wife Hermione, whom he accuses of adultery. He believes the child Hermione is bearing was fathered by his friend Polixenes, and when the baby girl is born he orders her to be taken to some wild place and left to die. Though Hermione’s child escapes death, Leontes’ cruelty has terrible consequences. Loss paves the way for reunion, and life and hope are born out of desolation and despair.</p><p>One of the late romances in Shakespeare’s canon, this complex work is at times tragic, at times humorous, but always entertaining and enlightening.</p><p>Sinead Cusack plays Hermione, and Ciaran Hinda plays Leontes. Eileen Atkins is Paulina and Paul Jesson is Polixenes. Time the Chorus is played by Sir John Gielgud.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100111538-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100111538-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100111538-04-76777"
					}
				}
			},
			{
				"titleId": "100112145-04-88796",
				"isbn13": "9781101916568",
				"isbn10": "",
				"format": "MP3",
				"name": "The Book of Ivy",
				"contributors": [
					{
						"contributorId": "713222",
						"name": "Amy Engel",
						"firstName": "Amy",
						"middleName": "",
						"lastName": "Engel",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "856889",
						"name": "Taylor Meskimen",
						"firstName": "Taylor",
						"middleName": "",
						"lastName": "Meskimen,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-11-11",
					"imprint": "Penguin Random House"
				},
				"series": {
					"name": "The Book of Ivy"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"What would you kill for? After a brutal nuclear war, the United States was left decimated. A small group of survivors eventually banded together, but only after more conflict over which family would govern the new nation. The Westfalls lost. Fifty years later, peace and control are maintained by marrying the daughters of the losing side to the sons of the winning group in a yearly ritual. This year, it is my turn. My name is Ivy Westfall, and my mission is simple: to kill the president’s son—my soon-to-be husband—and return the Westfall family to power. But Bishop Lattimer is either a very skilled actor or he’s not the cruel, heartless boy my family warned me to expect. He might even be the one person in this world who truly understands me. But there is no escape from my fate. I am the only one who can restore the Westfall legacy.Because Bishop must die. And I must be the one to kill him…"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100112145-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100112145-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100112145-04-88796"
					}
				}
			},
			{
				"titleId": "100113450-04-48816",
				"isbn13": "9780739350201",
				"isbn10": "",
				"format": "MP3",
				"name": "The Best of Edgar Allan Poe",
				"contributors": [
					{
						"contributorId": "130221",
						"name": "Edgar Allan Poe",
						"firstName": "Edgar Allan",
						"middleName": "",
						"lastName": "Poe",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "896134",
						"name": "Edward Blake",
						"firstName": "Edward",
						"middleName": "",
						"lastName": "Blake,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2008-06-10",
					"imprint": "Penguin Random House"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"The best and most revered works of famed poet and author, Edgar Allen Poe."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100113450-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100113450-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100113450-04-48816"
					}
				}
			},
			{
				"titleId": "100113629-04-48363",
				"isbn13": "9780307967220",
				"isbn10": "",
				"format": "MP3",
				"name": "Spirit Junkie: A Radical Road to Self-Love and Miracles",
				"contributors": [
					{
						"contributorId": "183903",
						"name": "Gabrielle Bernstein",
						"firstName": "Gabrielle",
						"middleName": "",
						"lastName": "Bernstein",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "183903",
						"name": "Gabrielle Bernstein",
						"firstName": "Gabrielle",
						"middleName": "",
						"lastName": "Bernstein",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2011-09-13",
					"imprint": "Penguin Random House"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p><b>\"So long, Carrie Bradshaw—there’s a new role model for go-getting thirty-somethings. Gabrielle Bernstein is doling out inner peace and self-love for the postmodern spiritual set.\"—Elle</b><b>Foreword by Marianne Williamson</b>Before she became a celebrated teacher and lecturer, Gabrielle Bernstein was going down a dangerous path. For years, Bernstein struggled with eating disorders, drug and alcohol abuse, and constant self-doubt and self-loathing. That all changed when she discovered A Course in Miracles, which taught her that much of what she feared in life was not frightening at all and, in many cases, not even real.Now, Bernstein lives an empowered, healthy, and joyful life. In Spirit Junkie, Bernstein guides readers through the life-changing lessons that shaped her spiritual journey: how we become accustomed to fearful ways of thinking, how to recognize and change those thought patterns to make way for bliss, and how to maintain our happiness and share it with the world. By understanding and changing our perceptions, hang-ups will melt away, resentments will release, and a childlike faith in joy will be reignited. <b>Praise for Spirit Junkie</b>\"For those ready to give up their addiction to suffering or who simply need to release the general malaise of a too-busy, too shallow way of life, Spirit Junkie is a soothing balm for the soul.  Gabrielle Bernstein is a brilliant shining guide for all who seek to have more love, more light and more miracles in their life.\"<b>—Arielle Ford, author of The Soulmate Secret </b></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100113629-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100113629-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100113629-04-48363"
					}
				}
			},
			{
				"titleId": "100113800-04-87805",
				"isbn13": "9781780003221",
				"isbn10": "",
				"format": "MP3",
				"name": "Les Miserables",
				"contributors": [
					{
						"contributorId": "127605",
						"name": "Victor Hugo",
						"firstName": "Victor",
						"middleName": "",
						"lastName": "Hugo",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "875795",
						"name": "Michael Jayston",
						"firstName": "Michael",
						"middleName": "",
						"lastName": "Jayston,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-01-01",
					"imprint": "The Copyright Group"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Les Miserables is part thrilling narrative and part social document of life in early 19th-century France. With Valjean, the reader descends into a human hell where suffering and injustice are a way of life. Through his characters, Hugo graphically details the plight of the wretched and the vulnerable. He writes with insight and passion, like that equally great 19th-century commentator and novelist, Charles Dickens. But regardless of its grim subject, Hugo's book is one of hope, a means of proclaiming his belief in the innate goodness of humanity, despite all."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100113800-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100113800-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100113800-04-87805"
					}
				}
			},
			{
				"titleId": "100113855-04-87819",
				"isbn13": "9781780003269",
				"isbn10": "",
				"format": "MP3",
				"name": "Madame Bovary",
				"contributors": [
					{
						"contributorId": "130306",
						"name": "Gustave Flaubert",
						"firstName": "Gustave",
						"middleName": "",
						"lastName": "Flaubert",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "877765",
						"name": "Jenny Agutter",
						"firstName": "Jenny",
						"middleName": "",
						"lastName": "Agutter,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-01-01",
					"imprint": "The Copyright Group"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Gustave Flaubert’s intimate portrait of Emma Bovary’s passionate yearnings for love and excitement, and his scrutiny of the dull provincial world in which she is trapped, create one of the finest French novels of the 19th century. His deep exploration of Emma’s emotions and motivations takes the reader inside her mind to long and suffer with her. The detailed descriptions of day to day life in Yonville-L’Abbaye provide a strong sense of authenticity – hence Madame Bovary is often termed the first ‘realist’ novel."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100113855-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100113855-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100113855-04-87819"
					}
				}
			},
			{
				"titleId": "100114020-04-130377",
				"isbn13": "9780008175412",
				"isbn10": "",
				"format": "MP3",
				"name": "Queen of Hearts",
				"contributors": [
					{
						"contributorId": "299524",
						"name": "Colleen Oakes",
						"firstName": "Colleen",
						"middleName": "",
						"lastName": "Oakes",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "321222",
						"name": "Moira Quirk",
						"firstName": "Moira",
						"middleName": "",
						"lastName": "Quirk",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2016-05-05",
					"imprint": "HarperCollins UK"
				},
				"series": {
					"name": "Queen of Hearts"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Dorothy Must Die meets Alice in Wonderland!</p><p>This is not a story of happily ever after – it’s the twisted YA origin story of an infamous villain…</p><p>Dinah is a princess, the future Queen of Hearts, who will one day reign over Wonderland. Unaware of the dark depths of her kingdom; she longs only for her father’s approval and to reign with the boy she loves.</p><p>But when a betrayal breaks her heart and threatens her throne, Dinah is launched into the dangers of Wonderland. She must stay one step ahead of her enemies or she’ll lose not just the crown, it will be off with her head!</p><p>Evil is brewing in Wonderland, and maybe, most frighteningly, in Dinah herself.</p><p>The first in an epic, imaginative series tells the origin of one of the most infamous villains – the Queen of Hearts.</p><p>This top teen fiction reimagines the classic tale of the Queen of Hearts. Dinah, a young princess, must navigate through the treacherous waters of royalty and betrayal to claim her throne in this best teenage fantasy.</p><p>For fans of Marissa Meyer (Heartless), Stephanie Garber (Once Upon A Broken Heart), Olivie Blake (The Atlas Six), Lexi Ryan (These Hollow Vows), and Chloe Gong (These Violent Delights).</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100114020-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100114020-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100114020-04-130377"
					}
				}
			},
			{
				"titleId": "100114279-04-140936",
				"isbn13": "9781518935152",
				"isbn10": "",
				"format": "MP3",
				"name": "The Happy Prince and Other Tales",
				"contributors": [
					{
						"contributorId": "127624",
						"name": "Oscar Wilde",
						"firstName": "Oscar",
						"middleName": "",
						"lastName": "Wilde",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "945135",
						"name": "Joy Chan",
						"firstName": "Joy",
						"middleName": "",
						"lastName": "Chan,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2016-09-08",
					"imprint": "Author's Republic"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"In these delightful tales, Oscar Wilde employs all his grace, artistry and wit. The Happy Prince tells of the statue of a once pleasure-loving Prince which, with the help of a selfless Swallow helps people in distress. As well as The Nightingale and the Rose, The Devoted Friend and The Remarkable Rocket, this collection contains The Selfish Giant, a remarkable story of the redemptive power of love."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100114279-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100114279-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100114279-04-140936"
					}
				}
			},
			{
				"titleId": "100114641-04-89782",
				"isbn13": "9781442385115",
				"isbn10": "",
				"format": "MP3",
				"name": "Rumble",
				"contributors": [
					{
						"contributorId": "234861",
						"name": "Ellen Hopkins",
						"firstName": "Ellen",
						"middleName": "",
						"lastName": "Hopkins",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "377527",
						"name": "Kirby Heyborne",
						"firstName": "Kirby",
						"middleName": "",
						"lastName": "Heyborne",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-12-02",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>Does it get better? The New York Times bestselling author of Crank and Tricks explores the highly charged landscapes of bullying and forgiveness in this \"strong and worthy\" (Kirkus Reviews) novel.</b>Matthew Turner knows it doesn’t get better. His younger brother Luke was bullied mercilessly after one of Matt’s friends outed Luke to the whole school, and when Luke called Matt—on the brink of suicide—Matt was too wrapped up in his new girlfriend to answer the phone. Now Luke is gone, and Matt’s family is falling apart. No matter what his girlfriend Hayden says about forgiveness, there’s no way Matt’s letting those he blames off the hook—including himself. As Matt spirals further into bitterness, he risks losing Hayden, the love of his life. But when her father begins to pressure the school board into banning books because of their homosexual content, he begins to wonder if he and Hayden ever had anything in common. With brilliant sensitivity and emotional resonance, bestselling author Ellen Hopkins’s Rumble explores bullying and suicide in a powerful story that examines the value of forgiveness and reconciliation."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100114641-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100114641-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100114641-04-89782"
					}
				}
			},
			{
				"titleId": "100115431-04-34732",
				"isbn13": "9781442303645",
				"isbn10": "",
				"format": "MP3",
				"name": "The Secret to Teen Power",
				"contributors": [
					{
						"contributorId": "243178",
						"name": "Paul Harrington",
						"firstName": "Paul",
						"middleName": "",
						"lastName": "Harrington",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "977586",
						"name": "Cassidy Lehrman",
						"firstName": "Cassidy",
						"middleName": "",
						"lastName": "Lehrman,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "977587",
						"name": "Ray Santiago",
						"firstName": "Ray",
						"middleName": "",
						"lastName": "Santiago,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2009-12-08",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"The Secret is an international phenomenon that has inspired millions of people to live extraordinary lives. The Secret to Teen Power makes that knowledge accessible and relevant to today's teens. It explains the law of attraction in relation to teen issues such as friends and popularity, schoolwork, self-image, and relationships. It explains how teens can transform their own lives and live their dreams."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100115431-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100115431-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100115431-04-34732"
					}
				}
			},
			{
				"titleId": "100115639-04-34955",
				"isbn13": "9780743582018",
				"isbn10": "",
				"format": "MP3",
				"name": "Swoon",
				"contributors": [
					{
						"contributorId": "236523",
						"name": "Nina Malkin",
						"firstName": "Nina",
						"middleName": "",
						"lastName": "Malkin",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "859484",
						"name": "Caitlin Greer",
						"firstName": "Caitlin",
						"middleName": "",
						"lastName": "Greer,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2009-05-19",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"Sin is coming... Prepare to Swoon. Torn from her native New York City and dumped in the land of cookie-cutter preps, Candice is resigned to accept her posh, dull fate. Nothing ever happens in Swoon, Connecticut...until Dice's perfect, privileged cousin Penelope nearly dies in a fall from an old tree, and her spirit intertwines with that of a ghost. His name? Sinclair Youngblood Powers. His mission? Revenge. And while Pen is oblivious to the possession, Dice is all too aware of Sin. She's intensely drawn to him—but not at all crazy about the havoc he's wreaking. Determined to exorcise the demon, Dice accidentally sets Sin loose, gives him flesh, makes him formidable. Now she must destroy an even more potent—and irresistible—adversary, before the whole town succumbs to Sin's will. Only trouble is, she's in love with him. What do you do when the boy of your dreams is too bad to be true? \"Sexy and deeply seductive...Swoon will make your every sense tingle!\" --<b>Melissa de la Cruz</b>, bestselling author of the Blue Bloods series \"A captivatingly unique story of first love. Nina Malkin’s smart, vivid writing is a breath of fresh air. Simply unforgettable . . . Swoon will haunt you.\" --<b>Lara Adrian</b>, bestselling author of the Midnight Breed series \"Swoon is (forgive the pun) divinely swoon-worthy. Fast, sexy, clever--fans of Twilight have a new heroine to root for. I couldn't put it down!\" --<b>Karen Marie Moning</b>, bestselling author of the Highlander and Fever series \"A spine-tingling collision of past and present, revenge and justice, lust and rage. True love has never been so truly terrifying.\" --<b>Robin Wasserman</b>, author of the Seven Deadly Sins series and Skinned"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100115639-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100115639-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100115639-04-34955"
					}
				}
			},
			{
				"titleId": "100115766-04-34111",
				"isbn13": "9780743579629",
				"isbn10": "",
				"format": "MP3",
				"name": "Jay McGraw's Life Strategies for Dealing with Bullies",
				"contributors": [
					{
						"contributorId": "236764",
						"name": "Jay McGraw",
						"firstName": "Jay",
						"middleName": "",
						"lastName": "McGraw",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "236764",
						"name": "Jay McGraw",
						"firstName": "Jay",
						"middleName": "",
						"lastName": "McGraw",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2008-10-28",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"\"Every day, Danny does something to frighten Craig....  Craig is smaller and far too scared to tell even his parents, let alone his teachers.  He is miserable. And every day, Danny tries harder to make it worse.\"  On the internet, on playgrorounds, and in schoohoohools across the country, thousands of elementary and middle school kids are picked on, teased, and harassed by bullies. It's something that can jeopardize a child's development -- unless they have the tools to help stop bullying in its tracks.   In Jay McGraw's Life Strategies for Dealing with Bullies, McGraw helps kids identify potentially harmful situations and deal with bullies through tips, techniques, and examples that apply to real-life situations. Jay doesn't just speak about the bullies -- he also speaks to the bullies themselves to help them change their ways.   Jay takes a no-nonsense approach to bullying and the ways listeners can handle it. This timely and much-needed audiobook will provide the tools for kids across the country to use in order to stop being victims -- and take back the power in their lives.   Bullying online, at school, and at sporting events is worse than it's ever been, and we are all tired of reading about kids hurting other kids, both emotionally and physically. I can't make this problem go away -- only you can. If you're a kid who's getting bullied, you owe it to yourself to stop it from happening again.   I'm not saying it's going to be easy. It will take some work.  But you can do it -- and you have to!  This audiobook isn't just a bunch of ideas I've come up with out of thin air. They are real stories and strategies that have worked for other people and will work for you, too.  It starts with you. You can do it!"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100115766-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100115766-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100115766-04-34111"
					}
				}
			},
			{
				"titleId": "100116016-04-88519",
				"isbn13": "9780545788571",
				"isbn10": "",
				"format": "MP3",
				"name": "Mark of the Thief (Mark of the Thief, Book 1)",
				"contributors": [
					{
						"contributorId": "673319",
						"name": "Jennifer A. Nielsen",
						"firstName": "Jennifer A.",
						"middleName": "",
						"lastName": "Nielsen",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "377591",
						"name": "MacLeod Andrews",
						"firstName": "MacLeod",
						"middleName": "",
						"lastName": "Andrews",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-02-24",
					"imprint": "Scholastic"
				},
				"series": {
					"name": "Mark of the Thief"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"Jennifer A. Nielsen, author of the NYT and USA TODAY bestselling Ascendance Trilogy, has woven an electrifying tale of greed and power, magic and destiny, and one boy's courage at the heart of it all.When Nic, a slave in the mines outside of Rome, is forced to enter a sealed cavern containing the lost treasures of Julius Caesar, he finds much more than gold and gemstones: He discovers an ancient bulla, an amulet that belonged to the great Caesar and is filled with a magic once reserved for the Gods -- magic some Romans would kill for.Now, with the deadly power of the bulla pulsing through his veins, Nic is determined to become free. But instead, he finds himself at the center of a ruthless conspiracy to overthrow the emperor and spark the Praetor War, a battle to destroy Rome from within. Traitors and spies lurk at every turn, each more desperate than the next to use Nic's newfound powers for their own dark purposes. In a quest to stop the rebellion, save Rome, and secure his own freedom, Nic must harness the magic within himself and defeat the empire's most powerful and savage leaders."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100116016-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100116016-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100116016-04-88519"
					}
				}
			},
			{
				"titleId": "100116455-04-81696",
				"isbn13": "9780553556001",
				"isbn10": "",
				"format": "MP3",
				"name": "Denton Little's Deathdate",
				"contributors": [
					{
						"contributorId": "252197",
						"name": "Lance Rubin",
						"firstName": "Lance",
						"middleName": "",
						"lastName": "Rubin",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "252197",
						"name": "Lance Rubin",
						"firstName": "Lance",
						"middleName": "",
						"lastName": "Rubin",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-04-14",
					"imprint": "Penguin Random House"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>**The Snapchat Original series, Denton's Deathdate, is here—check it out!**Get ready to die laughing: this is an outrageously funny ride through the last hours of a teenager’s life as he searches for love, meaning, answers, and (just maybe) a way to live on.</b>  Denton Little’s Deathdate takes place in a world exactly like our own except that everyone knows the day on which they will die. For Denton, that’s in just two days—the day of his senior prom.   Despite his early deathdate, Denton has always wanted to live a normal life, but his final days are filled with dramatic firsts. First hangover. First sex. First love triangle—as the first sex seems to have happened not with his adoring girlfriend, but with his best friend’s hostile sister. (Though he’s not totally sure—see, first hangover.) His anxiety builds when he discovers a strange purple rash making its way up his body. Is this what will kill him? And then a strange man shows up at his funeral, claiming to have known Denton’s long-deceased mother, and warning him to beware of suspicious government characters. . . . Suddenly Denton’s life is filled with mysterious questions and precious little time to find the answers.  <b>Fall in love with Denton Little!</b>\"Rubin is really funny but like John Green, he manages to be poignant at the same time. You'll laugh out loud while you read this, but you're probably going to tear up a bit too.\" --Bustle\"The dialogue is witty and raunchy, the plot is uniquely twisted, and the ending is to die for. This book will fly off the shelves.\"--VOYA\"Lance Rubin creates a world in which (almost) everyone can answer the question, ‘What would you do if you knew when you were going to die?’ and holy s*#! the answers are hilarious. I don’t think I’ve laughed at death so much in a long, long time. Read this book, it’ll have you dying.\" —Isabel Quintero, Morris Award-winning author of Gabi, A Girl in Pieces\"Hilarious, thought-provoking, irreverent, unforgettable. . . . Live your own death, Dent. We love you.\" --Catherine Gilbert Murdock, author of Dairy Queen \"If Six Feet Under had been created by John Hughes: that’s Denton Little’s Deathdate.\" —Tim Federle, author of The Great American Whatever \"Wildly funny, brilliantly weird, and achingly heartfelt.\" —Becky Albertalli, Morris Award–winning author of Simon vs. the Homo Sapiens Agenda\"Highly original, fantastically entertaining, and laugh-out-loud funny, Denton Little's Deathdate is a wild romp through a night like no other.\" --Jennifer E. Smith, author of The Geography of You and Me\"An utterly enjoyable, engrossing page-turner.\" -- Bulletin\"The tweaked contemporary setting, irreverent end-of-life humor, and big, existential questions make this a good pick for fans of John Corey Whaley’s Noggin.\" -- Publishers Weekly"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100116455-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100116455-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100116455-04-81696"
					}
				}
			},
			{
				"titleId": "100116998-04-74621",
				"isbn13": "9781442347564",
				"isbn10": "",
				"format": "MP3",
				"name": "Ashes to Ashes",
				"contributors": [
					{
						"contributorId": "235181",
						"name": "Jenny Han",
						"firstName": "Jenny",
						"middleName": "",
						"lastName": "Han",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "235182",
						"name": "Siobhan Vivian",
						"firstName": "Siobhan",
						"middleName": "",
						"lastName": "Vivian",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "820727",
						"name": "Rebekkah Ross",
						"firstName": "Rebekkah",
						"middleName": "",
						"lastName": "Ross,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "852432",
						"name": "Joy Osmanski",
						"firstName": "Joy",
						"middleName": "",
						"lastName": "Osmanski,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "856412",
						"name": "Madeleine Maby",
						"firstName": "Madeleine",
						"middleName": "",
						"lastName": "Maby,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-09-16",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>Think Mary, Kat, and Lillia have nothing left to lose? Think again. The fiery conclusion to the Burn for Burn trilogy from New York Times bestselling author of To All the Boys I’ve Loved Before (soon to be a major motion picture!), Jenny Han, and New York Times bestselling author of The List, Siobhan Vivian.</b>They only meant to right the wrongs. It was about getting even. Burn for burn. But the fire they lit kept raging…Reeve ended up hurt, then Rennie ended up dead. Everything will turn to ash if they don’t stop what they started. But now that Mary knows the truth about what happened to her, will she want to? Secrets drew Lillia, Kat, and Mary together. The truth might tear them apart."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100116998-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100116998-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100116998-04-74621"
					}
				}
			},
			{
				"titleId": "100117000-04-59673",
				"isbn13": "9781442363090",
				"isbn10": "",
				"format": "MP3",
				"name": "Out of Reach",
				"contributors": [
					{
						"contributorId": "237461",
						"name": "Carrie Arcos",
						"firstName": "Carrie",
						"middleName": "",
						"lastName": "Arcos",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "859578",
						"name": "Candace Thaxton",
						"firstName": "Candace",
						"middleName": "",
						"lastName": "Thaxton,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2012-11-13",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<b>How do you find someone who doesn’t want to be found? A girl searches for her missing addict brother while confronting her own secrets in this darkly lyrical novel, a National Book Award Finalist.</b>Rachel has always idolized her older brother Micah. He struggles with addiction, but she tells herself that he’s in control. And she almost believes it. Until the night that Micah doesn’t come home. Rachel’s terrified—and she can’t help but feel responsible. She should have listened when Micah tried to confide in her. And she only feels more guilt when she receives an anonymous note telling her that Micah is nearby and in danger. With nothing more to go on than hope and a slim lead, Rachel and Micah’s best friend, Tyler, begin the search. Along the way, Rachel will be forced to confront her own dark secrets, her growing attraction to Tyler…and the possibility that Micah may never come home."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100117000-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100117000-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100117000-04-59673"
					}
				}
			},
			{
				"titleId": "100117028-04-62663",
				"isbn13": "9781442347533",
				"isbn10": "",
				"format": "MP3",
				"name": "Fire with Fire",
				"contributors": [
					{
						"contributorId": "235181",
						"name": "Jenny Han",
						"firstName": "Jenny",
						"middleName": "",
						"lastName": "Han",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "235182",
						"name": "Siobhan Vivian",
						"firstName": "Siobhan",
						"middleName": "",
						"lastName": "Vivian",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "820727",
						"name": "Rebekkah Ross",
						"firstName": "Rebekkah",
						"middleName": "",
						"lastName": "Ross,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "852432",
						"name": "Joy Osmanski",
						"firstName": "Joy",
						"middleName": "",
						"lastName": "Osmanski,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "856412",
						"name": "Madeleine Maby",
						"firstName": "Madeleine",
						"middleName": "",
						"lastName": "Maby,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2013-08-13",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>Secrets prove deadly in book two of the Burn for Burn trilogy from New York Times bestselling author of To All the Boys I’ve Loved Before (soon to be a major motion picture!), Jenny Han, and New York Times bestselling author of The List, Siobhan Vivian.</b>Lillia, Kat, and Mary had the perfect plan. Work together in secret to take down the people who wronged them. But things didn’t exactly go the way they’d hoped at the Homecoming Dance. Not even close. For now, it looks like they got away with it. All they have to do is move on and pick up the pieces, forget there was ever a pact. But there is something seriously wrong with sweet, little Mary. If she can’t control her anger, she’s sure someone will get hurt. Mary understands now that it’s not just that Reeve bullied her—it’s that he made her love him. It seems once a fire is lit, the only thing you can do is let it burn…"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100117028-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100117028-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100117028-04-62663"
					}
				}
			},
			{
				"titleId": "100117497-04-81249",
				"isbn13": "9781442381773",
				"isbn10": "",
				"format": "MP3",
				"name": "The Remedy",
				"contributors": [
					{
						"contributorId": "172150",
						"name": "Suzanne Young",
						"firstName": "Suzanne",
						"middleName": "",
						"lastName": "Young",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "820727",
						"name": "Rebekkah Ross",
						"firstName": "Rebekkah",
						"middleName": "",
						"lastName": "Ross,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-04-21",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>A teen who’s taken on so many identities she’s not sure who she is anymore stumbles across a secret with devastating implications in this riveting third book in Suzanne Young’s New York Times bestselling Program series—now with a reimagined look.</b>In a world before The Program… Quinlan McKee is a closer. Since the age of seven, Quinn has held the responsibility of providing closure to grieving families with a special skill—she can \"become\" anyone. Recommended by grief counselors, Quinn is hired by families to take on the short-term role of a deceased loved one between the ages of fifteen and twenty. She’s not an exact copy, of course, but she wears their clothes and changes her hair, studies them through pictures and videos, and soon, Quinn can act like them, smell like them…be them. But to do her job successfully, she can’t get attached. Now seventeen, Quinn is deft at recreating herself, sometimes confusing her own past with those of the people she’s portrayed. When she’s given her longest assignment, playing the role of Catalina Barnes, Quinn begins to bond with the deceased girl’s boyfriend. But that’s only the first of many complications, especially when Quinn finds out the truth about Catalina’s death. And the epidemic it could start."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100117497-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100117497-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100117497-04-81249"
					}
				}
			},
			{
				"titleId": "100119243-04-96917",
				"isbn13": "9780545839099",
				"isbn10": "",
				"format": "MP3",
				"name": "Adrift",
				"contributors": [
					{
						"contributorId": "142868",
						"name": "Paul Griffin",
						"firstName": "Paul",
						"middleName": "",
						"lastName": "Griffin",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "142868",
						"name": "Paul Griffin",
						"firstName": "Paul",
						"middleName": "",
						"lastName": "Griffin",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-07-28",
					"imprint": "Scholastic"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"From critically acclaimed writer Paul Griffin comes a fast-paced young adult novel about five very different teens lost at sea with no one to count on but each other.Matt and John are best friends working out in Montauk for the summer.  When Driana, JoJo and Stef invite the boys to their Hamptons mansion, Matt and John find themselves in a sticky situation where temptation rivals sensibility.  The newfound friends head out into the Atlantic after midnight in a stolen boat.  None of them come back whole, and not all of them come back.Worlds collide when the group ventures out to sea aboard an antique ship that Stef sneaks out from her dad's dock. As the waves rise and the fragile vessel weakens, things go horribly wrong. Adrift at sea for days, who will have what it takes to survive?"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100119243-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100119243-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100119243-04-96917"
					}
				}
			},
			{
				"titleId": "100119318-04-42582",
				"isbn13": "9780062009012",
				"isbn10": "",
				"format": "MP3",
				"name": "Bounce: Mozart, Federer, Picasso, Beckham, and the Science of Success",
				"contributors": [
					{
						"contributorId": "168692",
						"name": "Matthew Syed",
						"firstName": "Matthew",
						"middleName": "",
						"lastName": "Syed",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "859661",
						"name": "James Clamp",
						"firstName": "James",
						"middleName": "",
						"lastName": "Clamp,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2010-04-20",
					"imprint": "HarperCollins"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"In the vein of the international bestselling <em>Freakonomics</em>, award-winning journalist Matthew Syed reveals the hidden clues to success—in sports, business, school, and just about anything else that you’d want to be great at. Fans of <em>Predictably Irrational</em> and Malcolm Gladwell’s <em>The Tipping Point </em>will find many interesting and helpful insights in <em>Bounce</em>."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100119318-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100119318-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100119318-04-42582"
					}
				}
			},
			{
				"titleId": "100120688-04-124003",
				"isbn13": "9781937091064",
				"isbn10": "",
				"format": "MP3",
				"name": "Barbara of the House of Grebe",
				"contributors": [
					{
						"contributorId": "130314",
						"name": "Thomas Hardy",
						"firstName": "Thomas",
						"middleName": "",
						"lastName": "Hardy",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "858140",
						"name": "B.J. Harrison",
						"firstName": "B.J.",
						"middleName": "",
						"lastName": "Harrison,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2007-06-29",
					"imprint": "B.J. Harrison"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Barbara, a young and impetuous heiress, rejects the stern Lord Uplandtowers to elope with a poor but handsome man, Edmund Willowes. When Barbara’s parents send Edmund to Europe, they hope to change him into a more suitable match for their daughter. But after disaster strikes, Edmund returns in a way nobody could have imagined."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100120688-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100120688-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100120688-04-124003"
					}
				}
			},
			{
				"titleId": "100121227-04-139077",
				"isbn13": "9781524775308",
				"isbn10": "",
				"format": "MP3",
				"name": "Perfect Ten",
				"contributors": [
					{
						"contributorId": "952074",
						"name": "L. Philips",
						"firstName": "L.",
						"middleName": "",
						"lastName": "Philips,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "377527",
						"name": "Kirby Heyborne",
						"firstName": "Kirby",
						"middleName": "",
						"lastName": "Heyborne",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2017-06-06",
					"imprint": "Penguin Random House"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b><b>A gay coming-of-age romantic comedy<b>—</b>perfect for fans of Love, Simon!</b></b>   It’s been two years since Sam broke up with the only other eligible gay guy in his high school, so to say he’s been going through a romantic drought is the understatement of the decade. When Meg, his ex-Catholic-turned-Wiccan best friend, suggests performing a love spell, Sam is just desperate enough to try. He crafts a list of ten traits he wants in a boyfriend and burns it in a cemetery at midnight on Friday the thirteenth.   Enter three seemingly perfect guys, all in pursuit of Sam. There’s Gus, the suave French exchange student; Jamie, the sweet and shy artist; and Travis, the guitar-playing tattooed enigma. Even Sam’s ex-boyfriend, Landon, might want another chance.   But does a Perfect Ten even exist? Find out in this delectable coming-of-age romcom with just a touch of magic."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100121227-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100121227-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100121227-04-139077"
					}
				}
			},
			{
				"titleId": "100121620-04-7012",
				"isbn13": "9789629544409",
				"isbn10": "",
				"format": "MP3",
				"name": "The Happy Prince",
				"contributors": [
					{
						"contributorId": "127624",
						"name": "Oscar Wilde",
						"firstName": "Oscar",
						"middleName": "",
						"lastName": "Wilde",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "854768",
						"name": "Anton Lesser",
						"firstName": "Anton",
						"middleName": "",
						"lastName": "Lesser,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "1998-06-23",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"Oscar Wilde’s fairy stories are among the greatest and most poignant classics for children and adults alike. Humour, pathos and delightful little characters abound in the stories of ‘The Happy Prince’ and the Swallow who agrees to keep him company despite approaching winter; ‘The Selfish Giant’, who doesn’t want children playing in his garden, and ‘The Remarkable Rocket’. In addition, there are those not so familiar – ‘The Star Child’, ‘The Young King’ and ‘The Devoted Friend’."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100121620-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100121620-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100121620-04-7012"
					}
				}
			},
			{
				"titleId": "100121756-04-94491",
				"isbn13": "9780062395818",
				"isbn10": "",
				"format": "MP3",
				"name": "Catacomb",
				"contributors": [
					{
						"contributorId": "181218",
						"name": "Madeleine Roux",
						"firstName": "Madeleine",
						"middleName": "",
						"lastName": "Roux",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "871579",
						"name": "Michael Goldstrom",
						"firstName": "Michael",
						"middleName": "",
						"lastName": "Goldstrom,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-09-01",
					"imprint": "HarperCollins"
				},
				"series": {
					"name": "Asylum"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p>The heart-stopping third book in the <em>New York Times</em> bestselling Asylum series follows three teens as they take a senior year road trip to one of America's most haunted cities, uncovering dangerous secrets from their past along the way. With all the thrills, chills, and eerie found photographs that led <em>Publishers Weekly</em> to call <em>Asylum</em> \"\"a strong YA debut,\"\" <em>Catacomb</em> is perfect for fans for <em>Miss Peregrine's Home for Peculiar Children</em>.</p><p>Sometimes the past is better off buried.</p><p>Senior year is finally over. After all they've been through, Dan, Abby, and Jordan are excited to take one last road trip together, and they're just not going to think about what will happen when the summer ends. But on their way to visit Jordan's uncle in New Orleans, the three friends notice that they're being followed . . . and photographed. Then Dan starts receiving messages from someone he didn't expect to hear from again—someone who died last Halloween.</p><p>When the trio arrives in New Orleans and the strange occurrences only escalate, Dan is forced to accept that everything that has happened to him in the past year may not be a coincidence, but fate—a fate that ties Dan to a group called the Bone Artists, who have a sinister fascination with notorious killers of the past.</p><p>Now Dan's only hope is that he will make it out of his senior trip alive.</p><p><strong>Don't miss Madeleine Roux's all-new gothic horror novel, <em>House of Furies</em>.</strong></p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100121756-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100121756-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100121756-04-94491"
					}
				}
			},
			{
				"titleId": "100122057-04-110656",
				"isbn13": "9781467699266",
				"isbn10": "",
				"format": "MP3",
				"name": "Twelve Short Stories by O. Henry",
				"contributors": [
					{
						"contributorId": "131136",
						"name": "O. Henry",
						"firstName": "O.",
						"middleName": "",
						"lastName": "Henry",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "441485",
						"name": "Cathy Dobson",
						"firstName": "Cathy",
						"middleName": "",
						"lastName": "Dobson",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-08-01",
					"imprint": "Red Door Consulting"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"O. Henry was the pen name of William Sydney Porter (1862-1910), an American writer of outstanding short stories, known for their wit, wordplay, warm characterization, and surprise endings.This collection contains twelve of his best loved tales:    1. 'The Cactus'    2. 'The Gift of the Magi'    3. 'One Thousand Dollars'    4. 'The Marionettes'    5. 'The Furnished Room'    6. 'The Unknown Quantity'    7. 'Memoirs of a Yellow Dog'    8. 'The Venturers'    9. 'The Ransom of Red Chief'    10. 'The Last Leaf'    11. 'The Cop and the Anthem'    12. 'The Clarion Call'"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100122057-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100122057-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100122057-04-110656"
					}
				}
			},
			{
				"titleId": "100123531-04-100939",
				"isbn13": "9780545921206",
				"isbn10": "",
				"format": "MP3",
				"name": "Faceless",
				"contributors": [
					{
						"contributorId": "296974",
						"name": "Alyssa Sheinmel",
						"firstName": "Alyssa",
						"middleName": "",
						"lastName": "Sheinmel",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "879617",
						"name": "Susan-Kate Heaney",
						"firstName": "Susan-Kate",
						"middleName": "",
						"lastName": "Heaney,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-09-29",
					"imprint": "Scholastic"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"Faceless is an emotionally gripping novel about a girl who gets a face transplant -- and has to rediscover her identity.While on a run one day, Maise gets into a terrible accident. A hot-burning electrical fire consumes her, destroying her face. Where her nose, cheeks, and chin used to be, now there is . . . nothing.She is lucky enough to qualify for a face transplant. But with someone else's features staring back at her in the mirror, Maise looks -- and feels -- like a stranger. The doctors promised that the transplant was her chance to live a normal life again, but nothing feels normal anymore. Before, she knew who she was -- a regular girl who ran track and got good grades, who loved her boyfriend and her best friend. Now, she can't even recognize herself. From New York Times bestselling author Alyssa Sheinmel, coauthor of The Haunting of Sunshine Girl, comes a gripping and gorgeously written tale of identity and love. This is a story of losing yourself, and the long, hard fight to find your way back."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100123531-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100123531-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100123531-04-100939"
					}
				}
			},
			{
				"titleId": "100123550-04-100924",
				"isbn13": "9781504634281",
				"isbn10": "",
				"format": "MP3",
				"name": "Library of Souls: The Third Novel of Miss Peregrine’s Peculiar Children",
				"contributors": [
					{
						"contributorId": "169278",
						"name": "Ransom Riggs",
						"firstName": "Ransom",
						"middleName": "",
						"lastName": "Riggs",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "377527",
						"name": "Kirby Heyborne",
						"firstName": "Kirby",
						"middleName": "",
						"lastName": "Heyborne",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-09-22",
					"imprint": "Blackstone Audio"
				},
				"series": {
					"name": "Miss Peregrine's Peculiar Children"
				},
				"classifications": {
					"interestAge": [
						10,
						12
					]
				},
				"language": "en",
				"descriptions": [
					"<p>The New York Times #1 best-selling series. </p><p>Miss Peregrine’s Home for Peculiar Children was the surprise bestseller of 2011—an unprecedented mix of YA fantasy and vintage photography that enthralled readers and critics alike. This third novel in the series picks up where the action of Hollow City left off.</p><p>Time is running out for the Peculiar Children. With a dangerous madman on the loose and their beloved Miss Peregrine still in danger, Jacob Portman and Emma Bloom are forced to stage the most daring of rescue missions. They’ll travel through a war-torn landscape, meet new allies, and face greater dangers than ever. Will Jacob come into his own as the hero his fellow Peculiars know him to be?</p><p>This action-packed adventure features more than fifty all-new Peculiar photographs on a bonus PDF.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100123550-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100123550-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100123550-04-100924"
					}
				}
			},
			{
				"titleId": "100123747-04-103250",
				"isbn13": "9781442384880",
				"isbn10": "",
				"format": "MP3",
				"name": "House",
				"contributors": [
					{
						"contributorId": "233987",
						"name": "Christina Lauren",
						"firstName": "Christina",
						"middleName": "",
						"lastName": "Lauren",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "863203",
						"name": "Elizabeth Louise",
						"firstName": "Elizabeth",
						"middleName": "",
						"lastName": "Louise,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "885044",
						"name": "Deacon Lee",
						"firstName": "Deacon",
						"middleName": "",
						"lastName": "Lee,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-10-06",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>Delilah and Gavin’s new love is threatened by a force uncomfortably close to home in this haunting novel from New York Times bestselling duo Christina Lauren, authors of Beautiful Bastard.</b>His shirt is black, jeans are black, and shaggy black hair falls into his eyes. And when Gavin looks up at Delilah, the dark eyes shadowed with bluish circles seem to flicker to life. He lives in that house, the one at the edge of town. Spooky and maybe haunted. Something worse than haunted. And Gavin is trapped by its secrets. Delilah and Gavin can’t resist each other. But staying together will exact a price beyond their imagining."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100123747-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100123747-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100123747-04-103250"
					}
				}
			},
			{
				"titleId": "100123767-04-108080",
				"isbn13": "9781442397361",
				"isbn10": "",
				"format": "MP3",
				"name": "Extras",
				"contributors": [
					{
						"contributorId": "168421",
						"name": "Scott Westerfeld",
						"firstName": "Scott",
						"middleName": "",
						"lastName": "Westerfeld",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "852432",
						"name": "Joy Osmanski",
						"firstName": "Joy",
						"middleName": "",
						"lastName": "Osmanski,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-10-13",
					"imprint": "Simon & Schuster"
				},
				"series": {
					"name": "Uglies"
				},
				"classifications": {
					"interestAge": [
						13,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<b>The final installment of Scott Westerfeld’s New York Times bestselling and award-winning Uglies series—a global phenomenon that started the dystopian trend.</b>A few years after rebel Tally Youngblood takes down the Specials regime, a cultural renaissance sweeps the world. \"Tech-heads\" flaunt their latest gadgets, \"kickers\" spread gossip and trends, and \"surge monkeys\" are hooked on extreme plastic surgery. Popularity rules, and everyone craves fame. Fifteen-year-old Aya Fuse is no exception. But Aya’s face rank is so low, she’s a total nobody. An extra. Her only chance at stardom is to kick a wild and unexpected story. Then she stumbles upon a big secret. Aya knows she is on the cusp of celebrity. But the information she is about to disclose will change both her fate…and that of the brave new world."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100123767-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100123767-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100123767-04-108080"
					}
				}
			},
			{
				"titleId": "100124025-04-103132",
				"isbn13": "9781442390072",
				"isbn10": "",
				"format": "MP3",
				"name": "The Death and Life of Zebulon Finch, Volume One: At the Edge of Empire",
				"contributors": [
					{
						"contributorId": "274783",
						"name": "Daniel Kraus",
						"firstName": "Daniel",
						"middleName": "",
						"lastName": "Kraus",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "377527",
						"name": "Kirby Heyborne",
						"firstName": "Kirby",
						"middleName": "",
						"lastName": "Heyborne",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-10-27",
					"imprint": "Simon & Schuster"
				},
				"series": {
					"name": "The Death and Life of Zebulon Finch"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>From the coauthor of the New York Times bestselling The Shape of Water comes the \"utterly riveting\" (Entertainment Weekly) tale of a murdered teen who is resurrected to walk the earth for more than a century.</b>May 7, 1896. Dusk. A swaggering seventeen-year-old gangster named Zebulon Finch is gunned down by the shores of Lake Michigan. But after mere minutes in the void, he is mysteriously resurrected. His second life will be nothing like his first. Zebulon’s new existence begins as a sideshow attraction in a traveling medicine show. From there he will be poked and prodded by a scientist obsessed with mastering the secrets of death. He will fight in the trenches of World War I. He will run from his nightmares—and from poverty—in Depression-era New York City. And he will become the companion of the most beautiful woman in Hollywood. Love, hate, hope, and horror—Zebulon finds them. But will he ever find redemption? \"Fearlessly weaving gore, love, philosophy, and social justice issues into one sharp whole\" (BCCB), The Death and Life of Zebulon Finch, Volume One: At the Edge of Empire is the epic saga of what it means to be human in a world so often lacking in humanity."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124025-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124025-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100124025-04-103132"
					}
				}
			},
			{
				"titleId": "100124037-04-108844",
				"isbn13": "9781442398115",
				"isbn10": "",
				"format": "MP3",
				"name": "Hotel Ruby",
				"contributors": [
					{
						"contributorId": "172150",
						"name": "Suzanne Young",
						"firstName": "Suzanne",
						"middleName": "",
						"lastName": "Young",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "327453",
						"name": "Julia Whelan",
						"firstName": "Julia",
						"middleName": "",
						"lastName": "Whelan",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-11-03",
					"imprint": "Simon & Schuster"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<b>From the New York Times bestselling author of The Program comes a haunting, romantic, and suspenseful story about one girl’s search for healing in a grand and mysterious hotel full of secrets.</b>Stay tonight. Stay forever. When Audrey Casella arrives for an unplanned stay at the grand Hotel Ruby, she’s grateful for the detour. Just months after their mother’s death, Audrey and her brother, Daniel, are on their way to live with their grandmother, dumped on the doorstep of a DNA-matched stranger because their father is drowning in his grief. Audrey and her family only plan to stay the night, but life in the Ruby can be intoxicating, extending their stay as it provides endless distractions—including handsome guest Elias Lange, who sends Audrey’s pulse racing. However, the hotel proves to be as strange as it is beautiful. Nightly fancy affairs in the ballroom are invitation only, and Audrey seems to be the one guest who doesn’t have an invite. Instead, she joins the hotel staff on the rooftop, catching whispers about the hotel’s dark past. The more Audrey learns about the new people she’s met, the more her curiosity grows. She’s torn in different directions—the pull of her past with its overwhelming loss, the promise of a future that holds little joy, and an in-between in a place that is so much more than it seems… And the 13th chapter will only add to the mystery behind the 13th floor of Hotel Ruby...and ultimately, what it means for Audrey. Welcome to the Ruby."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124037-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124037-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100124037-04-108844"
					}
				}
			},
			{
				"titleId": "100124146-04-113712",
				"isbn13": "9781508213994",
				"isbn10": "",
				"format": "MP3",
				"name": "Traffick",
				"contributors": [
					{
						"contributorId": "234861",
						"name": "Ellen Hopkins",
						"firstName": "Ellen",
						"middleName": "",
						"lastName": "Hopkins",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "327453",
						"name": "Julia Whelan",
						"firstName": "Julia",
						"middleName": "",
						"lastName": "Whelan",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "377527",
						"name": "Kirby Heyborne",
						"firstName": "Kirby",
						"middleName": "",
						"lastName": "Heyborne",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "820727",
						"name": "Rebekkah Ross",
						"firstName": "Rebekkah",
						"middleName": "",
						"lastName": "Ross,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "852952",
						"name": "Jacques Roy",
						"firstName": "Jacques",
						"middleName": "",
						"lastName": "Roy,",
						"attr": "Narrated by",
						"type": "contributor"
					},
					{
						"contributorId": "856412",
						"name": "Madeleine Maby",
						"firstName": "Madeleine",
						"middleName": "",
						"lastName": "Maby,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-11-03",
					"imprint": "Simon & Schuster"
				},
				"series": {
					"name": "Tricks"
				},
				"classifications": {
					"interestAge": [
						10,
						13
					]
				},
				"language": "en",
				"descriptions": [
					"<b>Five teens victimized by sex trafficking try to find their way to a new life in this \"sincere and moving\" (Booklist) companion to the #1 New York Times bestselling Tricks from Ellen Hopkins, author of Crank.</b>In her bestselling novel, Tricks, Ellen Hopkins introduced us to five memorable characters tackling these enormous questions: Eden, the preacher’s daughter who turns tricks in Vegas and is helped into a child prostitution rescue; Seth, the gay farm boy disowned by his father who finds himself without money or resources other than his own body; Whitney, the privileged kid coaxed into the life by a pimp and whose dreams are ruined in a heroin haze; Ginger, who runs away from home with her girlfriend and is arrested for soliciting an undercover cop; and Cody, whose gambling habit forces him into the life, but who is shot and left for dead. And now, in Traffick, these five are faced with the toughest question of all: Is there a way out? How these five teenagers face the aftermath of their decisions and experiences is the soul of this story that exposes the dark, ferocious underbelly of the child trafficking trade. Heartwrenching and hopeful, Traffick takes us on five separate but intertwined journeys through the painful challenges of recovery, rehabilitation, and renewal to forgiveness and love. All the way home."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124146-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124146-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100124146-04-113712"
					}
				}
			},
			{
				"titleId": "100124451-04-113195",
				"isbn13": "9781682767139",
				"format": "MP3",
				"name": "Modern British Drama",
				"contributors": [
					{
						"contributorId": "49423",
						"name": "Professor Peter Saccio",
						"firstName": "Professor",
						"middleName": "Peter",
						"lastName": "Saccio",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "49423",
						"name": "Professor Peter Saccio",
						"firstName": "Professor",
						"middleName": "Peter",
						"lastName": "Saccio",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "1994-02-01",
					"imprint": "The Great Courses"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>Waiting for Godot. The Importance of Being Earnest. Rosencrantz and Guildernstern Are Dead. Since Shakespeare's time, no period has produced more brilliant and varied theater in Britain than the last 100 years.</p><p>\n\nChanges in British society affected and were reflected in the theater of the times. Playwrights reacted to the social circles, governmental constructs, and economic conditions around them, using the essential elements of theater—characterization, set, dialogue—to exaggerate, parody, manipulate, or deconstruct them.</p><p>\n\nIn modern London, plays matter. They are part of the cultural dialogue of the nation. They are important for Britain's idea of itself and for its self-presentation to the world. They have been exported with great success to America and the rest of the English-speaking world.</p><p>\n\nProfessor Peter Saccio has selected the major British playwrights of the past century to cover in this course: Wilde, Shaw, Coward, Beckett, Osborne, Pinter, Stoppard, Churchill, and Hare. His reasons for selecting them vary:</p><ul><li>\n\nSome wittily celebrate (or satirize) the manners of an elite class.\n<li>Some explore the large or subtle changes in a kingdom that once ruled a quarter of the Earth and now produces royal soap opera.\n<li>Some assault the socio-political establishment.\n<li>Some probe the existential anxiety of the modern age.\n<li>All of them are enormously articulate, exploiting the verbal resources of the English language and the visual resources of the contemporary stage to hold up the mirror to our times.</li></ul><p>\n\"Unlike other media, dramatic art occurs in a certain place and time, in the 'here and now,'\" states Professor Saccio. \"The subject matter need not be visible or realistic. It can be historical, fantastic, or allegorical.\"</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124451-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124451-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100124451-04-113195"
					}
				}
			},
			{
				"titleId": "100124574-04-114251",
				"isbn13": "9781509495818",
				"isbn10": "",
				"format": "MP3",
				"name": "MBSR Every Day: Daily Practices from the Heart of Mindfulness-Based Stress Reduction",
				"contributors": [
					{
						"contributorId": "899086",
						"name": "Goldstein Elisha PhD",
						"firstName": "Goldstein,",
						"middleName": "",
						"lastName": "Elisha, PhD",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "899087",
						"name": "Stahl Bob PhD",
						"firstName": "Stahl,",
						"middleName": "",
						"lastName": "Bob, PhD",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "866898",
						"name": "Aulridge Stephen Paul Jr.",
						"firstName": "Aulridge,",
						"middleName": "Stephen",
						"lastName": "Paul, Jr.",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-08-11",
					"imprint": "Wetware Media"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>In the tradition of their highly successful A Mindfulness-Based Stress Reduction Workbook, Elisha Goldstein and Bob Stahl present a unique, accessible collection of daily practices to help listeners stay grounded in the here and now.</p><p>Stress is a part of daily life, but over time it can cause us to feel anxious, irritable, and overwhelmed. So how can you keep stress from getting the best of you and avoid total burnout? The key to maintaining balance in life is to respond to stress with genuine, nonjudgmental awareness of our bodies and minds. Drawing on the ancient wisdom of mindfulness, this practical guide will show you tons of little ways you can overcome stress every day - no matter what life throws your way.</p><p>The mindfulness strategies in this audiobook are inspired by mindfulness-based stress reduction (MBSR), a clinically proven program developed by Jon Kabat-Zinn. Research has shown that MBSR is effective in alleviating a number of health and mental health conditions, including stress, anxiety, panic, depression, chronic pain, and more. This important book works wonderfully on its own or can be used in conjunction with A Mindfulness-Based Stress Reduction Workbook.</p><p>If you are ready to permanently change the way you handle stress, gain powerful inspiration, and live more fully in the moment, this is the perfect guide.</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124574-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124574-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100124574-04-114251"
					}
				}
			},
			{
				"titleId": "100124979-04-113394",
				"isbn13": "9780545910309",
				"isbn10": "",
				"format": "MP3",
				"name": "Rise of the Wolf (Mark of the Thief, Book 2)",
				"contributors": [
					{
						"contributorId": "673319",
						"name": "Jennifer A. Nielsen",
						"firstName": "Jennifer A.",
						"middleName": "",
						"lastName": "Nielsen",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "377591",
						"name": "MacLeod Andrews",
						"firstName": "MacLeod",
						"middleName": "",
						"lastName": "Andrews",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2016-01-26",
					"imprint": "Scholastic"
				},
				"series": {
					"name": "Mark of the Thief"
				},
				"classifications": {
					"interestAge": [
						8,
						11
					]
				},
				"language": "en",
				"descriptions": [
					"NYT and USA Today bestselling author Jennifer A. Nielsen brings a new dose of adventure and thrills to ancient Rome in the second book of her magical Mark of the Thief trilogy!Nic may have escaped enslavement in the mines outside of Rome, but his troubles are far from over. The Praetor War -- the battle to destroy Rome from within -- is in full force, and Nic is caught in the crossfire. The secretive Praetors are determined to unlock a powerful amulet -- one sure to bring the empire to its knees. Worse, the Praetors believe Nic holds the key to finding this amulet, and they will stop at nothing to steal it, even if that means harming the people Nic holds most dear. When the Praetors capture Nic's mother, Nic knows he must do anything to save her. He challenges the Praetors to a chariot race. If he wins, they will release his mother. But if he loses, he must hand over a magic that will certainly bring about the end of Rome as well as his own life. Can Nic once again harness his magic and gather the strength to defeat his enemies? Or will he lose his mother and bear witness to Rome's destruction?"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124979-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100124979-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100124979-04-113394"
					}
				}
			},
			{
				"titleId": "100125038-04-26585",
				"isbn13": "9789629549534",
				"isbn10": "",
				"format": "MP3",
				"name": "North and South",
				"contributors": [
					{
						"contributorId": "135448",
						"name": "Elizabeth Gaskell",
						"firstName": "Elizabeth",
						"middleName": "",
						"lastName": "Gaskell",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "855623",
						"name": "Clare Wille",
						"firstName": "Clare",
						"middleName": "",
						"lastName": "Wille,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2010-02-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"When Margaret Hale moves with her parents from the comfort of the south of England to the industrial north, she is at first repulsed by what she sees; and then when she discovers the conditions under which the workers are forced to live, she is outraged. But this throws her into direct conflict with the powerful young mill-owner, John Thornton. Using personal passions to explore deep social divisions, North and South is a great romance – and one of Elizabeth Gaskell’s finest works."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100125038-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100125038-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100125038-04-26585"
					}
				}
			},
			{
				"titleId": "100125054-04-26329",
				"isbn13": "9789629544607",
				"isbn10": "",
				"format": "MP3",
				"name": "Jane Austen: A Biography",
				"contributors": [
					{
						"contributorId": "865287",
						"name": "Elizabeth Jenkins",
						"firstName": "Elizabeth",
						"middleName": "",
						"lastName": "Jenkins,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "365580",
						"name": "Teresa Gallagher",
						"firstName": "Teresa",
						"middleName": "",
						"lastName": "Gallagher",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2000-08-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"This highly enjoyable account of the life of Jane Austen is regarded as the classic biography of one the greatest English novelists. It illustrates not only the character and opinions of an unusually perceptive and gifted woman, but also the social life amongst the county gentry of Georgian England. Outside her writing, Jane Austen’s main interest was her large and affectionate family and their circle of friends. This is the world she so brilliantly depicted in her novels, and Elizabeth Jenkins shows how often the settings and characters mirrored the writer’s own life in Hampshire."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100125054-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100125054-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100125054-04-26329"
					}
				}
			},
			{
				"titleId": "100125777-04-117205",
				"isbn13": "9780008146320",
				"isbn10": "",
				"format": "MP3",
				"name": "Not If I See You First",
				"contributors": [
					{
						"contributorId": "286530",
						"name": "Eric Lindstrom",
						"firstName": "Eric",
						"middleName": "",
						"lastName": "Lindstrom",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "915515",
						"name": "Kathryn Griffiths",
						"firstName": "Kathryn",
						"middleName": "",
						"lastName": "Griffiths,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2015-12-31",
					"imprint": "HarperCollins UK"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"<p>The debut YA novel of 2016 that everyone will be talking about.</p><p>?Parker Grant doesn't need perfect vision to see right through you. That's why she created the Rules: Don't treat her any differently just because she's blind, and never take advantage. There will be no second chances.</p><p>When Scott Kilpatrick, the boy who broke her heart, suddenly reappears at school, Parker knows there's only one way to react – shun him so hard it hurts. She has enough to deal with already, like trying out for the track team, handing out tough-love advice to her painfully naive classmates, and giving herself gold stars for every day she hasn't cried since her dad's death. But avoiding her past quickly proves impossible, and the more Parker learns about what really happened – both with Scott, and her dad – the more she starts to question if things are always as they seem.</p><p>Not If I See You First illuminates those blind spots that we all have in life, whether visually impaired or not.</p><p>In Not If I See You First, Eric Lindstrom delves into the world of a special needs teenager dealing with grief and bereavement. This contemporary fiction is a top pick for its exploration of social themes, diversity, and teenage romance.</p><p>For fans of Whitney Gardner (You're Welcome, Universe), William Sutcliffe (The Summer We Turned Green), Will Hill (After the Fire), Justina Ireland (Dread Nation), and Farah Heron (Tahira in Bloom).</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100125777-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100125777-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100125777-04-117205"
					}
				}
			},
			{
				"titleId": "100125877-04-116195",
				"isbn13": "9780007218714",
				"isbn10": "",
				"format": "MP3",
				"name": "Angela’s Ashes",
				"contributors": [
					{
						"contributorId": "181503",
						"name": "Frank McCourt",
						"firstName": "Frank",
						"middleName": "",
						"lastName": "McCourt",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "857385",
						"name": "Kati Nicholl",
						"firstName": "Kati",
						"middleName": "",
						"lastName": "Nicholl,",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "181503",
						"name": "Frank McCourt",
						"firstName": "Frank",
						"middleName": "",
						"lastName": "McCourt",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2005-06-15",
					"imprint": "HarperCollins UK"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>McCourt’s Pulitzer Prize winning look back at his childhood. \"It was, of course, a miserable childhood: the happy childhood is hardly worth your while…\"</p><p>\"When I look back on my childhood, I wonder how I survived at all. It was, of course, a miserable childhood: the happy childhood is hardly worth your while. Worse than the ordinary miserable childhood is the miserable Irish childhood, and worse yet is the miserable Irish Catholic childhood.</p><p>People everywhere brag or whimper about the woes of their early years, but nothing can compare with the Irish version: the poverty; the shiftless loquacious father; the pious defeated mother moaning by the fire; pompous priests; bullying shcoolmasters; the English and the terrible things they did to us for eight hundred long years. Above all we were wet…\"</p><p>So begins Frank McCourt’s stunning memoir of his childhood in Ireland and America, a recollection of unvarnished truth and no self pity, of grinding poverty and indomitable spirit that will live in the memory long after the tape has ended.</p><p>Now a major film directed by Alan Parker and starring Robert Carlyle and Emily Watson.</p><p>Frank McCourt, the Sunday Times bestselling author, has once again proven his prowess in the genre of autobiography. His depiction of a miserable Irish Catholic childhood is a testament to his indomitable spirit and his ability to craft a bestselling book out of the most challenging circumstances.</p><p>For fans of Winfried Georg Sebald (The Rings of Saturn), Monica Kendall (Miss Cavell Was Shot), Dave Eggers (A Heartbreaking Work of Staggering Genius), Jung Chang (Wild Swans), and Tom Wolfe (The Electric Kool-Aid Acid Test).</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100125877-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100125877-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100125877-04-116195"
					}
				}
			},
			{
				"titleId": "100127291-04-117385",
				"isbn13": "9780007597000",
				"isbn10": "",
				"format": "MP3",
				"name": "Sanctum (Asylum, Book 2)",
				"contributors": [
					{
						"contributorId": "181218",
						"name": "Madeleine Roux",
						"firstName": "Madeleine",
						"middleName": "",
						"lastName": "Roux",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "871579",
						"name": "Michael Goldstrom",
						"firstName": "Michael",
						"middleName": "",
						"lastName": "Goldstrom,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2014-08-28",
					"imprint": "HarperCollins UK"
				},
				"series": {
					"name": "Asylum"
				},
				"classifications": {
					"interestAge": [
						12,
						17
					]
				},
				"language": "en",
				"descriptions": [
					"<p>Haunting, fast-paced sequel to the New York Times bestselling photo-illustrated novel ASYLUM.</p><p>Perfect for fans of Miss Peregrine’s Home for Peculiar Children.</p><p>Featuring real found photographs from vintage carnivals, SANCTUM is a mind-bending reading experience that blurs the lines between past and present, genius and insanity.</p><p>Dan, Abby, and Jordan were traumatised by the summer they shared at New Hampshire College, the former site of the Brookline asylum. They want to move on, but someone is determined to keep the terror alive by sending them anonymous photos of an old-time carnival.</p><p>Forsaking plans to never to go back, the teens return during a weekend for prospective students, and realise that the carnival from the photos is not only real, it's here on campus…</p><p>As Dan and his friends visit abandoned houses and hidden places of the surrounding town, they realise that Camford is hiding a terrible past, and the influence of the asylum runs deeper than they ever imagined.</p><p>SANCTUM by Madeleine Roux is a riveting supernatural fiction that will captivate young adult readers. The horror and paranormal elements combined with top mysteries make it a must-read for teenage fans of the genre.</p><p>For fans of Chris Wyatt (Teenage Mutant Ninja Turtles), Cecil Castellucci (The Eternal Kiss), and Ransom Riggs (A Map of Days).</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100127291-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100127291-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100127291-04-117385"
					}
				}
			},
			{
				"titleId": "100127522-04-117788",
				"isbn13": "9780007219643",
				"isbn10": "",
				"format": "MP3",
				"name": "Alias Grace",
				"contributors": [
					{
						"contributorId": "27810",
						"name": "Margaret Atwood",
						"firstName": "Margaret",
						"middleName": "",
						"lastName": "Atwood",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "22921",
						"name": "Diana Quick",
						"firstName": "Diana",
						"middleName": "",
						"lastName": "Quick",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2005-06-15",
					"imprint": "HarperCollins UK"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>Sixteen years after being locked up, at the age of sixteen, for the bloody murders of her employer and his housekeeper, Grace Marks is examined by Dr Simon Jordan, an expert in amnesia.</p><p>As the days and weeks pass Simon tries to prise open the memories Grace claims to have lost and reveals a life of love and betrayal, poverty and abuse, drawing the listener in to the rooms of Grace’s mind.</p><p>Alias Grace by Margaret Atwood, the Sunday Times bestselling author, is a captivating exploration of a life filled with love, betrayal, poverty, and abuse. This bestselling book is a testament to Atwood's ability to create a compelling narrative that leaves the reader wanting more.</p><p>For fans of Barbara Kingsolver (Demon Copperhead), Cormac Mccarthy (Stella Maris), Angela Carter (Angela Carter's Book Of Fairy Tales), Ian Mcewan (Lessons), and Daphne Du Maurier (Don't Look Now And Other Stories).</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100127522-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100127522-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100127522-04-117788"
					}
				}
			},
			{
				"titleId": "100127661-04-118217",
				"isbn13": "9780007523306",
				"isbn10": "",
				"format": "MP3",
				"name": "Snow Falling on Cedars",
				"contributors": [
					{
						"contributorId": "195936",
						"name": "David Guterson",
						"firstName": "David",
						"middleName": "",
						"lastName": "Guterson",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "508487",
						"name": "Tim Pigott-Smith",
						"firstName": "Tim",
						"middleName": "",
						"lastName": "Pigott-Smith",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2013-02-28",
					"imprint": "HarperCollins UK"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<p>When a Japanese-American is charged with the murder of a local fisherman, more than one man’s guilt is at stake. Soon to be a major film starring Ethan Hawke, directed by Scott Hicks (Shine).</p><p>San Piedro Island in Puget Sound is a place so isolated that no one who lives there can afford to make enemies. But in 1954 a local fisherman is found suspiciously drowned, and a Japanese-American named Kabuo Miyamoto is charged with his murder.</p><p>In the course of the ensuing trial, it becomes clear that what is at stake is more than one man’s guilt. For on San Piedro, memory grows as thickly as cedar trees and the fields of ripe strawberries – memories of a charmed love affair between a white boy and a Japanese girl who grew up to become Kabuo’s wife; memories of land desired, paid for, and lost. Above all, San Piedro is haunted by the memory of what happened to its Japanese residents during World War II, when an entire community was sent into exile while its neighbours watched.</p><p>This fiction novel, hailed as one of the best, takes you on a journey through the top echelons of society, where secrets are as thick as the cedar trees. The haunting memories of World War II and the exile of the Japanese community are a stark reminder of the past.</p><p>For fans of William Boyd (The Romantic), Lucia Berlin (Evening in Paradise), Chris Hammer (Scrublands), Bonnie Garmus (Lessons in Chemistry), and Barbara Kingsolver (Demon Copperhead).</p>"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100127661-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100127661-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100127661-04-118217"
					}
				}
			},
			{
				"titleId": "100128280-04-50010",
				"isbn13": "9780739325360",
				"isbn10": "",
				"format": "MP3",
				"name": "The Sound and the Fury",
				"contributors": [
					{
						"contributorId": "182785",
						"name": "William Faulkner",
						"firstName": "William",
						"middleName": "",
						"lastName": "Faulkner",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "820006",
						"name": "Grover Gardner",
						"firstName": "Grover",
						"middleName": "",
						"lastName": "Gardner,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2005-07-12",
					"imprint": "Penguin Random House"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"<b>NOBEL PRIZE WINNER • One of the greatest novels of the twentieth century is the story of a family of Southern aristocrats on the brink of personal and financial ruin.  <b>•  The definitive corrected text, including Faulkner's Appendix</b></b><b>One of The Atlantic’s Great American Novels of the Past 100 Years</b>The Sound and the Fury is the tragedy of the Compson family, featuring some of the most memorable characters in literature: beautiful, rebellious Caddy; the manchild Benjy; haunted, neurotic Quentin; Jason, the brutal cynic; and Dilsey, their black servant. Their lives fragmented and harrowed by history and legacy, the character’s voices and actions mesh to create what is arguably Faulkner’s masterpiece and  one of the greatest novels of the twentieth century.\"I give you the mausoleum of all hope and desire.... I give it to you not that you may remember time, but that you might forget it now and then for a moment and not spend all of your breath trying to conquer it. Because no battle is ever won he said. They are not even fought. The field only reveals to man his own folly and despair, and victory is an illusion of philosophers and fools.\" —from The Sound and the Fury"
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100128280-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100128280-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100128280-04-50010"
					}
				}
			},
			{
				"titleId": "100128553-04-0517",
				"isbn13": "9789629546700",
				"isbn10": "",
				"format": "MP3",
				"name": "The Sonnets",
				"contributors": [
					{
						"contributorId": "127607",
						"name": "William Shakespeare",
						"firstName": "William",
						"middleName": "",
						"lastName": "Shakespeare",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "618278",
						"name": "Alex Jennings",
						"firstName": "Alex",
						"middleName": "",
						"lastName": "Jennings",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "1997-10-01",
					"imprint": "Naxos Audiobooks"
				},
				"classifications": {},
				"language": "en",
				"descriptions": [
					"Everyone knows something of Shakespeare’s sonnets, even if only in memorable fragments like ‘the darling buds of may’ or ‘remembrance of things past’ ‘the marriage of minds’. For centuries these wonderfully-crafted, intense lyrics have stood for something valued about youth, love and the emotional complexities belonging to that time of life. This new recording presents all 154 of Shakespeare’s Sonnets, using the New Cambridge Shakespeare texts."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100128553-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100128553-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100128553-04-0517"
					}
				}
			},
			{
				"titleId": "100128641-04-48058",
				"isbn13": "9780739329771",
				"isbn10": "",
				"format": "MP3",
				"name": "Sabriel",
				"contributors": [
					{
						"contributorId": "128169",
						"name": "Garth Nix",
						"firstName": "Garth",
						"middleName": "",
						"lastName": "Nix",
						"attr": "Author",
						"type": "contributor"
					},
					{
						"contributorId": "868822",
						"name": "Tim Curry",
						"firstName": "Tim",
						"middleName": "",
						"lastName": "Curry,",
						"attr": "Narrated by",
						"type": "contributor"
					}
				],
				"publication": {
					"date": "2002-04-23",
					"imprint": "Penguin Random House"
				},
				"series": {
					"name": "Abhorsen | The Old Kingdom"
				},
				"classifications": {
					"interestAge": [
						17,
						99
					]
				},
				"language": "en",
				"descriptions": [
					"A tale of dark secrets, deep love, and dangerous magic!Since childhood, Sabriel has lived outside the walls of the Old Kingdom, away from the random power of Free Magic, and away from the Dead who refuse to stay dead.  But now her father, the Charter-Mage Abhorsen, is missing, and to find him Sabriel must cross back into that world.  With Mogget, whose feline form hides a powerful, perhaps malevolent spirit, and Touchstone, a young Charter Mage, Sabriel travels  deep into the Old Kingdom.  There she confronts an evil that threatens much more than her life--and comes face-to-face with her own hidden destiny."
				],
				"_links": {
					"cover": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100128641-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"thumbnail": {
						"href": "https://azaueprdfilestr.blob.core.windows.net/cover-images/1131/100128641-thumbnail.jpg",
						"type": "image/jpeg"
					},
					"self": {
						"href": "https://api.eplatform.co/v1/catalog/100128641-04-48058"
					}
				}
			}
		],
		"_links": {
			"self": {
				"href": "https://api.eplatform.co/v1/2b41d083-62d6-43f2-ac88-93a06e20711f/inventory?limit=200&sideload=titles&offset=400"
			},
			"batch.prev": {
				"href": "https://api.eplatform.co/v1/2b41d083-62d6-43f2-ac88-93a06e20711f/inventory?limit=200&sideload=titles&offset=200"
			},
			"batch.next": {
				"href": "https://api.eplatform.co/v1/2b41d083-62d6-43f2-ac88-93a06e20711f/inventory?limit=200&sideload=titles&offset=600"
			}
		}
	}
}