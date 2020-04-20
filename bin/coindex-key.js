const program = require('commander');

program
  .command('set')
  .description('Set API Key -- Get at https://nomics.com')
  .action(() => console.log('Set API Key'));

program
  .command('show')
  .description('Show API Key')
  .action(() => console.log('Show API Key'));

program
  .command('remove')
  .description('Remove API Key')
  .action(() => console.log('Remove API Key'));

program.parse(process.argv);
