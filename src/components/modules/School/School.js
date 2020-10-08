import React, { useState, useEffect } from 'react'
import PageHeader from "../../shared/PageHeader";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AddIcon from '@material-ui/icons/Add';
import SchoolCard from "./SchoolCard";
import Fab from "@material-ui/core/Fab";
import AddSchool from "./AddSchool";
import {useDispatch, useSelector} from "react-redux";
import {addSchool, deleteSchool, getSchools} from "../../../store/actions/SchoolActions";

const School = () => {

    useEffect(() => {
        dispatch(getSchools());
    }, [])

    const dispatch = useDispatch();
    const schools = useSelector(state =>
        state.schools.schools
    )
    const [open, setOpen] = React.useState(false);

    const openDialog = () => {
        setOpen(true)
    }

    const schoolCards = schools.map(s => {
        return(
            <SchoolCard
                school={s}
                deleteSchool={() => dispatch(deleteSchool(s))}
            />
        )
    })

    return(
        <div>
            <PageHeader
                name='Écoles'
                    icon={<HomeWorkIcon/>}
            />
            <div style={{'overflow-y':'scroll',height:'85vh'}}>
                {schoolCards}
            </div>
            <Fab color="secondary" variant="extended" style={{position:'absolute',bottom:'1vh',right:'1vh'}} onClick={openDialog}>
                Ajouter une école <AddIcon />
            </Fab>
                    <AddSchool isOpen={open}
                    setOpen={setOpen}
                    addedSchool = { s => dispatch(addSchool(s))}/>
        </div>
    )
}

export default School;