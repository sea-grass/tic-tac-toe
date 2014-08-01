function ttt(players, moves, openBoard) {
    /*winningSequence(players,moves,openBoard)
        output: _false_ if no winning sequence is found;
                _*player_index*_ of the winner in players
    */
    if (moves.length >=5) {
        if (winner = winningSequence(players, moves, openBoard)) {
            return {
                    result: "win",
                    player: winner
                    };
        }
        /*boardIsFull(openBoard)
            output: _false_ if openBoard.length > 0
                    _true_ otherwise 
        */
        if (boardIsFull(openBoard)) {
            return {
                    result: "tie",
                    player: {
                            name: "Chris",
                            id: 1024
                            }
                    };
        }
    }
    //Play turn
    var currPlayer = players[moves.length % players.length];
    moves.push(openBoard.splice(Math.random()*currPlayer.id%openBoard.length,1)[0]);
    //drawTable(players, moves, openBoard);

    return ttt(players, moves, openBoard);
}

/*winningSequence(players,moves,openBoard)
        output: _false_ if no winning sequence is found;
                _the player_ of the winner in players
    */
function winningSequence(players, moves, openBoard) {
    function containsWinningSequence(moveset) {
        var winningSequences = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
        ];
        for (var i = 0; i < winningSequences.length; i++) {
            for (var j = 0; j < winningSequences[i].length; j++) {
                var index = moveset.indexOf(winningSequences[i][j]);
                if (index == -1) {
                    break;
                }
                if ((j+1) == winningSequences[i].length) {
                    //console.log("we have a winner!");
                    return true;
                }
            }
        }
        return false;
    }
    var moveSubsets = [];
    for (var i = 0; i < players.length; i++) {
        moveSubsets[i] = [];
        for (var j = 0; j < moves.length; j++) {
            if (j % players.length == i) {
                moveSubsets[i].push(moves[j]);
            }
        }
        moveSubsets[i].sort();
    }
    if (containsWinningSequence(moveSubsets[(moves.length - 1) % players.length])) {
        return players[(moves.length -1) % players.length];
    }
    return false;
    //Or return the player index whose move set contains a winning sequence
}
function boardIsFull(openBoard) {
    /*The TTT board is _full_, when openBoard is _empty_*/
    return openBoard.length == 0 ? true: false;
}
function drawTable(players, moves, openBoard) {
	/*c(ell)
		input:   the cell index which to check
		returns: the player who played on that cell's name, or
				 a space, to indicate an unplayed cell
	*/
	var c = function(players, moves, openBoard){
		return function(cell_index) {
			for (var i = 0; i < moves.length; i++) {
				if (moves[i] == cell_index) {
					return players[i%2].name;
				}
			}
			return " ";
		};
	}(players, moves, openBoard);

	var i = 0;
    /*we use moves.length-1 here because it was X that just took a turn*/
    console.log("TURN "+moves.length+"! "+players[(moves.length-1)%players.length].name+"'s turn!");
	console.log("      "+c(i++)+"_|_"+c(i++)+"_|_"+c(i++));
	console.log("      "+c(i++)+"_|_"+c(i++)+"_|_"+c(i++));
	console.log("      "+c(i++)+" | "+c(i++)+" | "+c(i++));
    console.log("VVVVVVVVVVVV");
}


function runSim() {
    var results = [];
    for(var i = 0; i < 10000; i++) {
        results.push((
            function(result){
                if (result.result == "win") {
                    return "winner: "+result.player.name;
                }
                else {
                    return result.result
                };
            }(ttt([{name:"X",id:Math.random()*1000%256},{name:"O",id:Math.random()*1000%256}], [], [0,1,2,3,4,5,6,7,8]))
        ));
    }
    stats={"xWin":0, "oWin":0, "tie":0};
    for (var i = 0; i < results.length; i++) {
        if (results[i]=="winner: X") {
            stats.xWin++;
        }
        else if (results[i]=="winner: O") {
            stats.oWin++;
        }
        else if (results[i]=="tie") {
            stats.tie++;
        }
    }

    var numberOfXWinsEl = document.getElementById("numberOfXWins");
    var numberOfOWinsEl = document.getElementById("numberOfOWins");
    var numberOfTiesEl = document.getElementById("numberOfTies");
    var numberOfGamesEl = document.getElementById("numberOfGames");

    numberOfXWinsEl.innerHTML = "<textarea>"+stats.xWin+"</textarea>";
    numberOfOWinsEl.innerHTML = "<textarea>"+stats.oWin+"</textarea>";
    numberOfTiesEl.innerHTML = "<textarea>"+stats.tie+"</textarea>";
    numberOfGamesEl.innerHTML = "<textarea>"+results.length+"</textarea>";
}