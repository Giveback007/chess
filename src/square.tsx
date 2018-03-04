import * as React from "react";
import { ChessPiece } from "./chess-piece";
import { IPieceType, ISquare } from "./defn";

export function Square(props) {
    const sqr: ISquare = props.sqr;
    const pieceChar: IPieceType = sqr.piece ? sqr.piece.type : null;
    const pieceColor = sqr.piece ? sqr.piece.color : "";

    return (
        <div className={`square ${sqr.color}`}>
            <Position show={props.showPos} pos={sqr.position} />
            <ChessPiece piece={pieceChar} color={pieceColor} />
        </div>
    );
}

const Position = (props: {show: boolean, pos: string}) =>
    props.show ? <div className="position">{ props.pos }</div> : null;
