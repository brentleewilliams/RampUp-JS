var _userHand = "";
var _handContents = "";
var _pokerHands =
    {
        "royalFlush": ["10 of hearts", " Jack of hearts", " Queen of hearts", " King of hearts", " and an Ace of hearts"],
        "4ofaKind": ["Four Ace of hearts", " and a King of hearts"],
        "fullHouse": ["Three Ace of hearts", " and two Queen of hearts"],
    };

do {
    _userHand = prompt("Do you have a royalFlush, 4ofaKind or a fullHouse?");
     }

while (_userHand != "royalFlush" && _userHand !="4ofaKind" && _userHand !="fullHouse");
switch (_userHand) 
    {

        case "royalFlush":
            _handContents = _pokerHands["royalFlush"];
            break;

        case "4ofaKind":
            _handContents = _pokerHands["4ofaKind"];
            break;

        case "fullHouse":
            _handContents = _pokerHands["fullHouse"];
            break;
    }
var _eluserHand = document.getElementById("userHand");
_eluserHand.textContent = _userHand;


var _elhandContents = document.getElementById('handContents');
_elhandContents.textContent = _handContents;


/* Can also use if/else
if (_userHand == "4ofaKind") {
            _handContents = _pokerHands["4ofaKind"]} 

else if (_userHand == "royalFlush"){
    _handContents = _pokerHands["royalFlush"];
}

else {
    _handContents = _pokerHands["fullHouse"];
}
*/
