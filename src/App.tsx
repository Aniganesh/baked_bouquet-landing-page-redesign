import React from 'react';
import Header from './header';
import Typography from '@material-ui/core/Typography';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <div id="landing">
          <div className="header-precursor">
            <Typography className="company-name" variant="h4" component="h1"> Baked <br /> Bouquet</Typography>
            <Header />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
