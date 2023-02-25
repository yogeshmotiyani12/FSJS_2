
const Obj1 = {};  // An empty object

console.log(Obj1);  // {}

console.log(Object.prototype)  // [Object: null prototype] {}



const Obj2 = {
    name: 'Jack',   // key : value
    age: 22
}
 
console.log(Obj2);   // { name: 'Jack', age: 22 }
console.log(Obj2.name); // Jack
console.log(Obj2.age); // 22
console.log(Object.getPrototypeOf(Obj1))  // [Object: null prototype] {}


// null prototype objects


const obj = Object.create(null);
console.log(obj);
const obj3 =  {__proto__: null};
console.log(obj3);