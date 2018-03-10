import * as Chess from "chess.js";
import { createStore, Reducer, AnyAction } from "redux";
import { GameState } from "./defn.d";
import { genEmptyBoard, getGameBoardState } from "./lib";

// -- // -- // -- //
export const START_NEW_GAME = "START_NEW_GAME";
export const PIECE_WAS_CLICKED = "PIECE_WAS_CLICKED";
export const MOVE_PIECE = "MOVE_PIECE";
// -- // -- // -- //

const initState: GameState = { game: null, board: genEmptyBoard() };

const reducer: Reducer<GameState> = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case PIECE_WAS_CLICKED:
            return { game: state.game, board: getGameBoardState(state.game, action.payload) };
        case MOVE_PIECE:
            state.game.move(action.payload);
            return { game: state.game, board: getGameBoardState(state.game, []) };
        case START_NEW_GAME:
            const game = Chess();
            return { game, board: getGameBoardState(game, []) };
        default:
            return state;
    }
};

export const store = createStore(reducer);

// -- // -- // -- //
export const chessPieceClick = (moves) =>
    () => store.dispatch({type: PIECE_WAS_CLICKED, payload: moves});

export const chessPieceMove = (san) =>
    () => store.dispatch({type: MOVE_PIECE, payload: san});
