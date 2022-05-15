import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import App from "./App";

 const AppRouter = (props) => {
  return (
    <Router>
      <Routes>
        <Route  path="/"  element={<App/>} />
      </Routes>
    </Router>
  );
}
export default AppRouter