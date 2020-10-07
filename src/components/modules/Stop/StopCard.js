import React from 'react';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const StopCard = (props) => {

    return (
        <Card style={{margin:'1vh'}}>
            <Typography variant='h5'>
                {props.stop.name}
            </Typography>
            <CardContent>
                <Typography>
                    <LocationOnIcon/> {props.stop.address}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default StopCard