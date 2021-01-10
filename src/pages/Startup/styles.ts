// Here we define styles for the component.

// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: any) => ({
    root: {
        position: "relative",
        width: "100%",
        height: "100vh",
    },
    header: {
        background: "#0FAFAFA",
        width: "100%",
        height: "100vh",
        margin: "0 auto",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"

    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        position: "relative",
        height: "100%"
    },
    containerLeft: { width: "59vw", [theme.breakpoints.down('md')]: {
        display: "none"
    } },
    containerRight: { width: "39vw", padding: "0 15px", [theme.breakpoints.down('md')]: {
        width: "100%"
    } },
    image: { maxWidth: "100%", maxHeight: "100vh", height: "auto", position: "absolute", right: 0, bottom: 0 },

}));