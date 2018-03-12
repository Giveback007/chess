import * as React from "react";
import { IPieceType, ISquare, ChessBoardAPI } from "./defn";
import { chessPieces } from "./pieces";

interface ISquareElm { sqr: ISquare; showPos: boolean; showHighl: boolean; size: number; api: ChessBoardAPI; }
export function Square({sqr, showPos, showHighl, size, api}: ISquareElm) {
    const pieceChar: IPieceType = sqr.piece ? sqr.piece.type : null;
    const pieceColor = sqr.piece ? sqr.piece.color : "";
    const clickable = sqr.highlighted ? "clickable" : "";
    const move = sqr.highlighted ? () => api.chessPieceMove(sqr.san) : null;
    const pieceMoves = showHighl ? sqr.moves : [];
    const selectorShadow = clickable ? {
        boxShadow: `0px 0px ${size / 200}px ${size / 150}px lightgrey`,
    } : null;

    return (
        <div className={`square ${sqr.color} ${clickable}`} onClick={move}>
            <span className="selector" style={selectorShadow}></span>
            <Position show={showPos} pos={sqr.position} size={size}/>
            {pieceChar ?
                <ChessPiece
                    api={api}
                    size={size}
                    piece={pieceChar}
                    color={pieceColor}
                    moves={pieceMoves}
                    pos={sqr.position}
                    selected={sqr.selected}
                /> : null}
        </div>
    );
}

interface IPositionElm { show: boolean; pos: string; size: number; }
const Position = ({show, pos, size}: IPositionElm) =>
    show ? <div className="position" style={{fontSize: size / 30}}>{ pos }</div> : null;

interface IChessPieceElm {
    color: string; piece: IPieceType; moves: string[]; api: ChessBoardAPI; size: number; pos: string; selected: boolean;
}
function ChessPiece({color, piece, moves, api, size, pos, selected}: IChessPieceElm) {
    const canMove = moves.length ? "can-move" : "";
    const shadowColor = selected ? "black" : "darkgrey";
    const selectorShadow = canMove ? {
        boxShadow: `${size / 700}px ${size / 700}px ${size / 700}px ${size / 700}px ${shadowColor}`,
    } : null;

    return (
        <div
            className={`chess-piece ${color} ${canMove}`}
            onClick={() => api.chessPieceClick(pos)}
            style={selectorShadow}
        >
            {piece ? chessPieces[piece] : null}
        </div>
    );
}
