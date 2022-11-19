const getFlags = require('./flags')

console.log(`Oi ${getFlags('--name')}. \n${getFlags('--greeting')}`)