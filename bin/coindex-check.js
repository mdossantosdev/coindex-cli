const program = require('commander');
const check = require('../commands/check');

program
  .command('price')
  .description('Check price of crypto')
  .option('--coin <type>', 'Add specific crypto ticker', 'BTC, ETH, LINK')
  .option('--cur <currency', 'Change the currency', 'USD')
  .action((cmd) => check.price(cmd));

program.parse(process.argv);
