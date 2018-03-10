import * as Chess from "chess.js";
import {
    combineReducers, createStore, Reducer, AnyAction, Middleware, Store, applyMiddleware,
} from "redux";
import { GameState, ISquare, IGameBoard, IPieceColor } from "./defn.d";
import { genEmptyBoard, getBoardState } from "./lib";

// -- // -- // -- //
export const START_NEW_GAME = "START_NEW_GAME";
export const PIECE_WAS_CLICKED = "PIECE_WAS_CLICKED";
export const SET_BLACK_AI = "SET_BLACK_AI";
export const SET_WHITE_AI = "SET_WHITE_AI";
export const MOVE_PIECE = "MOVE_PIECE";
export const REFRESH_BOARD = "REFRESH_BOARD";
// -- // -- // -- //

const initState: GameState = {
    blackAi: false,
    whiteAi: false,
    game: null,
    board: genEmptyBoard(),
    turn: "w",
    actions: [],
 };

const rootReducer: Reducer<GameState> = (state = initState, action: AnyAction) => {
    const actions = state.actions.slice(1, state.actions.length);
    const newState = { ...state, actions };

    switch (action.type) {
        case PIECE_WAS_CLICKED:
            newState.board = getBoardState(state.game, action.payload);
            break;
        case START_NEW_GAME:
            newState.game = Chess();
            newState.actions = [ ...actions, {type: REFRESH_BOARD} ];
            break;
        case MOVE_PIECE:
            state.game.move(action.payload);
            newState.actions = [ ...actions, {type: REFRESH_BOARD} ];
            break;
        case REFRESH_BOARD:
            newState.board = getBoardState(state.game, []);
            newState.turn = state.game.turn();
            break;
        case SET_BLACK_AI:
            newState.blackAi = action.payload;
            break;
        case SET_WHITE_AI:
            newState.whiteAi = action.payload;
            break;
    }

    return newState;
};

export let stateStore: Store<GameState> = createStore(rootReducer);

// -- // -- // -- //
export const chessPieceClick = (moves) =>
    () => stateStore.dispatch({type: PIECE_WAS_CLICKED, payload: moves});

export const chessPieceMove = (san) =>
    () => stateStore.dispatch({type: MOVE_PIECE, payload: san});

export const setBlackAi = (bool) =>
    () => stateStore.dispatch({type: SET_BLACK_AI, payload: bool});

export const setWhiteAi = (bool) =>
    () => stateStore.dispatch({type: SET_WHITE_AI, payload: bool});
