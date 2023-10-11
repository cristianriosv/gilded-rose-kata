export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    const SULFURUS_NAME = 'Sulfuras, Hand of Ragnaros';
    const AGED_BRIE_NAME = 'Aged Brie';
    const BACKSTAGE_PASSES_NAME = 'Backstage passes to a TAFKAL80ETC concert';
    const BACKSTAGE_PASSES_10_DAYS = 10;
    const BACKSTAGE_PASSES_5_DAYS = 5;
    const MAXIMUM_QUALITY = 50;
    const MINIMUM_QUALITY = 0;

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      let qualityChangeAmount = -1;
      let sellInChangeAmount = -1;
      let qualitySellInFactor = item.sellIn > 0 ? 1 : 2;

      if (item.name == SULFURUS_NAME) {
        sellInChangeAmount = 0;
        qualityChangeAmount = 0;
      } else if (item.name == AGED_BRIE_NAME) {
        qualityChangeAmount = 1; 
      } else if (item.name == BACKSTAGE_PASSES_NAME) {
        qualityChangeAmount = 1;
        if (item.sellIn <= 0)  qualityChangeAmount = -item.quality;
        else if (item.sellIn <= BACKSTAGE_PASSES_5_DAYS) qualityChangeAmount = 3;
        else if (item.sellIn <= BACKSTAGE_PASSES_10_DAYS) qualityChangeAmount = 2;
      }

      const qualityChangeResult = item.quality + qualityChangeAmount * qualitySellInFactor;
      
      if (qualityChangeAmount < 0) {
        item.quality = Math.max(qualityChangeResult, MINIMUM_QUALITY);
      } else if (item.quality < MAXIMUM_QUALITY) {
        item.quality = Math.min(qualityChangeResult, MAXIMUM_QUALITY);
      }

      item.sellIn += sellInChangeAmount;
      
    }

    return this.items;
  }
}
