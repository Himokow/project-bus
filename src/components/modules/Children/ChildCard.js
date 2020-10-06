import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import PhoneIcon from '@material-ui/icons/Phone';


const ChildCard = (props) => {

    const phone = props.children.phone.map(p => <Typography style={{display:'flex',alignItems:'center',justifyContent:'center'}}><PhoneIcon/> {p}</Typography>
    )
    return (
  <Card style={{margin:'1vh'}}>
      <Typography variant='h5'>
            Florian GREMBER
      </Typography>
      <CardContent>
          <Typography>Arrêt : Clos de la bourse</Typography>
          <Typography>École : Victor Hugo</Typography>
          {phone}

      </CardContent>
  </Card>
    )
}

export default ChildCard;