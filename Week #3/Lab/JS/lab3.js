/*
FizzBuzz
Brent is extremely particular about his outfits. Starting with the 1st day of summer, 
he wears a yellow shirt every 3rd day and a pink shirt every 7th day. 
On conflicting days (i.e. days that are multiples of both 3 and 7), 
he opts for his favorite blue tank instead.
*/

var _shirtColor = "";
var _dayofSummer = 0;
do {_dayofSummer = prompt ("How many days of summer have past");}
while (_dayofSummer < 1 || _dayofSummer > 365 || _dayofSummer % 1 !== 0);

if (_dayofSummer % 3 === 0 && _dayofSummer % 7 === 0) {
	_shirtColor = "Blue";} 

else if (_dayofSummer % 7 === 0) {
	_shirtColor = "Pink";} 

else if (_dayofSummer % 3 === 0) {
	_shirtColor = "Yellow";}

else {
	_shirtColor = "Clear";}	


var _answer1 = "1) Ask the user to input the day of summer as an integer, and store it in a variable.";
_answer1 += "Use a conditional to test for the various repsonses they could give,";
_answer1 += "and alert what Brent will be wearing that day. Keep in mind a user may not input a number,"; 
_answer1 += "and make sure your code is able to handle that with an appropriate response!";
_answer1 += "<p>" + "Today is the " + _dayofSummer + "th day of summer, Brent is wearing his ";
_answer1 += _shirtColor + " shirt! </p>";


// 2) Use a loop to calculate the number of times each summer Brent will wear his yellow shirt, 
// pink shirt, and blue tank. Store each in a variable and alert them.


var _daysInSummer = 90;
var _blueDays = 0;
var _pinkDays =0;
var _yellowDays = 0;
var _clearDays = 0;

for (var _counter = 0; _counter < _daysInSummer; _counter++) 
{
	if (_counter % 3 === 0 && _counter % 7 === 0) {
		_blueDays++;
//		console.log(_blueDays);
		} 

	else if (_counter % 7 === 0) {
		_pinkDays++;
//		console.log(_pinkDays);
		} 

	else if (_counter % 3 === 0) {
		_yellowDays++;
//		console.log(_yellowDays)
		} 

	else {
		_clearDays++;
//		console.log(_clearDays);
		}
}
// console.log(_pinkDays);  // 8
// console.log(_blueDays); // 5
// console.log(_yellowDays); // 25
// console.log(_clearDays); // 52
 

var _answer2 = "2) Use a loop to calculate the number of times each summer Brent will wear his yellow shirt,"; 
	_answer2 += "Pink shirt, Clear shirt and blue tank. Store each in a variable and alert them.";
	_answer2 += "<p>" + "During a 90 day summer Brent would wear blue on " + _blueDays; + "</p>";
	_answer2 += " days, pink on " + _pinkDays;
	_answer2 += " days, yellow on " + _yellowDays;
	_answer2 += " days and clear on " + _clearDays + " days."; 

var _elanswer2 = document.getElementById('problem2');
_elanswer2.innerHTML = _answer2;

var _elanswer1 = document.getElementById('problem1');
_elanswer1.innerHTML = _answer1;

_elanswer1.click(function(){
  document.getElementById('problem1').style.display = "none";
});


