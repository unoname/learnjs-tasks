const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let result;
  console.log('Введите арифметическое выражение')
  rl.on('line', async data => {
    result = await eval(data);
   console.log(result)
    rl.close();
  })
    .on('SIGINT', () => {
        process.exit();
    })
    .on('error', err => {
      console.log(err.message);
    });
   