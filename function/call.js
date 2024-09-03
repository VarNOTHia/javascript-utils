/** call
 *
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */
function customCall(fun, context = window) {
  // 上面传入的参数还可以更多，从第三个开始整合为一个数组
  const args = [...arguments].slice(2);
  // 定义一个唯一的 key 来定位
  const funKey = Symbol("apply_function");
  // 借助这个 key，把要执行的函数绑定在 context 下。（没有值就默认 window）
  context[funKey] = fun;
  // 借助 context 来执行函数，记录返回值。
  const res = context[funKey](...args);
  // 防止污染，回收这个临时函数
  delete context[funKey];
  // 返回函数原本的返回值。
  return res;
}