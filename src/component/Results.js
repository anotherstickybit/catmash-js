import React, {useEffect, useState} from "react";
import {makeStyles, Typography} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 400,
    },
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
        const fetchData = async () => {
            const result = await axios(
                'https://hn.algolia.com/api/v1/search?query=redux',
            );
            setResults(result.data.hits);

        };
        fetchData();
    }, []);

    return (
        <div>
            {results.map((result) => (
                <Typography>
                    {result.objectID}
                </Typography>
            ))}
        </div>
    )
}