import { TYPE_OF_ITEMS, TypeOfItems } from "@shared/constants/typeOfItems";

export const TYPE_OF_DESCRIPTIONS = {
    [TypeOfItems.common]: ['A bottel', 'A fragance', 'The kindom sticker', 'A peace of papper'],
    [TypeOfItems.agedBrie]: ['of some time ago', 'of Best Cheese factory', 'of Aged Milk', 'of Aged Yogurt'],
    [TypeOfItems.sulfuras]: ['of Hand of Ragnaros', 'of Hand of Tupek', 'of Hand of Sauron'],
    [TypeOfItems.backstagePasses]: ['to Red hot chilli peppers, 1 day', 'to Beethoven', 'to Cristian Rios Concert'],
    [TypeOfItems.conjured]: ['pieces of nothing', 'dragon eggs', 'dress of power', 'bottle of wine'],
}

export const getNewRandomItem = () => {
    const randomItemType = Object.keys(TypeOfItems)[Math.floor(Math.random() * Object.keys(TypeOfItems).length)];
    const randomItemName = TYPE_OF_ITEMS[randomItemType];
    const typesOfDescriptions = TYPE_OF_DESCRIPTIONS[randomItemType];
    const randomItemDescription = typesOfDescriptions[Math.floor(Math.random() * typesOfDescriptions.length)];
    const randomItemSellIn = 5 + Math.floor(Math.random() * 10);
    const randomQuality = 10 + Math.floor(Math.random() * 10);
    return {
        name: `${randomItemName} ${randomItemDescription}`,
        sellIn: randomItemSellIn,
        quality: randomQuality
    }
}