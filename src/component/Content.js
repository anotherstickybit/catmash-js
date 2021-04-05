import React, {useEffect, useState} from "react";
import '../App.css';
import {
    makeStyles,
    Typography
} from "@material-ui/core";
import {CardItem} from "./CardItem";
import axios from "axios";


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

export const Content = () => {
    const classes = useStyles();
    const [compare, setCompare] = useState([
        {
            "id": 1,
            "name": "Васек",
            "url": "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg"
        },
        {
            "id": 2,
            "name": "Нарцисс",
            "url": "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg"
        }
    ])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:8080/cats/pair',
            );
            setCompare(result.data);

        };
        fetchData();
    }, []);

    const clicked = (id) => {
        axios.post('http://localhost:8080/cats/vote/' + id).then((response) => {
            if (response.status === 200) {
                alert('GOOD');
            }
        })
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
            </div>
        </div>
    )
}