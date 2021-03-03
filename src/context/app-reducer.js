import {
    TOGGLE_SIDEBAR,
    CHANGE_OPTION,
    TOGGLE_LOADING,
    UPDATE_RESULTS,
    UPDATE_PAGINATION,
    CHANGE_PAGE,
    CHANGE_PARAMS,
} from "./app-actions";

export default function reducer(state, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return { ...state, sidebarOpen: !state.sidebarOpen };
        case CHANGE_OPTION:
            return { ...state, dataChoice: action.payload };
        case TOGGLE_LOADING:
            return { ...state, isLoading: action.payload };
        case UPDATE_RESULTS:
            return { ...state, feedResults: action.payload };
        case UPDATE_PAGINATION:
            return { ...state, pagination: action.payload };
        case CHANGE_PAGE:
            return { ...state, page: action.payload };
        case CHANGE_PARAMS:
            return { ...state, params: action.payload };
        default:
            return state;
    }
}
