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
      let nextQualityValue = item.quality;
      let nextSellInValue = item.sellIn;

      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (nextQualityValue > 0) {
          if (item.name != 'Sulfuras, Hand of Ragnaros') {
            nextQualityValue--;
          }
        }
      } else {
        if (nextQualityValue < 50) {
          nextQualityValue++;
          if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              if (nextQualityValue < 50) {
                nextQualityValue++;
              }
            }
            if (item.sellIn < 6) {
              if (nextQualityValue < 50) {
                nextQualityValue++;
              }
            }
          }
        }
      }
      if (item.name != 'Sulfuras, Hand of Ragnaros') {
        nextSellInValue--;
      }
      if (nextSellInValue < 0) {
        if (item.name != 'Aged Brie') {
          if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (nextQualityValue > 0) {
              if (item.name != 'Sulfuras, Hand of Ragnaros') {
                nextQualityValue--;
              }
            }
          } else {
            nextQualityValue = 0;
          }
        } else {
          if (nextQualityValue < 50) {
            nextQualityValue++;
          }
        }
      }

      item.quality = nextQualityValue;
      item.sellIn = nextSellInValue;
    }

    return this.items;
  }
}
