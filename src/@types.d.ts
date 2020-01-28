type Piece = {
    type: PieceType;
    color: PieceColor;
}

type Move = {
    from: BoardPosition,
    to: BoardPosition
}

type MoveData = {
    color: PieceColor,
    from: BoardPosition,
    to: BoardPosition,
    flags: Flags,
    piece: PieceType,
    san: string,
    captured?: PieceType,
    promotion?: PieceType
}

type PieceColor = 'w' | 'b' ;
type PieceType  = 'k' | 'q' | 'b' | 'n' | 'p' | 'r';
type Flags = 'n' | 'b' | 'e' | 'c' | 'p' | 'k' | 'q';

type HorzKeys = ["a", "b", "c", "d", "e", "f", "g", "h"];
type VertKeys = ["8", "7", "6", "5", "4", "3", "2", "1"];

type BoardPosition =
    "a8" | "b8" | "c8" | "d8" | "e8" | "f8" | "g8" | "h8" |
    "a7" | "b7" | "c7" | "d7" | "e7" | "f7" | "g7" | "h7" |
    "a6" | "b6" | "c6" | "d6" | "e6" | "f6" | "g6" | "h6" |
    "a5" | "b5" | "c5" | "d5" | "e5" | "f5" | "g5" | "h5" |
    "a4" | "b4" | "c4" | "d4" | "e4" | "f4" | "g4" | "h4" |
    "a3" | "b3" | "c3" | "d3" | "e3" | "f3" | "g3" | "h3" |
    "a2" | "b2" | "c2" | "d2" | "e2" | "f2" | "g2" | "h2" |
    "a1" | "b1" | "c1" | "d1" | "e1" | "f1" | "g1" | "h1" ;

type SquareKeysTupl = [
    "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8",
    "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7",
    "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6",
    "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5",
    "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4",
    "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3",
    "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2",
    "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"
];

type GameStateDict = { [key in BoardPosition]: Piece | null; };

type GameStateTupl = [
    Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,
    Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,
    Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,
    Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,
    Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,
    Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,
    Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,
    Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,
];

type GameState2dTupl = [
    [Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,],
    [Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,],
    [Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,],
    [Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,],
    [Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,],
    [Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,],
    [Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,],
    [Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null, Piece | null,],
];

// interface ChessBoardAPI {
//     chessPieceClick: (select: string) => {
//         type: string;
//         payload: string;
//     };
//     chessPieceMove: (san: string) => {
//         type: string;
//         payload: string;
//     };
//     startNewGame: (game: any) => {
//         type: string;
//         payload: any;
//     };
//     refreshBoard: () => {
//         type: string;
//     };
// }

// type BoardState = {
//     showHighl: boolean;
//     showKeys: boolean;
//     showPositions: boolean;
//     boardState: IGameBoard;
//     headerMsg: string;
//     boardSize: number;
// }

// interface GameState extends BoardState {
//     game: any;
// }

// type InitGameState = {
//     game?: any;
//     showHighl?: boolean;
//     showKeys?: boolean;
//     showPositions?: boolean;
//     boardState?: IGameBoard;
//     headerMsg?: string;
//     boardSize?: number;
// }

// type ISquare = {
//     horzIdx: number;
//     vertIdx: number;
//     position: string;
//     selected: boolean;
//     highlighted: boolean;
//     color: 'dark' | 'light';
//     piece: IPiece | null;
//     moves: string[];
//     san: string | null;
// }

// type IGameBoard = ISquare[];