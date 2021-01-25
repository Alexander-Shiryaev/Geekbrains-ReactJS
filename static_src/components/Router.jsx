import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Layout from './Layout/Layout';


export default class Router extends React.Component {
   render() {
       return (
           <Switch>
               <Route exact path='/' component={ Layout } />
               <Route
                   exact
                   path='/chat/:chatId/'
                   render={ obj => <Layout
                       chatId={ Number(obj.match.params.chatId) }
                   />
                   }
               />
               <Route
                   exact
                   path='/profile/:profileId/'
                   render={ obj => <Layout
                       profileId={ Number(obj.match.params.profileId) }
                   />
                   }
               />
           </Switch>
       )
   }
}
