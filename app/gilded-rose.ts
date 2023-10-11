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
    const SULFURUS_NAME = 'Sulfuras';
    const SULFURUS_FIXED_VALUE = 80;
    const AGED_BRIE_NAME = 'Aged Brie';
    const CONJURED_NAME = 'Conjured';
    const BACKSTAGE_PASSES_NAME = 'Backstage passes';
    const BACKSTAGE_PASSES_10_DAYS = 10;
    const BACKSTAGE_PASSES_5_DAYS = 5;
    const MAXIMUM_QUALITY = 50;
    const MINIMUM_QUALITY = 0;

    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      let qualityChangeAmount = -1;
      let sellInChangeAmount = -1;
      let qualityMultiplier = item.sellIn > 0 ? 1 : 2;
      let maximumQuality = MAXIMUM_QUALITY;

      if (item.name.startsWith(SULFURUS_NAME)) {
        sellInChangeAmount = 0;
        qualityChangeAmount = 0;
        maximumQuality = SULFURUS_FIXED_VALUE;
        if (item.quality != SULFURUS_FIXED_VALUE) item.quality = SULFURUS_FIXED_VALUE;
      } else if (item.name.startsWith(AGED_BRIE_NAME)) {
        qualityChangeAmount = 1; 
      } else if (item.name.startsWith(BACKSTAGE_PASSES_NAME)) {
        qualityChangeAmount = 1;
        if (item.sellIn <= 0)  qualityChangeAmount = -item.quality;
        else if (item.sellIn <= BACKSTAGE_PASSES_5_DAYS) qualityChangeAmount = 3;
        else if (item.sellIn <= BACKSTAGE_PASSES_10_DAYS) qualityChangeAmount = 2;
      } else if (item.name.startsWith(CONJURED_NAME)) {
        qualityMultiplier *= 2;
      }

      const qualityChangeResult = item.quality + qualityChangeAmount * qualityMultiplier;
      
      if (qualityChangeAmount < 0) {
        item.quality = Math.max(qualityChangeResult, MINIMUM_QUALITY);
      } else {
        item.quality = Math.min(qualityChangeResult, maximumQuality);
      }

      item.sellIn += sellInChangeAmount;
      
    }

    return this.items;
  }
}
