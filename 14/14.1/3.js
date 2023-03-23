let handlers = 'handlers';
function makeObservable(target) {
  target[handlers] = [];
  target.observe = function(handler) {
    this[handlers].push(handler);
  };
  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(target, property, value, receiver); 
      if (success) { 
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}
  
  let user = {};
  user = makeObservable(user);
  
  user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
  });
  
  user.name = "John"; // выводит: SET name=John