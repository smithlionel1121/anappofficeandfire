import React from "react";
import "./Card.css";

import {
    Card,
    CardContent,
    Heading,
    List,
    ListItem,
} from "@brandwatch/axiom-components";

// TODO - create a component which displays information about Books

// TODO - make sure BookCard is expecting the right props!
export const BookCard = ({ book }) => {
    const {
        name,
        authors,
        publisher,
        mediaType,
        numberOfPages,
        country,
        released,
    } = book;
    return (
        <Card
            className="card"
            borderRadius="large"
            shade="shade-3"
            size="medium"
            shadow
            border
        >
            <CardContent>
                {name && <Heading textStrong>{name}</Heading>}
                <List style="none">
                    <hr />
                    {authors && (
                        <ListItem>
                            <b>By:</b> <i>{authors[0]}</i>
                        </ListItem>
                    )}
                    {publisher && (
                        <ListItem>
                            <b>Publisher:</b> <i>{publisher}</i>
                        </ListItem>
                    )}
                    {mediaType && (
                        <ListItem>
                            <b>Media Type:</b> <i>{mediaType}</i>
                        </ListItem>
                    )}
                    {numberOfPages && (
                        <ListItem>
                            <b>Number of Pages:</b> <i>{numberOfPages}</i>
                        </ListItem>
                    )}
                    {released && (
                        <ListItem>
                            <b>Release Date:</b>
                            <i>{new Date(released).toLocaleDateString()}</i>
                        </ListItem>
                    )}
                    {country && (
                        <ListItem>
                            <b>Country:</b> <i>{country}</i>
                        </ListItem>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};
