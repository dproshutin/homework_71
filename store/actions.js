import axios from "../axios-reddit";
import {ITEMS_REQUEST, ITEMS_SUCCESS, ITEMS_FAILURE} from "./actionTypes";

export const itemsRequest = () => {
    return {type: ITEMS_REQUEST};
};

export const itemsSuccess = (items, after) => {
    return {type: ITEMS_SUCCESS, items, after};
};

export const itemsFailure = error => {
    return {type: ITEMS_FAILURE, error};
};

export const onInitItems = () => {
    return dispatch => {
        dispatch(itemsRequest());
        axios.get("pics.json").then(response => {
            const result = response.data;
            const after = result.data.after;
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
            dispatch(itemsSuccess(items, after));
        }, err => {
            dispatch(itemsFailure(err));
        });
    };
};

export const loadNextItems = () => {
    return (dispatch, getState) => {
        dispatch(itemsRequest());
        const str = getState().after;
        axios.get("pics.json?count=25&after=" + str).then(response => {
            const result = response.data;
            const after = result.data.after;
            const children = result.data.children;
            let items = [];
            if (children.length > 0) {
                children.forEach(item => {
                    items.push({
                        id: item.data.id,
                        thumbnail: item.data.thumbnail,
                        title: item.data.title,
                    });
                });
            }
            dispatch(itemsSuccess(items, after));
        }, err => {
            dispatch(itemsFailure(err));
        });
    };
};