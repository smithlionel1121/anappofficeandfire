import React, { useReducer, useEffect } from "react";
import AppContext from "./app-context";
import reducer from "./app-reducer";

import { getData } from "../api/api";

import {
    TOGGLE_SIDEBAR,
    CHANGE_OPTION,
    TOGGLE_LOADING,
    UPDATE_RESULTS,
    UPDATE_PAGINATION,
    CHANGE_PAGE,
    CHANGE_FILTERS,
    CHANGE_PARAMS,
} from "./app-actions";

const AppState = props => {
    const initialState = {
        sidebarOpen: true,
        dataChoice: "characters",

        feedResults: null,
        isLoading: false,
        pagination: {},
        params: {
            page: { current: 1, size: 10 },
            filters: {},
        },
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR });
    };

    const changeOption = option => {
        dispatch({
            type: CHANGE_OPTION,
            payload: option,
        });
    };

    const updateResults = results => {
        dispatch({
            type: UPDATE_RESULTS,
            payload: results,
        });
    };

    const updatePagination = pagination => {
        dispatch({
            type: UPDATE_PAGINATION,
            payload: pagination,
        });
    };

    const changePage = page => {
        dispatch({
            type: CHANGE_PAGE,
            payload: page,
        });
    };

    const changeFilters = filters => {
        dispatch({
            type: CHANGE_FILTERS,
            payload: filters,
        });
    };

    const changeParams = params => {
        dispatch({
            type: CHANGE_PARAMS,
            payload: params,
        });
    };

    const toggleLoading = isLoading => {
        dispatch({ type: TOGGLE_LOADING, payload: isLoading });
    };

    function getPageCount(link) {
        const url = new URL(link);
        return Number(url.searchParams.get("page"));
    }

    const {
        sidebarOpen,
        isLoading,
        dataChoice,
        feedResults,
        pagination,
        params,
    } = state;

    const gridClassName = sidebarOpen
        ? "grid-container"
        : "grid-container-closed";

    useEffect(() => {
        const fetchData = async () => {
            toggleLoading(true);
            const [data, links] = await getData(dataChoice, params);
            updateResults(data);
            const lastPage = getPageCount(links.last);
            const pagination = { ...links, lastPage };
            updatePagination(pagination);
            toggleLoading(false);
        };
        fetchData();
    }, [dataChoice, params]);

    return (
        <AppContext.Provider
            value={{
                sidebarOpen,
                isLoading,
                dataChoice,
                feedResults,
                pagination,
                params,
                changePage,
                changeParams,
                changeFilters,
                toggleSidebar,
                changeOption,
            }}
        >
            <div className={`app ${gridClassName}`}>{props.children}</div>
        </AppContext.Provider>
    );
};

export default AppState;
