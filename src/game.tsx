import * as React from 'react';
import { GameBoard } from './board';
// import * as Chess from 'chess.js';
import { iSquare } from './defn'
// import { genEmptyBoard, clone } from './lib'
import { hot } from 'react-hot-loader'

class Game extends React.Component <{
    board: iSquare[][],
}, {
    // board: iSquare[][],
}> {
    constructor(props) { super(props) }

    state = {
        // board: genEmptyBoard()
    }

    // componentDidMount() {
    //     this.setViewState();
    // }

    render(pr = this.props) {
        return(<GameBoard board={pr.board}/>);
    }
}

export default hot(module)(Game);