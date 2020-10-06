import React from 'react'
import PageHeader from "../../shared/PageHeader";
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import RoadmapCard from "./RoadmapCard";
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import RoadmapSearch from "./RoadmapSearch";
import Button from "@material-ui/core/Button";
import DehazeIcon from "@material-ui/icons/Dehaze";

const Roadmap = () => {

    const [roadmap, setRoadmap] = React.useState([
        {firstName:"Florian",lastName:"GREMBER",stop:'Clos de la bourse',school:'St-Amand',phone:['0662626229','0652525259'],back:false},
        {firstName:"Florian",lastName:"GREMBER",stop:'Clos de la bourse',school:'St-Amand',phone:['0662626229','0652525259'],back:false}
        ]);
    const [roadmapFiltered, setRoadmapFiltered] = React.useState(roadmap.map(r => <RoadmapCard roadmap={r}/>));
    const [open,setOpen] = React.useState(false)
    const input = React.useRef('');

    const toggleDrawer = (anchor, o) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen(o);
    };

    const onFilter = (e) => {
        console.log(e)
        let roadmapCopy = [];
        if(e.search){
           roadmapCopy = roadmap.filter(r => {
               const name = `${r.firstName} ${r.lastName}`;
               if( e.search === '' || name.includes(e.search)){
                   return r;
               }
           })
        }
        if(!e){
            roadmapCopy = [...roadmap]
        }
        setRoadmapFiltered(roadmapCopy.map(r => <RoadmapCard roadmap={r}/>))
    }
    return(
        <div>
            <PageHeader
                name='Feuille de route'
                icon={<DirectionsBusIcon/>}
            />
            <Button onClick={toggleDrawer('left', true)} style={{position:'absolute',top:0,right:0}}><DehazeIcon style={{color:"white"}}/></Button>
            <RoadmapSearch
                open={open}
                setOpen={setOpen}
                onFilter={e => onFilter(e)}
            />
            <div style={{margin:'5px'}}>
                {roadmapFiltered}
            </div>
        </div>
    )
}

export default Roadmap;