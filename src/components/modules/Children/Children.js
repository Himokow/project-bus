import React from 'react'
import FaceIcon from "@material-ui/icons/Face";
import PageHeader from "../../shared/PageHeader";
import ChildCard from "./ChildCard";


const Children = () => {

    return(
        <div>
        <PageHeader
        name='Enfants'
        icon=<FaceIcon/>
     />
    <ChildCard/>
        </div>
)
}

export default Children