import { dictionary } from "@giveback007/util-lib";

export class IChess {
    //-- ACTIONS --//
    /**
     * Attempts to make a move on the board, returning a move object if the move was legal,
     * otherwise null.
     */
    move: (move: Move) => MoveData | null;

    /** Restart/reset the board to the initial starting position. */
    reset: () => void;
    //-- \/ ACTIONS \/ --//
    

    //-- \/ MOVE DATA \/--//
    /**
     * Returns a list of legal moves from the current position. The function
     * takes an optional parameter which controls the single-square move
     * generation and verbosity.
     */
    moves: (options?: { verbose: boolean, square: BoardPosition }) => string[] | MoveData[];

    /** Returns the current side to move. */
    turn: () => PieceColor;
    //-- /\ MOVE DATA /\--//


    //-- \/ BOARD DATA \/ --//
    /**
     * Allows header information to be added to PGN output. Any number of key/value pairs can be passed to .header().
     * */
    header: (key?: string, val?: string) => dictionary<string>;

    /**
     * Returns a string containing an ASCII diagram of the current position.
     * */
    ascii: () => string;

    /** Returns the FEN string of the game */
    fen: () => string;
    //-- /\ BOARD DATA /\ --//


    //-- \/ SQUARE DATA \/ --//
    /**
     * Returns the piece on the square
     */
    get: (str: string) => (Piece | null);

    /** Returns the color of the square ('light' or 'dark'). */
    square_color: (square: string) => 'light' | 'dark';
    //-- /\ SQUARE DATA /\ --//
    
    //-- \/ GAME END DATA \/ --//
    /**
     * Returns true if the game has ended via checkmate,
     * stalemate, draw, threefold repetition, or insufficient 
     * material. Otherwise, returns false.
     * */
    game_over: () => boolean;

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
    //-- /\ GAME END DATA /\ --//
}

/** to simplify the api these haven't been added to the wrapper */
export interface NotAddedToChessClass {
    /**
     * Place a piece on the square where piece is an object with the form
     * { type: ..., color: ... }. Returns true if the piece was successfully placed,
     * otherwise, the board remains unchanged and false is returned. put() will fail
     * when passed an invalid piece or square, or when two or more kings of the same
     * color are placed.
     */
    put: (piece: Piece, square: string) => boolean;

    /** Remove and return the piece on square. */
    remove: (square: string) => Piece | null;

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

    /** 
     * Returns a list containing the moves of the current game.
     * Options is an optional parameter which may contain a
     * 'verbose' flag. See .moves() for a description of the
     * verbose move fields.
     * */
    history: (options?: { verbose: boolean }) => any
}