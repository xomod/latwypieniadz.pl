// Deps scoped imports.
import React, { useState } from "react";
import { Button, Drawer, makeStyles } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import styles from "./styles";
import translations from "./trans";
import Navbar from "components/Navbar";

/**
 * Example component
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Sidebar = (props: SidebarProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    const [shown, setShown] = useState(true);

    return <>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={shown}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            Moj drawer lol.
            <Button onClick={() => setShown(false)}>Close</Button>
        </Drawer>

        <div className={cx(classes.content, {
            [classes.contentShift]: !shown,
        })}>
            <Navbar onMenuOpen={() => setShown(true)} />
            {props.children}
        </div>
    </>
}

// Creates a hook for generating classnames.
// @ts-ignore
const useStyles = makeStyles(styles);

// Props the component accepts.
type SidebarProps = {
    className?: string;
    style?: React.CSSProperties,
    children: JSX.Element | JSX.Element[]
}

// Time to export! 🚚
export default Sidebar;