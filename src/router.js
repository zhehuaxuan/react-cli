import React from 'react';

import { Route, Switch } from 'react-router-dom';

// 引入页面
import Home from './views/home';
import DashBroad from './views/dashbroad';

// 路由
const getRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/page" component={DashBroad}/>
    </Switch>
);

export default getRouter;
