import React from 'react'
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import DehazeIcon from '@material-ui/icons/Dehaze';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import './Header.css';


const Header = () => {

    const [state, setState] = React.useState({
        left: false,
        buttons:[
            {name:'Feuille de route',icon:<DirectionsBusIcon/>,route:'/route'},
            {name:'Test1',icon:<DirectionsBusIcon/>,route:'/route'},
            {name:'Test2',icon:<DirectionsBusIcon/>,route:'/route'}
            ]
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const navButton = state.buttons.map((b) => {
        return (
            <Button variant='contained' color='primary' className='nav-button'>
                {b.icon}{b.name}
            </Button>
        )
    })

    return (
        <Router>
        <React.Fragment key='left'>
            <Button onClick={toggleDrawer('left', true)}><DehazeIcon /></Button>
            <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)}>
                {navButton}
            </Drawer>
        </React.Fragment>
        </Router>
    )
}

export default Header;