import * as React from "react";
import * as ReactDOM from "react-dom";
import Board from "./game-board";
import { START_NEW_GAME, PIECE_WAS_CLICKED, MOVE_PIECE, rootReducer, REFRESH_BOARD } from "./store";
import { createStore, Store, Unsubscribe } from "redux";
import { GameState, ChessBoardAPI, InitGameState } from "./defn";
import { genEmptyBoard } from "./lib";
import "./index.scss";

export class ChessBoard {
    api: ChessBoardAPI;

    private store: Store<GameState>;
    private storeSub: Unsubscribe;
    private containerNode: HTMLElement;

    constructor(node: HTMLElement, initState: InitGameState = {}) {

        const initStateDef: GameState = {
            game: null,
            showHighl: true,
            showPositions: false,
            showKeys: false,
            boardState: genEmptyBoard(),
            headerMsg: null,
            boardSize: 500,
        };

        this.containerNode = node;

        this.api = {
            chessPieceClick: this.chessPieceClick,
            chessPieceMove: this.chessPieceMove,
            startNewGame: this.startNewGame,
            refreshBoard: this.refreshBoard,
        };

        this.store = createStore(rootReducer, {...initStateDef, ...initState});
        this.storeSub = this.store.subscribe(this.onStateChange);
        this.store.dispatch({ type: "INIT" });
    }

    private onStateChange = (state = this.store.getState()) =>
        ReactDOM.render(<Board gameState={state} api={this.api}/>, this.containerNode)

    // refactor chessPieceClick so that it takes the piece position as an argument
    private chessPieceClick = (select: string) =>
        this.store.dispatch({ type: PIECE_WAS_CLICKED, payload: select })

    private startNewGame = (game) =>
        this.store.dispatch({ type: START_NEW_GAME, payload: game })

    private chessPieceMove = (san: string) =>
        this.store.dispatch({ type: MOVE_PIECE, payload: san })

    private refreshBoard = () =>
        this.store.dispatch({ type: REFRESH_BOARD })
}

import "./test";
