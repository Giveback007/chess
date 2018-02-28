import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Chess from 'chess.js';
import { Game } from './game';
import { setTimeout } from 'timers';
import { genEmptyBoard } from './lib'

let game = Chess();
let board = genEmptyBoard();

function getBoardState(game) {
    const board = genEmptyBoard()
    board.map(col => col.map(sqr => sqr.peace = game.get(sqr.position)));
    return board;
}

async function runGame(game) {
    await new Promise(res => setTimeout(res, 0));
    if (!game.game_over()) {
        const moves = game.moves();
        const nextMove = moves[Math.floor(Math.random() * moves.length)];
        game.move(nextMove);
        ReactDOM.render(<Game board={getBoardState(game)}/>, document.getElementById('root'));
        
        runGame(game);
    }
}

runGame(game);