import {
    ITEMS_REQUEST,
    ITEMS_SUCCESS,
    ITEMS_FAILURE
} from "./actionTypes";

const initialState = {
    items: [],
    loading: false,
    error: null,
    after: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_REQUEST:
            return {...state, loading: true};
        case ITEMS_SUCCESS:
            if (state.after !== action.after) {
                const newItems = (state.items.length === 0) ? action.items : state.items.concat(action.items);
                return {...state, items: [...newItems],  after: action.after, loading: false};
            }
            return state;
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