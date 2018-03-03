import { Action, AnyAction } from "redux";

export const peaceWasClicked = (position: string): AnyAction =>
    ({ type: 'Peace_Was_Clicked', position })

export const peaceHasMoved = (move: string): AnyAction =>
    ({ type: 'Peace_Has_Moved', move })

