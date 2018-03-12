import * as React from "react";
import { Square } from "./square";
import { BoardState, GameState, ChessBoardAPI } from "./defn";
import { horz, vert, parseBoard } from "./lib";
import { hot } from "react-hot-loader";

function ChessBoard(props: { gameState: GameState, api: ChessBoardAPI }) {
    const {
        showHighl, showPositions, boardSize,
        boardState, headerMsg, showKeys,
    }: BoardState = props.gameState;

    const boardStyle = {
        width: boardSize,
        height: boardSize,
        fontSize: boardSize / 11,
        borderWidth: boardSize / 75,
    };

    const board = boardState ? parseBoard(boardState).map((row, r) => (
        <div className="row" key={r}>{row.map((sqr, c) =>
            <Square
                sqr={sqr}
                api={props.api}
                size={boardSize}
                key={sqr.position}
                showHighl={showHighl}
                showPos={showPositions}
            />)}
        </div>)) : null;

    return (
        <div className="ChessBoard">
            <h2 className="header" style={{ width: boardSize, fontSize: boardSize / 30 }}>
                {headerMsg}
            </h2>

            <div className="board">
                <section>
                    { showKeys ? <Keys arr={vert} name={"vert"} size={boardSize}/> : null}
                </section>

                <section>
                    <div className="board-main" style={boardStyle}> {board} </div>
                    { showKeys ? <Keys arr={horz} name={"horz"} size={boardSize}/> : null }
                </section>
            </div>

        </div>);
}

const Keys = ({name, arr, size}: {name: string, arr: string[], size: number}) =>
    <div
        className={`keys ${name}`}
        style={{
            maxHeight: size,
            margin: size / 100,
            fontSize: size / 25,
        }}>
        { arr.map((key) => <div key={key}><span>{key}</span></div>) }
    </div>;

export default hot(module)(ChessBoard);
