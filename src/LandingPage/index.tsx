import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

/** Components */
import UsersList from '../UsersList';

const Home = () => {
  return (
    <div>Home Page</div>
  );
}

const LandingPage = () => {
  return (
    <div className='main-container'>
      <h1 style={{ color: 'lightblue' }}>Welcome to the Code Test</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users/" component={UsersList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default LandingPage;
