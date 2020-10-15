import React, {useEffect} from 'react';
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
import {getChildren} from "../../../store/actions/ChildrenActions";
import {getSchools} from "../../../store/actions/SchoolActions";
import {getStops} from "../../../store/actions/StopsActions";

const EditChildren = (props) => {
    console.log(props)

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
        props.updateChild({...data,id:props.children.id,back:props.children.back,present:props.children.back});
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
        // const copyPhone = [...phone];
        setPhone([<TextField type='text' name="phone" label="N° de tel" inputRef={register}/>])
        props.cancel();
    };

    useEffect(() => {
        handlePhone();
    }, [props])

    const handlePhone = () => {
        if(props.children.phone){
            const phones = [];
            props.children.phone.map((p,index) => {
                const name = `phone${index}`
                phones.push(<TextField type='text' name={name} label="N° de tel" inputRef={register} defaultValue={p}/>)
            })
            setPhone(phones)
        }
    }

    const schools = props.schools.map(s => <MenuItem value={s.id}>{s.name}</MenuItem>)
    const stops = props.stops.map(s => <MenuItem value={s.id}>{s.name}</MenuItem>)

    return(
        <Dialog open={props.open} color="primary">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle>Ajout d'un enfant</DialogTitle>
                <DialogContent style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <TextField type='text' name="lastName" label="Nom" inputRef={register} defaultValue={props.children.lastName}/>
                    <TextField type='text' name="firstName" label="Prénom" inputRef={register} defaultValue={props.children.firstName}/>
                    <FormControl style={{width:'100%'}}>
                        <InputLabel>Arrêt</InputLabel>
                        <Controller
                            as={
                                <Select value={props.children.stop.id}>
                                    {stops}
                                </Select>
                            }
                            defaultValue={props.children.stop.id}
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
                            defaultValue={props.children.school.id}
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

export default EditChildren;