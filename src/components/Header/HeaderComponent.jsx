import React from "react";
import "./HeaderComponent.css";

import {
    Button,
    Heading,
    TextInput,
    TextInputButton,
    TextInputIcon,
} from "@brandwatch/axiom-components";

// TODO - make sure HeaderComponent is expecting the right props (if any)!
export const HeaderComponent = ({ toggleSidebar, sidebarOpen }) => {
    // const buttonText = sidebarOpen ? "Hide Filters" : "Show Filters";
    return (
        <header className={"header header-grid"}>
            {/* TODO [STRETCH] - add in any controls that you'd like in your header
             E.g, a search bar, a toggle button for the side bar, or just a plain header!
        */}
            <div className="headerButton">
                <Button
                    color="accent"
                    shape="rectangle"
                    size="medium"
                    variant="primary"
                    onClick={toggleSidebar}
                >
                    {sidebarOpen ? "Hide Filters" : "Show Filters"}
                </Button>
            </div>
            <Heading className="headerTitle" textSize="display1">
                An app of Ice and Fire
            </Heading>
            <div className="headerSearch">
                <TextInput aria-label="Submit">
                    <TextInputIcon align="left" name="magnify-glass" />
                    <TextInputButton align="left" name="magnify-glass">
                        Submit
                    </TextInputButton>
                </TextInput>
            </div>
        </header>
    );
};
