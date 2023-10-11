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
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      let qualityChangeAmount = -1;
      let sellInChangeAmount = -1;
      let qualitySellInFactor = 1;

      if (item.sellIn <= 0) {
        qualitySellInFactor = 2;
      }
      if (item.name == 'Sulfuras, Hand of Ragnaros') {
        sellInChangeAmount = 0;
        qualityChangeAmount = 0;
        qualitySellInFactor = 0;
      } else if (item.name == 'Aged Brie') {
        qualityChangeAmount = 1; 
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        qualityChangeAmount = 1;
        if (item.sellIn <= 0) {
          qualityChangeAmount = -item.quality;
        } else if (item.sellIn <= 5) {
          qualityChangeAmount = 3;
        } else if (item.sellIn <= 10) {
          qualityChangeAmount = 2;
        }
      }
      
      if (qualityChangeAmount < 0) {
        item.quality = Math.max(item.quality + qualityChangeAmount * qualitySellInFactor, 0);
      } else if (item.quality < 50) {
        item.quality = Math.min(item.quality + qualityChangeAmount * qualitySellInFactor, 50);
      }

      item.sellIn += sellInChangeAmount;
      
    }

    return this.items;
  }
}
