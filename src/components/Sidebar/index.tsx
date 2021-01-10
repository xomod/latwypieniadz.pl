// Deps scoped imports.
import React, { useState } from "react";
import { Button, Drawer, makeStyles } from "@material-ui/core";
import { useLittera } from "react-littera";
import { useLocation } from "react-router-dom";
import cx from "classnames";

// Project scoped imports.
import Navbar from "components/Navbar";

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Example component
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Sidebar = (props: SidebarProps) => {
    const location = useLocation();
    const translated = useLittera(translations);
    const classes = useStyles();

    const [shown, setShown] = useState(true);

    // Zmienić tu jeśli drawer ma się wyświetlać na innych stronach poza home.
    const disabled = location.pathname !== "/home";

    return <>
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={shown && !disabled}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            Moj drawer lol.
            <Button onClick={() => setShown(false)}>Close</Button>
        </Drawer>

        <div className={cx(classes.content, {
            [classes.contentShift]: !shown,
            [classes.contentHidden]: disabled
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