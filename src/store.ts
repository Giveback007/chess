import { Reducer, AnyAction } from "redux";
import { GameState } from "./defn.d";
import { getBoardState } from "./lib";

// -- // -- // -- // // -- // -- // -- //
export const PIECE_WAS_CLICKED = "PIECE_WAS_CLICKED";
export const START_NEW_GAME = "START_NEW_GAME";
export const SET_BOARD_SIZE = "SET_BOARD_SIZE";
export const REFRESH_BOARD = "REFRESH_BOARD";
export const MOVE_PIECE = "MOVE_PIECE";
// -- // -- // -- // // -- // -- // -- //

export const rootReducer: Reducer<GameState> = (state, action: AnyAction) => {
    const newState: GameState = { ...state };
    let refreshBoard = action.type === REFRESH_BOARD;

    switch (action.type) {
        case PIECE_WAS_CLICKED:
            newState.boardState = getBoardState(state.game, action.payload);
            break;
        case MOVE_PIECE:
            state.game.move(action.payload);
            refreshBoard = true;
            break;
        case START_NEW_GAME:
            newState.game = action.payload;
            refreshBoard = true;
            break;
        case SET_BOARD_SIZE:
            newState.boardSize = action.payload;
            break;
    }

    if (refreshBoard) {
        newState.boardState = getBoardState(newState.game, "");
    }

    return newState;
};
