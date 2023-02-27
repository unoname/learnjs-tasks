let user = {
  name: 'Василий Иванович',
  age: 35,
};

let userJSON = JSON.stringify(user);
let newUser = JSON.parse(userJSON);
