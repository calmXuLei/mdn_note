/**
 * Array.prototype.filter(callbackFn, thisArg)
 *  filter 数组的实例方法, 用于创建数组一部分的浅拷贝.
 *  只过滤掉给定数组中,通过提供的函数测试的元素.
 *
 *  callbackFn:
 *      一个数组中每个元素都要执行的函数. 将会返回一个全部返回为 truthy 元素所组成的数组.
 *      返回 falsy 值的元素除外, 该函数被调用时的参数如下:
 *
 *      element:
 *          数组中当前正在被处理的元素.
 *      index:
 *          数组中当前正在被处理的元素的索引.
 *      array:
 *          调用 filter 的数组.
 *
 *  thisArg(optional):
 *      当 callbackFn 执行时用作 this 的值.
 *
 *
 *  ReturnValue
 *      一个包含给定数组元素中通过测试的元素所组成的浅拷贝的数组。如果没有元素通过测试，返回一个空数组。
 */

// const words = [
//     'spray',
//     'elite',
//     'exuberant',
//     'destruction',
//     'present'
// ];
//
// const result = words.filter((word) =>　word.length > 6);
//
// console.log(result);
// // => ['exuberant', 'destruction', 'present']


// 过滤出全部相同的值
// function isBigEnough(value) {
//     return value >= 10;
// }
//
// const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// console.log(filtered);
// // => [12, 130, 44]

// 找出数组中全部的质数
// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
//
// function isPrime(num) {
//     for (let i = 2; num > i; i ++) {
//         if (num % i === 0) {
//             return false
//         }
//         return num > 1;
//     }
// }
//
// const arr = array.filter(isPrime);
// console.log(arr);
// // => [3, 5, 7, 11, 13]


// 过滤 json 中失效的 键值对
//
// const arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     {},
//     { id: null },
//     { id: NaN },
//     { id: "undefined" },
// ];
//
// let invalidEntries = 0;
// function filterById(item) {
//     if(Number.isFinite(item.id) && item.id !== 0) {
//         return true;
//     }
//     invalidEntries ++;
//     return false;
// }
//
// const arrByID = arr.filter(filterById);
// console.log('Filtered Array\n', arrByID);
// // => [{ id: 15 }, { id: -1 }, { id: 3 }, { 12.2 }]
// console.log(invalidEntries);
// // => 5


// 搜索数组
// const fruits = [
//     'apple',
//     'banana',
//     'grapes',
//     'mango',
//     'orange'
// ];
//
// function filterItems(arr, query) {
//     return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }
//
// console.log(fruits, 'ap');
// // => ['apple', 'grapes']
// console.log(fruits, 'an');
// // => ['banana', 'mango', 'orange']

// // 稀松数组 filter
// console.log([1, ,undefined].filter(x => x === undefined));
// // => ['undefined']
//
// console.log([1, , undefined].filter((x) => x !== 2));
// // => [1, undefined]

// 非数组对象调用 filter
// const arrayLike = {
//     length: 3,
//     0: "a",
//     1: "b",
//     2: "c",
//     3: "a"
// }
//
// console.log(Array.prototype.filter(el => el <= 'b'));
// // => ['a', 'b']

// 影响初始化数组(改变，添加，删除)
// Modifying each word
// let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
//
// const ModifiedWords =  words.filter((word, index, arr) => {
//     arr[index + 1] += " extra";
//     return word.length < 6;
// });
//
// console.log(ModifiedWords);
// // => ["spray"]
//
//
// // Appending new words
// words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
// const appendWords = words.filter((word, index, arr) => {
//     arr.push("new");
//     console.log(index); // 0 - 5
//     return word.length < 6;
// });
//
// console.log(appendWords);
// // => ["spray", "limit", "elite"]
//
//
// // delete words
// words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
// const deleteWords = words.filter((word, index, arr) => {
//     arr.pop();
//     console.log(index) // 0 - 2
//     return word.length < 6;
// })
//
// console.log(deleteWords);
// // => ['spray', limit]

// -------------------------------------------------------------------
/**
 * Array.prototype.find(callbackFn, thisArg)
 *  find()方法是一个迭代的方法.它将会按照索引上升的顺序来对每个元素进行 callbackFn 的调用,
 *  直到函数返回一个 truthy 的值.然后返回那个元素, 并停止数组中的迭代.
 *  如果 callbackFn 从未返回一个真值,find() 会返回一个 undefined.
 *
 *  callbackFn 会被数组中每个索引调用, 不仅仅是那些给定的值.
 *  在稀松数组中的空槽的行为和 undefined 相同的.
 *
 *  删除的元素被访问会被当做 undefined
 */

// const arr1 = [5, 12, 8, 130, 44];
//
// const found = arr1.find(eleemnt => element > 10);
// console.log(found);
// // => 12

// 通过数组中的一个属性查找数组中的对象.
// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 }
// ];
//
// function isCherries (fruit) {
//     return fruit.name === "cherries";
// }
//
// console.log(inventory.find(isCherries));
// // => { name: "cherrirs", quantity: 2 }

// 使用箭头函数并解构
// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 }
// ];
//
// const result = inventory.find(({ name }) => name === 'cherries');
//
// console.log(result);
// // => { name: 'cherries', quantity: 2 }

// 找到数组中的质数
// function isPrime(element, index, arr) {
//     let start = 2;
//     while (start <= Math.sqrt(element)) {
//         if (element %　start++ < 1) {
//             return false;
//         }
//     }
//     return element > 1;
// }
//
// console.log([4, 6, 8, 12].find(isPrime));
// // => undefined
// console.log([4, 5, 8, 12].find(isPrime));
// // => 5

// find 在稀松数组中使用
const arr = [0, 1, , , ,5, 6];

arr.find((value, index) => {
    console.log("Visited index", index, "with value", value);
})
// Visited index 0 with value 0
// demo3.js:233 Visited index 1 with value 1
// demo3.js:233 Visited index 2 with value undefined
// demo3.js:233 Visited index 3 with value undefined
// demo3.js:233 Visited index 4 with value undefined
// demo3.js:233 Visited index 5 with value 5
// demo3.js:233 Visited index 6 with value 6

// 非数组对象使用 find
const arrayLike = {
    length: 3,
    0: 2,
    1: 7.3,
    2: 4,
    3: 5.5
};

console.log(Array.prototype.find.call(arrayLike, (x) => !Number.isInteger(x)));
// => 7.3


