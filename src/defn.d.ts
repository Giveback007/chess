export interface iSquare {
    horzIdx: number,
    vertIdx: number,
    position: string,
    color: 'dark' | 'light',
    peace: {type: string, color: 'w' | 'b'}
}