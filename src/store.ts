import {
    combineReducers, createStore, Reducer, AnyAction, Middleware, Store, applyMiddleware,
} from "redux";
import { GameState, ISquare, IGameBoard, IPieceColor } from "./defn.d";
import { genEmptyBoard, getBoardState } from "./lib";

// -- // -- // -- //
export const PIECE_WAS_CLICKED = "PIECE_WAS_CLICKED";
export const START_NEW_GAME = "START_NEW_GAME";
export const SET_BOARD_SIZE = "SET_BOARD_SIZE";
export const REFRESH_BOARD = "REFRESH_BOARD";
export const MOVE_PIECE = "MOVE_PIECE";
// -- // -- // -- //

const initState: GameState = {
    game: null,
    showHighl: true,
    showPositions: false,
    boardState: genEmptyBoard(),
    headerMsg: "",
    turn: "w",
    boardSize: 500,
 };

const rootReducer: Reducer<GameState> = (state = initState, action: AnyAction) => {
    // const actions = state.actions.slice(1, state.actions.length);
    const newState = { ...state };
    let refreshBoard = action.type === REFRESH_BOARD;

    switch (action.type) {
        case PIECE_WAS_CLICKED:
            newState.boardState = getBoardState(state.game, action.payload);
            break;
        case MOVE_PIECE:
            // this will be broken out so that the game and the board
            // are managed separately
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
        newState.boardState = getBoardState(newState.game, []);
        newState.turn = newState.game.turn();
    }

    return newState;
};

export let stateStore: Store<GameState> = createStore(rootReducer);

// -- // -- // -- //
export const chessPieceClick = (moves) =>
    () => stateStore.dispatch({type: PIECE_WAS_CLICKED, payload: moves});

export const chessPieceMove = (san) =>
    () => stateStore.dispatch({type: MOVE_PIECE, payload: san});

// export const setBlackAi = (bool) =>
//     () => stateStore.dispatch({type: SET_BLACK_AI, payload: bool});

// export const setWhiteAi = (bool) =>
//     () => stateStore.dispatch({type: SET_WHITE_AI, payload: bool});
