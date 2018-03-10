import * as React from "react";
import { IPieceType, ISquare } from "./defn";
import { chessPieces } from "./pieces";
import { chessPieceClick, chessPieceMove } from "./store";

export function Square({sqr, showPos}: {sqr: ISquare, showPos: boolean}) {
    const pieceChar: IPieceType = sqr.piece ? sqr.piece.type : null;
    const pieceColor = sqr.piece ? sqr.piece.color : "";
    const highlight = sqr.highlighted ? "highlight" : "";
    const move = sqr.highlighted ? chessPieceMove(sqr.san) : null;

    return (
        <div className={`square ${sqr.color} ${highlight}`} onClick={move}>
            <span className="highlighting"></span>
            <Position show={showPos} pos={sqr.position} />
            {pieceChar ?
                <ChessPiece
                    piece={pieceChar}
                    color={pieceColor}
                    moves={sqr.moves}
                /> : null}
        </div>
    );
}

const Position = ({show, pos}: {show: boolean, pos: string}) =>
    show ? <div className="position">{ pos }</div> : null;

function ChessPiece({color, piece, moves}: {color: string, piece: IPieceType, moves: string[]}) {
    const canMove = moves.length ? "can-move" : "";

    return (
        <div className={`chess-piece ${color} ${canMove}`} onClick={chessPieceClick(moves)}>
            {piece ? chessPieces[piece] : null}
        </div>
    );
}
