// {
//     item: '',
//     brand '',
//     units: '',
//     quantity: 0,
//     isPurchased: false
//   }
//1. Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)

const groceryList = [
    {
        item: "Strawberries",
        brand: "Del Monte",
        units: "3 lbs",
        quantity: 40,
        isPurchased: false,
    },
    {
        item: "Japanese sweet potatoes",
        brand: "The Potato Company",
        units: "10 lbs",
        quantity: 10,
        isPurchased: true,
    },
    {
        item: "Black bean patties",
        brand: "Morning Star",
        units: "1 lb",
        quantity: 8,
        isPurchased: false,
    },
]
console.table(groceryList)