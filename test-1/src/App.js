import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
