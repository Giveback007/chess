import * as Chess from "chess.js";
import { combineReducers, createStore, Reducer, AnyAction, applyMiddleware, Middleware, MiddlewareAPI } from "redux";
import { GameState, ISquare, IGameBoard, IPieceColor } from "./defn.d";
import { genEmptyBoard, getBoardState } from "./lib";
import { Store } from "antd/lib/table/createStore";

// -- // -- // -- //
export const START_NEW_GAME = "START_NEW_GAME";
export const PIECE_WAS_CLICKED = "PIECE_WAS_CLICKED";
export const SET_BLACK_AI = "SET_BLACK_AI";
export const SET_WHITE_AI = "SET_WHITE_AI";
export const MOVE_PIECE = "MOVE_PIECE";
// -- // -- // -- //

const initState: GameState = {
    blackAi: false,
    whiteAi: false,
    game: null,
    board: genEmptyBoard(),
    turn: "w",
 };

// const boardReducer: Reducer<{board: IGameBoard, game: any, turn: IPieceColor}> = (
//     state: { board: IGameBoard, game: any, turn: IPieceColor },
//     action: AnyAction,
// ) => {
//     switch (action.type) {
//         case PIECE_WAS_CLICKED:
//             return { ...state, ...{ board: getBoardState(state.game, action.payload) } };
//         case MOVE_PIECE:
//             state.game.move(action.payload);
//             return { ...state, ...{ board: getBoardState(state.game, []), turn: state.game.turn() } };
//         case START_NEW_GAME:
//             const game = Chess();
//             return { ...state, ...{ game, board: getBoardState(game, []), turn: game.turn() } };
//         default:
//             return state;
//     }
// };

// const aiReducer: Reducer<{blackAi: boolean, whiteAi: boolean}> = (
//     state: { blackAi: boolean, whiteAi: boolean },
//     action: AnyAction,
// ) => {
//     switch (action.type) {
//         case SET_BLACK_AI:
//                 return { ...state, ...{ blackAi: action.payload } };
//         case SET_WHITE_AI:
//             return { ...state, ...{ whiteAi: action.payload } };
//     }
// };

const gameReducer = (game, action) => {
    switch (action.type) {
        case START_NEW_GAME:
            return Chess();
        case MOVE_PIECE:
            game.move(action.payload);
            return game;
        default:
            return game;
    }
};

const boardReducer: Reducer<IGameBoard> = (board, action) => {
    switch (action.type) {
        case PIECE_WAS_CLICKED:
            return getBoardState(action.game, action.highl);
        case MOVE_PIECE:
            return getBoardState(action.game, []);
        default:
            return board;
    }
};

const reducers: Reducer<GameState> = combineReducers({
    game: boardReducer,
    board: boardReducer,
    // turn: boardReducer,
    // blackAi: aiReducer,
    // whiteAi: aiReducer,
});

console.log(reducers);

const reducer: Reducer<GameState> = (state = initState, action: AnyAction) => {
    switch (action.type) {
        case PIECE_WAS_CLICKED:
            return { ...state, ...{ board: getBoardState(state.game, action.payload) } };
        case MOVE_PIECE:
            state.game.move(action.payload);
            return { ...state, ...{ board: getBoardState(state.game, []), turn: state.game.turn() } };
        case SET_BLACK_AI:
            return { ...state, ...{ blackAi: action.payload } };
        case SET_WHITE_AI:
            return { ...state, ...{ whiteAi: action.payload } };
        case START_NEW_GAME:
            const game = Chess();
            return { ...state, ...{game, board: getBoardState(game, []), turn: game.turn()}};
        default:
            return state;
    }
};

export const stateStore = createStore(reducer);

// -- // -- // -- //
export const chessPieceClick = (moves) =>
    () => stateStore.dispatch({type: PIECE_WAS_CLICKED, payload: moves});

export const chessPieceMove = (san) =>
    () => stateStore.dispatch({type: MOVE_PIECE, payload: san});

export const setBlackAi = (bool) =>
    () => stateStore.dispatch({type: SET_BLACK_AI, payload: bool});

export const setWhiteAi = (bool) =>
    () => stateStore.dispatch({type: SET_WHITE_AI, payload: bool});
