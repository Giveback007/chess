// import { iterate, arrDivide, dictionary, arrGen } from "@giveback007/util-lib";
// import { Chess } from "~chess";

// const horz: HorzKeys = ["a", "b", "c", "d", "e", "f", "g", "h"];
// const vert: VertKeys = ["8", "7", "6", "5", "4", "3", "2", "1"];



// export const getEmptyGameState = () => ({
//     horzKeys: [ ...horz ] as HorzKeys,
//     vertKeys: [ ...vert ] as VertKeys,
//     boardPositionTupl: [ ...boardPositions ] as SquareKeysTupl,
//     gameStateDict: boardPositions.reduce((obj, pos) => {
//         obj[pos] = null;
//         return obj;
//     }, {} as GameStateDict),
//     gameStateTupl: arrGen(64) as GameStateTupl,
//     gameState2dTupl: arrDivide(arrGen(64), 8) as GameState2dTupl
// })

// export const boardData = (() => { 

//     // const posArr = iterate(vert.length, horz.length).map(({ x, y }) => vert[x] + horz[y]);
//     const dict: dictionary<Piece | null> = { };

//     posArr.forEach((pos) => dict[pos] = null);

//     return new class BoardData {
//         get horz() { return [ ...horz ]; };
//         get vert() { return [ ...vert ]; };
//         get posArr() { return [ ...posArr ] }

//         gameDict = (game?: Chess) => game ?
//             posArr.reduce((dict, pos) => {
//                 dict[pos] = game.get(pos);
//                 return dict;
//             }, { ...dict })
//             :
//             { ...dict };

//         gameArr = (game?: Chess) =>
//             posArr.map(game ? (pos) => game.get(pos) : () => null);

//         game2dArr = (game?: Chess) =>
//             arrDivide(this.gameArr(game), vert.length);
//     }
// })();

// export const getBoardIndex = (pos: string) => ({
//     horz: boardData.horz.findIndex((h) => h === pos[0]),
//     vert: boardData.vert.findIndex((v) => v === pos[1]),
// });

// export const getBoardPos = (horzIdx: number, vertIdx: number) =>
//     boardData.horz[horzIdx] + boardData.vert[vertIdx];

// export const genSquare = (h: number, v: number): ISquare => ({
//     horzIdx: h,
//     vertIdx: v,
//     position:
//         boardData.horz[h] + boardData.vert[v],
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
//         (rows as any)[(i + 8) % 8].push(sqr);
//         return rows;
//     }, Array(8).fill(0).map((x) => []));
// }
