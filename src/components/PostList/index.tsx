// Deps scoped imports.
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useLittera } from "react-littera";
import TablePagination from "@material-ui/core/TablePagination";
import cx from "classnames";

// Project scoped imports.
import { useForkedState } from "utils/hooks";
import { useCommand } from "api/hooks";
import { Posts } from "api/commands";
import { isLoaded } from "api/utils";
import PostCard from "../PostCard/";

// Component scoped imports.
import styles from "./styles";
import translations from "./trans";
import { Post } from "api/types";

/**
 * Lista wszystkich postów z paginacją.
 * @version 1.0.0
 * @author Mike Eling <mike.eling97@gmail.com>
 */
const PostList = (props: ComponentProps) => {
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(2);
    const postsRq = useCommand(Posts, { page, per_page: perPage });
    const [posts] = useForkedState<any, Post[]>(rq => isLoaded(rq) ? rq.data : null, postsRq);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, newPage: number) => {
        setPage(newPage + 1);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPerPage(parseInt(event.target.value, 10));
        setPage(1);
    };

    const translated = useLittera(translations);
    const classes = useStyles();

    return <div className={cx(classes.root, props.className)} style={props.style}>
        {posts === null ?
            <h4>Loading</h4> :
            posts.map(post => <PostItem {...post} />)}

        <TablePagination
            component="div"
            count={Number(postsRq?.headers?.get("x-wp-total") ?? 100)}
            page={page - 1}
            onChangePage={handleChangePage}
            rowsPerPage={perPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </div>
}

// Creates a hook for generating classnames.
const useStyles = makeStyles(styles);

// Props the component accepts.
type ComponentProps = {
    className?: string;
    style?: React.CSSProperties
}

const DEFAULT_THUMBNAIL_URL = "https://media.giphy.com/media/SggILpMXO7Xt6/giphy.gif"

const PostItem = (post: Post) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(DEFAULT_THUMBNAIL_URL);

    useEffect(() => {
        fetch(post._links?.["wp:attachment"]?.[0]?.href)
            .then(data => data.json())
            .then(data => setThumbnailUrl(data?.[0]?.source_url ?? "https://media.giphy.com/media/SggILpMXO7Xt6/giphy.gif"));
    }, [post, post?.id])

    return <PostCard key={post?.id} date={post?.date ?? "Invalid date"} title={post?.title?.rendered ?? "Invalid title"} thumbnailUrl={thumbnailUrl} />;
}

// Time to export! 🚚
export default PostList;