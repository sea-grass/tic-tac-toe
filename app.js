var players = [0,1];
var turn = 0;
var grid = [];
var container = document.createElement("div");
container.classList.add("tic-tac-toe-board");
var gameActionListener = function() {
	return function(e) {
		//DO STUFF
		if (e.target == container) { return; }
		if (!e.target.played) {
			e.target.innerHTML = turn==0? "X":"O";
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
container.addEventListener("click", gameActionListener);
container.addEventListener("touch", gameActionListener);
for (var i = 0; i < 9; i++) {
	var el = document.createElement("div");
	el.classList.add("grid-square");
	el.classList.add("id-"+i);
	grid.push(el);
	el.innerHTML = i;
	container.appendChild(grid[i]);
}
document.body.appendChild(container);

var ui = document.createElement("div");
document.body.appendChild(ui);
ui.classList.add("ui");
ui.innerHTML = "<div id='players'></div>";
ui.gameover = function(winner) {
	this.innerHTML = "Game over!";
	this.innerHTML += winner+" wins!! haha";
	console.log(grid);
}
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
	if (filled == 9) {
		ui.gameover("X");
	}
};
ui.update();

