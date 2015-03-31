function leapLogic(year){
	var divisibleByFour = year % 4 === 0;
	var divisibleByHundred = year % 100 === 0;
	var divisibleByFourHundred = year % 400 === 0;

	return divisibleByFour && divisibleByHundred || divisibleByFourHundred



}

function leap(year){
	var divisibleByFour = year % 4 === 0;
	var divisibleByHundred = year % 100 === 0;
	var divisibleByFourHundred = year % 400 === 0;

	return ((divisibleByFour) && (!divisibleByHundred)) || divisibleByFourHundred
}


console.log(leapLogic(2000) === true);
console.log(leapLogic(2003) === false);
console.log(leapLogic(2015) === false);
console.log(leapLogic(1999) === false);

console.log(leap(2000) === true);
console.log(leap(2003) === false);
console.log(leap(2015) === false);
console.log(leap(1999) === false);