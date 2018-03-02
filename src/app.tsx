import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Chess from 'chess.js';
import GameBoard from './game-board';
import { setTimeout } from 'timers';
import { genEmptyBoard } from './lib';
import './index.scss';

let game = Chess();
let board = genEmptyBoard();

function getBoardState(game) {
    const board = genEmptyBoard()
    board.map(sqr => sqr.peace = game.get(sqr.position));
    
    return board;
}

async function runGame(game) {
    await new Promise(res => setTimeout(res, 250));
    if (!game.game_over()) {
        const moves = game.moves();
        const nextMove = moves[Math.floor(Math.random() * moves.length)];
        game.move(nextMove);
        ReactDOM.render(<GameBoard board={getBoardState(game)} />, document.getElementById('root'));

        runGame(game);
    }
}

runGame(game);
    

