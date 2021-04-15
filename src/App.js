import React from "react";
import { BrowserRouter, Switch, Route, Link; } from "react-router-dom";
import Room from "./Room";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">p</Link>
        <br />
        <Link to="/rooms">rr</Link>
        <br />
        <Switch>
          <Route path="/photo" component={Photo} />
          <Route path="/rooms" component={Room} />
          <Route exact path="/" component={Home} />
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function Home({ match }) {
  return (
    <div>
      <h2>여기는 홈페이지 입니다</h2>
    </div>
  );
}

function Photo({ match }) {
  return (
    <div>
      <h2>여기는 사진 입니다</h2>
    </div>
  );
}
export default App;
