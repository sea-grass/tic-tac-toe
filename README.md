#tic-tac-toe-ception

Basically when you play a game and it is completed, it is counted as a single move in a larger tic-tac-toe game. There's always more to it.

# About Tic-Tac-Toe

Tic-Tac-Toe (TTT) is a game for *2 players* and a *grid of 9 squares*. Each player has their own symbol, typically *X* and *O*.

To play the game, each player, starting with X, would place their respective symbol on a blank square in the board.

To win the game, a player has to place 3 of their symbols in a straight line, either horizontally, vertically, or diagonally.

---------
| || || |
---------
| || || |
---------
| || || |
---------

An empty tic-tac-toe board.


---------
|X||X||X|
---------
| ||O||O|
---------
| || || |
---------

A winning game for X.

---------
|X||X||O|
---------
|X||O||O|
---------
|O||X||X|
---------

A tie game.


========>	A horizontal win
  ---------
  | || || |
  ---------
==|=||=||=|=>
  ---------
  | || || |
  ---------


"		A vertical win
"
"
"
v
   "
   "
  ---------
  |"|| || |
  ---------
  |"|| || |
  ---------
  |"|| || |
  ---------
   "
   v

*		A right-diagonal win
 *
  *
   *
    >
*
 *
  ---------
  |*|| || |
  ---------
  | ||*|| |
  ---------
  | || ||*|
  ---------
           *
            >

    *		A left-diagonal win
   *
  *
 *
<
            *
           *
  ---------
  | || ||*|
  ---------
  | ||*|| |
  ---------
  |*|| || |
  ---------
 *
< 


*  "  "  "  *	All possible winning sequences
 * "  "  " *
  ---------
  |*|| ||*|
  |"||"||"|
==|=||=||=|=>
  ---------
  |"||"||"|
  | ||*|| |
==|=||=||=|=>
  ---------
  |"||"||"|
==|=||=||=|=>
  |*|| ||*|
  ---------
 * "  "  " *
<  v  v  v  >
  








Progress:
 - Have basic simple game loop going
 - Have winner notification -- although no proper win sequence checking
 - Have game over -- Although it only runs once all squares are filled
Todo:
 - Make the simple game count as a move in a larger game
 - Implement win-sequence checking after each move
