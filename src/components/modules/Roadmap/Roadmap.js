import React from 'react'
import PageHeader from "../../shared/PageHeader";
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import RoadmapCard from "./RoadmapCard";

const Roadmap = () => {

    const [roadmap, setRoadmap] = React.useState([
        {firstName:"Florian",lastName:"GREMBER",stop:'Clos de la bourse',school:'St-Amand',phone:['0662626229','0652525259'],back:false},
        {firstName:"Florian",lastName:"GREMBER",stop:'Clos de la bourse',school:'St-Amand',phone:['0662626229','0652525259'],back:false}]);

    const roadmapCard = roadmap.map(r => <RoadmapCard roadmap={r}/>)

    return(
        <div>
            <PageHeader
                name='Feuille de route'
                icon={<DirectionsBusIcon/>}
            />
            <div style={{margin:'5px'}}>
                {roadmapCard}
            </div>
        </div>
    )
}

export default Roadmap;