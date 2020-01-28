/** This is to be made in to its own package */
import { dictionary, iterate, wait, objKeys, objKeyVals, objExtract, arrDivide } from '@giveback007/util-lib';
import * as chessGame from "chess.js";
import { getEmptyGameState } from '~chess.utils';
import { IChess } from './chess.type';

window['chess'] = chessGame;

type gameStateSubFunct = (gameState: { [x: string]: Piece | null; }) => any;

type gameStateSubs = dictionary<gameStateSubFunct>;

/**
 * Wrapper for chess.js object
 * 
 * https://github.com/jhlywa/chess.js
 * */
export class Chess extends IChess {

    readonly horzKeys: HorzKeys =
        ["a", "b", "c", "d", "e", "f", "g", "h"];

    readonly vertKeys: VertKeys =
        ["8", "7", "6", "5", "4", "3", "2", "1"];

    readonly squareKeys: SquareKeysTupl = [
        "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8",
        "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7",
        "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6",
        "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5",
        "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4",
        "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3",
        "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2",
        "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1",
    ];

    get gameState(): {
        gameStateTupl: GameStateTupl;
        gameState2dTupl: GameState2dTupl;
        gameStateDict: GameStateDict;
    } {
        const gameStateTupl = [] as any as GameStateTupl;
        const gameStateDict = {} as GameStateDict;

        const { squareKeys } = this;
        squareKeys.forEach((sqr, i) => {
            const item = this.get(sqr);

            gameStateTupl[i] = item;
            gameStateDict[sqr] = item;
        })

        return {
            gameStateTupl: gameStateTupl,
            gameState2dTupl: arrDivide(gameStateTupl, 8) as GameState2dTupl,
            gameStateDict: gameStateDict
        }
    }

    private subscriptions: gameStateSubs = { };

    /**
     * The Chess() constructor takes an optional parameter which specifies the board configuration in Forsyth-Edwards Notation.
    */
    constructor(fen?: string) {
        super();

        const chess = (chessGame as any).Chess(fen);
        Object.assign(this, chess);

        this.move = (move) => {
            // trigger the subscriptions
        }

        this.moves = () => {
            // return a dictionary of valid moves
        }

        // this.move = (move) => {
        //     wait(0).then(() => {
        //         const state = this.boardDict();
        //         objKeyVals(this.subscriptions).forEach(({ val: f }) =>  f(state))
        //     })
        // }

        // move
        // reset
        // header
    }

    /** subscribe to game state changes */
    // subscribe = (f: gameStateSubFunct) => {
    //     f(this.gamePos)
    //     this.subscriptions
    //     return { unsubscribe: () => }
    // }

    // private subEmit
}
