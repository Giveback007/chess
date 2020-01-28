// idx keys
// export const horz = ["a", "b", "c", "d", "e", "f", "g", "h"];
// export const vert = ["8", "7", "6", "5", "4", "3", "2", "1"];


// export const boardPositions: BoardPosition[] = [
//     "a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8",
//     "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7", 
//     "a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", 
//     "a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", 
//     "a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", 
//     "a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", 
//     "a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", 
//     "a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1",
// ];
// export const clone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

// export const getBoardIndex = (pos: string) => ({
//     horz: horz.findIndex((h) => h === pos[0]),
//     vert: vert.findIndex((v) => v === pos[1]),
// });

// export const getBoardPos = (horzIdx: number, vertIdx: number) => horz[horzIdx] + vert[vertIdx];

// export const genSquare = (h: number, v: number): ISquare => ({
//     horzIdx: h,
//     vertIdx: v,
//     position: horz[h] + vert[v],
//     highlighted: false,
//     selected: false,
//     color: (h + v) % 2 ? "dark" : "light",
//     piece: null,
//     moves: [],
//     san: null,
// });

// export function genEmptyBoard(): IGameBoard {
//     const squares: IGameBoard = [];

//     for (let h = 0; h < 8; h++) {
//         for (let v = 0; v < 8; v++) {
//             const sqr = genSquare(h, v);
//             squares.push(sqr);
//             squares[sqr.position] = sqr;
//         }
//     }

//     return squares;
// }

// export function getBoardState(game, select: string) {
//     const boardState = genEmptyBoard();

//     game.moves({square: select, verbose: true})
//     .forEach((hgl) => {
//         boardState[hgl.to].highlighted = true;
//         boardState[hgl.to].san = hgl.san;
//     });

//     return boardState.map((sqr) => {
//         sqr.piece = game.get(sqr.position);
//         sqr.selected = sqr.position === select;
//         sqr.moves = game.moves({square: sqr.position, verbose: true});
//         return sqr;
//     });
// }

// export function parseBoard(board: IGameBoard): ISquare[][] {
//     return board.reduce((rows, sqr, i) => {
//         rows[(i + 8) % 8].push(sqr);
//         return rows;
//     }, Array(8).fill(0).map((x) => []));
// }
