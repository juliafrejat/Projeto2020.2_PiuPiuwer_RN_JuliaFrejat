import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Redirect from './Redirect';
import Login from '../pages/Login';

function AuthRoutes() {
    return (
        <BrowserRouter>
            <Route path="/login" component={Login} />
            <Route component={Redirect} />
        </BrowserRouter>
    )
}

export default AuthRoutes;