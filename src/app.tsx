import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Chess from "chess.js";
import GameBoard from "./game-board";
import { START_NEW_GAME, stateStore, chessPieceMove } from "./store";
import "./index.scss";

    // if (state.game.game_over()) {
    //     return;
    //     // add some conditional that let you know who won
    // }

    // -- // -- //
    // this will be how the ai can interface with the game
    // need to expose this part
    // if (
    //     (state.turn === "w" && state.whiteAi) ||
    //     (state.turn === "b" && state.blackAi)
    // ) {
    //     aiTurn(50, state.game.moves())
    //     .then((nextMove) => chessPieceMove(nextMove)());
    // }
    // -- // -- //
// });

stateStore.subscribe(() => {
    const state = stateStore.getState();
    ReactDOM.render(
        <GameBoard gameState={state}/>,
        document.getElementById("root"));
});

// -- // -- // -- // -- // -- // -- // -- //
stateStore.dispatch({ type: START_NEW_GAME, payload: Chess() });
// -- // -- // -- // -- // -- // -- // -- //

async function aiTurn(milsWait: number, movesList: string[]) {
    const nextMove = movesList[Math.floor(Math.random() * movesList.length)];
    await new Promise((res) => setTimeout(res, milsWait));
    return nextMove;
}
