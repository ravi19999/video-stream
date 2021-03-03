import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">pageOne</Link>
    </div>
  );
};
const PageTwo = () => {
  return (
    <div>
      PageTwo <button>Click Me!</button>
      <Link to="/">Pageone</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne}></Route>
          <Route path="/pagetwo" exact component={PageTwo}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
