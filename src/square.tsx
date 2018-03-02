import * as React from 'react';
import { peaces } from './peaces';
import { iSquare, iPeace, iPeaceType } from './defn';

export function Square(props) {
    const sqr: iSquare = props.sqr;
    const peaceChar = sqr.peace ? sqr.peace.type : null;
    const peaceColor = sqr.peace ? sqr.peace.color : '';
    console.log(props.sqr.moves)
    return (
        <div className={`square ${sqr.color}`}>

            <Position show={props.showPos} pos={sqr.position} />
            <ChessPeace peace={peaceChar} color={peaceColor} />

        </div>
    );
}

const Position = (props: {show: boolean, pos: string}) => 
    props.show ? <div className="position">{ props.pos }</div> : null

const ChessPeace = (props: {color: string, peace: iPeaceType }) => 
    <div className={`chess-peace ${ props.color }`}>
        {props.peace ? peaces[props.peace] : null}
    </div>

// export function Square(props) {
//     const sqr: iSquare = props.sqr;
//     const peace = sqr.peace ? peaces[sqr.peace.type] : null;
//     const peaceColor = sqr.peace ? sqr.peace.color : '';

//     return (
//         <div className={`square ${sqr.color}`}>
//             {props.showPos ? 
//                 <div className="position">
//                     {sqr.position}
//                 </div> : null}
//             <div className={`chess-peace ${peaceColor}`}>{peace}</div>
//         </div>
//     );
// }