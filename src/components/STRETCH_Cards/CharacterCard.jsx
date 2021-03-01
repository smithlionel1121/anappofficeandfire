import React from "react";
import "./Card.css";

import { Card, CardContent, Heading } from "@brandwatch/axiom-components";

// TODO - create a component which displays information about Characters

// TODO - make sure CharacterCard is expecting the right props!
export const CharacterCard = ({ character }) => {
    const { name, aliases } = character;
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
                {aliases && <span>{`AKA: ${aliases[0]}`}</span>}
            </CardContent>
        </Card>
    );
};
