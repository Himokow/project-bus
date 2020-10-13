import React, {useEffect} from 'react';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import DehazeIcon from "@material-ui/icons/Dehaze";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const RoadmapSearch = (props) => {

    // const [open,setOpen] = React.useState(false)
    const input = React.useRef('');
    // const state = React.useState = ({
    //     schools : [<MenuItem value=""><em>None</em></MenuItem>],
    //     stops : [<MenuItem value=""><em>None</em></MenuItem>]
    // })

    const [schools,setSchools] = React.useState([])
    const [stops,setStops] = React.useState([])


    useEffect(()=>{
        console.log(props)
        if(props.schools.length > 0){
            const copySchools = [<MenuItem value=""><em>Aucune</em></MenuItem>];
            props.schools.map(s => {
                   copySchools.push(<MenuItem value={s.id}>{s.name}</MenuItem>)
            setSchools(copySchools);
           });
        }
        if(props.stops){
            const copyStops = [<MenuItem value=""><em>Aucune</em></MenuItem>];
            props.stops.map(s => {
                copyStops.push(<MenuItem value={s.id}>{s.name}</MenuItem>)
            });
            setStops(copyStops);
        }
    },[props])

    const onFilter = (event) => {
        console.log(event)
        if(event && (event.school || event.school==='')){
            props.onFilter({school:event.school})
        }
        else if(event && (event.stop || event.stop === '')){
            props.onFilter({stop:event.stop})
        }
        else if(event && (event.back || event.back==='' || event.back === false)){
            props.onFilter({back:event.back})
        }
        else if (event && (event.present || event.present==='' || event.present === false)){
            props.onFilter({present:event.present})
        }
         else if (input.current.value || input.current.value === ''){
            props.onFilter({search:input.current.value})
        }
        // else props.onFilter('')
    }

    const toggleDrawer = (anchor, o) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        props.setOpen(o);
    };

    return (
        <React.Fragment key='right'>
            <Drawer anchor='right' open={props.open} onClose={toggleDrawer('left', false)} style={{display:'flex',flexDirection:'column'}}>

                    <TextField inputRef={input} type='text' label='Rechercher un nom' onChange={() => onFilter()}
                       style={{margin:'10px'}}
                               value={props.filters.search}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <SearchIcon />
                               </InputAdornment>
                           ),
                        }}
                    />
                    <Divider style={{margin:'15px'}}/>

                    <InputLabel style={{margin:'10px'}}>Choix d'une école</InputLabel>
                    <Select onChange={(event) => onFilter({school:event.target.value})} style={{margin:'10px'}} value={props.filters.selectedSchool}>
                        {schools}
                    </Select>

                <Divider style={{margin:'15px'}}/>

                <InputLabel style={{margin:'10px'}}>Choix d'un arrêt</InputLabel>
                    <Select onChange={(event) => onFilter({stop : event.target.value})} style={{margin:'10px'}} value={props.filters.selectedStop}>
                        {stops}
                    </Select>

                <Divider style={{margin:'15px'}}/>

                <InputLabel style={{margin:'10px'}}>Retour</InputLabel>
                <Select onChange={(event) => onFilter({back : event.target.value})} style={{margin:'10px'}} value={props.filters.back}>
                    <MenuItem value=""><em>...</em></MenuItem>
                    <MenuItem value={true}>Oui</MenuItem>
                    <MenuItem value={false}>Non</MenuItem>
                </Select>

                <Divider style={{margin:'15px'}}/>

                <InputLabel style={{margin:'10px'}}>Présence</InputLabel>
                <Select onChange={(event) => onFilter({present : event.target.value})} style={{margin:'10px'}} value={props.filters.present}>
                    <MenuItem value=""><em>...</em></MenuItem>
                    <MenuItem value={true}>Oui</MenuItem>
                    <MenuItem value={false}>Non</MenuItem>
                </Select>
            </Drawer>
        </React.Fragment>
    )
}

export default RoadmapSearch;