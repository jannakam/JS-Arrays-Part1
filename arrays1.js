// 1
const groceries = ['milk', 'eggs', 'apples', 'bread', 'chicken', 'cheese'];

// 2
console.log(groceries[1]);

// 3
console.log(groceries.length);

// 4
console.log(groceries[groceries.length-1]);

// 5
console.log(groceries.pop());

// To check that last element was removed
console.log(groceries);

// 6
groceries.push('cream', 'salt');

// To check that the elements were added
console.log(groceries);

// 7
const firstThreeItems = groceries.slice(0, 3);

// Check contents of the new array
console.log(firstThreeItems);

// CHALLENGE

// 1
groceries.splice(2, 1);

// Check contents of the array
console.log(groceries);

// 2
groceries.unshift('carrots');

// Check contents of the array
console.log(groceries);

// 3
groceries.splice(0, 2, 'ketchup', 'chili');

// Check contents of the array
console.log(groceries);