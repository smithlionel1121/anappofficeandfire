// Api docs: https://anapioficeandfire.com/Documentation

// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// // see cheat sheet for fetch example.
function parseHeaders(res) {
    return res.headers
        .get("link")
        .split(",")
        .reduce((acc, link) => {
            const props = /^<(.+)>; rel="(.+)"$/.exec(link.trim());
            if (!props) {
                console.warn("no match");
                return acc;
            }
            acc[props[2]] = props[1];
            return acc;
        }, {});
}

export const getData = async (dataChoice, { page, filters }) => {
    const { current, size } = page;
    let url = `https://www.anapioficeandfire.com/api/${dataChoice}?page=${current}&pageSize=${size}`;
    if (filters) {
        for (const [key, value] of Object.entries(filters)) {
            if (value) {
                url += `&${key}=${value}`;
            }
        }
    }
    const res = await fetch(url);
    const links = parseHeaders(res);
    const data = await res.json();
    return [data, links];
};
