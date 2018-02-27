
import * as React from 'react';
import { Square } from './square';
import { iSquare } from './defn';
import * as Chess from 'chess.js';

// console.log(Chess())
const clone = <T1 extends any>(obj: T1) => JSON.parse(JSON.stringify(obj));

// idx keys
const horz = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const vert = ['8', '7', '6', '5', '4', '3', '2', '1'];

const getSquareProps = (h: number, v: number): iSquare => ({
    horzIdx: h, 
    vertIdx: v,
    position: horz[h] + vert[v],
    color: Boolean((h + v) % 2) ? 'dark' : 'light',
    peace: null
});
  
const genBoard = () => Array.from(Array(8), (x, h) => 
    Array.from(Array(8), (x, v) => getSquareProps(h, v)));
  

export class GameBoard extends React.Component <{}, {board: iSquare[][]}> {
    constructor(props) {
        super(props);
        this.state = {
            board: genBoard()
        }
    }

    game = Chess();

    refreshGamePeacesView = () => {

        const board = clone(this.state.board);
        board.map(col => col.map(sqr => sqr.peace = this.game.get(sqr.position)));
        this.setState({board: board})
    }

    logState = () =>
        console.log(this.state, this.props)
    

    render(st = this.state, pr = this.props) {
        const board = st.board.map((col, idx) => (
            <div className="column" key={idx}>
                { col.map(sqr => <Square key={sqr.position} sqr={sqr} />) }
            </div>))

        return (
            <div>
                &#9812;
                <button onClick={this.logState}>Log State</button>
                <button onClick={this.refreshGamePeacesView}>Set Things</button>
                <div className="board">
                    <section>
                        <div className="keys vert">
                            {horz.map((x, i) => 
                                <div key={i}><span>{vert[i]}</span></div>)}
                        </div>
                    </section>
                    
                    <section>
                        <div className="board-main">{board}</div>
                        <div className="keys horz">
                            {horz.map((x, i) => <div key={i}><span>{horz[i]}</span></div>)}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
} 
