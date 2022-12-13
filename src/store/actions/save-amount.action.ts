export const ADD_AMOUNT = "ADD_AMOUNT";
export const SUBSTRACT_AMOUNT = "SUBSTRACT_AMOUNT";
export const ASIGN_AMOUNT = "ASIGN_AMOUNT";
export const CLEAR_AMOUNT = "CLEAR_AMOUNT";

export const addAmount = (amount: number) => ({
    type: ADD_AMOUNT,
    payload: amount,
});

export const substractAmount = (amount: number) => ({
    type: SUBSTRACT_AMOUNT,
    payload: amount,
});

export const asignAmount = (amount: number) => ({
    type: ASIGN_AMOUNT,
    payload: amount,
});

export const clearAmount = (amount: number) => ({
    type: CLEAR_AMOUNT,
    payload: amount,
});
