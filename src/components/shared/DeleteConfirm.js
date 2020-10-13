import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const DeleteConfirm = (props) => {

    return(
        <Dialog open={props.open}>
            <DialogTitle>Suppresion</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Êtes-vous sûrs de supprimer {props.delete}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => props.cancel()} color='secondary' variant='contained'>
                    Annuler
                </Button>
                <Button onClick={() => props.onDelete()} color='primary' variant='contained'>
                    Oui
                </Button>
            </DialogActions>
        </Dialog>
    )

}

export default DeleteConfirm;