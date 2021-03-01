import React from "react";
import "./Card.css";

import { Card, CardContent, Heading } from "@brandwatch/axiom-components";

// TODO - create a component which displays information about Books

// TODO - make sure BookCard is expecting the right props!
export const BookCard = ({ book }) => {
    const { name, authors } = book;
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
                <hr />
                {authors && <span>{`By ${authors[0]}`}</span>}
            </CardContent>
        </Card>
    );
};
