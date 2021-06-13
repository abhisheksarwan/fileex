import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Switch } from "react-router-dom";
import FileManager from './components/FileManager/FileManager';
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
        <Route exact path="/" render={() => <h1>Hey</h1>} />
        <Route exact path="/:rootId/:id" render={(routeProps) => <FileManager folder={findFolder(routeProps.match.params.rootId,routeProps.match.params.id)} /> }/>
      </Switch>
    </div>
  )
}

export default App;
