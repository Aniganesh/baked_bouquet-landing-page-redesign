import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { /* BrowserRouter as Router, */ NavLink, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import Collections from './Collections';
import MothersDay from './MothersDay';
import ShopOccasion from './ShopOccasion';
import Events from './Events';
import About from './About';
import Blog from './Blog';
import Franchise from './Franchise';
import HomePage from './HomePage';
import Products from './Products';
import './App.css';


const useStyles = makeStyles({
  header: {
    background: 'lightcoral',
    maxHeight: '10vh',
    position: 'relative',
  },
  logo: {
    fontFamily: 'Pacifico',
    color: 'white',
    padding: '1rem',
    paddingBottom: '2rem'
  },
  navoption: {
    color: 'white',
    textDecoration: 'none',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
        <AppBar className={classes.header}>
          <Toolbar>
            <Typography variant="h3" className={classes.logo} component="h1"><NavLink className={classes.navoption} to="/"> Baked bouquet</NavLink></Typography>
            <Typography variant="h6"><NavLink to="/shop_collection"><Button className={classes.navoption}>Shop Collection</Button></NavLink></Typography>
            <Typography variant="h6"><NavLink to="/mother's_day"><Button className={classes.navoption}>Mother's Day</Button> </NavLink></Typography>
            {/* <Typography variant="h6"><NavLink to="/shop_occasion"><Button className={classes.navoption}>Shop Occasion</Button> </NavLink></Typography> */}
            <ShopOccasion />
            <Typography variant="h6"><NavLink to="/events"><Button className={classes.navoption}>Events</Button> </NavLink></Typography>
            <Typography variant="h6"><NavLink to="/about"><Button className={classes.navoption}>About Us</Button></NavLink></Typography>
            <Typography variant="h6"><NavLink to="/blog"><Button className={classes.navoption}>Blog</Button></NavLink></Typography>
            <Typography variant="h6"><NavLink to="/franchise"><Button className={classes.navoption}>Franchise</Button></NavLink></Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/products/:filtertype/:slug" component={Products}></Route>
          <Route path="/shop_collection" component={Collections}></Route>
          <Route path="/mother's_day" component={MothersDay}></Route>
          {/* <Route path="/products" component={Products}></Route> */}
          <Route path="/events" component={Events}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/blog" component={Blog}></Route>
          <Route path="/franchise" component={Franchise}></Route>
          <Route path="/" exact component={HomePage}></Route>
        </Switch>
    </div>
  );
}

export default App;
