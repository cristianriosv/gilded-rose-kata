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
      
      let qualityResult = item.quality;
      let qualityChangeModule = -1;

      if (item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        qualityChangeModule = 1;
        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn <= 10) {
            qualityChangeModule = 2;
          }
          if (item.sellIn <= 5) {
            qualityChangeModule = 3;
          }
        }
      }
      if (item.sellIn <= 0) {
        if (item.name == 'Aged Brie') {
          qualityChangeModule++;
        } else {
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            qualityResult = 0;
            qualityChangeModule = 0;
          } else {
            qualityChangeModule--;
          }
        }
      }

      if (qualityChangeModule > 0 && item.quality < 50) {
        qualityResult = Math.min(qualityResult + qualityChangeModule, 50);
      }
      
      if (qualityChangeModule < 0 && item.quality > 0) {
        qualityResult = Math.max(qualityResult + qualityChangeModule, 0);
      }

      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        item.sellIn--;
        item.quality = qualityResult;
      }
      
    }

    return this.items;
  }
}
