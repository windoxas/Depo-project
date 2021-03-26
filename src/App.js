import React from 'react'
import TopMenu from './component/topMenu/TopMenu'
import ListPerson from './component/listPerson/ListPerson'
import { BrowserRouter as Router, Route , Switch, Link } from 'react-router-dom'
import './App.css';

function App() {

  return (
    <Router>
        <div className="App">
          <TopMenu/>
          <ListPerson/>
        <Switch>
            <Route exact path="/test" component={ListPerson}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
