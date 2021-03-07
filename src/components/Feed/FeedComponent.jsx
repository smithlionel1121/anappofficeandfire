import React, { Fragment, useContext } from "react";
import "./FeedComponent.css";

import AppContext from "../../context/app-context";

import {
    CardList,
    ProgressInfinite,
    Pagination,
} from "@brandwatch/axiom-components";
import { CharacterCard } from "../STRETCH_Cards/CharacterCard";
import { HouseCard } from "../STRETCH_Cards/HouseCard";
import { BookCard } from "../STRETCH_Cards/BookCard";
// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = () => {
    const {
        feedResults,
        isLoading,
        dataChoice,
        page,
        params,
        pagination,
        changePage,
    } = useContext(AppContext);

    let list;
    switch (dataChoice) {
        case "characters":
            list =
                Array.isArray(feedResults) &&
                feedResults.map(result => (
                    <CharacterCard
                        character={result}
                        params={params}
                        key={result.url.slice(
                            result.url.lastIndexOf(
                                "/",
                                result.url.lastIndexOf("/") - 1
                            ) + 1
                        )}
                    />
                ));
            break;
        case "houses":
            list =
                Array.isArray(feedResults) &&
                feedResults.map(result => (
                    <HouseCard
                        house={result}
                        key={result.url.slice(
                            result.url.lastIndexOf(
                                "/",
                                result.url.lastIndexOf("/") - 1
                            ) + 1
                        )}
                    />
                ));
            break;
        case "books":
            list =
                Array.isArray(feedResults) &&
                feedResults.map(result => (
                    <BookCard
                        book={result}
                        key={result.url.slice(
                            result.url.lastIndexOf(
                                "/",
                                result.url.lastIndexOf("/") - 1
                            ) + 1
                        )}
                    />
                ));
            break;
    }

    const display = isLoading ? (
        <ProgressInfinite size="large" sizeRem="18rem" color="white" />
    ) : (
        <Fragment>
            <div className="card-list">{list}</div>
            {pagination && (
                <Pagination
                    currentPage={page.current}
                    onPageChange={newPage =>
                        changePage({ ...page, current: newPage })
                    }
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
