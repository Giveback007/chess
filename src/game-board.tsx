import * as React from "react";
import { Square } from "./square";
import { BoardState, GameState } from "./defn";
import { horz, vert, parseBoard } from "./lib";
import { hot } from "react-hot-loader";

// return (<div>
//     {/* <Switch size="default" checked={pr.showPositions} /> Show Pos */}
//     {/* <br/> */}
//     {/* <Button type={pr.whiteAi ? "primary" : null} onClick={setWhiteAi(!pr.whiteAi)}>White AI</Button>
//     <Button type={pr.blackAi ? "primary" : null} onClick={setBlackAi(!pr.blackAi)}>Black AI</Button> */}

function GameBoard(props: {gameState: GameState}) {
    const {
        showHighl, showPositions, boardSize,
        boardState, headerMsg, turn,
    }: BoardState = props.gameState;

    const size = { width: boardSize, height: boardSize, fontSize: boardSize / 11 };
    const board = boardState ? parseBoard(boardState).map((row, r) => (
        <div className="row" key={r}>{row.map((sqr, c) =>
            <Square
                sqr={sqr}
                size={boardSize}
                key={sqr.position}
                showHighl={showHighl}
                showPos={showPositions}
            />)}
        </div>)) : null;

    return (
        <div>
            <div className="board">
                <section>
                    <Keys arr={vert} name={"vert"} size={boardSize}/>
                </section>

                <section>
                    <div className="board-main" style={size}> {board} </div>
                    <Keys arr={horz} name={"horz"} size={boardSize}/>
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

export default hot(module)(GameBoard);
