import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {useForm} from "react-hook-form";

const AddStop = (props) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        handleClose();
        props.addedStop(data);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    return(
        <Dialog open={props.isOpen} color="primary">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle>Ajout d'une école</DialogTitle>
                <DialogContent style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <TextField type='text' name="name" label="Nom de l'arrêt" inputRef={register}/>
                    <TextField type='text' name="address" label="Adresse de l'arrêt" inputRef={register}/>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose} color='secondary'>Annuler</Button>
                    <Button variant='contained' type='submit' color='primary'>Sauvegarder</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddStop