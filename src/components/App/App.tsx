import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import { HomePage, CartPage } from "../Pages/index";

import "./App.scss";

const App = () => {
  return (
    <main className="container">
      <Header numItems={5} total={210}/>
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
    </main>
  );
};

export default App;
