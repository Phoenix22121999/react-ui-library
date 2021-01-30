import React from "react";
import "./App.css";
import { createGlobalStyle,ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Neumorphism from "./Module/Neumorphism/Neumorphism";
import { theme } from './theme';
import { Navbar } from "./Components";
const GlobalStyle = createGlobalStyle`
  body,* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    background-color: #e6e7ee;
    /* background-color: #dde1e7; */
    /* background-color: #ECF0F3; */
  }
`;
function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme ={theme}>
			  <Router>
        <Switch>
          <Route path='/' exact component={Neumorphism} />
          <Route path='/Neumorphism' component={Neumorphism} />
        </Switch>
      </Router>
			</ThemeProvider>
		</>
	);
}

export default App;
