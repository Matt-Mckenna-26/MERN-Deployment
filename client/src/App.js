import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {Router} from '@reach/router'
import AddPirate from './views/AddPirate';
import AllPirates from './views/AllPirates';
import ViewPirate from './views/ViewPirate';

function App() {
  return (
    <div className="App">
      <Router>
        <AllPirates path='/'/>
        <AddPirate  path='/pirate/new'/>
        <ViewPirate path='/pirate/:id' />
      </Router>
    </div>
  );
}

export default App;
