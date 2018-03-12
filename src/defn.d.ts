import { IPiece, GameState } from './defn.d';

export interface ChessBoardAPI {
    chessPieceClick: (select: string) => {
        type: string;
        payload: string;
    };
    chessPieceMove: (san: string) => {
        type: string;
        payload: string;
    };
    startNewGame: (game: any) => {
        type: string;
        payload: any;
    };
    refreshBoard: () => {
        type: string;
    };
}

export interface BoardState {
    showHighl: boolean;
    showKeys: boolean;
    showPositions: boolean;
    boardState: IGameBoard;
    headerMsg: string;
    boardSize: number;
}

export interface GameState extends BoardState {
    game: any;
}

export interface InitGameState {
    game?: any;
    showHighl?: boolean;
    showKeys?: boolean;
    showPositions?: boolean;
    boardState?: IGameBoard;
    headerMsg?: string;
    boardSize?: number;
}

export interface ISquare {
    horzIdx: number;
    vertIdx: number;
    position: string;
    selected: boolean;
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
