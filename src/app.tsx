import * as React from "react";
import * as ReactDOM from "react-dom";
import GameBoard from "./game-board";
import { START_NEW_GAME, store } from "./store";
import "./index.scss";

store.subscribe(() =>
    ReactDOM.render(<GameBoard board={store.getState().board}/>, document.getElementById("root")));

// -- // -- // -- //
store.dispatch({type: START_NEW_GAME});

// ReactDOM.render(<GameBoard board={}/>>, document.getElementById("root"));

// async function runGame(game) {
//     await new Promise((res) => setTimeout(res, 250));
//     if (!game.game_over()) {
//         const moves = game.moves();
//         const nextMove = moves[Math.floor(Math.random() * moves.length)];
//         game.move(nextMove);
//         ReactDOM.render(<GameBoard board={getBoardState(game)} />, document.getElementById("root"));

//         runGame(game);
//     }
// }

// runGame(chessGame);
