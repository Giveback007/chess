export interface iSquare {
    horzIdx: number,
    vertIdx: number,
    position: string,
    highlighted: boolean,
    color: 'dark' | 'light',
    peace: {type: string, color: 'w' | 'b'}
}