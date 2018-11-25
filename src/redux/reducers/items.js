import {ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS} from "../types/items";

export const itemsHasErrored = (state=false, action) => {
    switch (action.type) {
        case ITEMS_HAS_ERRORED:
            return action.payload;
            
        default:
            return state;
    }
}

export const itemsIsLoading = (state = false, action) => {
    switch (action.type) {
        case ITEMS_IS_LOADING:
            return action.payload;

        default:
            return state;
    }
}

export const items = (state = [], action) => {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.items;

        default:
            return state;
    }
}