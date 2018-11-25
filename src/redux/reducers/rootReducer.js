import {combineReducers} from "redux";
import messages from './message';
import otherMessages from './otherMessage';
import { items, itemsHasErrored, itemsIsLoading } from './items';

const rootReducer = combineReducers({
    messages,
    otherMessages,
    items,
    itemsHasErrored,
    itemsIsLoading
});

export default rootReducer;