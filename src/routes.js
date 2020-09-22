import React from 'react';
import { Home } from './views/Home';
import { About } from './views/About';
import { NoMatch } from './views/NoMatch';
import { TopicList } from './views/TopicList';
import { TopicDetail } from './components/TopicDetail';
import { NavBar } from './components/NavBar';
import { MakeRouteWithSubRoutes } from './makeRouteWithSubRoutes';
import { Switch } from 'react-router-dom';

const fetchXYZApiRoutes = () => {
    return [
        {
            path: "/HelloWorld",
            component: "AAA",
        }
    ]
}

const routes = [
    {
        path: "/Home",
        component: Home
    },
    {
        path: "/About",
        component: About
    },
    {
        path: "/Topics",
        component: TopicList,
        routes: [
            {
                path: "/Topics/:topicId",
                component: TopicDetail,
                routes: fetchXYZApiRoutes,
            },
        ]
    },
    {
        path: "/:Invalidroutes",
        component: NoMatch,
    }
];

export const Routes = (props) => {
    return (
        <div>
            <NavBar />
            <Switch>
                {
                    routes.map(
                        (route, index) => <MakeRouteWithSubRoutes key={index} {...route} />
                    )
                }
            </Switch>
        </div>
    );
};