import * as Chess from "chess.js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import GameBoard from "./game-board";
import { genEmptyBoard } from "./lib";
import { createStore, Reducer, Action } from "redux";
import "./index.scss";
import { GameState, ISquare } from "./defn";

// -- // -- // -- //
const START_NEW_GAME = "START_NEW_GAME";
// -- // -- // -- //

const initState: GameState = { game: null, board: genEmptyBoard() };

const reducer: Reducer<GameState> = (state: GameState = initState, action: Action) => {
    switch (action.type) {
        case START_NEW_GAME:
            const game = Chess();
            return {game, board: getGameBoardState(game)}
        default:
            return state;
    }
};

export const store = createStore(reducer);

// -- // -- // -- //
function getGameBoardState(game) {
    return genEmptyBoard().map((sqr) => {
        sqr.piece = game.get(sqr.position);
        sqr.moves = game.moves({square: sqr.position, verbose: true});
        return sqr;
    });
}

store.dispatch({type: START_NEW_GAME});
const state = store.getState();
ReactDOM.render(
    <GameBoard board={state.board} />,
    document.getElementById("root")
);

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
