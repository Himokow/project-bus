import React, {useEffect} from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import ColorPicker from "../../shared/ColorPicker";
import PaletteIcon from '@material-ui/icons/Palette';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const AddSchool = (props) => {

    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [open,setOpen] = React.useState();
    const [color,setColor] = React.useState('#fff');

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        handleClose();
        props.addedSchool(data);
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    const handleColorChange = (color) => {
        setColor(color);
        setOpen(false);
    }

    return(
        <Dialog open={props.isOpen} color="primary">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle>Ajout d'une école</DialogTitle>
                <DialogContent style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <TextField type='text' name="name" label="Nom de l'école" inputRef={register}/>
                    <TextField type='text' name="address" label="Adresse de l'école" inputRef={register}/>
                    <Typography style={{marginTop:'10px'}}>Code couleur :</Typography>
                    <div style={{width:'90%',display:'flex'}}>
                        <span style={{backgroundColor:color,width:'80%',display:'inline-block',height:'25px',margin:'auto',borderRadius:'5px'}}>&nbsp;</span>
                        <IconButton onClick={() => setOpen(true)}><PaletteIcon/></IconButton>
                        <ColorPicker
                            open={open}
                            saveColor={(color) => handleColorChange(color)}
                            cancel={() => setOpen(false)}
                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose} color='secondary'>Annuler</Button>
                    <Button variant='contained' type='submit' color='primary'>Sauvegarder</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
};

export default AddSchool;