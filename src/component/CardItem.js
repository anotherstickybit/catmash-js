import React from "react";
import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
    media: {
        height: 400,
    },
});

export const CardItem = (props) => {
    const classes = useStyles();


    return (
        <div>
            <Card className={classes.root} onClick={() => props.clicked(props.cat.id)}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={props.cat.url}
                    />
                    <CardContent>
                        <Typography variant={"h5"} align={"center"} >
                            {props.cat.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    )
}