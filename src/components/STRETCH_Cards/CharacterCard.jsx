import React from "react";
import "./Card.css";

import {
    Card,
    CardContent,
    Heading,
    List,
    ListItem,
} from "@brandwatch/axiom-components";

// TODO - create a component which displays information about Characters

// TODO - make sure CharacterCard is expecting the right props!
export const CharacterCard = ({ character }) => {
    const { name, aliases, gender, culture, playedBy } = character;
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
                    {aliases && (
                        <ListItem>
                            <b>AKA:</b> <i>{aliases[0]}</i>
                        </ListItem>
                    )}
                    {gender && (
                        <ListItem>
                            <b>Gender:</b> <i>{gender}</i>
                        </ListItem>
                    )}
                    {culture && (
                        <ListItem>
                            <b>Culture:</b> <i>{culture}</i>
                        </ListItem>
                    )}
                    {playedBy && (
                        <ListItem>
                            <b>Played By:</b> <i>{playedBy}</i>
                        </ListItem>
                    )}
                </List>
            </CardContent>
        </Card>
    );
};
