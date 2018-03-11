import * as React from "react";
import { IPieceType, ISquare } from "./defn";
import { chessPieces } from "./pieces";
import { chessPieceClick, chessPieceMove } from "./store";

interface ISquareElm { sqr: ISquare; showPos: boolean; showHighl: boolean; size: number; }
export function Square({sqr, showPos, showHighl, size}: ISquareElm) {
    const pieceChar: IPieceType = sqr.piece ? sqr.piece.type : null;
    const pieceColor = sqr.piece ? sqr.piece.color : "";
    const highlight = sqr.highlighted ? "highlight" : "";
    const move = sqr.highlighted ? chessPieceMove(sqr.san) : null;
    const pieceMoves = showHighl ? sqr.moves : [];

    return (
        <div className={`square ${sqr.color} ${highlight}`} onClick={move}>
            <span className="highlighting"></span>
            <Position show={showPos} pos={sqr.position} />
            {pieceChar ?
                <ChessPiece
                    piece={pieceChar}
                    color={pieceColor}
                    moves={pieceMoves}
                /> : null}
        </div>
    );
}

interface IPositionElm { show: boolean; pos: string; }
const Position = ({show, pos}: IPositionElm) =>
    show ? <div className="position">{ pos }</div> : null;

function ChessPiece({color, piece, moves}: {color: string, piece: IPieceType, moves: string[]}) {
    const canMove = moves.length ? "can-move" : "";

    return (
        <div
            className={`chess-piece ${color} ${canMove}`}
            onClick={chessPieceClick(moves)}
        >
            {piece ? chessPieces[piece] : null}
        </div>
    );
}
