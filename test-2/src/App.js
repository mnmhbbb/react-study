import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateFolder from "./components/CreateFolder";
import CreateWord from "./components/CreateWord";
import Folder from "./components/Folder";
import FolderList from "./components/FolderList";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <FolderList />
          </Route>
          <Route path="/folder/:folder">
            <Folder />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_folder">
            <CreateFolder />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
