import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'
import Homepage from './screens/Homepage/Homepage';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'

export const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/'>
          <Homepage />
        </Route>
      </Router>
    </Provider>
  );
}

export default App;
