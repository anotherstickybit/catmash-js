import React, {useEffect, useState} from "react";
import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import axios from "axios";
import {CardItem} from "./CardItem";

const useStyles = makeStyles({
    root: {
        // maxWidth: 150,
        marginLeft: '50px'
    },
    media: {
        height: '150px'
    },
    card: {
        marginLeft: '10px',
        marginTop: '10px',
        marginBottom: '90px',
        width: '250px',
        height: '200px',
        float: "left"
    },
    text: {
        marginTop: '40px',
        float: "left"
    }
});

export const Results = () => {
    const classes = useStyles();
    const [results, setResults] = useState([
        {
            "id": 1,
            "name": "Васек",
            "url": "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg",
            "rating": 10
        },
        {
            "id": 2,
            "name": "Нарцисс",
            "url": "https://cdn25.img.ria.ru/images/156087/28/1560872802_0:778:1536:1642_600x0_80_0_0_606c2d47b6d37951adc9eaf750de22f0.jpg",
            "rating": 16
        }
    ])

    useEffect(() => {
        axios.get('http://localhost:8080/cats')
            .then((response) => {
                if (response.status === 200) {
                    setResults(response.data);
                }
            })
    }, []);
    let i = 0;
    return (

        <div>
            <div>
                <Typography variant={"h5"} style={{margin: '10px'}}>
                    Voting results:
                </Typography>
            </div>
            {results.map((result) => (
                <div className={classes.card}>
                    <Typography variant={"h4"} className={classes.text}>
                        {++i}
                    </Typography>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={result.url}
                            />
                            <CardContent>
                                <Typography variant={"h7"} align={"center"} >
                                    {result.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            ))}
        </div>
    )
}