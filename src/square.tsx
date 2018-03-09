import * as React from "react";
import { IPieceType, ISquare } from "./defn";
import { chessPieces } from "./pieces";
import { store, PIECE_WAS_CLICKED } from "./app";

export function Square({sqr, showPos}: {sqr: ISquare, showPos: boolean}) {
    const pieceChar: IPieceType = sqr.piece ? sqr.piece.type : null;
    const pieceColor = sqr.piece ? sqr.piece.color : "";
    const highlight = sqr.highlighted ? "highlight" : "";

    const onPieceClick = (moves: string[]) => () =>
        store.dispatch({type: PIECE_WAS_CLICKED, payload: moves});

    return (
        <div className={`square ${sqr.color} ${highlight}`}>
            <Position show={showPos} pos={sqr.position} />
            <ChessPiece piece={pieceChar} color={pieceColor} click={onPieceClick(sqr.moves)} />
        </div>
    );
}

const Position = ({show, pos}: {show: boolean, pos: string}) =>
    show ? <div className="position">{ pos }</div> : null;

const ChessPiece = ({color, piece, click}: {color: string, piece: IPieceType, click: () => any}) =>
    <div className={`chess-piece ${ color }`} onClick={click}>
        {piece ? chessPieces[piece] : null}
    </div>;
