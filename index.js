var randomnumber1 = Math.floor(Math.random() * 6 + 1);

var randomdiceimage = "images/Dice" + randomnumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomdiceimage);

var randomnumber2 = Math.floor(Math.random() * 6 + 1);

var randomdiceimage1 = "images/Dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomdiceimage1);

if (randomnumber1 < randomnumber2 ) {
    document.querySelector("h1").innerHTML = "Player 2 win" ;
} else if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 win" ;
} else {
    document.querySelector("h1").innerHTML = "Draw!" ;

}
