// Deps scoped imports.
import React from "react";
import { Button, makeStyles, useTheme } from "@material-ui/core";
import { useLittera } from "react-littera";
import { useHistory } from "react-router-dom";
import cx from "classnames";

// Project scoped imports.
import illustration from "assets/illustration_1.png"

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Startup page.
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Startup = (props: ComponentProps) => {
    const history = useHistory();
    const theme = useTheme();
    const translated = useLittera(translations);
    const classes = useStyles();

    const navigate = (path: string) => () => {
        history.push(path);
    }

    return <div className={classes.root}>
        <div className={classes.header}>
            <div className={cx(classes.container, classes.containerRight)}>
                <div>
                    <h1 style={{fontSize: 64, textTransform: "uppercase", margin: 0, fontWeight: "bold", fontFamily: 'Staatliches', lineHeight: "55px"}}>
                        <span style={{color: theme.palette.primary.main}}>{translated.title}</span>
                        <br/>
                        <span>{translated.title2}</span>
                    </h1>
                    <p style={{opacity: ".6", marginTop: "1rem"  }}>{translated.slogan}</p>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <Button onClick={navigate("/home")} size="large" variant="contained" color="primary" style={{marginTop: "1.5rem", padding: "15px 30px"}}>{translated.start_button}</Button>
                        <a href="https://google.com"><i style={{fontSize: "60px", color: "#344966", margin: "10px"}} className={"fab fa-facebook"}></i></a>
                        <a href="https://google.com"><i style={{fontSize: "60px", color: "#344966", margin: "10px"}} className={"fab fa-twitter"}></i></a>
                        <a href="https://google.com"><i style={{fontSize: "60px", color: "#344966"}} className={"fab fa-telegram"}></i></a>
                    </div>
                </div>
            </div>
            <div className={cx(classes.container, classes.containerLeft)}>
                <img className={classes.image} src={illustration} />
            </div> 
        </div>
    </div>
}

// Creates a hook for generating classnames.
// @ts-ignore
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Startup;