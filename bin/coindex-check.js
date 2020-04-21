const program = require('commander');

program
  .command('price')
  .description('Check price of crypto')
  .action(() => console.log('Price'));

program.parse(process.argv);
