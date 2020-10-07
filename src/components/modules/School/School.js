import React, { useState, useEffect } from 'react'
import PageHeader from "../../shared/PageHeader";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AddIcon from '@material-ui/icons/Add';
import SchoolCard from "./SchoolCard";
import Fab from "@material-ui/core/Fab";
import AddSchool from "./AddSchool";

const School = () => {
    const [open, setOpen] = React.useState(false);
    const [schools, setSchools] = useState([{name:"St-Amand",address:"45 rue guynemer, 59270 Bailleul"},{name:"Victor Hugo",address:"45 rue guynemer, 59270 Bailleul"}]);

    // const schools = [{name:"St-Amand",address:"45 rue guynemer, 59270 Bailleul"},{name:"Victor Hugo",address:"45 rue guynemer, 59270 Bailleul"}]

    const openDialog = () => {
        setOpen(true)
    }

    const addSchool = (school) => {
        const copySchools = [...schools];
        copySchools.push(school);
        setSchools(copySchools)
    }

    const schoolCards = schools.map(s => {
        return(
            <SchoolCard
                school={s}
            />
        )
    })



    return(
        <div>
            <PageHeader
                name='Écoles'
                    icon={<HomeWorkIcon/>}
            />
            {schoolCards}
            <Fab color="secondary" variant="extended" style={{position:'absolute',bottom:'1vh',right:'1vh'}} onClick={openDialog}>
                Ajouter une école <AddIcon />
            </Fab>
                    <AddSchool isOpen={open}
                    setOpen={setOpen}
                    addedSchool = { s => addSchool(s)}/>
        </div>
    )
}

export default School;