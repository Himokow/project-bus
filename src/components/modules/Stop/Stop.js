import React, {useState} from 'react'
import PageHeader from "../../shared/PageHeader";
import DeckIcon from '@material-ui/icons/Deck';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddSchool from "../School/AddSchool";
import StopCard from "./StopCard";
import AddStop from "./AddStop";


const Stop = () => {

    const [open, setOpen] = React.useState(false);
    const [stops, setStop] = useState([{name:"Clos de la bourse 1",address:"45 rue guynemer, 59270 Bailleul"},{name:"Clos de la bourse 2",address:"45 rue guynemer, 59270 Bailleul"}]);

    const openDialog = () => {
        setOpen(true)
    }

    const addStop = (stop) => {
        const copyStops = [...stops];
        copyStops.push(stop);
        setStop(copyStops)
    }

    const stopCards = stops.map(s => <StopCard stop={s}/>)

    return(
        <div>
            <PageHeader
            name='Arrêt'
            icon={<DeckIcon/>}/>
            {stopCards}
        <Fab color="secondary" variant="extended" style={{position:'absolute',bottom:'1vh',right:'1vh'}} onClick={openDialog}>
        Ajouter un arrêt <AddIcon />
        </Fab>
    <AddStop isOpen={open}
               setOpen={setOpen}
               addedStop = { s => addStop(s)}/>
        </div>
    )
}

export default Stop;