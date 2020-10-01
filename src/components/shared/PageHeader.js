import {useTheme} from "@material-ui/core/styles";
import FaceIcon from "@material-ui/icons/Face";
import React from "react";


const PageHeader = ({name,icon}) => {

const theme = useTheme();

return(
    <div style={{width:'100%',height:'5vh',backgroundColor:theme.palette.primary.main,display:'flex'}}>
        <h3 style={{margin:'auto',color:"white",display:'flex',alignItems:"center"}}>{icon}{name}</h3>
    </div>
)

}

export default PageHeader
