// Deps scoped imports.
import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useLittera } from "react-littera";
import cx from "classnames";

// Project scoped imports.
import styles from "./styles";
import translations from "./trans";
import Card from "components/PostCard";
import { usePosts } from "api/hooks";

/**
 * Home component 
 * @description This is the main view.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const Home = (props: ComponentProps) => {
    const translated = useLittera(translations);
    const classes = useStyles();
    const [posts, refetch, next, prev] = usePosts();

    console.log("Posts", posts);

    return <div className={cx(classes.root, props.className)} style={props.style}>
        <h4 className={classes.h4}>{translated.title}</h4>
    <div className={classes.container}>
        {posts === null ? <h4>Loading</h4> : posts.map(post => <Card key={post?.id} date={post?.date ?? "Invalid date"} title={post?.title?.rendered ?? "Invalid title"} thumbnailUrl={"https://media.giphy.com/media/SggILpMXO7Xt6/giphy.gif"} />)}
    </div>
    <Button onClick={prev}>Prev</Button>
    <Button onClick={next}>Next</Button>
    </div>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

// Time to export! 🚚
export default Home;