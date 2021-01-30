import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from '../../Components';

interface INeumorphismProps {
}

const Neumorphism: React.FunctionComponent<INeumorphismProps> = (props) => {
  return (
    <Router>
      <Navbar/>
    <Switch>
     
    </Switch>
  </Router>);
};

export default Neumorphism;
