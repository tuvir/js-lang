'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Using destructuring on objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Renaming the obj destructured variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: sections,
} = restaurant;
console.log(restaurantName, hours, sections);

// Giving default values to obj destructured variables
const { menu = [], mainMenu: main = [] } = restaurant;
console.log(menu, main);

/*
-- DESTRUCTURING ARRAYS --
const arr = [1, 2, 3];
Without destructuring
const a = arr[0];
const b = arr[1];
const c = arr[2];

Using destructuring
const [x, y, z] = arr;
console.log(x, y, z);

let [primary, secondary] = restaurant.categories;
console.log(primary, secondary);

Switching variables with destructuring
[primary, secondary] = [secondary, primary];
console.log(primary, secondary);

Extracting multiple values from function or method
const [starter, main] = restaurant.order(1, 2);
console.log(`You've ordered ${starter} followed by ${main}`);

Nested destructuring
const nestedArr = [1, 2, 3, [4, 5], 6];
const [a, b, c, [d, e], f] = nestedArr;
console.log(a, b, c, d, e, f);

Setting default values to destructured variables
const [i = 'def', k = 'def', j = 'def'] = [10, 20];
console.log(i, k, j);
*/
