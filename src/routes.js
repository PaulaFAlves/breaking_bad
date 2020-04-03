import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/pages/main';
import Character from './components/pages/character';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/characters/:char_id' component={Character} />
        </Switch>
    </BrowserRouter>
);

export default Routes;