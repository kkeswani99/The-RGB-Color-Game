var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
	//mode button event listeners
	setUpModeButtons();
	//setting up squares
	setUpSquares();
	//resetting
	reset();
}


function setUpModeButtons()
{
	for(var i=0;i<modeButtons.length;i++)
	{
		modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
			if(this.textContent === "Easy")
			{
				numSquares=3;
			}
			else
			{
				numSquares=6;
			}
		reset();
	});
	}
}

function setUpSquares()
{
	for (var i = 0; i <squares.length; i++)
	{
		//add click listeners to squares
		squares[i].addEventListener("click",function(){
		//grab color of picked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
			if(clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct";
				changeColor(clickedColor);
				h1.style.background = clickedColor;
				resetbutton.textContent = "PLAY AGAIN?";
			}
			else
			{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
	});
	}
}


function reset(){
	colors = generateRandomColor(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colordisplay to matched pick color
	colorDisplay.textContent = pickedColor;
	resetbutton.textContent = "New Colors";

	messageDisplay.textContent = "";
	//change colors of squares	
	for(var i = 0; i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";

}


resetbutton.addEventListener("click", function(){
	reset();
});


function changeColor(color)
{
	
	for(var i = 0;i < squares.length ; i++)
	{
		//now i need to loop through all the squares so that they can change the colors
		squares[i].style.background = color;
	}
}


function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}


function generateRandomColor(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num ; i++)
	{
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}


function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 

}