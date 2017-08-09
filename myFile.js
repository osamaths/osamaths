// Write a function called RepeatN that accpets and string and a number the return that string n times

function RepeatN(string, n) {
	var str = '';
	for (var i = 0; i < n; i++) {
		str = string + ' ';
	}
}


RepeatN('RBK', 3); // => RBK RBK RBK
RepeatN('Javascript', 5); // => Javascript Javascript Javascript Javascript Javascript
