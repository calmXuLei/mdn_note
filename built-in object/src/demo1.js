/**
 * Array(elementN, arrayLength) 构造函数
 *
 * elementN: 根据给定的元素创建一个 js 数组, 但是当仅有一个参数且为数字时除外,
 *
 * arrayLength:如果传递给 Array 构造函数唯一参数是介于 2^32 - 1 之间的整数,这将返回
 *              一个新的 js 数组, 其 len 属性设置为该数字.
 */

// 调用 Array() 可以使用或不使用 new. 两者都会创建一个新的 Array 实例.

/**
 * 注意: 在数组定义时省略的元素不会在 forEach 遍历时被列出,但是手动赋值为 undefined
 *       的元素是会被列出来的
 */
// const sparseArray = [1, 2, , 4];
//
// sparseArray.forEach(el => {
//     console.log(el);
// })
// // 1, 2, 4
//
// if (sparseArray[2] === undefined) {
//     console.log('sparseArray[2] 是 undefined');
// } // true
//
// const nonsparseArray = [1, 2, undefined, 4];
//
// nonsparseArray.forEach(el => {
//     console.log(el)
// })
// // 1, 2, undefiend, 4
//
// if (nonsparseArray[2] === undefined) {
//     console.log('nonpsarse[2] is undefiend');
// }// true


/**
 * 由于 js 数组元素被保存为标准对象的属性, 因此不建议使用 for...in 循环遍历 javascript 数组,
 * 因为将列出普通元素和所有可枚举属性.
 */
// nonsparseArray['a'] = 1;
// nonsparseArray['b'] = 2;
// for (const v in nonsparseArray) {
//     console.log(v)
// }// 0 1 2 3 a b

