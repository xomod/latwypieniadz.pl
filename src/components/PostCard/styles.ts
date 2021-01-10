// Here we define styles for the component.

// eslint-disable-next-line import/no-anonymous-default-export
export default ({
    root: {
        minWidth: 275,
        borderRadius: "8px",
        margin: "10px 0",
        cursor: "pointer"
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        "&:last-child": {
            paddingLeft: "26px",
            padding: "10px"
        }
    },
    thumbnailContainer: {
        // position: "relative",
        overflow: "hidden",
        width: "250px",
        height: "160px",
        borderRadius: "8px",

    },
    thumbnail: {
        height: "100%",
        width: "auto",
        // position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"

    }



});