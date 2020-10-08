import React, {useEffect} from 'react'
import PageHeader from "../../shared/PageHeader";
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import RoadmapCard from "./RoadmapCard";
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import RoadmapSearch from "./RoadmapSearch";
import Button from "@material-ui/core/Button";
import DehazeIcon from "@material-ui/icons/Dehaze";
import {getChildren, updateChild} from "../../../store/actions/ChildrenActions";
import {getSchools} from "../../../store/actions/SchoolActions";
import {getStops} from "../../../store/actions/StopsActions";
import {useDispatch, useSelector} from "react-redux";

const Roadmap = () => {

    useEffect(() => {
        dispatch(getChildren())
        dispatch(getSchools())
        dispatch(getStops())
    }, [])

    const dispatch = useDispatch();
    const roadmap = useSelector(state =>
        state.children.children
    )
    const stops = useSelector(state =>
        state.stops.stops
    )
    const schools = useSelector(state =>
        state.schools.schools
    )

    useEffect(() => {
        onFilter()
    },[roadmap])

    const [roadmapFiltered, setRoadmapFiltered] = React.useState([]);
    const [open,setOpen] = React.useState(false)

    const toggleDrawer = (anchor, o) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(o);
    };

    const onFilter = (e) => {
        console.log(e)
        let roadmapCopy = [...roadmap];
        if(e && e.search){
           roadmapCopy = roadmapCopy.filter(r => {
               const name = `${r.firstName} ${r.lastName}`;
               if( e.search === '' || name.toLowerCase().includes(e.search.toLowerCase())){
                   return r;
               }
           })
        }
        if(e && e.school){
            roadmapCopy = roadmapCopy.filter(r => r.school.id === e.school)
        }
        if(e && e.stop){
            roadmapCopy = roadmapCopy.filter(r => r.stop.id === e.stop)
        }
        if(!e){
            roadmapCopy = [...roadmap]
        }
        setRoadmapFiltered(roadmapCopy.map(r => <RoadmapCard roadmap={r} checkChild={(checked) => dispatch(updateChild({...r,back:checked}))}/>))
    }
    return(
        <div>
            <PageHeader
                name='Feuille de route'
                icon={<DirectionsBusIcon/>}
            />
            <Button onClick={toggleDrawer('left', true)} style={{position:'absolute',top:0,right:0}}><SearchIcon style={{color:"white"}}/></Button>
            <RoadmapSearch
                open={open}
                setOpen={setOpen}
                schools={schools}
                stops={stops}
                onFilter={e => onFilter(e)}
            />
            <div style={{margin:'5px'}}>
                {roadmapFiltered}
            </div>
        </div>
    )
}

export default Roadmap;