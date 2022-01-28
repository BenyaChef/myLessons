function even_or_odd(number) {
	let x = number % 2;
  if (x === 0) {
		return "Even";
	} else {
		return "Odd";
	};
}

let result1 = even_or_odd(2);
console.log(result1);