import { dictionary, iterate } from '@giveback007/util-lib';
import * as chessGame from "chess.js";
import { boardData } from '~game.utils';

window['boardPos'] = boardData;
window['chess'] = chessGame;

type move = {
    color: IPieceColor,
    from: string,
    to: string,
    flags: string,
    piece: IPieceType,
    san: string,
    captured?: string,
    promotion?: IPieceType
}

// For more check: https://github.com/jhlywa/chess.js

/** Wrapper for chess.js object */
export class Chess {
    /**
     * The Chess() constructor takes an optional parameter which specifies the board configuration in Forsyth-Edwards Notation.
    */
    constructor(fen?: string) {
        Object.assign(this, (chessGame as any).Chess(fen));
    }

    /**
     * Returns the piece on the square
     */
    get: (str: string) => (IPiece | null);

    /**
     * Returns a list of legal moves from the current position. The function
     * takes an optional parameter which controls the single-square move
     * generation and verbosity.
     */
    moves: (options?: { verbose: true, square: string }) => string[] | move[];

    /**
     * Attempts to make a move on the board, returning a move object if the move was legal,
     * otherwise null. The .move function can be called two ways, by passing a string in
     * Standard Algebraic Notation (SAN):
     */
    move: (move: { from: string, to: string } | string) => move;

    /** Restart/reset the board to the initial starting position. */
    reset: () => void;

    /** Returns the current side to move. */
    turn: () => IPieceColor;

    /**
     * Allows header information to be added to PGN output. Any number of key/value pairs can be passed to .header().
     * */
    header: (key?: string, val?: string) => dictionary<string>;

    /**
     * Returns a string containing an ASCII diagram of the current position.
     * */
    ascii: () => string;

    /** Returns a dictionary of the */
    boardDict = () => boardData.gameDict(this);

    /** Returns true or false if the side to move has been checkmated. */
    in_checkmate: () => boolean;

    /** Returns true or false if the game is drawn (50-move rule or insufficient material). */
    in_draw: () => boolean

    /** Returns true or false if the side to move has been stalemated. */
    in_stalemate: () => boolean;

    /** Returns true or false if the current board position has occurred three or more times. */
    in_threefold_repetition: () => boolean;

    /** Returns true if the game is drawn due to insufficient material (K vs. K, K vs. KB, or K vs. KN); otherwise false. */
    insufficient_material: () => boolean;

    /**
     * Returns true if the game has ended via checkmate,
     * stalemate, draw, threefold repetition, or insufficient 
     * material. Otherwise, returns false.
     * */
    game_over: () => boolean;

    /** Returns the color of the square ('light' or 'dark'). */
    square_color: (square: string) => 'light' | 'dark';

    /** Returns the FEN string for the current position. */
    fen: () => string;
}

// to simplify the api these haven't been added to the wrapper
export interface notAddedToChess {
    /**
     * Place a piece on the square where piece is an object with the form
     * { type: ..., color: ... }. Returns true if the piece was successfully placed,
     * otherwise, the board remains unchanged and false is returned. put() will fail
     * when passed an invalid piece or square, or when two or more kings of the same
     * color are placed.
     */
    put: (piece: IPiece, square: string) => boolean;

    /** Remove and return the piece on square. */
    remove: (square: string) => IPiece | null;

    /** Clears the board. */
    clear: () => void;

    /** The board is cleared, and the FEN string is loaded. Returns true if the position was successfully loaded, otherwise false. */
    load: (fen: string) => boolean

    /**
     * https://github.com/jhlywa/chess.js#load_pgnpgn--options-
     * 
     * Load the moves of a game stored in Portable Game Notation. pgn should be a string.
     * Options is an optional object which may contain a string newline_char and a boolean sloppy.
     * 
     * The method will return true if the PGN was parsed successfully, otherwise false.
     */
    load_pgn: (sloppy_pgn?, options?) => boolean

    /**
     * https://github.com/jhlywa/chess.js#pgn-options-
     */
    pgn: (options?) => string;

    /** Take back the last half-move, returning a move object if successful, otherwise null. */
    undo: () => any

    /** Returns a validation object specifying validity or the errors found within the FEN string. */
    validate_fen: (fen: string) => any;
}