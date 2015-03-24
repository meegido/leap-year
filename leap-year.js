function divisibleByFour(number){
	return number % 4 === 0; 
}

function divisibleByHundred(number){
	return number % 100 === 0;
}

function divisibleByFourHundred(number){
	return number % 400 === 0;
}


function leapLogic(year){
	if ((divisibleByFour(year)) && (divisibleByHundred(year) || divisibleByFourHundred(year))){
		return true
	}
	else {
		return false
	}
}

function leap(year){
	if (((divisibleByFour(year)) && (!divisibleByHundred(year))) || (divisibleByFourHundred(year))){
		return true
	}
	return false
}


console.log(leapLogic(2000) == true);
console.log(leapLogic(2003) == false);
console.log(leapLogic(2015) == false);
console.log(leapLogic(1999) == false);

console.log(leap(2000) == true);
console.log(leap(2003) == false);
console.log(leap(2015) == false);