import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthRoute from "./components/auth/AuthRoute";

const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Login = lazy(() => import("./components/auth/Login"));
const Register = lazy(() => import("./components/auth/Register"));

function App() {
  return (
    <div className="container">
      <header className="App-header">App HEADER</header>

      <div className="row pt-5">
        <BrowserRouter>
          <Route exact path="/">
            <Suspense fallback={<div>Loading App</div>}>
              <Login />
            </Suspense>
          </Route>

          <Route path="/register">
            <Suspense fallback={<div>Loading Registration</div>}>
              <Register />
            </Suspense>
          </Route>

          <Route path="/dashboard">
            <AuthRoute>
              <Suspense fallback={<div>Loading Dashboard</div>}>
                <Dashboard />
              </Suspense>
            </AuthRoute>
          </Route>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
