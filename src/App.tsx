import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Collections from './Collections';
import ShopCollection from './shop_collection';

const useStyles = makeStyles({
  header: {
    background: 'lightcoral',
    maxHeight: '10vh',
  },
  logo: {
    fontFamily: 'Pacifico',
    color: 'white',
    padding: '1rem',
    paddingBottom: '2rem'
  },
  navoption: {
    color: 'white',
  },
  landingArea: {
    background: `url(${require('./vase-of-flowers.jpg')})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    minWidth: '100vw',
    minHeight: '90vh',
  },
  cta: {
    marginLeft: '10vw',
  },
  collectionsArea: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100vw',
  }
});


function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.header}>
        <Toolbar>
          <Typography variant="h3" component="h1" className={classes.logo}>Baked bouquet</Typography>
          <Router>
            <Typography variant="h6"><NavLink to="/shop_collection"><Button className={classes.navoption}>Shop Collection</Button></NavLink></Typography>
            <Typography variant="h6"><NavLink to="/mother's_day"><Button className={classes.navoption}>Mother's Day</Button> </NavLink></Typography>
            <Typography variant="h6"><NavLink to="/shop_occasion"><Button className={classes.navoption}>Shop Occasion</Button> </NavLink></Typography>
            <Typography variant="h6"><NavLink to="/events"><Button className={classes.navoption}>Events</Button> </NavLink></Typography>
            <Typography variant="h6"><NavLink to="/about"><Button className={classes.navoption}>About Us</Button></NavLink></Typography>
            <Typography variant="h6"><NavLink to="/blog"><Button className={classes.navoption}>Blog</Button></NavLink></Typography>
            <Typography variant="h6"><NavLink to="/franchise"><Button className={classes.navoption}>Franchise</Button></NavLink></Typography>
            <Switch>
              {/* TODO: Create the following components: */}
              <Route path="/shop_collection" component={ShopCollection}></Route>
              <Route path="/mother's_day" component={mothersDay}></Route>
              <Route path="/shop_occasion" component={shopOccasion}></Route>
              <Route path="/events" component={events}></Route>
              <Route path="/about" component={about}></Route>
              <Route path="/blog" component={blog}></Route>
              <Route path="/franchise" component={franchise}></Route>
            </Switch>
          </Router>
        </Toolbar>
      </AppBar>
      <div className={classes.landingArea}>
        <div></div>
        <Button variant='outlined' size='large' className={classes.cta} color='secondary'>Buy a baked Bouquet</Button>
      </div>
      <div className={classes.collectionsArea}>
        <Collections />
      </div>

    </div>
  );
}

export default App;
