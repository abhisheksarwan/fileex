import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Switch, Redirect } from "react-router-dom";
import FileManager from './components/FileManager/FileManager';
import NotFound from './components/NotFound/NotFound';
import seedFolders from './seedFolders';

function App() {

  function findFolder(rootId,id) {
   return seedFolders[rootId].structure.find(function(folder) {
      return folder.id === id;
    });
  }

  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route exact path="/"> <Redirect to="/0/user"/> </Route>
        <Route exact path="/:rootId/:id" render={(routeProps) => <FileManager folder={findFolder(routeProps.match.params.rootId,routeProps.match.params.id)} /> }/>
        <Route path='*' exact render={() => <NotFound/>} />
      </Switch>
    </div>
  )
}

export default App;
