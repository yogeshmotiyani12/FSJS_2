// In the following shopping cart add, remove, edit items
// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// - add 'Meat' in the beginning of your shopping cart if it has not been already added

console.log(shoppingCart.unshift('Meat'));  // 5
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey' ]

// - add Sugar at the end of your shopping cart if it has not been already added

console.log(shoppingCart.push('Sugar')); // 6
console.log(shoppingCart); // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar' ]

// - remove 'Honey'

console.log(shoppingCart.splice(4,1)); // [ 'Honey' ]
console.log(shoppingCart);  // [ 'Meat', 'Milk', 'Coffee', 'Tea', 'Sugar' ]

// - modify Tea to 'Green Tea'

console.log(shoppingCart.splice(3,1, "Green Tea")); //[ 'Tea' ]
console.log(shoppingCart) // [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]





