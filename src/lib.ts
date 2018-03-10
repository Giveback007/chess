import { ISquare } from "./defn";

// idx keys
export const horz = ["a", "b", "c", "d", "e", "f", "g", "h"];
export const vert = ["8", "7", "6", "5", "4", "3", "2", "1"];

export const clone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const getBoardIndex = (pos: string) => ({
    horz: horz.findIndex((h) => h === pos[0]),
    vert: vert.findIndex((v) => v === pos[1]),
});

export const getBoardPos = (horzIdx: number, vertIdx: number) => horz[horzIdx] + vert[vertIdx];

export const genSquare = (h: number, v: number): ISquare => ({
    horzIdx: h,
    vertIdx: v,
    position: horz[h] + vert[v],
    highlighted: false,
    color: (h + v) % 2 ? "dark" : "light",
    piece: null,
    moves: [],
    san: null,
});

// export const genEmptyBoard = () => Array.from(Array(8), (x, h) =>
//     Array.from(Array(8), (x, v) => getSquareProps(h, v)));

export function genEmptyBoard(): ISquare[] {
    const squares: ISquare[] = [];

    for (let h = 0; h < 8; h++) {
        for (let v = 0; v < 8; v++) {
            const sqr = genSquare(h, v);
            squares.push(sqr);
            squares[sqr.position] = sqr;
        }
    }

    return squares;
}

export function getGameBoardState(game, highlight: any[]) {
    const boardState = genEmptyBoard();

    highlight.forEach((hgl) => {
        boardState[hgl.to].highlighted = true;
        boardState[hgl.to].san = hgl.san;
    });

    return boardState.map((sqr) => {
        sqr.piece = game.get(sqr.position);
        sqr.moves = game.moves({square: sqr.position, verbose: true});
        return sqr;
    });
}

export function parseBoard(board: ISquare[]): ISquare[][] {
    return board.reduce((rows, sqr, i) => {
        rows[(i + 8) % 8].push(sqr);
        return rows;
    }, Array(8).fill(null).map((x) => []));
}
