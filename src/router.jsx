import React, { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Switch,  Route,  Link,   Redirect, useHistory, useLocation } from "react-router-dom";
import App from "./App";

export default function AppRoute() {
    return (
      <ProvideAuth>
        <Router>
          <Switch>
              <App/>
              <PrivateRoute path="/auth">
                  <div>
                      Đã auth rồi.
                  </div>
              </PrivateRoute>
            </Switch>
        </Router>
      </ProvideAuth>
    );
  }

const authContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function PrivateRoute({ children, ...rest }) {
    let auth = useAuth();
    return <Route {...rest} render={({ location }) => auth.user ? (children) : (<Redirect to={{ pathname: "/login", state: { from: location } }} />) } />;
}

function useAuth() {
  return useContext(authContext);
}