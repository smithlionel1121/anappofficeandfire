import React from "react";
import "./Card.css";

import { Card, CardContent, Heading } from "@brandwatch/axiom-components";

// TODO - create a component which displays information about Houses

// TODO - make sure HouseCard is expecting the right props!
export const HouseCard = ({ house }) => {
    const { name, region } = house;
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
                {region && <span>{region}</span>}
            </CardContent>
        </Card>
    );
};
