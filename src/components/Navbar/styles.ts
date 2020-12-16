// Here we define styles for the component.

// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: any) => ({
    root: {
        minHeight: "64px",
        width: "100vw",
        maxWidth: "100%",
    },
    container: {
        padding: "10px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary
    },
    logo: {
        height: "52px",
        width: "auto"
    },


}));