//LOGIC
//Create the players. This must be an Array[2]
var players = [0,1];
//The game starts on player 0's turn. Possible values for turn are [0,1]
var turn = 0;
var grid = [];

var gameActionListener = function() {
//This gets called every time a user makes an action (click or touch)
	return function(e) {
		//DO STUFF
		if (e.target == container) { return; }
		if (!e.target.played) {
	//Set the ui space
			e.target.innerHTML = turn==0? "X":"O";
      //Set an attribute to check later
			e.target.played = turn==0?"X":"O";
		} else {
			console.log("Already played there!");
			return;
		}
		//RECALCULATE APP
		turn = turn == 0 ? 1 : 0;
		//RELOAD UI
		ui.update();
	};
}();

//UI
//Create the tic-tac-toe board
var container = document.createElement("div");
container.classList.add("tic-tac-toe-board");
for (var i = 0; i < 9; i++) {
	var el = document.createElement("div");
	el.classList.add("grid-square");
	el.classList.add("id-"+i);
	grid.push(el);
	el.innerHTML = i;
	container.appendChild(grid[i]);
}

//Execute a turn whenever a user clicks or touches the tic-tac-toe board
container.addEventListener("click", gameActionListener);
container.addEventListener("touch", gameActionListener);

//Add the tic-tac-toe board to the page
document.body.appendChild(container);
//Add the tic-tac-toe game status UI to the page
document.body.appendChild(ui);

//Create the game status UI
var ui = document.createElement("div");
ui.classList.add("ui");
ui.innerHTML = "<div id='players'></div>";
ui.innerHTML += "<div id='turns'></div>";

//Create a function to show a message when the game is completed
ui.gameover = function(winner) {
	this.innerHTML = "Game over!";
	this.innerHTML += winner+" wins!! haha";
	console.log(grid);
}
//Create a function to update the game status after each turn
ui.update = function() {
	if (turn == players[0]) {
		this.querySelector("#players").innerHTML = "<b>"+players[0]+"</b>" + " : " + players[1];
	} else {
		this.querySelector("#players").innerHTML = players[0] + " : " + "<b>"+players[1]+"</b>";
	}

	for (var i = 0, filled = 0; i < grid.length; i++) {
		if (grid[i].played) {
			filled++;
		}
	}
	this.querySelector("#turns").innerHTML = filled;
	if (filled == 9) {
		ui.gameover("X");
	}
};

//Initialize the game status UI values
ui.update();

