import {combineReducers, createStore, Store} from "redux";
import {apolloReducer} from "apollo-cache-redux";

export function genStore(): Store<any> {
    return createStore(
        combineReducers({
            apollo: apolloReducer
        })
    );
}
