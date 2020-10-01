import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/core/header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Roadmap from "./components/modules/Roadmap/Roadmap";
import School from "./components/modules/School/School";
import Children from "./components/modules/Children/Children";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from '@material-ui/styles';


const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>

    <div className="App">
      <Router>
      <Header/>
        <Switch>
            <Route path='/roadmap'>
                <Roadmap/>
            </Route>
            <Route path='/school'>
                <School/>
            </Route>
            <Route path='/children'>
                <Children/>
            </Route>
      </Switch>
    </Router>
    </div>
      </ThemeProvider>
  );
}

export default App;
