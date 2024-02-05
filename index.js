var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var firstImage = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", firstImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var secondImage = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", secondImage);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win Hurrey !"
} else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Win Hurrey !"
} else {
    document.querySelector("h1").innerHTML = "That's A Draw"
}


