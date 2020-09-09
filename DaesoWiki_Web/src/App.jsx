import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import StartPage from './pages/StartPage/StartPage';
import MainPage from './pages/MainPage/MainPage';

import './common.scss';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/main" component={MainPage} />
      <Route path="/" component={StartPage} />
      {/* <Redirect path="*" to="/" /> */}
    </Switch>
  </BrowserRouter>
)

export default App;