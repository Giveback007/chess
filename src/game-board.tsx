import * as React from "react";
import { Square } from "./square";
import { ISquare, GameState } from "./defn";
import { horz, vert, parseBoard, genEmptyBoard } from "./lib";
import { hot } from "react-hot-loader";

const mapStateToProps = (state: GameState): { board: ISquare[] } => ({ board: state.board });

class GameBoard extends React.Component<{
    board: ISquare[],
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
                    showPos={st.showPositions}
                    key={c}
                    sqr={sqr}
                />)}
            </div>)) : null;

        return (<div>

            <button onClick={this.togglePositions}>Show Pos</button>

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
