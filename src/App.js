import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Draw from "./components/Draw";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/draw">
            <Draw />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
