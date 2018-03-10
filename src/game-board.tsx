import * as React from "react";
import { Square } from "./square";
import { ISquare, GameState, IGameBoard } from "./defn";
import { horz, vert, parseBoard, genEmptyBoard } from "./lib";
import { hot } from "react-hot-loader";
import { Button, Switch } from "antd";
import { setBlackAi, setWhiteAi } from "./store";

class GameBoard extends React.Component<{
    blackAi: boolean,
    whiteAi: boolean,
    board: IGameBoard,
}, {
    showPositions: boolean,
}> {
    state = { showPositions: false };
    constructor(props) { super(props); }

    togglePositions = () =>
        this.setState({ showPositions: !this.state.showPositions })

    render(st = this.state, pr = this.props) {

        const board = pr.board ? parseBoard(pr.board).map((row, r) => (
            <div className="row" key={r}>{row.map((sqr, c) =>
                <Square
                    key={c}
                    sqr={sqr}
                    showPos={st.showPositions}
                />)}
            </div>)) : null;

        return (<div>
            <Switch size="default" checked={st.showPositions} onChange={this.togglePositions} /> Show Pos
            <br/>
            <Button type={pr.whiteAi ? "primary" : null} onClick={setWhiteAi(!pr.whiteAi)}>White AI</Button>
            <Button type={pr.blackAi ? "primary" : null} onClick={setBlackAi(!pr.blackAi)}>Black AI</Button>

            <div className="board">
                <section>
                    <Keys arr={vert} name={"vert"}/>
                </section>

                <section>
                    <div className="board-main"> {board} </div>
                    <Keys arr={horz} name={"horz"}/>
                </section>
            </div>

        </div>);
    }
}

const Keys = ({name, arr}: {name: string, arr: string[]}) =>
    <div className={`keys ${name}`}>
        { arr.map((key) => <div key={key}><span>{key}</span></div>) }
    </div>;

export default hot(module)(GameBoard);
