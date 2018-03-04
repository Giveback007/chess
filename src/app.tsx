import * as Chess from "chess.js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import GameBoard from "./game-board";
import "./index.scss";
import { genEmptyBoard } from "./lib";

const chessGame = Chess();
const board = genEmptyBoard();

function getBoardState(game) {
    const newBoard = genEmptyBoard();
    newBoard.map((sqr) => {
        sqr.peace = game.get(sqr.position);
        sqr.moves = game.moves({square: sqr.position, verbose: true});
    });

    return newBoard;
}

async function runGame(game) {
    await new Promise((res) => setTimeout(res, 250));
    if (!game.game_over()) {
        const moves = game.moves();
        const nextMove = moves[Math.floor(Math.random() * moves.length)];
        game.move(nextMove);
        ReactDOM.render(<GameBoard board={getBoardState(game)} />, document.getElementById("root"));

        runGame(game);
    }
}

ReactDOM.render(<GameBoard board={getBoardState(chessGame)} />, document.getElementById("root"));
runGame(chessGame);
