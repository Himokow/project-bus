import React from 'react'
import {Button} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import PageHeader from "../../shared/PageHeader";
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
const Roadmap = () => {

    return(
        <PageHeader
            name='Feuille de route'
            icon={<DirectionsBusIcon/>}
        />
    )
}

export default Roadmap;