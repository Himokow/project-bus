import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

const TotalInfos = (props) => {

    console.log(props)
    const totalBack = props.roadmap.filter(r => r.back === true)
    const totalPresent= props.roadmap.filter(r => r.present === true)

    return(
        <Dialog open={props.open}>
            <DialogContent>
                <Typography>Total enfants: {props.roadmap.length}</Typography>
                <Typography>Total retour : {totalBack.length}</Typography>
                <Typography>Total présent: {totalPresent.length}</Typography>
            </DialogContent>
        <DialogActions>
            <Button variant='contained' onClick={() => props.cancel()} style={{margin:'auto'}} color='secondary'>Quitter</Button>
        </DialogActions>
        </Dialog>
        )
}

export default TotalInfos;