// Here we define styles for the component.
const drawerWidth = 250;
// eslint-disable-next-line import/no-anonymous-default-export
export default ((theme: any) => ({
    root: {
        // Container styles...
    },
    h4: {
        // Head text styles...
        color: theme.palette.primary
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        position: "relative",
        width: `calc(100% - ${drawerWidth}px)`,
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: drawerWidth,
        marginRight: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    contentHidden: {
        marginLeft: 0,
        width: "100%",
    }
}));