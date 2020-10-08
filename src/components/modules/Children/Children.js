import React, {useEffect, useState} from 'react'
import PageHeader from "../../shared/PageHeader";
import ChildCard from "./ChildCard";
import AddIcon from "@material-ui/icons/Add";
import FaceIcon from "@material-ui/icons/Face";
import Fab from "@material-ui/core/Fab";
import AddChildren from "./AddChildren";
import {getSchools} from "../../../store/actions/SchoolActions";
import {useDispatch, useSelector} from "react-redux";
import {addChild, getChildren} from "../../../store/actions/ChildrenActions";
import {getStops} from "../../../store/actions/StopsActions";


const Children = () => {

    useEffect(() => {
        dispatch(getChildren())
        dispatch(getSchools())
        dispatch(getStops())
    }, [])

    const dispatch = useDispatch();
    const children = useSelector(state =>
        state.children.children
    )
    const stops = useSelector(state =>
        state.stops.stops
    )
    const schools = useSelector(state =>
        state.schools.schools
    )
    const [open, setOpen] = React.useState(false);
    // const [children, setChildren] = useState([
    //     {firstName:"Florian",lastName:"GREMBER",stop:'Clos de la bourse',school:'St-Amand',phone:['0662626229','0652525259']},
    //     {firstName:"Florian",lastName:"GREMBER",stop:'Clos de la bourse',school:'St-Amand',phone:['0662626229','0652525259']}
    //     ]);
    const openDialog = () => {
        setOpen(true)
    }

    // const addChildren = (c) => {
    //     const copyChildren = [...children];
    //     copyChildren.push(c);
    //     setChildren(copyChildren);
    // }

    const childrenCard = children.map( c =>
        <ChildCard children={c}/>
    )
    return(
        <div>
        <PageHeader
        name='Enfants'
        icon=<FaceIcon/>
     />
            {childrenCard}
            <Fab color="secondary" variant="extended" style={{position:'absolute',bottom:'1vh',right:'1vh'}} onClick={openDialog}>
                Ajouter un enfant <AddIcon />
            </Fab>
            <AddChildren
                isOpen = {open}
                setOpen={setOpen}
                schools={schools}
                stops={stops}
                addedChildren={c => dispatch(addChild(c))}/>
        </div>
)
}

export default Children