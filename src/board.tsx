
import * as React from 'react';
import { Square } from './square';
import { iSquare } from './defn';
import { horz, vert } from './lib';

export class GameBoard extends React.Component <{
    board: iSquare[][],
}, {
    showPositions: boolean
}> {
    constructor(props) { super(props) }

    state = {
        showPositions: false,
    }

    togglePositions = () => 
        this.setState({showPositions: !this.state.showPositions});

    render(st = this.state, pr = this.props) {
        const board = pr.board.map((col, idx) => (
            <div className="column" key={idx}>
                {col.map(sqr => 
                    <Square 
                        key = {sqr.position}
                        showPos = {st.showPositions}
                        sqr = {sqr}
                    />
                )}
            </div>))

        return (
            <div>
                {/* <button onClick={this.logGame}>Log Game</button> */}
                {/* <button onClick={this.setViewState}>Set Peaces</button> */}
                <button onClick={this.togglePositions}>Show Pos</button>

                <div className="board">
                    <section>
                        <div className="keys vert">
                            {horz.map((x, i) => 
                                <div key={i}><span>{vert[i]}</span></div>)}
                        </div>
                    </section>
                    
                    <section>
                        <div className="board-main">
                            {board}
                        </div>
                        <div className="keys horz">
                            {horz.map((x, i) => <div key={i}><span>{horz[i]}</span></div>)}
                        </div>
                    </section>
                </div>

            </div>
        );
    }
} 
