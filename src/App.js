import './App.css';
import Form from './Form';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Form/>
      <div className="content">
      <Switch>
      <Route exact path="/Form">
        <Form/>
      </Route>
      </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
