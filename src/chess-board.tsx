import * as React from "react";
import { Chess } from "~chess";

type P = {
    showHighl: boolean,
    showKeys: boolean,
    showPositions: boolean,
    boardSize: number,
    headerMsg: string;
};

type S = {
    game: Chess;
};

class ChessBoard extends React.Component<P, S> {
    state = { boardState: [] };
    constructor(props) { super(props); }

    render() {
        const {
            boardSize,
            headerMsg,
            showHighl,
            showKeys,
            showPositions,
        } = this.props;

        const { boardState } = this.state;

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
                    // api={props.api}
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