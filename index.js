// Symbols in JavaScript
const symb1 = Symbol("foo");
const symb2 = Symbol("foo");

// Every Symbol created is unique
console.log(symb1 === symb2);

// Every Symbol.for('key') call will always
// return the same Symbol for a given key
console.log(Symbol.for("foo") === Symbol.for("foo"));

const obj = {};
obj[symb1] = "foo1";
obj[symb2] = "foo2";
obj['name'] = "John";

console.log(obj);
console.log(obj[symb1]);
console.log(obj[symb2]);

// Symbols are not enumerable
// in for..in loop
for (let key in obj){
  console.log(key);
}

// Symbols don't appear in JSON.stringify
JSON.stringify(obj);

