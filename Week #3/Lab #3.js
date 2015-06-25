/*
FizzBuzz
Brent is extremely particular about his outfits. Starting with the 1st day of summer, 
he wears a yellow shirt every 3rd day and a pink shirt every 7th day. 
On conflicting days (i.e. days that are multiples of both 3 and 7), 
he opts for his favorite blue tank instead.

1) Ask the user to input the day of summer as an integer, 
and store it in a variable. Use a conditional to test for the various repsonses they could give, 
and alert what Brent will be wearing that day. Keep in mind a user may not input a number, 
and make sure your code is able to handle that with an appropriate response!


var _shirtColor = "";
var _dayofSummer = 0;
do {_dayofSummer = prompt ("How many days of summer have past");}
while (_dayofSummer < 1 || _dayofSummer > 365);

if (_dayofSummer % 3 === 0 && _dayofSummer % 7 === 0) {
	_shirtColor = "Blue";
	alert = "Brent's wearing a " + _shirtColor + "shirt!";
	} 

else if (_dayofSummer % 7 === 0) {
	_shirtColor = "Pink";
	alert = "Brent's wearing a " + _shirtColor + "shirt!";
	} 

else if (_dayofSummer % 3 === 0) {
	_shirtColor = "Yellow";
	alert = "Brent's wearing a " + _shirtColor + "shirt!";} 

else {
	_shirtColor = "Clear";
	alert = "Brent's wearing a " + _shirtColor + "shirt!";
}

var _answer1 = 

var _elanswer1 = document.getElementById("answer1");
_elanswer1.textContent = _answer1;

*/



// 2) Use a loop to calculate the number of times each summer Brent will wear his yellow shirt, 
// pink shirt, and blue tank. Store each in a variable and alert them.


var _daysInSummer = 90
var _blueDays = 0
var _pinkDays =0
var _yellowDays = 0
var _clearDays = 0

for (var _dayofSummer = 0; _dayofSummer < _daysInSummer; _dayofSummer++) 
{
	if (_dayofSummer % 3 === 0 && _dayofSummer % 7 === 0) {
		_blueDays++;
//		console.log(_blueDays);
		} 

	else if (_dayofSummer % 7 === 0) {
		_pinkDays++;
//		console.log(_pinkDays);
		} 

	else if (_dayofSummer % 3 === 0) {
		_yellowDays++;
//		console.log(_yellowDays)
		} 

	else {
		_clearDays++;
//		console.log(_clearDays);
		}
}
//var _answer2 = "During a 90 day summer Brent would wear blue on " + _blueDays + " days, pink on " + _pinkDays +  " days, yellow on " + _yellowDays + " days and clear on " + _clearDays + " days."; 
var _answer2 = "1212"

var _elanswer2 = document.getElementById("answer2");
_elanswer2.textContent = _answer2;



