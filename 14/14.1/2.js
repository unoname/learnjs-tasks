let array = [1, 2, 3];

array = new Proxy(array, {
  get(array, index, receiver){    
    if(index < 0) {
        let position = array.length - Math.abs(index)         
        return Reflect.get(array, position, receiver)
    }
    return Reflect.get(array, index, receiver)
  }
});


console.log( array[-1] ); // 3
console.log( array[-2] ); // 2