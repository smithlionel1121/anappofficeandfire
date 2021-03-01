// Api docs: https://anapioficeandfire.com/Documentation

// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.
export const getData = async dataChoice => {
    const res = await fetch(
        `https://www.anapioficeandfire.com/api/${dataChoice}?page=1&pageSize=10`
    );
    const headers = res.headers.get("link");
    console.log(headers);
    const data = await res.json();
    return data;
};
