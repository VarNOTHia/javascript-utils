// 深拷贝。每一层都会被拷贝，新开一个空间。
// 注意：typeof 测不出来 [] {} 之分！
const deepClone = (obj) => {
  if(!obj || typeof obj !== 'object') return;

  let obj2 = Array.isArray(obj) ? [] : {};

  for(let prop in obj){
    // hasOwnProperty: 检查这个属性是自己的还是继承的
    if(obj.hasOwnProperty(prop)){
      // 只对对象 / 数组进行递归！
      obj2[prop] = 
        typeof obj[prop] === 'object'
          ? deepClone(obj[prop])
          : obj[prop];
    }
  }
  return obj2;
}

// test
let obj1 = {
  name: 'Jack',
  age: '40',
  status: {
    alive: 'true',
    next_status: {
      diff: 13.8,
    }
  }
};

// 但如果引入子对象就会被一并修改。
obj2 = deepClone(obj1);
console.log(obj1.status);

obj2.name = 'Kobe';
obj2.status.alive = 'false';
obj2.status.next_status = '13.2';
console.log(obj2);

console.log(obj1);