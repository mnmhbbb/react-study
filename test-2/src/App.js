import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateDay from "./components/CreateDay";
import CreateWord from "./components/CreateWord";
import Day from "./components/Day";
import DayList from "./components/DayList";
import Header from "./components/Header";

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
