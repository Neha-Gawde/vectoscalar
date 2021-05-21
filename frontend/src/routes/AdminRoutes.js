import { Suspense } from "react"
import {  BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import React, { lazy } from 'react';

const DashboardPage = lazy(()=> import('../pages/Dashboard'))

const AdminRoutes= withRouter(({location})=>{

    return (
            <Router>
              <Suspense fallback={<div>Loading......</div>}>
                <Switch>
                    <Route exact path='/' component={DashboardPage}></Route>
                </Switch>
              </Suspense>
            </Router>

    )
}) 

export default AdminRoutes
