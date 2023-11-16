// Array.prototype[@@iterator]
//
// const arr1 = ['a', 'b', 'c'];
//
// const iter1 = arr1[Symbol.iterator]();
// console.log(iter1)
// for (const value of iter1) {
//     console.log(value)
// }

//
// const arr2 = ['a', 'b', 'c'];
// for (const value of Array.prototype.values.call(arr2)) {
//     console.log(value)
// }
//
// for (const v of arr2.values()) {
//     console.log(v)
// }

// -------------------------------------------
// const arr = ['a', 'b', 'c', 'd', 'e'];
//
// const arrIter = arr[Symbol.iterator]();
//
// /**
//  * arrIter.next() =>
//  * return {
//  *     value: '',
//  *     done: false
//  * }
//  */
// console.log(arrIter.next())
// console.log(arrIter.next())
// console.log(arrIter.next())
// console.log(arrIter.next())
// console.log(arrIter.next())
// console.log(arrIter.next()) // => { value: undefined, done: true }


// ------------------------------------------------
// function logIterable(it) {
//     if (typeof it[Symbol.iterator] !== 'function') {
//         console.log('该对象不能迭代');
//     }
//
//     for (const v of it) {
//         console.log(v)
//     }
// }
//
// logIterable(['a', 'b', 'c']);
//
// logIterable("abc");
//
// logIterable(123);

// ------------------------------------------------
// * Array.prototype.at()
// const colors = ['red', 'green', 'blue'];
//
// const lengthWay = colors[colors.length - 2];
// console.log(lengthWay);
//
// const sliceWay = colors.slice(-2, -1);
// console.log(sliceWay[0]);
//
// const atWay = colors.at(-2);
// console.log(atWay);
//
// const arrayLike = {
//     length: 2,
//     0: "a",
//     1: "b",
//     2: "c",
// }
//
// console.log(Array.prototype.at.call(arrayLike, -1));
// console.log(Array.prototype.at.call(arrayLike, -2));
// console.log(Array.prototype.at.call(arrayLike, 0));
// console.log(Array.prototype.at.call(arrayLike, arrayLike.length - 1))
// console.log(Array.prototype.at.call(arrayLike, 2)); // undefined

// ----------------------------------------------------
// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];
//
// const arr3 = arr1.concat(arr2);
// console.log(arr3)
//
// const arr4 = arr3.concat(3, 4, 5)
// console.log(arr4)

// Symbol.isConcatSpreadable
// const obj1 = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3
// }
//
// const obj2 = {
//     0: 1,
//     1: 2,
//     2: 3,
//     length: 3,
//     [Symbol.isConcatSpreadable]: true
// }
// // concat 默认情况下，不会将所有类似数组的对象视为数组，仅当 Symbol.isConcatSpreadable 设置为 true.
// const arr = [0].concat(obj1, obj2);
// console.log(arr);

// -------------------------------------------------------
// 稀松数组上使用 concat()
// console.log([1, , 3].concat([4, 5]));
// console.log([1, 2].concat([3, , 5]));
//
//
// // 在非数组上调用 concat
// console.log(Array.prototype.concat.call({}, [1, 2, 3]));
// // => [{}, 1, 2, 3]
// console.log(Array.prototype.concat.call(1, 2, 3));
// // => [Number{1}, 2, 3]
//
// const arrayLike = {
//     [Symbol.isConcatSpreadable]: true,
//     0: 1,
//     1: 2,
//     2: 99,
//     length: 2
// }
//
// console.log(Array.prototype.concat.call(arrayLike, 3, 4))
// // => [1, 2, 3, 4]

// ----------------------------------------------------------------
/**
 * Array.prototype.copyWithin(target, start, end)
 *
 * target: 序列开始替换的目标位置
 * start: 要复制元素的起始位置
 * end: 复制元素的结束位置
 */

// console.log([1, 2, 3, 4, 5].copyWithin(-2));
// // => [1, 2, 3, 1, 2]
//
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3));
// // => [4, 5, 3, 4, 5]
//
// console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
// // => [4, 2, 3, 4, 5]
//
// console.log([1, 2, 3, 4, 5].copyWithin(-2, -3, -1));
// // => [1, 2, 3, 3, 4]
//
// // copyWithin() 将保留空槽
// console.log([1,,3].copyWithin(2, 1, 2));
// // => [1,,]
//

// 非对象数组上调用 copyWithin()
// const arrayLike = {
//     length: 5,
//     3: 1
// }
//
// console.log(Array.prototype.copyWithin.call(arrayLike, 0, 3));
// // => {0: 1, 3: 1, length: 5}
//
// console.log(Array.prototype.copyWithin.call(arrayLike, 3, 1));
// // 1 位置为一个空槽，所以 3: 1, 会被删除
// // => {0 : 1, length: 5 }

// -------------------------------------------------------------------
/**
 * Array.prototype.entries()
 * 方法返回一个新的数组迭代对象，该对象包含数组中每个索引的键值对。
 */

// const arr = ['a', 'b', 'c'];
//
// const iter = arr.entries();

// console.log(iter.next());
// // => { value: [0, 'a'], done: false }
// console.log(iter.next());
// // => { value: [1, 'b'], done: false }
// console.log(iter.next());
// // => { value: [2, 'c'], done: false }
// console.log(iter.next());
// // => { value: undefined, done: true }

// for...of 循环
// for (const [key, value ] of arr.entries()) {
//     console.log(key, value)
// }
/**
 * 0 'a'
 * 1 'b'
 * 2 'c'
 */


// 迭代稀松数组
// entries() 将访问空槽，就相当于 undefined
// const arr2 = [, 'a']
// for (const element of arr2.entries()) {
//     console.log(element)
// }
/**
 * [0, undefined]
 * [1, 'a']
 */

// 在非数组对象上调用 entires()
// entries() 方法读取 this 的 length 属性，然后访问每个整数索引
// const arrayLike = {
//     length: 3,
//     0: 'a',
//     1: 'b',
//     2: 'c'
// }
//
// for (const entry of Array.prototype.entries.call(arrayLike)) {
//     console.log(entry)
// }
/**
 * [0, 'a']
 * [1, 'b']
 * [2, 'c']
 */

// ----------------------------------------------------------
/**
 * Array.prototype.every(callback, thisArg)
 * 测试数组中的全部元素是否能通过提供的函数测试执行。
 * 返回一个 bool 值
 *
 * callback: 要为数组中的每个元素执行的函数。
 *  它将返回一个 truthy 值指示元素通过测试。
 *  其余则会返回一个 falsy 值。
 *  函数调用会用以下参数：
 *      element: 数组中正在处理的元素.
 *      index: 数组中正在处理元素的索引.
 *      array: 调用 every() 的数组
 *
 * thisArg(optional): 当执行 callbackFn, 被用作 this 的值.
 *
 * Return value: 除非 callbackFn 全部返回 true, 否则返回 false.
 * 在这种情况下会立即返回 false
 *
 */

// const isBelowThrehold = (current) => current < 40;
//
// const arr = [1, 30, 39, 29, 19, 13];
// console.log(arr.every(isBelowThrehold)); // => true

/**
 * callback 调用仅仅对于数组 index 有分配的值.
 * 稀松数组中的空槽不会调用.
 */
// const arr2 = [1, 2, ,, 3, 4, 5];
// console.log(arr2.every((current, index) => {
//     console.log(index);
//     // => 0 1 4 5 6
//     return current > 0
// }))

// 检查一个数组是否是另一个数组的子集
// const isSubset = (arr1, arr2) => {
//     return arr2.every(element => arr1.includes(element))
// }
//
// console.log(isSubset(
//     [1, 2, 3, 4, 5, 6, 7],
//     [5, 7, 6]
// ));
// // => true
//
// console.log(isSubset(
//     [1, 2, 3, 4, 5, 6, 7],
//     [5, 6, 7, 8]
// )) // => false
//
// // 稀松数组使用 every
// // 稀松数组中的空槽不会调用 callback
// console.log([1, , 3].every(x => x !== undefined));
// // => true
//
// console.log([2, , 2].every(x => x === 2));
// // => true

// 初始化数组(改变,添加,删除)影响
/**
 *  循环运行三次,即使后续增加元素,也不会增加次数
 *  every() does not mutate the array on which it is called, but the function provided as callbackFn can.
 *  数组在 every() 调用中不能变异,但是提供的 callback 函数可以.
 *  Note, however, that the length of the array is saved before the first invocation of callbackFn.
 *  注意: 无论如何, 在 callbackFn 首次执行之前, 数组的长度是被保存的.
 *  Therefore:
 *  因此:
 *  callbackFn will not visit any elements added beyond the array's initial length
 *  when the call to every() began.
 *  当 every() 被调用开始后, 超出数组初始化长度,被添加的任何元素都不能被访问
 *
 *  Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
 *  改变已经访问的索引, 它们不能引起  callback 再次被调用
 *
 *  If an existing, yet-unvisited element of the array is changed by callbackFn,
 *  如果通过 callbackFn 更改数组中存在的还没访问的元素.
 *  its value passed to the callbackFn will be the value at the time that element gets visited.
 *  它传递给 cakkbackFn 的值,应该是此刻元素被访问时候的值.
 *  Deleted elements are not visited.
 *  删除的元素将不能被访问.
 */

// Modifying  items
// let arr = [1, 2, 3, 4];
// arr.every((elem, index, arr) => {
//     arr[index + 1]--;
//     console.log(`[${arr}][${index}] -> ${ elem }`);
//     return elem < 2;
// });
/**
 * 分析:
 * step1 1 => arr[1] - 1 => 1 => return true
 * step2 1 => arr[2] - 1 => 2 => return true
 * step3 2 => arr[3] - 1 => 3 => return false
 * end
 *
 * 打印:
 * $arr => 1,2,3,4
 * 1st: [1,1,3,4] -> 1
 * 2nd: [1,1,2,4] -> 1
 * 3nd: [1,1,2,3] -> 2
 */

// Appending items

// arr = [1, 2, 3];
// const res = arr.every((elem, index, arr) => {
//     arr.push('new');
//     console.log(`[${arr}][${index}] -> ${elem}`);
//     return elem < 4;
// })
//
// console.log(res); // => true
/**
 * 1st: [1, 2, 3, 'new'][0] -> 1 => return true
 * 2nd: [1, 2, 3, 'new', 'new'][1] -> 2 => return true
 * 3nd: [1, 2, 3, 'new', 'new', 'new'][2] -> 3 return true
 */

// Delete items
// const arr = [1, 2, 3, 4];
// const res = arr.every((elem, index, arr) => {
//     arr.pop();
//     console.log(`[${arr}][${index}] -> ${elem}`);
//     return elem < 4;
// });
// console.log(res);
/**
 * 1st: [1, 2, 3][1] -> 1 => return true
 * 2st: [1, 2][2] -> 2 => return true
 */

// ---------------------------------------------------
// 不是数组的对象调用 every
// const arrayLike = {
//     length: 3,
//     0: 'a',
//     1: 'b',
//     2: 'c',
//     3: 345 // ignored by every() since length >　3
// }

// console.log(
//     Array.prototype.every.call(arrayLike, (x) => typeof x === 'string')
// )
// => true


// ---------------------------------------------------------------------------
/**
 * Array.prototype.fill(value, start, end)
 * 数组的实例方法 fill, 用一个静态的值改变索引之间的一系列元素，
 * 返回更改过后的数组
 *
 * value:
 *    用来填充数组的值，注意: 数组中的全部元素都这个精确值：如果该值是一个对象，数组中的每个插槽都会引用那个对象。
 *
 * start(optional):
 *    基于零的索引, 开始填充的索引,转换为整数.
 *    1. 索引为负数会从数组的尾部, start < 0 => start + array.length 被使用
 *    2. 如果 start < -array.length 或者 start 被省略, 0为默认使用.
 *    3. 如果 start >= array.length, 没有索引被填充.
 *
 * end(optional):
 *    基于 0 的索引, 尾部填充的索引,转换为整数, fill 填充不包含 end 项.
 *    1. 索引为负数会从数组的尾部开始， end < 0 => end + array.length 被用。
 *    2. 如果 end < array.length, 0 被使用。
 *    3. 如果 end >= array.length 或者 被省略，数组的长度被使用。将会导致到 end 的全部索引被填充。
 *    4. 如果初始化后, end 的位置在 start 之前, 那么没有索引被填充
 *
 * Return Value
 */

// const arr1 = [1, 2, 3, 4];
//
// console.log(arr1.fill(0, 2, 4));
// // => [1, 2, 0, 0]
//
// console.log(arr1.fill(5, 1));
// // => [1, 5, 5, 5]
//
// console.log(arr1.fill(6))
// // => [6, 6, 6, 6]
//
// console.log([1, 2, 3].fill(4));
// // => [4, 4, 4]
//
// console.log([1, 2, 3].fill(4, 1));
// // => [1, 4, 4]
//
// console.log([1, 2, 3].fill(4, 1, 2));
// // => [1, 4, 3]
//
// console.log([1, 2, 3].fill(4, 1, 1));
// // => [1, 2, 3]
//
// console.log([1, 2, 3].fill(4, 3, 3));
// // => [1, 2 ,3]
//
// console.log([1, 2, 3].fill(4, -3, -2));
// // => [4, 2, 3]
//
// console.log([1, 2, 3].fill(4, NaN, NaN));
// // => [1, 2, 3]
//
// console.log([1, 2, 3].fill(4, 3, 5));
// // => [1, 2, 3]
//
// console.log(Array(3).fill(4));
// // => [4, 4, 4]
//
// const arr = Array(3).fill({});
// arr[0].hi = "hi";
// console.log(arr);
// // => [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

// 如何创建一个都是 1 的矩阵
// const arr = new Array(3);
//
// for (let i = 0; i < arr.length; i ++) {
//     arr[i] = new Array(4).fill(1);
// }
//
// console.log(arr)
// arr[0][0] = 10;
// console.log(arr[0][0]); // => 10
// console.log(arr[1][0]); // => 1
// console.log(arr[2][0]); // => 1

// 使用 fill 充满一个空的数组
// const tempGirls = Array(5).fill("Girl");
// console.log(tempGirls);

// const emptyArr = [,,,,,];
// emptyArr.fill("girls");
//
// console.log(emptyArr);

// 一个不是数组的对象调用 fill
const arrryLike = {
    length: 2
}

console.log(Array.prototype.fill.call(arrryLike, 1));

console.log(arrryLike)

const arrLike2 = {
    length: 5,
    1: 'a',
    3: 'b'
}

Array.prototype.fill.call(arrLike2, 'girls', 3);
console.log(arrLike2)