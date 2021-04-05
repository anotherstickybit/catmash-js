import React from "react";
import './App.css';
import {Header} from "./component/Header";
import {Content} from "./component/Content";
import {Container, makeStyles, Paper} from "@material-ui/core";
import {Route} from "react-router";
import {Results} from "./component/Results";
import {Register} from "./component/Register";

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
                    <Route exact path={"/"} render={() => <Register />} />
                    <Route path={"/results"} render={() => <Results />} />
                    <Route path={"/voting"} render={() => <Content /> } />
                </Paper>
            </Container>
        </div>
    );
}

export default App;
