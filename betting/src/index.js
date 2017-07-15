import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter , Route, Link } from 'react-router-dom'
import Routes from './routes';

import TablePage from './components/TablePage/TablePage'
import BetPage from './components/BetPage/BetPage'
import Toolbar from './components/Toolbar'


ReactDOM.render((
     <BrowserRouter>
       <div style={{ height: '100vh', width: 'calc(100% - 200px)' }}>
           <div className="App" style={{ height: '100vh', width: '100%' }}>
             <Toolbar />
               <Route exact path="/" component={BetPage}/>
               <Route path="/table" component={TablePage}/>
           </div>
           <div className="background"></div>
       </div>
     </BrowserRouter>
     ),
     document.getElementById('root')
);
registerServiceWorker();
