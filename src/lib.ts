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
    selected: false,
    color: (h + v) % 2 ? "dark" : "light",
    piece: null,
    moves: [],
    san: null,
});

export function genEmptyBoard(): IGameBoard {
    const squares: IGameBoard = [];

    for (let h = 0; h < 8; h++) {
        for (let v = 0; v < 8; v++) {
            const sqr = genSquare(h, v);
            squares.push(sqr);
            squares[sqr.position] = sqr;
        }
    }

    return squares;
}

export function getBoardState(game, select: string) {
    const boardState = genEmptyBoard();

    game.moves({square: select, verbose: true})
    .forEach((hgl) => {
        boardState[hgl.to].highlighted = true;
        boardState[hgl.to].san = hgl.san;
    });

    return boardState.map((sqr) => {
        sqr.piece = game.get(sqr.position);
        sqr.selected = sqr.position === select;
        sqr.moves = game.moves({square: sqr.position, verbose: true});
        return sqr;
    });
}

export function parseBoard(board: IGameBoard): ISquare[][] {
    return board.reduce((rows, sqr, i) => {
        rows[(i + 8) % 8].push(sqr);
        return rows;
    }, Array(8).fill(0).map((x) => []));
}
