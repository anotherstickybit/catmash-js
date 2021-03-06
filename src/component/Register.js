import React, {useState} from "react";
import {Button, makeStyles, TextField} from "@material-ui/core";
import axios from "axios";
import {Redirect, useHistory} from "react-router";

const useStyles = makeStyles({
    root: {
        marginLeft: '42%',
        marginTop: '40px'
    },
    button: {
        marginTop: '10px',
    },
});

export const Register = () => {
    const classes = useStyles();

    const [userName, setUserName] = useState('')
    const [user, setUser] = useState({})
    const [redirect, setRedirect] = useState(false)

    const fetchData = async () => {
        await axios.post(
            'http://localhost:8080/user/add/' + userName,
        ).then(response => {
            if (response.status === 200) {
                setUser(response.data);
                //todo: redirect to voting page with user prop
                setRedirect(true);
            }
        });
    };

    const doRedirect = () => {
        if (redirect) {
            return <Redirect to={{
                pathname: "/voting",
                state: {currentUser: user}
            }} />
        }
    }

    return (
        <div className={classes.root}>
            <div>
                <TextField id="outlined-basic" label="Name" variant="outlined" size={"small"}
                           value={userName} onChange={e => setUserName(e.target.value)}/>
            </div>
            <div className={classes.button}>
                <Button variant="contained" color="primary" type={"submit"} onClick={() => fetchData()}>
                    Proceed
                </Button>
                {doRedirect()}
            </div>
        </div>
    )
}