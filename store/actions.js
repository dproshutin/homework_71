import axios from "../axios-reddit";
import {ITEMS_REQUEST, ITEMS_SUCCESS, ITEMS_FAILURE} from "./actionTypes";

export const itemsRequest = () => {
    return {type: ITEMS_REQUEST};
};

export const itemsSuccess = (items) => {
    return {type: ITEMS_SUCCESS, items};
};

export const itemsFailure = error => {
    return {type: ITEMS_FAILURE, error};
};

export const onInitItems = () => {
    return dispatch => {
        dispatch(itemsRequest());
        axios.get("pics.json").then(response => {
            const result = response.data;
            const children = result.data.children;
            let items = [];
            if (children.length > 0) {
                children.forEach(item => {
                    items.push({
                        id: item.data.id,
                        thumbnail: item.data.thumbnail,
                        title: item.data.title
                    });
                });
            }
            dispatch(itemsSuccess(items));
        }, err => {
            dispatch(itemsFailure(err));
        });
    };
};