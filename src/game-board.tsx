
import * as React from 'react';
import { Square } from './square';
import { iSquare } from './defn';
import { horz, vert, parseBoard } from './lib';
import { hot } from 'react-hot-loader'

class GameBoard extends React.Component<{
    board: iSquare[],
}, {
    showPositions: boolean
}> {
    constructor(props) { super(props) }
    state = {
        showPositions: false,
    }

    togglePositions = () =>
        this.setState({ showPositions: !this.state.showPositions });

    render(st = this.state, pr = this.props) {
        
        const board = parseBoard(pr.board).map((row, idx) => (
            <div className="row" key={idx}>
                {row.map((sqr, i) =>
                    <Square key={i} showPos={st.showPositions} sqr={sqr} />)}
            </div>));
        
        return (
            <div>
                
                <button onClick={this.togglePositions}>Show Pos</button>

                <div className="board">
                    <section>
                        <Keys arr={vert} name={'vert'}/>
                    </section>

                    <section>
                        <div className="board-main"> {board} </div>
                        <Keys arr={horz} name={'horz'}/>
                    </section>
                </div>

            </div>
        );
    }
}

const Keys = (props) => 
    <div className={`keys ${props.name}`}>
        {props.arr.map((x) => <div key={x}><span>{x}</span></div>)}
    </div>;

export default hot(module)(GameBoard);