import * as Chess from "chess.js";
import * as React from "react";
import * as ReactDOM from "react-dom";
import GameBoard from "./game-board";
import { genEmptyBoard, getGameBoardState } from "./lib";
import { createStore, Reducer, AnyAction } from "redux";
import "./index.scss";
import { GameState, ISquare } from "./defn";

// -- // -- // -- //
export const START_NEW_GAME = "START_NEW_GAME";
export const PIECE_WAS_CLICKED = "PIECE_WAS_CLICKED";
// -- // -- // -- //

const initState: GameState = { game: null, board: genEmptyBoard() };

const reducer: Reducer<GameState> = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case PIECE_WAS_CLICKED:
            return { game: state.game, board: getGameBoardState(state.game, action.payload) };
        case START_NEW_GAME:
            const game = Chess();
            return { game, board: getGameBoardState(game, []) };
        default:
            return state;
    }
};

export const store = createStore(reducer);

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
