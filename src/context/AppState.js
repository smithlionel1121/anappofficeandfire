import React, { useReducer, useEffect, useContext } from "react";
import AppContext from "./app-context";
import reducer from "./app-reducer";

import { getData } from "../api/api";

import {
    TOGGLE_SIDEBAR,
    CHANGE_OPTION,
    TOGGLE_LOADING,
    UPDATE_RESULTS,
} from "./app-actions";

const AppState = props => {
    const initialState = {
        sidebarOpen: true,
        dataChoice: "characters",
        feedResults: null,
        isLoading: false,
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

    const toggleLoading = isLoading => {
        dispatch({ type: TOGGLE_LOADING, payload: isLoading });
    };

    const { sidebarOpen, isLoading, dataChoice, feedResults } = state;

    const gridClassName = sidebarOpen
        ? "grid-container"
        : "grid-container-closed";

    useEffect(async () => {
        toggleLoading(true);
        const data = await getData(dataChoice);
        updateResults(data);
        toggleLoading(false);
    }, [dataChoice]);

    return (
        <AppContext.Provider
            value={{
                sidebarOpen,
                isLoading,
                dataChoice,
                feedResults,
                toggleSidebar,
                changeOption,
            }}
        >
            <div className={`app ${gridClassName}`}>{props.children}</div>
        </AppContext.Provider>
    );
};

export default AppState;
