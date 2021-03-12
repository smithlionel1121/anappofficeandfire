import React, { Fragment, useContext } from "react";
import "./FeedComponent.css";

import AppContext from "../../context/app-context";

import { ProgressInfinite, Pagination } from "@brandwatch/axiom-components";
import { CharacterCard } from "../STRETCH_Cards/CharacterCard";
import { HouseCard } from "../STRETCH_Cards/HouseCard";
import { BookCard } from "../STRETCH_Cards/BookCard";
// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = () => {
    const {
        feedResults,
        isLoading,
        dataChoice,
        params,
        pagination,
        changePage,
    } = useContext(AppContext);

    let list;
    const makeKey = url =>
        url.slice(url.lastIndexOf("/", url.lastIndexOf("/") - 1) + 1);

    switch (dataChoice) {
        case "characters":
            list =
                Array.isArray(feedResults) &&
                feedResults.map(result => (
                    <CharacterCard
                        character={result}
                        params={params}
                        key={makeKey(result.url)}
                    />
                ));
            break;
        case "houses":
            list =
                Array.isArray(feedResults) &&
                feedResults.map(result => (
                    <HouseCard house={result} key={makeKey(result.url)} />
                ));
            break;
        case "books":
            list =
                Array.isArray(feedResults) &&
                feedResults.map(result => (
                    <BookCard book={result} key={makeKey(result.url)} />
                ));
            break;
        default:
            list = <div>No Results</div>;
    }

    const display = isLoading ? (
        <ProgressInfinite size="large" sizeRem="18rem" color="white" />
    ) : (
        <Fragment>
            <div className="card-list">{list}</div>
            {pagination && (
                <Pagination
                    currentPage={params.page.current}
                    onPageChange={newPage => {
                        if (newPage <= pagination.lastPage)
                            changePage({ ...params.page, current: newPage });
                    }}
                    totalPages={pagination.lastPage}
                />
            )}
        </Fragment>
    );

    return (
        <div className={"feed"}>
            {/* TODO - add a placeholder for an empty feed */}
            {/* TODO - build up a list of results */}
            {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
            {display}
        </div>
    );
};
