import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";


const ChildCard = (props) => {
    const phone = props.children.phone.map(p => <Typography style={{display:'flex',alignItems:'center',justifyContent:'center'}}><PhoneIcon/> {p}</Typography>
    )
    return (
  <Card style={{margin:'1vh',position:'relative'}}>
      <Typography variant='h5'>
          {props.children.lastName.toUpperCase()} {props.children.firstName}
      </Typography>
      <IconButton onClick={() => props.deleteChild()} style={{position:"absolute",right:'1vh',color:'#b02617'}}>
          <DeleteForeverTwoToneIcon/>
      </IconButton>
      <CardContent>
          <Typography>Arrêt : {props.children.stop.name}</Typography>
          <Typography>École : {props.children.school.name}</Typography>
          {phone}

      </CardContent>
  </Card>
    )
}

export default ChildCard;