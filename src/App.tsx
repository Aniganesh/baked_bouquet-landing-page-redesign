import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import Header from './header';
import './App.css';

interface IHeaderState {
  headerOpen: boolean
  listOptions: string[]
}

function App() {
  const [headerState, setHeaderState] = useState<IHeaderState>({ headerOpen: false, listOptions: [] });
  const headerOptions = ["Shop Collection", "Mother's Day", "Shop Occasion", "Events", "About Us", "Blog", "Franchise"];
  function toggleHeader() {
    const isOpen = headerState.headerOpen;
    let i;
    if (!isOpen) {
      for (i = 1; i <= headerOptions.length; ++i) {
        const tempOptions = headerOptions.slice(0, i);
        setTimeout(() => {
          setHeaderState({ headerOpen: !isOpen, listOptions: tempOptions });
        }, 200);
      }
    }else{
      setHeaderState({ headerOpen: !isOpen, listOptions:[]})
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="lazy-header">
          <Typography component="h1" variant="h3" className="company-name">Baked <br /> bouquet</Typography>
          <Button onClick={() => toggleHeader()}>
            <MenuIcon />
          </Button>
          <Header isOpen={headerState.headerOpen} listItems={headerState.listOptions} />
        </div>
      </header>
    </div>
  );
}

export default App;
