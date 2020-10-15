import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";


const EditStop= (props) => {

    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        props.updateStop({...data,id:props.stop.id});
    };

    return(
        <Dialog open={props.open} color="primary">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle>Édition d'un arrêt</DialogTitle>
                <DialogContent style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <TextField type='text' name="name" label="Nom de l'école" inputRef={register} defaultValue={props.stop.name}/>
                    <TextField type='text' name="address" label="Adresse de l'école" inputRef={register} defaultValue={props.stop.address}/>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={() => props.cancel()} color='secondary'>Annuler</Button>
                    <Button variant='contained' type='submit' color='primary'>Sauvegarder</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
};

export default EditStop;