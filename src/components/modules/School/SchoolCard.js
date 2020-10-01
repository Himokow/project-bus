import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from '@material-ui/icons/LocationOn';

const SchoolCard = (props) => {

    return (
        <Card style={{margin:'1vh'}}>
            <Typography variant='h5'>
                {props.school.name}
            </Typography>
            <CardContent>
                <Typography>
                    <LocationOnIcon/> {props.school.address}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default SchoolCard;