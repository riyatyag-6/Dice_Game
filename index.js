function roll(){


var randomNumber1=Math.random()*6;
randomNumber1=Math.floor(randomNumber1)+1;

if(randomNumber1===1){
    document.getElementById("img1").src="images/dice1.png";
}

else if(randomNumber1===2){
    document.getElementById("img1").src="images/dice2.png";
}

else if(randomNumber1===3){
    document.getElementById("img1").src="images/dice3.png";
}

else if(randomNumber1===4){
    document.getElementById("img1").src="images/dice4.png";
}


else if(randomNumber1===5){
    document.getElementById("img1").src="images/dice5.png";
}

else{
    document.getElementById("img1").src="images/dice6.png";
}


var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



//If player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "✌️Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "✌️Player 2 Wins! ";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

  
}
