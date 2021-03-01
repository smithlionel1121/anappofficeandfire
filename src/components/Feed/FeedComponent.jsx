import React from "react";
import "./FeedComponent.css";

import {
    Button,
    CardList,
    Pagination,
    ProgressInfinite,
} from "@brandwatch/axiom-components";
import { CharacterCard } from "../STRETCH_Cards/CharacterCard";
import { HouseCard } from "../STRETCH_Cards/HouseCard";
import { BookCard } from "../STRETCH_Cards/BookCard";
// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = ({ isLoading, dataChoice, feedResults }) => {
    let list;
    switch (dataChoice) {
        case "characters":
            list =
                Array.isArray(feedResults) &&
                feedResults.map(result => (
                    <CharacterCard
                        character={result}
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
        <CardList>{list}</CardList>
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
