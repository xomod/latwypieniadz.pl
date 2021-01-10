// Deps scoped imports.
import React from "react";
import { makeStyles } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";
import { useParams } from "react-router-dom";

// Project scoped imports.
import styles from "./styles";
import translations from "./trans";
import { useCommand } from "api/hooks";
import { GetPost } from "api/commands";
import { useForkedState } from "utils/hooks";
import { isLoaded } from "api/utils";

/**
 * Post component
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Post = (props: PostProps) => {
    const params = useParams() as unknown as {id: number};
    const translated = useLittera(translations);
    const classes = useStyles();

    const postRq = useCommand(GetPost, Number(params?.id ?? 0));
    const [post] = useForkedState(rq => isLoaded(rq) ? rq.data : null, postRq);

    console.log(post);

    if(!post) return <>Loading</>;

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <h4 className={classes.h4}>{post?.title?.rendered ?? "Invalid title"}</h4>
    </div>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type PostProps = {
    className?: string;
    style?: React.CSSProperties;
}

// Time to export! 🚚
export default Post;