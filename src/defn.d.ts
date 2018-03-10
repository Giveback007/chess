import { IPiece } from './defn.d';

export interface GameState {
    blackAi: boolean,
    whiteAi: boolean,
    game: any;
    board: IGameBoard;
    turn: IPieceColor;
}

export interface ISquare {
    horzIdx: number;
    vertIdx: number;
    position: string;
    highlighted: boolean;
    color: 'dark' | 'light';
    piece: IPiece;
    moves: string[];
    san: string;
}

export interface IPiece {
    type: IPieceType;
    color: IPieceColor;
}

export type IPieceColor = 'w' | 'b';
export type IPieceType = 'k' | 'q' | 'b' | 'n' | 'p' | 'r';
export type IGameBoard = ISquare[];
// {
//     "color": "w",
//     "from": "b2",
//     "to": "b3",
//     "flags": "n",
//     "piece": "p",
//     "san": "b3"
// }

// 'n' - a non-capture
// 'b' - a pawn push of two squares
// 'e' - an en passant capture
// 'c' - a standard capture
// 'p' - a promotion
// 'k' - kingside castling
// 'q' - queenside castling
