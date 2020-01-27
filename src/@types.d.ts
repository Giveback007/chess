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

type IPiece = {
    type: IPieceType;
    color: IPieceColor;
}

type IPieceColor = 'w' | 'b';
type IPieceType = 'k' | 'q' | 'b' | 'n' | 'p' | 'r';
// type IGameBoard = ISquare[];
