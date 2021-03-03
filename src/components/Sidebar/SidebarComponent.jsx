import React, { useContext } from "react";
import "./SidebarComponent.css";

import AppContext from "../../context/app-context";

import {
    RadioButtonGroup,
    RadioButton,
    Dropdown,
    DropdownTarget,
    TextInput,
    TextInputIcon,
    DropdownSource,
    DropdownContext,
    DropdownMenu,
    DropdownMenuItem,
    Label,
} from "@brandwatch/axiom-components";

// TODO - make sure SidebarComponent is expecting the right props!
export const SidebarComponent = () => {
    // TODO - reflect expanded/collapsed state in sidebar's className
    // TODO - make sure the classNames in the SidebarComponent.css match up with the classes you choose!
    const {
        sidebarOpen,
        changeOption,
        dataChoice,
        page,
        changePage,
    } = useContext(AppContext);

    const items = [5, 10, 15, 20, 25, 50];

    const onSelect = selection => {
        changeOption(selection);
        changePage({ ...page, current: 1 });
    };

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
                    onClick={() => onSelect("characters")}
                    checked={dataChoice === "characters"}
                    readOnly
                >
                    Characters
                </RadioButton>
                <RadioButton
                    name="data"
                    onClick={() => onSelect("houses")}
                    checked={dataChoice === "houses"}
                    readOnly
                >
                    Houses
                </RadioButton>
                <RadioButton
                    name="data"
                    onClick={() => onSelect("books")}
                    checked={dataChoice === "books"}
                    readOnly
                >
                    Books
                </RadioButton>
            </RadioButtonGroup>
            <div className="dropdown">
                <span>Results per page:</span>
                <Dropdown>
                    <DropdownTarget>
                        <TextInput
                            isTarget
                            type="number"
                            onChange={() => {}}
                            value={page.size}
                        >
                            <TextInputIcon name="chevron-down" />
                        </TextInput>
                    </DropdownTarget>
                    <DropdownSource>
                        <DropdownContext>
                            <DropdownMenu>
                                {items.map(item => (
                                    <DropdownMenuItem
                                        key={item}
                                        onClick={() =>
                                            changePage({
                                                ...page,
                                                current: 1,
                                                size: item,
                                            })
                                        }
                                        selected={page.size === item}
                                    >
                                        {item}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenu>
                        </DropdownContext>
                    </DropdownSource>
                </Dropdown>
            </div>
        </div>
    );
};
