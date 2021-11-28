import "isomorphic-fetch";
import "babel-polyfill";
import React from "react";
import { hot } from "react-hot-loader";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import styles from "./App.module.css";

const App = ({ Router, location, context, store }) => {
  console.log(store);
  return (
  <Provider store={store}>
  <Router location={location} context={context}>
    <div className={styles.app}>
      <Switch>
        <Route path="/search" component = {Header} />
        <Redirect from = '/' to ='search'></Redirect>
      </Switch>
      <Main />
      <Footer />
    </div>
  </Router>
  </Provider>

)};

export default hot(module)(App);
