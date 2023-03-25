let character = document.getElementById("character");
let obstacle = document.getElementById('obstacle');
let obstacle2 = document.getElementById('obstacle2');
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
	}, 1500)
	console.log(e.key)
	const up = e.key
	}
	
}, false)

var gameValid = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"))
	let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))
    let obstacleLeft2 = parseInt(window.getComputedStyle(obstacle2).getPropertyValue("left"))
	
	console.log("obstacleLeft", obstacleLeft)
	console.log("ch", characterTop)
	if(obstacleLeft<15 && obstacleLeft > 0 && characterTop>=550){
		obstacle.style.animation = "none";
		obstacle.style.display = "none";
		alert("You Lose!! Your To Slow!!")
		gameOver.classList.add("show")  
	   } console.log("ch", characterTop)
       if(obstacleLeft2<20 && obstacleLeft2 > 0 && characterTop>=600){
           obstacle2.style.animation = "none";
           obstacle2.style.display = "none";
           alert("You Lose!! Your To Slow!!")
           gameOver.classList.add("show")
       }
       score ++;
       showScore()
}, 20) 



function showScore(){
    
    displayScore.innerText = score;
}

