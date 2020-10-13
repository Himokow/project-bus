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
import {getChildren, uncheckAll, updateChild} from "../../../store/actions/ChildrenActions";
import {getSchools} from "../../../store/actions/SchoolActions";
import {getStops} from "../../../store/actions/StopsActions";
import {useDispatch, useSelector} from "react-redux";

const Roadmap = () => {

    const [roadmapFiltered, setRoadmapFiltered] = React.useState([]);
    const [open,setOpen] = React.useState(false)
    const [filters,setFilters]= React.useState({selectedSchool:'',selectedStop:'',search:'',back:'',present:''});

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
        filterRoadmap()
    },[roadmap,filters])

    const toggleDrawer = (anchor, o) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(o);
    };

    const onFilter = (e) => {
        let filtersCopy = {...filters}
        if(e){
            e.search || e.search === '' ? filtersCopy.search = e.search : filtersCopy.search = filtersCopy.search;
            e.school || e.school === '' ? filtersCopy.selectedSchool = e.school : filtersCopy.selectedSchool = filtersCopy.selectedSchool;
            e.stop  || e.stop === '' ? filtersCopy.selectedStop = e.stop : filtersCopy.selectedStop = filtersCopy.selectedStop;
            e.back || e.back === false || e.back === '' ? filtersCopy.back = e.back : filtersCopy.back = filtersCopy.back;
            e.present || e.present === false || e.present === '' ? filtersCopy.present = e.present : filtersCopy.present = filtersCopy.present;
        }
        setFilters(filtersCopy)
    }

    const filterRoadmap = () => {
        let roadmapCopy = [...roadmap]
        if(filters.search){
            roadmapCopy = roadmapCopy.filter(r => {
                const name = `${r.firstName} ${r.lastName}`;
                if( filters.search === '' || name.toLowerCase().includes(filters.search.toLowerCase())){
                    return r;
                }
            })
        }
        if(filters.selectedSchool){
            roadmapCopy = roadmapCopy.filter(r => r.school.id === filters.selectedSchool)
        }
        if(filters.selectedStop){
            roadmapCopy = roadmapCopy.filter(r => r.stop.id === filters.selectedStop)
        }
        if(filters.back || filters.back === false){
            roadmapCopy = roadmapCopy.filter(r => r.back === filters.back)
        }
        if(filters.present || filters.present === false){
            roadmapCopy = roadmapCopy.filter(r => r.present === filters.present)
        }
        if(!filters.selectedStop && !filters.selectedSchool && !filters.search && !filters.back && !filters.present){
            roadmapCopy = [...roadmap]
        }
        setRoadmapFiltered(roadmapCopy.map(r =>
            <RoadmapCard
                roadmap={r}
                checkBack={(checked) => dispatch(updateChild({...r,back:checked}))}
                checkPresent={(checked) => dispatch(updateChild({...r,present:checked}))}/>))
    }

    const clearFilters = () => {
        const filtersCopy = {...filters};
        Object.entries(filtersCopy).forEach(([key,value]) => {
            filtersCopy[key]='';
        });
        setFilters(filtersCopy)
    };

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
                filters={filters}
                onFilter={e => onFilter(e)}
                clearFilters={() => clearFilters()}
            />
            <Button variant='contained' color='secondary' style={{margin:'10px 5px'}} onClick={() => dispatch(uncheckAll(roadmap))}>Tout décocher</Button>
            <div style={{margin:'5px','overflow-y':'scroll',height:'85vh'}}>
                {roadmapFiltered}
            </div>
        </div>
    )
}

export default Roadmap;