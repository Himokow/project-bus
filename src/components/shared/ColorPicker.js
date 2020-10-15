import React, {useEffect} from 'react'
import Dialog from "@material-ui/core/Dialog";
import { ChromePicker } from 'react-color';
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";


const ColorPicker = (props) => {

    const [color,setColor] = React.useState('#fff');

    useEffect(() => {
        if(props.color){
            setColor(props.color)
        }
    },[props])
    const handleChangeComplete = (color) => {
        console.log(color)
        setColor(color.hex)
    }

    return(
        <Dialog open={props.open}>
            <div style={{margin:'5px auto'}}>
                <ChromePicker onChangeComplete={handleChangeComplete} color={color}/>
            </div>
            <DialogActions>
                <Button variant='contained' onClick={() => props.cancel()} color='secondary'>Annuler</Button>
                <Button variant='contained' type='submit' color='primary' onClick={() => props.saveColor(color)}>Sauvegarder</Button>
            </DialogActions>
        </Dialog>
    )

}

export default ColorPicker;