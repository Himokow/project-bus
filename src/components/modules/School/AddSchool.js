import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";


const AddSchool = (props) => {

    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        handleClose();
        props.addedSchool(data);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    return(
        <Dialog open={props.isOpen} color="primary">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle>Ajout d'une école</DialogTitle>
                <DialogContent style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <TextField type='text' name="name" label="Nom de l'école" inputRef={register}/>
                    <TextField type='text' name="address" label="Adresse de l'école" inputRef={register}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='success'>Close</Button>
                    <Button type='submit' color='error'>Save</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
};

export default AddSchool;