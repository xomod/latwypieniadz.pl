// Deps scoped imports.
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useLittera } from "react-littera";
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
    const translated = useLittera(translations);
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.header}>
            <div className={cx(classes.container, classes.containerRight)}>
                <div>
                    <h2 style={{fontSize: 64, textTransform: "uppercase", margin: 0, fontWeight: "bold"}}>
                        <span>{translated.title}</span>
                        <br/>
                        <span>{translated.title2}</span>
                    </h2>
                    <p style={{  }}>{translated.slogan}</p>
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