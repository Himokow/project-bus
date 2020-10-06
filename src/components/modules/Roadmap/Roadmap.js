import React from 'react'
import PageHeader from "../../shared/PageHeader";
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import RoadmapCard from "./RoadmapCard";
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";

const Roadmap = () => {

    const [roadmap, setRoadmap] = React.useState([
        {firstName:"Florian",lastName:"GREMBER",stop:'Clos de la bourse',school:'St-Amand',phone:['0662626229','0652525259'],back:false},
        {firstName:"Florian",lastName:"GREMBER",stop:'Clos de la bourse',school:'St-Amand',phone:['0662626229','0652525259'],back:false}
        ]);
    const [roadmapFiltered, setRoadmapFiltered] = React.useState(roadmap.map(r => <RoadmapCard roadmap={r}/>));
    const input = React.useRef('');

    const onFilter = () => {
       const roadmapCopy = roadmap.filter(r => {
           const name = `${r.firstName} ${r.lastName}`;
           if( input.current.value === '' || name.includes(input.current.value)){
               return r;
           }
       })
        setRoadmapFiltered(roadmapCopy.map(r => <RoadmapCard roadmap={r}/>))
    }
    return(
        <div>
            <PageHeader
                name='Feuille de route'
                icon={<DirectionsBusIcon/>}
            />
            <TextField inputRef={input} type='text' label='Rechercher un nom' onChange={() => onFilter()}
                       InputProps={{
                           startAdornment: (
                               <InputAdornment position="start">
                                   <SearchIcon />
                               </InputAdornment>
                           ),
                       }}/>
            <div style={{margin:'5px'}}>
                {roadmapFiltered}
            </div>
        </div>
    )
}

export default Roadmap;