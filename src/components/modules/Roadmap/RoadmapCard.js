import React from 'react'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Accordion from "@material-ui/core/Accordion";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import PhoneIcon from "@material-ui/icons/Phone";


const RoadmapCard = (props) => {

    const phone = props.roadmap.phone.map(p => <Typography style={{display:'flex',alignItems:'center',justifyContent:'center'}}><PhoneIcon/> {p}</Typography>);

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
                style={{display:'flex',alignItems:'center'}}
            >
                <div style={{width:'100%'}}>
                    <Typography variant='h5' style={{marginBottom:'5px'}}>{props.roadmap.firstName} {props.roadmap.lastName}</Typography>
                <div style={{display:'flex',width:'100%'}}>
                    <div style={{width:'90%',textAlign:'left'}}>
                        <Typography>École : {props.roadmap.school}</Typography>
                        <Typography>Arrêt : {props.roadmap.stop}</Typography>
                    </div>
                    <div>
                        <FormControlLabel
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
                            control={<Checkbox style={{padding:'0px'}}/>}
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