// Deps scoped imports.
import React from "react";
import { CardContent, makeStyles, Typography } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";
import Card from '@material-ui/core/Card';

// Project scoped imports.
import styles from "./styles";
import translations from "./trans";

/**
 * Example component
 * @description This is an example component including translations and theming.
 * @version 1.0.0
 * @author Damian Błochowiak
 */
const PostCard = (props: PostCardProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();

    return <Card variant="outlined" className={cx(classes.root, props.className)} style={props.style}>     
        <CardContent className={classes.container}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                <Typography style={{ fontWeight: "bold", marginTop: 10 }} variant="h4">{props.title}</Typography>
                <Typography style={{opacity: .6}}>{props.date}</Typography>
            </div>
            <div style={{position: "relative"}} className={classes.thumbnailContainer}>
                <img style={{position: "absolute"}} className={classes.thumbnail} src={props.thumbnailUrl} />
            </div>
        </CardContent>
    </Card>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type PostCardProps = {
    className?: string;
    style?: React.CSSProperties;
    title: string;
    date: string;
    thumbnailUrl: string;
}

// Time to export! 🚚
export default PostCard;