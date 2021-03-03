import React, { useContext, useState, useEffect } from "react";
import "./HeaderComponent.css";

import AppContext from "../../context/app-context";

import {
    Button,
    Heading,
    Form,
    TextInput,
    TextInputButton,
    TextInputIcon,
} from "@brandwatch/axiom-components";

// TODO - make sure HeaderComponent is expecting the right props (if any)!
export const HeaderComponent = () => {
    const {
        dataChoice,
        toggleSidebar,
        sidebarOpen,
        params,
        page,
        changeParams,
        changePage,
    } = useContext(AppContext);
    const [text, setText] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        changeParams({ name: text });
        changePage({ ...page, current: 1 });
        setText("");
    };
    let label = `${dataChoice.charAt(0).toUpperCase()}${dataChoice.substring(
        1,
        dataChoice.length - 1
    )} name:`;
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
                    onClick={() => toggleSidebar()}
                >
                    {sidebarOpen ? "Hide Filters" : "Show Filters"}
                </Button>
            </div>
            <Heading className="headerTitle" textSize="display1">
                An app of Ice and Fire
            </Heading>
            <div className="headerSearch">
                <Form onSubmit={onSubmit}>
                    <TextInput
                        // inlineLabel
                        placeholder={label}
                        aria-label="Submit"
                        onChange={e => setText(e.target.value)}
                        value={text}
                    >
                        <TextInputIcon align="left" name="magnify-glass" />
                        <TextInputButton
                            align="right"
                            name="magnify-glass"
                            type="submit"
                        >
                            Submit
                        </TextInputButton>
                    </TextInput>
                </Form>
            </div>
        </header>
    );
};
