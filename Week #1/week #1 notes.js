=  setting variable
== check for equality
=== check for equality and variable type

	js> var _first = "brent";
	js> var _name = _first
	js> _name
	brent
	js> _first = "Brent"
	Brent
	js> _name   
	brent
	js> _name == _first
	false
	js> _first = "brent"
	brent
	js> _first == _name
	true
	js> _first === _name
	true
	js> var _a = 2015           
	js> var _b = "2015";
	js> _a == _b
	true
	js> _a === _b
	false
	js> 


Arrays

	var _class = ["Brent","Tom","Jermaine","Liam","Hanni","Joe","Parag","Jeff"];

Are actually just 

Objects

	var _class

	"0": "Brent"
	"1": "Tom"
	etc.

----
var _joe = {name: "Joe", age: 30, interests: ["running", "friends", "tennis"]};

	_joe
	Object {name: "Joe", age: 30, interests: Array[3]}

	_joe.interests
	["running", "friends", "tennis"]

	_joe.interests[1]
	"friends"

	_joe.age >= 21
	true
----
	var _car1 = {}
	undefined

	_car1.color = "Green"
	"Green"

	_car1.transmission = "Auto"
	"Auto"

	_car1
	Object {color: "Green", transmission: "Auto"}



---
var _car = [];
undefined

_car
[]

_car.push ("wheels")
1

_car
["wheels"]

_car.push ("body")
2

_car
["wheels", "body"]

----
Deleting an element

_class
["Brent", "Tom", "Jermaine", "Liam", "Hanni", "Joe", "Parag", "Jeff"]
_class.pop(5)
"Jeff"
_class
["Brent", "Tom", "Jermaine", "Liam", "Hanni", "Joe", "Parag"]


_class
["Brent", "Tom", "Jermaine", "Liam", "Hanni", "Joe", "Parag"]
_class.splice(2,3)
["Jermaine", "Liam", "Hanni"]
_class
["Brent", "Tom", "Joe", "Parag"]

----
Dot or bracket notation

delete _car.make
delete _car["make"]

Array:
add => Push
remove=> splice

Object:
add => _obj.key = "value"
remove => delete _obj.key





