import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router'
import { HashRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
   <HashRouter>
       <MuiThemeProvider>
           <Router />
       </MuiThemeProvider>
   </HashRouter>,
   document.getElementById('root'),
);