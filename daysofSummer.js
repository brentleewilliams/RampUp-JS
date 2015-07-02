# RampUp-JS

var _shirtColor = "";
var _dayofSummer = 0;

do {_dayofSummer = prompt ("How many days of summer have past");}
while (_dayofSummer = "" || _dayofSummer < 1 || _dayofSummer > 365);
console.log(_dayofSummer);  //_dayofSummer is still undefined, not being set.

if (_dayofSummer % 3 === 0 && _dayofSummer % 7 === 0) {
	_shirtColor = "Blue";
	alert = "Brent's wearing a " + _shirtColor + "shirt!";
	console.log (_shirtColor);
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
