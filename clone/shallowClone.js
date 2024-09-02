// 浅拷贝。第一层数据可以做到独立，但如果引入子对象就会被一并修改。
// 平替：Object.assign、slice、concat、拓展 [...]
const shallowClone = (obj) => {
  const newObj = {};
  for(const prop in obj){
    // hasOwnProperty: 检查这个属性是自己的还是继承的
    if(obj.hasOwnProperty(prop)){
      newObj[prop] = obj[prop];
    }
  }
  return newObj;
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
obj2 = shallowClone(obj1);
console.log(obj1.status);

obj2.name = 'Kobe';
obj2.status.alive = 'false';
obj2.status.next_status = '13.2';
console.log(obj2.status);

console.log(obj1.status);