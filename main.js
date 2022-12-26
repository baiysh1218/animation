// ! ------------- Array

// var search = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     } else if (!nums.includes(target)) {
//       return -1;
//     }
//   }
// };

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// var search = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       return i;
//     } else if (!nums.includes(target)) {
//       return -1;
//     }
//   }
// };

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// var convertTemperature = function (celsius) {
//   let res = [];
//   res.push(celsius + 273.15);
//   res.push((celsius * 9) / 5 + 32);
//   return res;
// };

// console.log(convertTemperature(36.5));

// var isPalindrome = function (s) {
//   let str = s
//     .replace(/[\s.,:%]/g, "")
//     .split("")
//     .reverse()
//     .join("")
//     .toUpperCase();

//   let res = s
//     .split(" ")
//     .join("")
//     .toUpperCase()
//     .replace(/[\s.,:%]/g, "");

//   console.log(str, "str");
//   console.log(res, "res");

//   if (str === res) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isPalindrome("race a car"));

// ! task makers loop
// let str = "";

// for (let i = 0; i < 7; i++) {
//   str += "#";
//   console.log(str);
// }

// let arr = [1, 2, 3, 4, 5];
// let res = 0;
// for (let i = 0; i < arr.length; i++) {
//   res += arr[i];
// }
// console.log(res);

// let world = "makers";
// for (let i = 0; i <= world.length; i++) {
//   for (let j = 1; j <= world.length; j++) {
//     if (i !== j && i < j) {
//       let res = world.slice(i, j);
//       console.log(res);
//     }
//   }
// }

// ! DOM
// document.addEventListener("mousemove", e => {
//   console.log("мышка на позиции", e.offsetX, e.offsetY);
// });

// let p = document.querySelector("p");
// let plus = document.querySelector("#plus");
// let minus = document.querySelector("#minus");

// let counter = 0;
// plus.addEventListener("click", () => {
//   counter++;
//   p.innerHTML = counter;
// });

// minus.addEventListener("click", () => {
//   counter--;
//   p.innerHTML = counter;
// });

// let content = document.querySelector("p");
// let res = content.innerHTML;

// content.addEventListener("click", () => {
//   let space = 0;
//   let letters = 0;
//   for (let i = 0; i < res.length; i++) {
//     if (res[i] === " ") {
//       space++;
//     } else {
//       letters++;
//     }
//   }
//   console.log(`Буквы: ${letters}, пробелы: ${space}`);
// });

// let btnDelate = document.querySelector("#deleteMe");
// btnDelate.addEventListener("click", () => {
//   btnDelate.remove();
// });

// ! task destruction

// function checkTask(obj) {
//   let { name, years, isAdmin = false } = obj;
//   console.log(name);
//   console.log(years);
//   console.log(isAdmin);
// }

// checkTask({ name: "Mike", years: 43 });

// function checkTask(employee) {
//   let [name, surname, departament, position, salery] = employee;
//   let res = [name, surname, departament, position, salery];
//   console.log(res);
// }

// function checkTask(arr) {
//   let [, , ...rest] = arr;
//   let res = rest.map(i => (x += i), (x = 0)).reverse()[0];
//   console.log(res);
// }
// checkTask([1, 2, 3, 4, 5, 6]);

// function checkTask(obj) {
//   let {
//     dog: { dogName, age },
//   } = obj;
//   console.log(dogName, age);
// }
// checkTask({ name: "Patrick", age: "22", dog: { dogName: "Hachi", age: 2 } });

// function checkTask(first, second) {
//   let a = first;
//   let b = second;
//   let [c, d] = [b, a];
//   console.log(c, d);
// }
// checkTask("second", "first");

// function checkTask(arr) {
//   let [a, [b, [c, d]]] = arr;
//   console.log(a, b, c, d);
// }
// checkTask([1, [2, [[[3, 4], 5], 6]]]);

// function checktask(arr) {
//   let [, ...rest] = arr;
//   console.log(rest);
// }
// checktask(["Fruit jam", "Cheese", "Bread"]);

// function checkTask(arr) {
//   let [, a] = arr;
//   console.log(a);
// }
// checkTask([
//   "Dungeons and Dragons 2nd Ed",
//   "The Blade Itself",
//   "The Silmarillion",
//   "Mistborn",
//   "The Wheel of Time",
// ]);

// function checkTask(fullName) {
//   let res = fullName.split(" ");
//   let [a, b] = res;
//   let obj = {
//     firstName: a,
//     lastName: b,
//   };
//   console.log(obj);
// }
// checkTask("Albert Einstein");

// function checkTask(obj) {
//   let {
//     hobbies: [hobbi1, hobbi2],
//   } = obj;

//   console.log(hobbi1, hobbi2);
// }
// checkTask({ name: "Jack", age: "22", hobbies: ["football", "swimming"] });

// function checkTask(obj) {
//   let { name = "Аноним", surname = "Анонимович", age = "? лет" } = obj;
//   console.log([name, surname, age]);
// }

// checkTask({ name: "Петр", surname: "Петров", age: "20 лет" });

// function checkTask(info) {
//   let [a, b, c] = info;
//   let person = {
//     name: a,
//     surname: b,
//     age: c,
//   };

//   console.log(person);
// }
// checkTask(["Sam", "Christenson", 22]);

// function checkTask(obj) {
//   let {
//     size: { width, height },
//     items: [item1, item2],
//     extra,
//   } = obj;
//   console.log(width);
//   console.log(height);
//   console.log(item1);
//   console.log(item2);
//   console.log(extra);
// }
// checkTask({
//   size: { width: 100, height: 200 },
//   items: ["Cake", "Donut"],
//   extra: true,
// });
