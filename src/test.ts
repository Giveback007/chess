import { ChessBoard } from "./app";
import { InitGameState } from "./defn";
import * as Chess from "chess.js";

// -- test -- //
const startState: InitGameState = {
    showHighl: true,
    showPositions: false,
    showKeys: false,
    headerMsg: "Chess Game - score 99 - 99",
    boardSize: 200,
};

window['chessGame1'] = Chess();
window['chessBoard1'] = new ChessBoard(document.getElementById("root1"), startState);
window['chessBoard1'].api.startNewGame(window['chessGame1']);

const chessGame2 = Chess();
const chessBoard2 = new ChessBoard(document.getElementById("root2"), { boardSize: 1500 });
chessBoard2.api.startNewGame(chessGame2);
// -- test -- //
