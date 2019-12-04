import {
    ITEMS_REQUEST,
    ITEMS_SUCCESS,
    ITEMS_FAILURE
} from "./actionTypes";

const initialState = {
    items: [],
    loading: false,
    error: null

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_REQUEST:
            return {...state, loading: true};
        case ITEMS_SUCCESS:
            return {...state, items: action.items,  loading: false};
        case ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
};

export default reducer;