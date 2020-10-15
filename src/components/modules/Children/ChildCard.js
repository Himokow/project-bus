import React from 'react'
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import PhoneIcon from '@material-ui/icons/Phone';
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverTwoToneIcon from "@material-ui/icons/DeleteForeverTwoTone";
import DeleteConfirm from "../../shared/DeleteConfirm";
import EditIcon from '@material-ui/icons/Edit';
import AddChildren from "./AddChildren";
import EditChildren from "./EditChildren";


const ChildCard = (props) => {
    console.log(props)

    const [open,setOpen] = React.useState({
        edit:false,
        delete:false
    })
    const phone = props.children.phone.map(p => <Typography style={{display:'flex',alignItems:'center',justifyContent:'center'}}><PhoneIcon/> {p}</Typography>
    )

    return (
  <Card style={{margin:'1vh',position:'relative'}}>
      <Typography variant='h5'>
          {props.children.lastName.toUpperCase()} {props.children.firstName}
      </Typography>
      <IconButton onClick={() => setOpen({...open,delete:true})} style={{position:"absolute",right:'1vh',bottom:0,color:'#b02617'}}>
          <DeleteForeverTwoToneIcon/>
      </IconButton>
      <IconButton onClick={() => setOpen({...open,edit:true})} style={{position:"absolute",right:'1vh',top:0}}>
          <EditIcon/>
      </IconButton>
      <CardContent>
          <Typography>Arrêt : {props.children.stop.name}</Typography>
          <Typography>École : {props.children.school.name}</Typography>
          {phone}

      </CardContent>

      <EditChildren
          cancel={() => setOpen({...open,edit:false})}
          schools={props.schools}
          stops={props.stops}
          open={open.edit}
          children={props.children}
          updateChild={(c) => props.updateChild(c)}
      />

      <DeleteConfirm
          open={open.delete}
          cancel={() => setOpen({...open,delete:false})}
          delete={`${props.children.lastName} ${props.children.firstName}`}
          onDelete={() => props.deleteChild() && setOpen({...open,delete:false})}
      />

    </Card>

    )
}

export default ChildCard;