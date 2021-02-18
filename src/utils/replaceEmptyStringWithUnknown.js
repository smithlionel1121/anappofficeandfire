const replaceEmptyStringWithUnknown = (string) => {
    if (string.length === 0) {
        return 'Unknown'
    } else {
        return string
    }
};

module.exports = replaceEmptyStringWithUnknown;