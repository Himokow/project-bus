import React from 'react';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import IconButton from "@material-ui/core/IconButton";
import DeleteConfirm from "../../shared/DeleteConfirm";
import EditSchool from "../School/EditSchool";
import EditStop from "./EditStop";
import EditIcon from "@material-ui/icons/Edit";

const StopCard = (props) => {

    const [open,setOpen] = React.useState({
        delete:false,
        edit:false
    })

    return (
        <Card style={{margin:'1vh',position:'relative'}}>
            <Typography variant='h5'>
                {props.stop.name}
            </Typography>
            <IconButton onClick={() => setOpen({...open,delete:true})} style={{position:"absolute",right:'1vh',bottom:0,color:'#b02617'}}>
                <DeleteForeverTwoToneIcon/>
            </IconButton>
            <IconButton onClick={() => setOpen({...open,edit:true})} style={{position:"absolute",right:'1vh',top:0}}>
                <EditIcon/>
            </IconButton>
            <CardContent>
                <Typography>
                    <LocationOnIcon/> {props.stop.address}
                </Typography>
            </CardContent>


            <EditStop
                cancel={() => setOpen({...open,edit:false})}
                open={open.edit}
                stop={props.stop}
                updateStop={(stop) => props.updateStop(stop) && setOpen({...open,edit:false})}
            />

            <DeleteConfirm
                open={open.delete}
                cancel={() => setOpen({...open,delete:false})}
                delete={props.stop.name}
                onDelete={() => props.deleteStop()  && setOpen({...open,delete:false})}
            />

        </Card>
    )
}

export default StopCard