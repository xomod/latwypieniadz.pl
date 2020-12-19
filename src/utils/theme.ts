import { createMuiTheme } from "@material-ui/core";

export const DARK_THEME = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#344966"
        }
    }
});

export const LIGHT_THEME = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#0496FF"
        }
    }
});

export const TEXT_THEME = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#202b3b"
        }
    }
});