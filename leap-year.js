function leap(year){
	if ((year % 4 === 0) && (year % 100 === 0 || year % 400 === 0)){
		return true
	}
	else {
		return false
	}
}


console.log(leap(2000));
console.log(leap(2003));
console.log(leap(2015));
console.log(leap(1999));