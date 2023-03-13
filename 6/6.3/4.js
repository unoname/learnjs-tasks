function makeArmy() {
  let shooters = [];
  let i = 0;
  while (i < 10) {
    let num = i;
    let shooter = function () {
      // функция shooter
      console.log(num); // должна выводить порядковый номер
    };
    i++;
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
army[9]();
