class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }



  updateQuality() {
    const agedBrie = 'Aged Brie'
    const backstagePass = 'Backstage passes to a TAFKAL80ETC concert'
    const sulfuras = 'Sulfuras, Hand of Ragnaros'
    const conjured = 'Conjured'

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != agedBrie && this.items[i].name != backstagePass && this.items[i].quality > 0) {
        if (this.items[i].name != sulfuras)
          this.items[i].quality--;
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality ++;
          if (this.items[i].name == backstagePass) {
            if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
              this.items[i].quality++;
            }
            if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
              
                this.items[i].quality++;

            }
          }
        }
      }
      if (this.items[i].name != sulfuras) {
        this.items[i].sellIn--;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != agedBrie) {
          if (this.items[i].name != backstagePass && this.items[i].quality > 0 && this.items[i].name != sulfuras) {
            this.items[i].quality--;
          } else {
            this.items[i].quality = 0;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality++;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
