import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import FileManager from './components/FileManager/FileManager';
import seedFolders from './seedFolders';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <FileManager {...seedFolders[0].structure[0]} />
    </div>
  )
}

export default App;
