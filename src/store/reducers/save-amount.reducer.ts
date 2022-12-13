import { ADD_AMOUNT, SUBSTRACT_AMOUNT, ASIGN_AMOUNT, CLEAR_AMOUNT } from '../actions';

const initialState = {
    currentAmount: 0
};

const SaveAmountReducer: (state: { currentAmount: number }, action: any) => void = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_AMOUNT:
            return {
                ...state,
                currentAmount: action.payload + 50,
            };
        case SUBSTRACT_AMOUNT:
            return {
                ...state,
                currentAmount: action.payload > 0 ? action.payload - 50 : 0,
            };
        case ASIGN_AMOUNT:
            return {
                ...state,
                currentAmount: !Number.isNaN(action.payload) ? action.payload : 0,
            };
        case CLEAR_AMOUNT:
            return {
                ...state,
                currentAmount: !Number.isNaN(action.payload) ? 0 : 0,
            };
        default:
            return state;
    }
};

export default SaveAmountReducer;