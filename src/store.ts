import {
    combineReducers, createStore, Reducer, AnyAction, Middleware, Store, applyMiddleware,
} from "redux";
import { GameState, ISquare, IGameBoard, IPieceColor } from "./defn.d";
import { genEmptyBoard, getBoardState } from "./lib";

// -- // -- // -- //
export const PIECE_WAS_CLICKED = "PIECE_WAS_CLICKED";
export const START_NEW_GAME = "START_NEW_GAME";
export const REFRESH_BOARD = "REFRESH_BOARD";
export const SET_BLACK_AI = "SET_BLACK_AI";
export const SET_WHITE_AI = "SET_WHITE_AI";
export const MOVE_PIECE = "MOVE_PIECE";
// -- // -- // -- //

const initState: GameState = {
    gameOver: false,
    blackAi: false,
    whiteAi: false,
    playerTurn: true,
    game: null,
    board: genEmptyBoard(),
    turn: "w",
    // actions: [],
 };

const rootReducer: Reducer<GameState> = (state = initState, action: AnyAction) => {
    // const actions = state.actions.slice(1, state.actions.length);
    const newState = { ...state };
    let refreshBoard = action.type === REFRESH_BOARD;

    switch (action.type) {
        case PIECE_WAS_CLICKED: // this should be called - show piece moves
            newState.board = getBoardState(state.game, action.payload);
            break;
        case START_NEW_GAME:
            newState.game = action.payload;
            refreshBoard = true;
            break;
        case MOVE_PIECE:
            // this will be broken out so that the game and the board
            // are managed separately
            state.game.move(action.payload);
            refreshBoard = true;
            break;
        // ai turns will be decided by a separate app
        case SET_BLACK_AI:
            newState.blackAi = action.payload;
            break;
        case SET_WHITE_AI:
            newState.whiteAi = action.payload;
            break;
    }

    if (refreshBoard) {
        newState.board = getBoardState(newState.game, []);
        newState.turn = newState.game.turn();
    }

    // this should be changed via actions
    newState.playerTurn = !(
        (newState.blackAi && newState.turn === "b") ||
        (newState.whiteAi && newState.turn === "w"));

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
