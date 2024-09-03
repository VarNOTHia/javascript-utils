/** apply
 *
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */
function customApply(fun, context = window, argArr) {
  // apply 和 bind / call 不一样在，参数必须传数组。
  // 定义一个唯一的 key 来定位
  const funKey = Symbol("apply_function");
  // 借助这个 key，把要执行的函数绑定在 context 下。（没有值就默认 window）
  context[funKey] = fun;
  // 借助 context 来执行函数，记录返回值。
  const res = context[funKey](...argArr);
  // 防止污染，回收这个临时函数
  delete context[funKey];
  // 返回函数原本的返回值。
  return res;
}

let human = {
  name: 'Jack',
  sayName: function(){
    console.log(this.name);
  }
}

let notHuman = {
  name: 'sdadsd'
};

customApply(human.sayName, notHuman, []);