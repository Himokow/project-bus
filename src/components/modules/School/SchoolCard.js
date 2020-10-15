import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import DeleteConfirm from "../../shared/DeleteConfirm";
import EditChildren from "../Children/EditChildren";
import EditIcon from "@material-ui/icons/Edit";
import EditSchool from "./EditSchool";

const SchoolCard = (props) => {

    const [open,setOpen] = React.useState({
        edit:false,
        delete:false
    })

    return (
        <Card style={{margin:'1vh',position:'relative'}}>
            <Typography variant='h5'>
                {props.school.name}
            </Typography>
            <IconButton onClick={() => setOpen({...open,delete:true})} style={{position:"absolute",right:'1vh',bottom:0,color:'#b02617'}}>
                <DeleteForeverTwoToneIcon/>
            </IconButton>
            <IconButton onClick={() => setOpen({...open,edit:true})} style={{position:"absolute",right:'1vh',top:0}}>
                <EditIcon/>
            </IconButton>
            <CardContent>
                <Typography>
                    <LocationOnIcon/> {props.school.address}
                </Typography>
            </CardContent>

            <EditSchool
                cancel={() => setOpen({...open,edit:false})}
                open={open.edit}
                school={props.school}
                updateSchool={(c) => props.updateSchool(c) && setOpen({...open,edit:false})}
            />

            <DeleteConfirm
                open={open.delete}
                cancel={() => setOpen({...open,delete:false})}
                delete={props.school.name}
                onDelete={() => props.deleteSchool() && setOpen({...open,delete:false})}
            />

        </Card>

    )
}

export default SchoolCard;