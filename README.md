# Tic Tac Toe 3D

## Credits

Written by Sam Humphreys using React.

## Summary

A 3 dimensional Tic Tac Toe game that tallies score between X and O players.

Like traditional Tic Tac Toe, but played with 3 boards stacked on top of each other.

Where Tic Tac Toe has 8 winning combinations, being able to choose across 3 layers means that there are 49 winning combinations:

* 27 in straight lines (horizontal, vertial, down through the layers)
* 10 diagonals (2 on each layer, 4 going through all layers)
* 12 diagonals through the layers while staying horizontal or vertical)

## Installalation

Note: These instructions are written for use in a unix-like terminal using Git...

* Change directory to where you want the folder to be created

* Clone the code from Bitbucket

`git clone https://[your Bitbucket user name]@bitbucket.org/iamasamwich/tictactoe3d.git`

* Change into the tictactoe3d directory and install the NPM packages

`cd tictactoe3d && npm install`

* When that has finished, start the server and make a note of the port the server is running on

`npm start`

* Visit http://localhost:[port] to try the app

## Todo

* <s>Responsive styling on How To page</s>