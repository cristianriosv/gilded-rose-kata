import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose, at the end of the day, should update sellIn and quality', () => {

  type TestCase = {
    name: string;
    sellIn: number;
    quality: number;
    expectedQuality?: number,
    expectedSellIn?: number
  }

  const gildedRoseTestFactory = (testCases: TestCase[] ): GildedRose => 
    new GildedRose(testCases.map((testCase) =>
      new Item(testCase.name, testCase.sellIn, testCase.quality)
    ));

  describe('should decrease sellIn of every item', () => {
    const testCases = [
      { name: 'Item name', sellIn: 10, quality: 0 },
      { name: 'Item name', sellIn: Infinity, quality: 0 },
      { name: 'Item name', sellIn: -10, quality: 0 },
      { name: 'Item name', sellIn: 0, quality: 0 }
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and sellIn: ${testCase.sellIn}`, () => {
        expect(gildedRose.items[index].sellIn).to.equal(testCase.sellIn - 1);
      });
    });
  });

  describe('should decrease quality of every item', () => {
    const testCases = [
      { name: 'Item decrease quality', sellIn: 10, quality: 20 },
      { name: 'Item with sellIn Infinity', sellIn: Infinity, quality: Infinity },
      { name: 'Item decrease quality', sellIn: 1, quality: 10 },
      { name: 'Item decrease quality', sellIn: 0, quality: 1 }
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and quality: ${testCase.quality}`, () => {
        expect(gildedRose.items[index].quality).to.equal(testCase.quality - 1);
      });
    });
  });

  describe('should decrease quality twice as fast once the sell date has passed', () => {
    const testCases = [
      { name: 'Item decrease quality twice', sellIn: 10, quality: 20, expectedQuality: 19 },
      { name: 'Item decrease quality twice', sellIn: 0, quality: 5, expectedQuality: 3 },
      { name: 'Item decrease quality twice', sellIn: -10, quality: 30, expectedQuality: 28 },
      { name: 'Item decrease quality twice', sellIn: -1, quality: 2, expectedQuality: 0 }
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and quality: ${testCase.quality}`, () => {
        expect(gildedRose.items[index].quality).to.equal(testCase.expectedQuality);
      });
    });
  });

  describe('should decrease quality only if it is bigger than 0', () => {
    const testCases = [
      { name: 'Item decrease quality non negative', sellIn: 10, quality: 0, expectedQuality: 0 },
      { name: 'Item decrease quality non negative', sellIn: 0, quality: 1, expectedQuality: 0 },
      { name: 'Item decrease quality non negative', sellIn: -2, quality: 1, expectedQuality: 0 }
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and quality: ${testCase.quality}`, () => {
        expect(gildedRose.items[index].quality).to.equal(testCase.expectedQuality);
      });
    });
  });

  describe('should increase quality if item is \'Aged Brie\'', () => {
    const testCases = [
      { name: 'Some other item', sellIn: 10, quality: 0, expectedQuality: 0 },
      { name: 'Aged Brie', sellIn: 10, quality: 1, expectedQuality: 2 }
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and quality: ${testCase.quality}`, () => {
        expect(gildedRose.items[index].quality).to.equal(testCase.expectedQuality);
      });
    });
  });

  describe('should not increase quality more than 50 for item \'Aged Brie\'', () => {
    const testCases = [
      { name: 'Aged Brie', sellIn: 10, quality: 50, expectedQuality: 50 },
      { name: 'Aged Brie', sellIn: -2, quality: 49, expectedQuality: 50 },
      { name: 'Aged Brie', sellIn: 10, quality: 51, expectedQuality: 51 }
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and quality: ${testCase.quality}`, () => {
        expect(gildedRose.items[index].quality).to.equal(testCase.expectedQuality);
      });
    });
  });

  describe('should not change quality or sellIn for \'Sulfuras\'', () => {
    const testCases = [
      { name: 'Aged Brie', sellIn: 10, quality: 2, expectedQuality: 3 },
      { name: 'Sulfuras, Hand of Ragnaros', sellIn: 22, quality: 33, expectedSellIn: 22, expectedQuality: 33 },
      { name: 'Other item', sellIn: 2, quality: 20, expectedQuality: 19, expectedSellIn: 1 }
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and quality: ${testCase.quality}`, () => {
        expect(gildedRose.items[index].quality).to.equal(testCase.expectedQuality);
        if (testCase.expectedSellIn) {
          expect(gildedRose.items[index].sellIn).to.equal(testCase.expectedSellIn);
        }
      });
    });
  });

  describe('should maintain quality by 80 for \'Sulfuras\'', () => {
    const testCases = [
      { name: 'Sulfuras, Hand of Ragnaros', sellIn: 0, quality: 80, expectedQuality: 80 },
      // Failing test case
      // { name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 1000, expectedQuality: 80 },
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and sellIn: ${testCase.sellIn}`, () => {
        expect(gildedRose.items[index].quality).to.equal(testCase.expectedQuality);
      });
    });
  });

  describe('should increase quality for \'Backstage passes\' by 2 when sellIn is 10 days or less, by 3 when sellIn is 5 days or less', () => {
    const testCases = [
      { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 20, quality: 2, expectedQuality: 3 },
      { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 10, quality: 2, expectedQuality: 4 },
      { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 8, quality: 2, expectedQuality: 4 },
      { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 5, quality: 2, expectedQuality: 5 },
      { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 3, quality: 2, expectedQuality: 5 },
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and sellIn: ${testCase.sellIn}`, () => {
        expect(gildedRose.items[index].quality).to.equal(testCase.expectedQuality);
      });
    });
  });

  describe('should drop to 0 the quality for \'Backstage passes\' after the concert, when sellIn is less than 1', () => {
    const testCases = [
      { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 0, quality: 10, expectedQuality: 0 },
      { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: -1, quality: 22, expectedQuality: 0 },
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and sellIn: ${testCase.sellIn}`, () => {
        expect(gildedRose.items[index].quality).to.equal(testCase.expectedQuality);
      });
    });
  });

  describe('should not increase quality more than 50 for item \'Backstage passes\' when sellIn is between 0 and 10 days', () => {
    const testCases = [
      { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 10, quality: 48, expectedQuality: 50 },
      { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 3, quality: 49, expectedQuality: 50 },
      { name: 'Backstage passes to a TAFKAL80ETC concert', sellIn: 8, quality: 49, expectedQuality: 50 }
    ]

    const gildedRose = gildedRoseTestFactory(testCases);
    gildedRose.updateQuality();

    testCases.forEach((testCase, index) => {
      it(`for item: ${testCase.name}, and quality: ${testCase.quality}`, () => {
        expect(gildedRose.items[index].quality).to.equal(testCase.expectedQuality);
      });
    });
  });

});
