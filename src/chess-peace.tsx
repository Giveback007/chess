import * as React from "react";
import { chessPeaces } from "./peaces";
import { iPeaceType } from "./defn";

export const ChessPeace = (props: {color: string, peace: iPeaceType }) =>
    <div className={`chess-peace ${ props.color }`}>
        {props.peace ? chessPeaces[props.peace] : null}
    </div>;
