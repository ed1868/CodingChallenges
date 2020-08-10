var ReverseMd5 = require('reverse-md5')

var rev = ReverseMd5({
	lettersUpper: false,
	lettersLower: true,
	numbers: true,
	special: false,
	whitespace: true,
	maxLen: 12
})




rev('49f68a5c8493ec2c0bf489821c21fc3b')