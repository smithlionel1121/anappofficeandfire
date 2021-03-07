import React, { Fragment, useContext, useState, useEffect } from "react";
import "./SidebarComponent.css";

import AppContext from "../../context/app-context";

import {
    DatePicker,
    DataPickerDropdown,
    DataPicker,
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
    Button,
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
        params,
        changePage,
        changeParams,
    } = useContext(AppContext);

    const [extraFilters, setExtraFilters] = useState(false);

    const toggleExtraFilters = () => {
        setExtraFilters(!extraFilters);
    };

    const items = [5, 10, 15, 20, 25, 50];
    let regions = [
        "Beyond the Wall",
        "Dorne",
        "Iron Islands",
        "The Crownlands",
        "The Neck",
        "The North",
        "The Reach",
        "The Riverlands",
        "The Stormlands",
        "The Westerlands",
        "The Vale",
    ];

    const onSelect = selection => {
        changeOption(selection);
        changeParams({});
        changePage({ ...page, current: 1 });
    };

    function SingleDate({ label, param }) {
        const appliedDate = params[param] ? new Date(params[param]) : null;
        const [selectedDate, setSelectedDate] = useState(null);

        let formattedDate = null;

        if (appliedDate) {
            formattedDate = new Intl.DateTimeFormat("default", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            }).format(appliedDate);
        }

        let openDate = new Date("01-01-2005");

        return (
            <div style={{ width: "100px" }}>
                <DatePicker
                    onSelect={({ date }) => {
                        setSelectedDate(date);
                    }}
                    onApply={() => {
                        let obj = params;
                        obj[param] = new Date(selectedDate).toISOString();
                        changeParams({
                            ...obj,
                        });
                        changePage({ ...page, current: 1 });
                    }}
                    onCancel={() => {
                        setSelectedDate(appliedDate);
                    }}
                    selectedDate={selectedDate}
                    calendarOpenDate={openDate}
                >
                    <TextInput
                        label={label}
                        value={formattedDate || ""}
                        placeholder="dd/mm/yy"
                        readOnly
                    />
                </DatePicker>
            </div>
        );
    }

    let filters;
    switch (dataChoice) {
        case "characters":
            filters = (
                <Fragment>
                    <div className="filter-group">
                        <DataPicker
                            placeholder={
                                !!params.gender
                                    ? `${params.gender
                                          .charAt(0)
                                          .toUpperCase()}${params.gender.substring(
                                          1
                                      )}`
                                    : "Pick a Gender"
                            }
                        >
                            <DataPickerDropdown>
                                <DropdownMenu>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            changeParams({
                                                ...params,
                                                gender: "female",
                                            });
                                            changePage({ ...page, current: 1 });
                                        }}
                                        selected={params.gender === "female"}
                                    >
                                        Female
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            changeParams({
                                                ...params,
                                                gender: "male",
                                            });
                                            changePage({ ...page, current: 1 });
                                        }}
                                        selected={params.gender === "male"}
                                    >
                                        Male
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            const { gender, ...rest } = params;
                                            changeParams(rest);
                                            changePage({ ...page, current: 1 });
                                        }}
                                        selected={false}
                                    >
                                        Clear
                                    </DropdownMenuItem>
                                </DropdownMenu>
                            </DataPickerDropdown>
                        </DataPicker>
                    </div>
                    <div className="filter-group">
                        <DataPicker
                            placeholder={
                                !!params.isAlive
                                    ? "Alive"
                                    : params.hasOwnProperty("isAlive")
                                    ? "Dead"
                                    : "Pick a Living Status"
                            }
                        >
                            <DataPickerDropdown>
                                <DropdownMenu>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            changeParams({
                                                ...params,
                                                isAlive: true,
                                            });
                                            changePage({ ...page, current: 1 });
                                        }}
                                        selected={!!params.isAlive}
                                    >
                                        Alive
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            changeParams({
                                                ...params,
                                                isAlive: false,
                                            });
                                            changePage({ ...page, current: 1 });
                                        }}
                                        selected={
                                            !params.isAlive &&
                                            params.hasOwnProperty("isAlive")
                                        }
                                    >
                                        Dead
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            const { isAlive, ...rest } = params;
                                            changeParams(rest);
                                            changePage({ ...page, current: 1 });
                                        }}
                                        selected={false}
                                    >
                                        Clear
                                    </DropdownMenuItem>
                                </DropdownMenu>
                            </DataPickerDropdown>
                        </DataPicker>
                    </div>
                </Fragment>
            );
            break;
        case "houses":
            filters = (
                <Fragment>
                    <div className="filter-group">
                        <DataPicker
                            placeholder={
                                !!params.region
                                    ? params.region
                                    : "Pick a Region"
                            }
                        >
                            <DataPickerDropdown>
                                <DropdownMenu>
                                    {regions.map(region => (
                                        <DropdownMenuItem
                                            key={region}
                                            onClick={() => {
                                                changeParams({
                                                    ...params,
                                                    region,
                                                });
                                                changePage({
                                                    ...page,
                                                    current: 1,
                                                });
                                            }}
                                        >
                                            {region}
                                        </DropdownMenuItem>
                                    ))}
                                    <DropdownMenuItem
                                        onClick={() => {
                                            const { region, ...rest } = params;
                                            changeParams(rest);
                                            changePage({ ...page, current: 1 });
                                        }}
                                        selected={false}
                                    >
                                        Clear
                                    </DropdownMenuItem>
                                </DropdownMenu>
                            </DataPickerDropdown>
                        </DataPicker>
                    </div>
                    <div className="filter-group">
                        <DataPicker
                            placeholder={
                                !!params.hasDiedOut
                                    ? "Current"
                                    : params.hasOwnProperty("hasDiedOut")
                                    ? "Extinct"
                                    : "Pick a Living Status"
                            }
                        >
                            <DataPickerDropdown>
                                <DropdownMenu>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            changeParams({
                                                ...params,
                                                hasDiedOut: true,
                                            });
                                            changePage({ ...page, current: 1 });
                                        }}
                                        selected={!!params.hasDiedOut}
                                    >
                                        Current
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            changeParams({
                                                ...params,
                                                hasDiedOut: false,
                                            });
                                            changePage({ ...page, current: 1 });
                                        }}
                                        selected={
                                            !params.hasDiedOut &&
                                            params.hasOwnProperty("hasDiedOut")
                                        }
                                    >
                                        Extinct
                                    </DropdownMenuItem>
                                    <DropdownMenuItem
                                        onClick={() => {
                                            const {
                                                hasDiedOut,
                                                ...rest
                                            } = params;
                                            changeParams(rest);
                                            changePage({ ...page, current: 1 });
                                        }}
                                        selected={false}
                                    >
                                        Clear
                                    </DropdownMenuItem>
                                </DropdownMenu>
                            </DataPickerDropdown>
                        </DataPicker>
                    </div>
                </Fragment>
            );
            break;
        case "books":
            filters = (
                <Fragment>
                    <div className="filter-group">
                        <div className="filter-options">
                            <SingleDate
                                label="From Release Date:"
                                param="fromReleaseDate"
                            />
                            <SingleDate
                                label="To Release Date:"
                                param="toReleaseDate"
                            />
                            <br />
                            <Button
                                color="negative"
                                shape="rectangle"
                                size="small"
                                variant="secondary"
                                onClick={() => {
                                    changeParams({});
                                    changePage({ ...page, current: 1 });
                                }}
                            >
                                Reset
                            </Button>
                        </div>
                    </div>
                </Fragment>
            );
            break;
    }

    const sidebarStatus = sidebarOpen
        ? "app-sidebar expanded"
        : "app-sidebar collapsed";
    const extraFiltersStatus = extraFilters ? "" : "collapsed";
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
            <div className="data-filters">
                <Button
                    color="accent"
                    shape="rectangle"
                    size="small"
                    variant="secondary"
                    onClick={toggleExtraFilters}
                >
                    {extraFiltersStatus ? "More filters" : "Less filters"}
                </Button>

                <div className={extraFiltersStatus}>{filters}</div>
            </div>
        </div>
    );
};
