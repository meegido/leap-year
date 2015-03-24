function leapLogic(year){
	if ((year % 4 === 0) && (year % 100 === 0 || year % 400 === 0)){
		return true
	}
	else {
		return false
	}
}

function leap(year){
	if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
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