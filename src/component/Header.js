import React from "react";
import {AppBar, Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link, NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: '70px',
    },
    header: {
        // background:
    },
    link: {
        cursor: 'pointer'
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4" align={"center"} className={classes.title}>
                    <NavLink style={{textDecoration: 'none', color: 'white', cursor: 'pointer'}} to={'/'}>
                        CATMASH
                    </NavLink>
                </Typography>

                <div>
                    <NavLink style={{textDecoration: 'none', cursor: 'pointer'}} to={'/results'}>
                        <Button size={"medium"} variant={"contained"} color={"secondary"}>
                            Results
                        </Button>
                    </NavLink>
                </div>
            </Toolbar>
        </AppBar>
    )
}