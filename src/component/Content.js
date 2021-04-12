import React, {useEffect, useState} from "react";
import '../App.css';
import {
    makeStyles,
    Typography
} from "@material-ui/core";
import {CardItem} from "./CardItem";
import axios from "axios";
import {Redirect} from "react-router";


const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 400,
    },
    text: {
        marginTop: '10px'
    }
});

export const Content = (props) => {
    const classes = useStyles();
    const [user, setUser] = useState({})
    const [compare, setCompare] = useState([
        {
            "id": 1,
            "name": "Null",
            "url": "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg"
        },
        {
            "id": 2,
            "name": "Null",
            "url": "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg"
        }
    ])
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        const newUser = props.location.state.currentUser;
        setUser(newUser);
    }, [])

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            getPair();
        }
    }, [user]);

    const getPair = () => {
        if (Object.keys(user).length > 0) {
            axios.get('http://localhost:8080/cats/pair/' + user.id)
                .then((response) => {
                    debugger
                    if (response.status === 200) {
                        if (response.data.length === 0) {
                            //todo: redirect to results page
                            setRedirect(true)
                        }
                        setCompare(response.data);
                    }
                })
        }
    }

    const clicked = (id) => {
        axios.post('http://localhost:8080/cats/vote/' + id).then((response) => {
            if (response.status === 200) {
                getPair();
            }
        })
    }

    const doRedirect = () => {
        if (redirect) {
            return <Redirect to={{
                pathname: "/results"
            }} />
        }
    }

    return (
        <div>
            <Typography className={classes.text} variant={"h4"} align={"center"}>
                Who is Hotter?
            </Typography>
            <div id={"grid"}>
                <div>
                    <CardItem cat={compare[0]} clicked={clicked}/>
                </div>
                <div>
                    <CardItem cat={compare[1]} clicked={clicked}/>
                </div>
                {doRedirect()}
            </div>
        </div>
    )
}