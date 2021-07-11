const argv = require('yargs')
.option('b', {
    alias: 'base',
    type :'number',
    demandOption:true,
    describe : 'describe la base '
})
.option('l', {
    alias: 'listar',
    type :'boolean',    
    default : false,
    describe: 'Lista la tabla'
})
.option('h', {
    alias: 'hasta',
    type :'number',        
    describe: 'numero hasta',
    demandOption : true
})
.check((argv, option) => {
  if (isNaN(argv.b)) {
      throw 'La base tiene que se un numero'
  }
  if (isNaN(argv.h)) {
    throw 'el numero hasta  tiene que se un numero'
}
  return true;
})
.argv

module.exports = argv