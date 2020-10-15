import React from 'react'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Accordion from "@material-ui/core/Accordion";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import PhoneIcon from "@material-ui/icons/Phone";
import Card from "@material-ui/core/Card";


const RoadmapCard = (props) => {

    const phone = props.roadmap.phone.map(p => <Typography style={{display:'flex',alignItems:'center',justifyContent:'left'}}><PhoneIcon/> {p}</Typography>);

    return (
        <Accordion style={{marginBottom:'10px',overflow:'hidden'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
                style={{display:'flex',alignItems:'center'}}
            >
            <span style={{backgroundColor:props.roadmap.school.color,position:'absolute',left:0,top:0,height:'5000px',width:'10px'}}>&nbsp;</span>
                <div style={{width:'100%'}}>
                    <Typography variant='h5' style={{marginBottom:'5px', textAlign:'left'}}>
                        {props.roadmap.lastName.toUpperCase()} {props.roadmap.firstName}
                    </Typography>
                <div style={{display:'flex',width:'100%'}}>
                    <div style={{width:'90%',textAlign:'left'}}>
                        <Typography>École : {props.roadmap.school.name}</Typography>
                        <Typography>Arrêt : {props.roadmap.stop.name}</Typography>
                    </div>
                    <div style={{position:'absolute',top:0,right:'10%',display:'flex',flexDirection:'column'}}>
                        <FormControlLabel
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox style={{padding:'0px',color:'#56d141'}} checked={props.roadmap.present} onChange={(event) => props.checkPresent(event.target.checked)}/>}
                            label="Présent"
                            labelPlacement='top'
                        />
                        <FormControlLabel
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox style={{padding:'0px',color:'#4287f5'}} checked={props.roadmap.back} onChange={(event) => props.checkBack(event.target.checked)}/>}
                        label="Retour"
                        labelPlacement='top'
                    />
                    </div>
                </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div style={{display:'flex',flexDirection:'column'}}>
                    {phone}
                </div>
            </AccordionDetails>
        </Accordion>
    )
}

export default RoadmapCard;