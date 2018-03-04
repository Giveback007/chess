import { createStore, Reducer } from "redux";
// import GameBoard from './game-board';
// import { genEmptyBoard } from './lib';
import { AnyAction } from "redux";

const PEACE_WAS_CLICKED = "PEACE_WAS_CLICKED";
const PEACE_HAS_MOVED = "PEACE_HAS_MOVED";

const peaceWasClicked = (position: string): AnyAction =>
    ({ type: PEACE_WAS_CLICKED, position });

const peaceHasMoved = (move: string): AnyAction =>
    ({ type: PEACE_HAS_MOVED, move });

const rootReducer = (state, action) => {
    return state;
};

rootReducer("string", {type: "s"});

// const store = createStore();
