import React from 'react';
import Navbar from './component/Navbar';
import Yoga from './component/Yoga';
import Home from './component/Home';
import Running from './component/Running';
import Boxing from './component/Boxing';
import Cardio from './component/Cardio';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import WeightLifting from './component/WeightLifting';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      <Route path='/yoga' component={Yoga}/>
      <Route path='/weightlifting' component={WeightLifting} />
      <Route path='/running' component={Running}/>
      <Route path='/boxing' component={Boxing} />
      <Route path='/cardio' component={Cardio} />
      </Switch>
    </Router>
  );
}

export default App;
