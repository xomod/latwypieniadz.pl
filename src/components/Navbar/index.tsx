// Deps scoped imports.
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useLittera } from "react-littera";
import { useHistory } from "react-router-dom";
import cx from "classnames";

// Project scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Example component
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Navbar = (props: NavbarProps) => {
    const history = useHistory();
    const translated = useLittera(translations);
    const classes = useStyles();

    if(history.location.pathname === "/") return null;

    return <div className={cx(classes.root, props.className)} style={props.style}>     
        <div className={classes.container}>  
            <img className={classes.logo} alt="logo" src="https://latwypieniadz.pl/wp-content/uploads/2020/12/favicon_2.png" onClick={props.onMenuOpen} />
        </div>
    </div>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type NavbarProps = {
    className?: string;
    style?: React.CSSProperties;
    onMenuOpen?: () => void;
}

// Time to export! 🚚
export default Navbar;