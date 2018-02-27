import { iSquare } from './defn';
// idx keys
export const horz = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
export const vert = ['8', '7', '6', '5', '4', '3', '2', '1'];

export const clone = <T1 extends any>(obj: T1) => 
    JSON.parse(JSON.stringify(obj));

export const getBoardIndex = (pos: string) => ({
    horz: horz.findIndex(h => h === pos[0]),
    vert: vert.findIndex(v => v === pos[1])
});

export const getBoardPos = (horzIdx: number, vertIdx: number) => horz[horzIdx] + vert[vertIdx];

export const getSquareProps = (h: number, v: number): iSquare => ({
    horzIdx: h, 
    vertIdx: v,
    position: horz[h] + vert[v],
    color: Boolean((h + v) % 2) ? 'dark' : 'light',
    peace: null
});
  
export const genEmptyBoard = () => Array.from(Array(8), (x, h) => 
    Array.from(Array(8), (x, v) => getSquareProps(h, v)));
