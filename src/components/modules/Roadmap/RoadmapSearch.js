import React from 'react';
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

const RoadmapSearch = (props) => {

    // const [open,setOpen] = React.useState(false)
    const input = React.useRef('');

    const onFilter = (event) => {
        if(event){
            if(event.value){
                //TODO : DIff between school & stop
            } else {
                props.onFilter({search:event})
            }
        }
        else props.onFilter('')
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

                    <TextField inputRef={input} type='text' label='Rechercher un nom' onChange={() => onFilter(input.current.value)}
                       style={{margin:'10px'}}
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
                    <Select onChange={onFilter} style={{margin:'10px'}}>
                        <MenuItem value="St-Amand">St-Amand</MenuItem>
                        <MenuItem value="Victor Hugo">Victor Hugo</MenuItem>
                    </Select>

                <Divider style={{margin:'15px'}}/>

                <InputLabel style={{margin:'10px'}}>Choix d'un arrêt</InputLabel>
                    <Select onChange={onFilter} style={{margin:'10px'}}>
                        <MenuItem value="Clos de la bourse 1">Clos de la bourse 1</MenuItem>
                        <MenuItem value="Clos de la bourse 2">Clos de la bourse 2</MenuItem>
                    </Select>
            </Drawer>
        </React.Fragment>
    )
}

export default RoadmapSearch;