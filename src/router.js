import React from 'react';

import { Route, Switch } from 'react-router-dom';

import loadable from 'react-loadable';
import Loading from './components/Loading';


const Home = loadable({
    loader: () => import('./views/home'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})
const DashBroad = loadable({
    loader: () => import('./views/dashbroad'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})

const NotFound = loadable({
    loader: () => import('./utils/NotFound'),
    loading: Loading,
    timeout: 10000, // 10 seconds
})

// 路由
const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page" component={DashBroad}/>
        <Route component={NotFound}/>
    </Switch>
);

export default getRouter;
