'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const days = ['mon', 'thu', 'fri', 'sat'];
const [, , day] = days;
const openingHours = {
  [days[1]]: {
    open: 12,
    close: 22,
  },
  [day]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  // Short way of object method declaration
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  delivery: function ({ starterIndex, mainIndex, adress, time }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIng, ...optionalIngs) {
    console.log(optionalIngs);
    optionalIngs.length
      ? console.log(`Here is your pasta with ${mainIng} and ${optionalIngs}`)
      : console.log(`Here is your pasta with ${mainIng}. No addings.`);
  },
};

const restaurant1 = {
  name: 'Roma',
  numGuests: 0,
};
const restaurant2 = {
  name: 'Piazzo',
  owner: 'Giancarlo',
};

// Looping through object properties NAMES
const properties = Object.keys(openingHours);
console.log(properties);

console.log(`We are open ${properties.length} days a week!`);

for (const key of Object.keys(openingHours)) {
  console.log(key);
}

let workingStr = `We're open ${properties.length} days a week, on: `;
for (const day of Object.keys(openingHours)) {
  workingStr += `${day}, `;
}
console.log(workingStr);

// Looping through object properties VALUES
const values = Object.values(openingHours);
console.log(values);
let i = 0;
// for (const key of properties) {
//   const { open, close } = values[i];
//   console.log(`On ${key} we are open at ${open} and closed at ${close}`);
//   i++;
// }

// Looping through object ENTRIES
const entries = Object.entries(openingHours);
for (const entry of entries) {
  const [day, { open, close }] = entry;
  console.log(`On ${day} we are opening at ${open} and closing at ${close}`);
}
/*
-- OPTIONAL CHAINING --
console.log(restaurant.openingHours.mon?.open);
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

Optional chaining on object properties
for (const day of weekDays) {
  const open = restaurant.openingHours[day]?.open ?? -1;
  if (open === -1) {
    console.log(`We are closed on ${day}`);
  } else {
    console.log(`On ${day} we open at ${open}`);
  }
}

Optional chaining on object methods
console.log(restaurant.order?.(0, 2) ?? 'No method');
console.log(restaurant.orderFood?.(0, 2) ?? 'No method');

Optional chaining on arrays
console.log(weekDays?.[1] ?? 'No index');
console.log(weekDays?.[10] ?? 'No index');
const arrObj = [{ role: 'support', lane: 'bottom' }];
console.log(arrObj[0]?.role ?? 'No role');

/*
-- FOR OF LOOP --
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
'for of' loop usage
for (const item of menu) console.log(item);

for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}

/*
-- LOGICAL ASSIGNMENT OPERATORS --
Assignment '||'
restaurant1.numGuests ||= 10;
restaurant2.numGuests ||= 10;

Assignment '??'
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

Assignment '&&'
restaurant1.owner &&= 'ANONIMUS';
restaurant2.owner &&= 'ANONIMUS';
console.log(restaurant1);
console.log(restaurant2);

/*
-- NULLISH COALISCENT OPERATOR --
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
const guests2 = restaurant.numGuests ?? 10;
console.log(guests, guests2);
/*
-- SHORT CIRCUITING --
Logical operators can use ANY data type, can return ANY data type and are capable of short-circuiting
console.log('-- OR --');
console.log(3 || 'Petr');
console.log('' || 0);
console.log(true || null);
console.log('' || undefined || 'str' || 1 || true);

console.log('-- AND --');
console.log(3 && 'Petr');
console.log('' && 0);
console.log(true && null);
console.log('' && undefined && 'str' && 1 && true);
console.log('name' && 1 && true && 10 && 'true' && 'Petr');
/*
-- REST PATTERN --
1) Destructuring with rest
Rest pattern with array destructuring
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [, pasta, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pasta, risotto, otherFood);

Rest with object destructuring
const { sat: saturday, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(saturday);

2) Functions with rest

function sum(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

sum(1, 2, 3, 4);
sum(10, 15);
sum(7, 1, 10, 3, 6);

restaurant.orderPizza('Tomato');
restaurant.orderPizza('Tomato', 'Basil', 'Cheese', 'Mushrooms', 'spinach');
/*
-- SPREAD OPERATOR USAGE --
Spread operator to add array elements to new array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2);

const menuNew = [...restaurant.mainMenu, 'Fettucine', 'Tiramisu'];
console.log(menuNew);

Spread operator to pass multiple arguments to function
const arr3 = [10, 20, 30, 2];
spread(...arr3);
function spread(arr) {
  console.log(arguments);
}

Spread operator to copy an array;
const mainMenyCopy = [...restaurant.mainMenu];
console.log(mainMenyCopy);

Spread to join multiple arrays
const menuWhole = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menuWhole);

Spread to divide string into singular elements
const str = 'Kulikov';
const strToArr = [...str];
const strToArrAdd = [...str, 'P.', 'S.'];
console.log(strToArr);
console.log(strToArrAdd);
console.log(...strToArrAdd);

Spread function
const ingredients = [
  prompt('Choose ingredient 1'),
  prompt('Choose ingredient 2'),
  prompt('Choose ingredient 3'),
];
restaurant.orderPasta(...ingredients);

Spread to make new object from another object
const restaurantNew = {
  owner: 'Anatoly Novikov',
  ...restaurant,
  foundingYear: 2007,
};
console.log(restaurantNew);

Spread to make a shallow copy of an object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Coliseum';
console.log(restaurant.name);
console.log(restaurantCopy.name);
restaurantCopy.mainMenu = [...restaurantCopy.mainMenu, 'Tiramisu'];
console.log(restaurant.mainMenu);
console.log(restaurantCopy.mainMenu);
Inner object stay the same
restaurantCopy.openingHours.fri.open = 9;
console.log(restaurant.openingHours.fri.open);
console.log(restaurantCopy.openingHours.fri.open);
/*
-- OBJECT DESTRUCTURING --
Passing multiple arguments to function as a singular object.
restaurant.delivery({
  time: '12:20',
  adress: 'Respubliki 22 st',
  starterIndex: 1,
  mainIndex: 0,
});

Using destructuring on objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

Renaming the obj destructured variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: sections,
} = restaurant;
console.log(restaurantName, hours, sections);

Giving default values to obj destructured variables
const { menu = [], mainMenu: main = [] } = restaurant;
console.log(menu, main);

Mutating variables using obj destructuring
let a = 10,
  b = 20;
const obj = {
  a: 19,
  b: 23,
  c: 44,
};

({ a, b } = obj);
console.log(a, b);

Nested obj destructuring
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
Changing the name of mutable variable
let {a: first, b: second} = obj;

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
