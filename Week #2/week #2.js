/* poker hand
Create an object that contains three poker hands: a Full House, a Royal Flush, and 4 of a Kind. The key should be the name of the hand, and the value an array of the five cards (using strings, i.e. "King of Clubs", "Two of Diamonds", etct).
Create a variable called "hand" and use a switch statement to evaluate the hand and alert some information accordingly.
In each case, use a for loop to create a string that reads "This hand is a Hand Name and contains a Card 1, Card 2,Card 3, Card 4, Card 5".
*/
   
try turning _pokerHands into an array


var _userHand = "";
var _pokerHands =
    {
    	"royalFlush": ["10 of hearts ", " Jack of hearts ", " Queen of hearts ", " King of hearts ", " Ace of hearts"],
    	"4ofaKind": ["Ace of hearts ", " Ace of hearts ", " Ace of hearts ", " Ace of hearts ", " King of hearts "],
    	"fullHouse": ["Ace of hearts ", " Ace of hearts ", " Ace of hearts ", " Queen of hearts ", " Queen of hearts "],
    };

do {
    _userHand = prompt("Do you have a royalFlush, 4ofaKind or a fullHouse?");
     }

while (_userHand != "royalFlush" && _userHand !="4ofaKind" && _userHand !="fullHouse");
    
        
switch (_userHand) 
    {

        case "royalFlush":
            alert("This hand is a royalFlush and it contains " + _pokerHands["royalFlush"]);
            break;

        case "4ofaKind":
            alert("You've got a 4ofaKind and it contains " + _pokerHands["4ofaKind"]);
            break;

        case "fullHouse":
            alert("You've got a fullHouse and it contains" + _pokerHands["fullHouse"]);
            break;
    }
