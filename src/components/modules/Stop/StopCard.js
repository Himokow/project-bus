import React from 'react';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import IconButton from "@material-ui/core/IconButton";

const StopCard = (props) => {

    return (
        <Card style={{margin:'1vh',position:'relative'}}>
            <Typography variant='h5'>
                {props.stop.name}
            </Typography>
            <IconButton onClick={() => props.deleteStop()} style={{position:"absolute",right:'1vh',color:'#b02617'}}>
                <DeleteForeverTwoToneIcon/>
            </IconButton>
            <CardContent>
                <Typography>
                    <LocationOnIcon/> {props.stop.address}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default StopCard