import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Homepage from './screens/Homepage/Homepage';

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Homepage />
      </Route>
    </Router>
  );
}

export default App;
