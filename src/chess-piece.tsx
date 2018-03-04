import * as React from "react";
import { chessPieces } from "./pieces";
import { IPieceType } from "./defn";

export const ChessPiece = (props: {color: string, piece: IPieceType }) =>
    <div className={`chess-piece ${ props.color }`}>
        {props.piece ? chessPieces[props.piece] : null}
    </div>;
