import React, { Component } from 'react';
import Routes from './routes';

import './styles.css';

import Header from './components/pages/header';
import Main from './components/pages/main';

const App = () => (
    <div className="App">
        <Header />
        <Routes />
    </div> 

);
 
export default App;