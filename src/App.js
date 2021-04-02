import React from "react";
import './App.css';
import {Header} from "./component/Header";
import {Content} from "./component/Content";
import {Container, makeStyles, Paper, Typography} from "@material-ui/core";
import {Route, Router} from "react-router";
import {Results} from "./component/Results";

const useStyles = makeStyles({
    root: {
        height: '900px'
    },
    text: {
        marginTop: '10px'
    }
});

function App() {
    const classes = useStyles();

    return (
        <div>
            <Container maxWidth={"xl"}>
                <Paper elevation={3} className={classes.root}>
                    <Header/>

                    <Route path={"/results"} render={() => <Results />} />
                    <Route exact path={"/"} render={() => <Content /> } />
                </Paper>
            </Container>
        </div>
    );
}

export default App;
