import React, {useState} from 'react'
import PageHeader from "../../shared/PageHeader";
import ChildCard from "./ChildCard";
import AddIcon from "@material-ui/icons/Add";
import FaceIcon from "@material-ui/icons/Face";
import Fab from "@material-ui/core/Fab";
import AddChildren from "./AddChildren";


const Children = () => {

    const [open, setOpen] = React.useState(false);
    const [children, setChildren] = useState([
        {firstName:"Florian",lastName:"GREMBER",stop:'Clos de la bourse',school:'St-Amand',phone:['0662626229','0652525259']},
        {firstName:"Florian",lastName:"GREMBER",stop:'Clos de la bourse',school:'St-Amand',phone:['0662626229','0652525259']}
        ]);
    const openDialog = () => {
        setOpen(true)
    }

    const addChildren = (c) => {
        const copyChildren = [...children];
        copyChildren.push(c);
        setChildren(copyChildren);
    }

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
                addedChildren={c => addChildren(c)}/>
        </div>
)
}

export default Children