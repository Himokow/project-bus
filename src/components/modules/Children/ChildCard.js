import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import DeleteConfirm from "../../shared/DeleteConfirm";


const ChildCard = (props) => {

    const [open,setOpen] = React.useState(false)
    const phone = props.children.phone.map(p => <Typography style={{display:'flex',alignItems:'center',justifyContent:'center'}}><PhoneIcon/> {p}</Typography>
    )

    return (
  <Card style={{margin:'1vh',position:'relative'}}>
      <Typography variant='h5'>
          {props.children.lastName.toUpperCase()} {props.children.firstName}
      </Typography>
      <IconButton onClick={() => setOpen(true)} style={{position:"absolute",right:'1vh',color:'#b02617'}}>
          <DeleteForeverTwoToneIcon/>
      </IconButton>
      <CardContent>
          <Typography>Arrêt : {props.children.stop.name}</Typography>
          <Typography>École : {props.children.school.name}</Typography>
          {phone}

      </CardContent>

      <DeleteConfirm
          open={open}
          cancel={() => setOpen(false)}
          delete={`${props.children.lastName} ${props.children.firstName}`}
          onDelete={() => props.deleteChild() && setOpen(false)}
      />

    </Card>

    )
}

export default ChildCard;