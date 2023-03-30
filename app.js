let character = document.getElementById("character");
let obstacle = document.getElementById('obstacle');
let obstacle1 = document.getElementById("obstacle1");
let obstacle2 = document.getElementById("obstacle2");
let obstacle3 = document.getElementById("obstacle3");
let gameOver = document.getElementById('game-over')
let displayScore = document.getElementById('score'); 
let score = 0;


document.addEventListener("keyup", (e)=>{
	if(e.key == "ArrowUp"){
		if(character.classList != "animate"){
		// Add animate class for the character to move up
		character.classList.add("animate")
	}
	// The character runs for 500ms
	
	setTimeout(function(){
		character.classList.remove("animate")
	}, 1400)
	console.log(e.key)
	const up = e.key
	}
	
}, false)
var gameValid = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
	let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))
   
	
	console.log("obstacleLeft", obstacleLeft)
	console.log("ch", characterTop)
	if(obstacleLeft< 15 && obstacleLeft > 0 && characterTop>=550){
		obstacle.style.animation = "none";
		obstacle1.style.animation = "none";
		obstacle2.style.animation = "none";
		obstacle3.style.animation = "none";
		 clearInterval(updateScore)
		obstacle.style.display = "none";
		alert("You Lose!! Your To Slow!!")
		gameOver.classList.add("show")  
	   } console.log("ch", characterTop)

    //   score++;
    // showScore();
}, 20)

var gameValid = setInterval(function () {
	let characterTop = parseInt(
	  window.getComputedStyle(character).getPropertyValue("top")
	);
  
	let obstacleLeft2 = parseInt(
	  window.getComputedStyle(obstacle1).getPropertyValue("left")
	);
  
	console.log("obstacleLeft", obstacleLeft2);
	console.log("ch", characterTop);
	if (obstacleLeft2 < 15 && obstacleLeft2 > 0 && characterTop >= 550) {
	  obstacle.style.animation = "none";
	  obstacle.style.animation = "none";
	  obstacle1.style.animation = "none";
		obstacle2.style.animation = "none";
		obstacle3.style.animation = "none";
	  obstacle.style.display = "none";
	  alert("You Lose!! Your To Slow!!");
	  gameOver.classList.add("show");
	}
  
	// score++;
	showScore();
  }, 20);

var gameValid = setInterval(function () {
	let characterTop = parseInt(
	  window.getComputedStyle(character).getPropertyValue("top")
	);
  
	let obstacleLeft3 = parseInt(
	  window.getComputedStyle(obstacle2).getPropertyValue("left")
	);
  
	console.log("obstacleLeft", obstacleLeft3);
	console.log("ch", characterTop);
	if (obstacleLeft3 < 15 && obstacleLeft3 > 0 && characterTop >= 550) {
	  obstacle.style.animation = "none";
	  obstacle.style.animation = "none";
		obstacle1.style.animation = "none";
		obstacle2.style.animation = "none";
		obstacle3.style.animation = "none";
	  obstacle.style.display = "none";
	  alert("You Lose!! Your To Slow!!");
	  gameOver.classList.add("show");
	}
  
	// score++;
	showScore();
  }, 20);

var gameValid = setInterval(function () {
	let characterTop = parseInt(
	  window.getComputedStyle(character).getPropertyValue("top")
	);
  
	let obstacleLeft4 = parseInt(
	  window.getComputedStyle(obstacle3).getPropertyValue("left")
	);
  
	console.log("obstacleLeft", obstacleLeft4);
	console.log("ch", characterTop);
	if (obstacleLeft4 < 15 && obstacleLeft4 > 0 && characterTop >= 550) {
	  obstacle.style.animation = "none";
	  obstacle.style.animation = "none";
		obstacle1.style.animation = "none";
		obstacle2.style.animation = "none";
		obstacle3.style.animation = "none";
	  obstacle.style.display = "none";
	  alert("You Lose!! Your To Slow!!");
	  gameOver.classList.add("show");
	}
  
	// score++;
	showScore();
  }, 20);
  

  function showScore(){
	score ++;
    displayScore.innerText = score;
}

 let updateScore = setInterval(showScore,200)



