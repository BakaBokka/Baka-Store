import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// import './index.scss';
import App from "./components/App/App";
import BookstoreService from "./services/book-service";
import store from "./store";
import ErrorBoundry from "./components/ErrorBoundry";
import { BookstoreServiceProvider } from "./components/BookstoreServiceContext";

const bookstoreservice = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreservice}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
