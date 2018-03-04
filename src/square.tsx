import * as React from "react";
import { ChessPeace } from "./chess-peace";
import { iPeaceType, iSquare } from "./defn";

export function Square(props) {
    const sqr: iSquare = props.sqr;
    const peaceChar: iPeaceType = sqr.peace ? sqr.peace.type : null;
    const peaceColor = sqr.peace ? sqr.peace.color : "";

    return (
        <div className={`square ${sqr.color}`}>
            <Position show={props.showPos} pos={sqr.position} />
            <ChessPeace peace={peaceChar} color={peaceColor} />
        </div>
    );
}

const Position = (props: {show: boolean, pos: string}) =>
    props.show ? <div className="position">{ props.pos }</div> : null;
