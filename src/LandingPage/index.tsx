import React from "react";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";

/** Components */
import UsersList from "../UsersList";

const Home = () => {
  return <div>Home Page</div>;
};

const LandingPage = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="main-container">
          <h1 style={{ color: "lightblue", textAlign: "center", margin: 40 }}>
            Welcome!
          </h1>
          <Route exact path="/" component={Home} />
          <Route path="/users/" component={UsersList} />
          <Link to="/users/">Go to the users view</Link>
        </div>
      </Switch>
    </BrowserRouter>
  );
};

export default LandingPage;
