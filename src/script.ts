// function multiply(a, b) {
//   return a * b; //NaN
// }

// console.log(multiply('sadsa', 9));

// let fruits = ['apple', 'banana', 'mango'];
// fruits.push(9)

// explicit types

// let myName: string = 'Ishat';
// console.log(myName);

// let age: number = 23;
// console.log(age);

// console.log(multiply(9, 9));

// let fruits: string[] = ['apple', 'banana', 'mango'];
// fruits.push('orange');

// let mixed: (string | number | boolean)[] = ['mango', 10, true];
// mixed.push(false);
// console.log(mixed);

// let obj: {
//   name: string;
//   age: number;
//   adult: boolean;
// };

// obj = {
//   name: 'ishat',
//   age: 23,
//   adult: true,
// };

// console.log(obj);

// Dynamic Type

// const arr: any[] = [];

// arr.push('mango');
// arr.push(20);
// console.log(arr);

// let a: {
//   name: any;
//   qount: any;
// };

// a = {
//   name: 'mango',
//   qount: 20,
// };

// console.log(a);

// fuction type

// function myFnc(a: number, b: number, c: any = 10): number {
//   console.log(a * b * c);
//   return a * b;
// }

// myFnc(2, 3);

// tyep aliases

// function userDetails(a: string | number, b: { name: string; age: number }) {
//   console.log(
//     `Id no ${a} , my details: My name is ${b.name} and I am ${b.age} years old`
//   );
// }

// function sayHello(user: { name: string; age: number }) {
//   console.log(`Hello ${user.age > 50 ? 'sir' : 'Mr'} ${user.name}`);
// }

// type stringOrNum = string | number;
// type userInfo = { name: string; age: number };

// function userDetails(id: stringOrNum, user: userInfo) {
//   console.log(
//     `Id: ${id} , my details: My name is ${user.name} and I am ${user.age} years old`
//   );
// }

// userDetails(10, { name: 'Ishat', age: 23 });

// function sayHello(user: userInfo) {
//   console.log(`Hello ${user.age > 50 ? 'sir' : 'Mr'} ${user.name}`);
// }

// sayHello({ name: 'Ishat', age: 23 });
