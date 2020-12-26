import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HashRouter, Switch, Route } from 'react-router-dom';

import Inbox from './Inbox.jsx';
import Notifications from './Notifications.jsx';
import Calendar from './Calendar.jsx';
import Attachments from './Attachments.jsx';
import Favourites from './Favourites.jsx';
import DrawerRouterContainer from './DrawerRouterContainer.jsx';

ReactDOM.render(
    <React.Fragment>
    <HashRouter>
        <DrawerRouterContainer>
            <Switch>
                <Route exact={true} path="/" component={Inbox} />
                <Route exact={true} path="/notifications" component={Notifications} />
                <Route exact={true} path="/calendar" component={Calendar} />
                <Route exact={true} path="/attachments" component={Attachments} />
                <Route exact={true} path="/favourites" component={Favourites} />
            </Switch>
        </DrawerRouterContainer>
    </HashRouter>
    <style>
        {`my-app {
            padding: 0;
        }
        .k-drawer-container {
            position: fixed;
            width: 100%;
            height: 100%;
        }
        .k-drawer-item {
            user-select: none;
        }
        .k-icon {
            font-size: 20px;
        }
        .custom-toolbar {
            width: 100%;
            background-color: #f6f6f6;
            line-height: 10px;
            border-bottom: inset;
            border-bottom-width: 1px;
            padding: 3px 8px;
            color: #656565;
        }
        .mail-box{
            margin-left: 20px;
            font-weight: bold;
            font-size: 17px;
        }
        .page ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        .page li {
            font-size: 1.2em;
            background: 0 0;
            border-radius: 0;
            border-width: 0 0 1px;
            border-color: rgba(33, 37, 41, 0.125);
            border-style: solid;
            line-height: 1.5em;
            padding: 1.09em .84em 1.23em .84em;
        }
        .page li:last-child {
            border: 0;
        }`}
    </style>
    </React.Fragment>,
    document.querySelector('my-app')
);
