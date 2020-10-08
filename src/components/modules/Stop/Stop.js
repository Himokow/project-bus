import React, {useEffect} from 'react'
import PageHeader from "../../shared/PageHeader";
import DeckIcon from '@material-ui/icons/Deck';
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import AddStop from "./AddStop";
import {useDispatch, useSelector} from "react-redux";
import {getStops, addStop, deleteStop} from "../../../store/actions/StopsActions";
import StopCard from "./StopCard";


const Stop = () => {

    useEffect(() => {
        dispatch(getStops());
    }, [])

    const dispatch = useDispatch();
    const stops = useSelector(state =>
        state.stops.stops
    )

    const [open, setOpen] = React.useState(false);

    const openDialog = () => {
        setOpen(true)
    }

    const stopCards = stops.map(s => <StopCard stop={s} deleteStop={() => dispatch(deleteStop(s))}/>)

    return(
        <div>
            <PageHeader
            name='Arrêt'
            icon={<DeckIcon/>}/>
            <div style={{'overflow-y':'scroll',height:'85vh'}}>
                {stopCards}
            </div>
        <Fab color="secondary" variant="extended" style={{position:'absolute',bottom:'1vh',right:'1vh'}} onClick={openDialog}>
        Ajouter un arrêt <AddIcon />
        </Fab>
    <AddStop isOpen={open}
               setOpen={setOpen}
               addedStop = { s => dispatch(addStop(s))}/>
        </div>
    )
}

export default Stop;