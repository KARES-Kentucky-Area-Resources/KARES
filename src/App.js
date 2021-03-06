import './App.css';
import { Router, Route, Switch } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import thunk from 'redux-thunk'
import rootReducer from './redux/rootReducer'

import Homepage from './screens/Homepage/Homepage';
import CountyResources from './screens/CountyResources/CountyResources';
import ErrorPage from './screens/ErrorPage/Error';
import Admin from './screens/Admin/Admin';


const history = createBrowserHistory()

const middleware = routerMiddleware(history)

export const store = createStore(rootReducer, applyMiddleware(thunk, middleware))

function App() {
  return (
    <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route 
                exact
                path='/resources/:county?'
                component={(props) => <CountyResources county={props} key={props.match.params.county} />} />
            <Route 
                exact 
                path='/admin/:page?' 
                component={(props) => <Admin page={props} key={props.match.params.page}/>}/>
            <Route path='*' component={ErrorPage} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
