import { createMuiTheme } from "@material-ui/core";

export const DARK_THEME = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#0496FF"
        },
        secondary: {
            main: "#344966"
        }
    }
});

export const LIGHT_THEME = createMuiTheme({
    palette: {
        type: "light",
        primary: {
            main: "#0496FF"
        },
        secondary: {
            main: "#344966"
        }
    }
});