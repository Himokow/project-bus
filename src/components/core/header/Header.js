import React from 'react'
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import DehazeIcon from '@material-ui/icons/Dehaze';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import FaceIcon from '@material-ui/icons/Face';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import './Header.css';
import { Link , useLocation} from "react-router-dom";


const Header = () => {

    const location = useLocation();

    const [state, setState] = React.useState({
        left: false,
        buttons:[
            {name:'Feuille de route',icon:<DirectionsBusIcon/>,route:'/roadmap'},
            {name:'Ecoles',icon:<HomeWorkIcon/>,route:'/school'},
            {name:'Enfants',icon:<FaceIcon/>,route:'/children'}
            ]
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const closeDrawer = () => {
        state.left = false;
    };


    const navButton = state.buttons.map((b) => {
        return (
            <Link to={b.route} style={{textDecoration:'none'}}>
                <Button variant='contained' color='primary' style={{margin:'5px',width:'25vh'}}  onClick={() => closeDrawer()}>
                    {b.icon}{b.name}
                </Button>
            </Link>
        )
    })

    return (
        <React.Fragment key='left'>
            <Button onClick={toggleDrawer('left', true)} style={{position:'absolute',top:0,left:0}}><DehazeIcon style={{color:"white"}}/></Button>
            <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                {navButton}
            </Drawer>
        </React.Fragment>
    )
}

export default Header;