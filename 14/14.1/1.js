function wrap(target){
    return new Proxy(target, {
        get(target, prop) {
          if (prop in target) {
            return target[prop];
          } else {
           throw new Error(`Свойство "${prop}" не существует`)
          }
        }
      })
}
let user = {
    name: "John"
  };
  
user = wrap(user);

console.log(user.name); 
console.log(user.age);