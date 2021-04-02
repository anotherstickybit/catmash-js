import React, {useState} from "react";
import '../App.css';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";
import {CardItem} from "./CardItem";


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

    const clicked = () => {

    }

    return (
        <div>
            <Typography className={classes.text} variant={"h4"} align={"center"}>
                Who is Hotter?
            </Typography>
            <div id={"grid"}>
                <div>
                    <CardItem cat={compare[0]}/>
                </div>
                <div>
                    <CardItem cat={compare[1]}/>
                </div>
            </div>
        </div>
    )
}