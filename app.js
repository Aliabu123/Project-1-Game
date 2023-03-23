let character = document.getElementById("character");
let obstacle = document.getElementById('obstacle');



document.addEventListener("keyup", (e)=>{
	if(e.key == "ArrowUp"){
		if(character.classList != "animate"){
		// Add animate class for the character to move up
		character.classList.add("animate")
	}
	// The character runs for 500ms
	// Remove class after 500ms
	setTimeout(function(){
		character.classList.remove("animate")
	}, 500)
	console.log(e.key)
	const up = e.key
	}
	
}, false)
