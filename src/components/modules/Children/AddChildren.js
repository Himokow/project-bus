import React from 'react';
import {Controller, useForm} from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const AddChildren = (props) => {

    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { register, handleSubmit , control} = useForm();
    const onSubmit = data => {
        const phoneArray = []
        Object.entries(data).forEach(([key,value]) => {
            if(key.slice(0,5) === 'phone'){
                phoneArray.push(value)
                delete data[key];
            }
        })
        data['phone']=phoneArray;
        props.addedChildren(data);
        handleClose();
    };

    const [phone, setPhone] = React.useState([<TextField type='text' name="phone" label="N° de tel" inputRef={register}/>]);

    const addPhone = () => {
        const copyPhone = [...phone];
        const name = `phone${copyPhone.length}`
        const phoneTest =<TextField type='text' name={name} label="N° de tel" inputRef={register}/> ;
        copyPhone.push(phoneTest);
        setPhone(copyPhone)
    };

    const handleClose = () => {
        props.setOpen(false);
        const copyPhone = [...phone];
        setPhone(copyPhone[0])
    };

    const schools = props.schools.map(s => <MenuItem value={s.id}>{s.name}</MenuItem>)
    const stops = props.stops.map(s => <MenuItem value={s.id}>{s.name}</MenuItem>)

    return(
        <Dialog open={props.isOpen} color="primary">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle>Ajout d'un enfant</DialogTitle>
                <DialogContent style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <TextField type='text' name="lastName" label="Nom" inputRef={register}/>
                    <TextField type='text' name="firstName" label="Prénom" inputRef={register}/>
                    <FormControl style={{width:'100%'}}>
                        <InputLabel>Arrêt</InputLabel>
                        <Controller
                            as={
                                <Select>
                                    {stops}
                                </Select>
                            }
                            name='stop'
                            control={control}
                        />
                    </FormControl>
                    <FormControl style={{width:'100%'}}>
                        <InputLabel>Choix d'école</InputLabel>
                        <Controller
                            as={
                                <Select>
                                   {schools}
                                </Select>
                            }
                            name='school'
                            control={control}
                        />
                    </FormControl>
                    {phone}
                    <Button onClick={addPhone}>+</Button>
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' onClick={handleClose} color='secondary'>Annuler</Button>
                    <Button variant='contained' type='submit' color='primary'>Sauvegarder</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
};

export default AddChildren;