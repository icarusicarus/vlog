import React from "react";
import {
    AppBar,
    Toolbar,
    // CssBaseline,
    Typography,
    makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    logo: {
        cursor: "pointer",
    },
    appbar: {
        alignItems: 'center',
        background: 'skyblue',
    }
}));

function Nav() {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.appbar}>
            {/* <CssBaseline /> */}
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Yeryeong's vlog
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default Nav;