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
        flexDirection: "row",
        flexWrap: "wrap"
        
    },
    container: {
        display: "flex", 
        justifyContent: "center",
        alignItems: "center",
        
        position: "relative",
        height: "100%"
    },
    containerLeft: { width: "59%"  },
    containerRight: { width: "39%", padding: "0 15px", },
    image: { width: "900px", height: "auto", position: "absolute", right: 0, bottom: 0 }

}));