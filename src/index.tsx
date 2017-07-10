import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { Loading } from "./views/Loading";

import { ScrollToTop } from "./components/ScrollToTop";

import "./index.scss";

render(
    (
        <BrowserRouter>
          <div>
            <ScrollToTop />
            <Route exact path="/" component={Home} />
            <Route path="/loading/:id" component={ Loading } />            
          </div>
        </BrowserRouter>
    ),
    document.getElementById("content")
);