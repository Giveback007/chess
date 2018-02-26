import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GameBoard } from './board';
import { Chess } from 'chess.js';

console.log('hi there!!!');

var game = new Chess();
console.log(game)

ReactDOM.render(<GameBoard />, document.getElementById('root'));


