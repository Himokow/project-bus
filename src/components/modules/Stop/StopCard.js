import React from 'react';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import IconButton from "@material-ui/core/IconButton";
import DeleteConfirm from "../../shared/DeleteConfirm";

const StopCard = (props) => {

    const [open,setOpen] = React.useState(false)

    return (
        <Card style={{margin:'1vh',position:'relative'}}>
            <Typography variant='h5'>
                {props.stop.name}
            </Typography>
            <IconButton onClick={() => setOpen(true)} style={{position:"absolute",right:'1vh',color:'#b02617'}}>
                <DeleteForeverTwoToneIcon/>
            </IconButton>
            <CardContent>
                <Typography>
                    <LocationOnIcon/> {props.stop.address}
                </Typography>
            </CardContent>

            <DeleteConfirm
                open={open}
                cancel={() => setOpen(false)}
                delete={props.stop.name}
                onDelete={() => props.deleteStop()  && setOpen(false)}
            />

        </Card>
    )
}

export default StopCard