// ES6 wrapper
require('babel-register')({
	presets: ['env','stage-0']
});
require('./server-local.js')
require('babel-polyfill')
