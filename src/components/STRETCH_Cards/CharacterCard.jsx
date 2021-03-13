import React from "react";
import "./Card.css";

import {
    Card,
    CardContent,
    Heading,
    List,
    ListItem,
    Lozenge,
} from "@brandwatch/axiom-components";

// TODO - create a component which displays information about Characters

// TODO - make sure CharacterCard is expecting the right props!
export const CharacterCard = ({ character, params }) => {
    const { aliases, gender, culture, playedBy, died } = character;
    const name = character.name ? character.name : aliases[0];
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
                {/* eslint-disable-next-line react/style-prop-object */}
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
                    {params.filters.hasOwnProperty("isAlive") ? (
                        params.filters.isAlive ? (
                            <Lozenge color="terra-form">Alive</Lozenge>
                        ) : (
                            <Lozenge color="critical-mass">
                                Died: {died}
                            </Lozenge>
                        )
                    ) : null}
                </List>
            </CardContent>
        </Card>
    );
};
