import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import DeleteConfirm from "../../shared/DeleteConfirm";

const SchoolCard = (props) => {

    const [open,setOpen] = React.useState(false)

    return (
        <Card style={{margin:'1vh',position:'relative'}}>
            <Typography variant='h5'>
                {props.school.name}
            </Typography>
            <IconButton onClick={() => setOpen(true)} style={{position:"absolute",right:'1vh',color:'#b02617'}}>
                <DeleteForeverTwoToneIcon/>
            </IconButton>
            <CardContent>
                <Typography>
                    <LocationOnIcon/> {props.school.address}
                </Typography>
            </CardContent>

            <DeleteConfirm
                open={open}
                cancel={() => setOpen(false)}
                delete={props.school.name}
                onDelete={() => props.deleteSchool()  && setOpen(false)}
            />

        </Card>

    )
}

export default SchoolCard;