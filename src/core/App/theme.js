const common = {
    padding: {
        small: "20px",
    },
    boxShadow: {
        basic: "0px 0px 3px 2px #C1C1BF",
    },
};

const colorNames = {
    white: "#fff",
    cornFlowerBlue: "#6195ED",
    lightTeal: "#009ca4",
    teal: "#01838b",
    dustyGrey: "#999999",
    doveGrey: "#6F6F6F",
    mercury: "#E7E7E7",
    tundora: "#494949",
    dune: "#312E2D",
};

export const light = {
    ...common,
    background: colorNames.mercury,
    baseColorFont: colorNames.tundora,
    container: {
        background: colorNames.white,
    },
    navigation: {
        background: colorNames.doveGrey,
        fontColor: colorNames.white,
    },
    switchButton: {
        background: colorNames.dustyGrey,
        border: colorNames.doveGrey,
        font: colorNames.mercury,
    },
    searchButton: {
        background: colorNames.teal,
        fontColor: colorNames.white,
    },
    pokemonHeader: {
        fontColor: colorNames.tundora,
    },
    tile: {
        buttonBackground: colorNames.teal,
        buttonFontColor: colorNames.white,
        hoverButton: colorNames.lightTeal,
    },
    spinner: {
        border: colorNames.dustyGrey,
        animation: colorNames.teal,
    },
    footer: {
        background: colorNames.teal,
        fontColor: colorNames.white,
    },
    table: {
        headerBackground: colorNames.teal,
        headerFont: colorNames.white,
        dataBackground: colorNames.white,
        dataFont: colorNames.dune,
    },
};

export const dark = {
    ...common,
    background: colorNames.dune,
    baseColorFont: colorNames.white,
    container: {
        background: colorNames.tundora,
    },
    navigation: {
        background: colorNames.doveGrey,
        fontColor: colorNames.white,
    },
    switchButton: {
        background: colorNames.dustyGrey,
        border: colorNames.doveGrey,
        font: colorNames.mercury,
    },
    searchButton: {
        background: colorNames.lightTeal,
        fontColor: colorNames.white,
    },
    pokemonHeader: {
        fontColor: colorNames.white,
    },
    tile: {
        buttonBackground: colorNames.lightTeal,
        buttonFontColor: colorNames.white,
        hoverButton: colorNames.teal,
    },
    spinner: {
        border: colorNames.dustyGrey,
        animation: colorNames.lightTeal,
    },
    footer: {
        background: colorNames.lightTeal,
        fontColor: colorNames.white,
    },
    table: {
        headerBackground: colorNames.lightTeal,
        headerFont: colorNames.white,
        dataBackground: colorNames.tundora,
        dataFont: colorNames.white,
    },
};