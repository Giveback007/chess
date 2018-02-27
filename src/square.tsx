import * as React from 'react';
import { peaces } from './peaces';
import { iSquare } from './defn';

export function Square(props) {
    const sqr: iSquare = props.sqr;
    const peace = sqr.peace ? peaces[sqr.peace.type] : null;
    const peaceColor = sqr.peace ? sqr.peace.color : '';

    return (
        <div className={`square ${sqr.color}`}>
            <div className="position">
                {sqr.position}
            </div>
            <div className={`chess-peace ${peaceColor}`}>{peace}</div>
        </div>
    );
}

