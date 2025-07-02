import "./App.css";
import Home from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/XBanker" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
