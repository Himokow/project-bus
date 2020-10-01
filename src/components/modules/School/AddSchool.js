import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from "@material-ui/core/styles/useTheme";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";


const AddSchool = (props) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        handleClose();
        props.addedSchool(data);
    }

    const handleClose = () => {
        props.setOpen(false);
    }

    return(
            <Dialog open={props.isOpen} color="primary" fullScreen={fullScreen}>
        <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle>Ajout d'une école</DialogTitle>
                <DialogContent>
                    <input type='text' name="name" ref={register}/>
                    <input type='text' name="address" ref={register}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary'>Close</Button>
                    <Button type='submit' color='primary'/>
                </DialogActions>
        </form>
            </Dialog>
        )
}

export default AddSchool;