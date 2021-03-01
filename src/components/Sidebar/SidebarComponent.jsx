import React from "react";
import "./SidebarComponent.css";

import { RadioButtonGroup, RadioButton } from "@brandwatch/axiom-components";

// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = props => {
    // TODO - reflect expanded/collapsed state in sidebar's className
    // TODO - make sure the classNames in the SidebarComponent.css match up with the classes you choose!
    const { sidebarOpen, dataChoice, setDataChoice } = props;

    const onSelect = () => {};

    const sidebarStatus = sidebarOpen
        ? "app-sidebar expanded"
        : "app-sidebar collapsed";
    return (
        <div className={`sidebar ${sidebarStatus}`}>
            {/* TODO - flesh out this component to include all controls for configuring your data retrieval.
             This must include the category (books/characters/houses)
             [STRETCH] Feel free to add anything else you want, for example:
                * a dropdown to select number of items you want to retrieve
                * a search bar to search for a particular item
             You could even change what you can see in the search bar based on what you are searching for.
             E.g add a dropdown to determine which field you're searching on ("name"/"title"/"alias")
        */}
            Fetch:
            <RadioButtonGroup>
                <RadioButton
                    name="data"
                    onClick={() => setDataChoice("characters")}
                    checked={dataChoice === "characters"}
                    readOnly
                >
                    Characters
                </RadioButton>
                <RadioButton
                    name="data"
                    onClick={() => setDataChoice("houses")}
                    checked={dataChoice === "houses"}
                    readOnly
                >
                    Houses
                </RadioButton>
                <RadioButton
                    name="data"
                    onClick={() => setDataChoice("books")}
                    checked={dataChoice === "books"}
                    readOnly
                >
                    Books
                </RadioButton>
            </RadioButtonGroup>
        </div>
    );
};
