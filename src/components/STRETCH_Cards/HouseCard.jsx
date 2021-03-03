import React from "react";
import "./Card.css";

import {
    Card,
    CardContent,
    Heading,
    List,
    ListItem,
} from "@brandwatch/axiom-components";

// TODO - create a component which displays information about Houses

// TODO - make sure HouseCard is expecting the right props!
export const HouseCard = ({ house }) => {
    const { name, region, seats } = house;
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
                    {region && (
                        <ListItem>
                            <b>Region:</b> <i>{region}</i>
                        </ListItem>
                    )}
                    {seats && (
                        <ListItem>
                            <b>Seats:</b> <i>{seats}</i>
                        </ListItem>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};
