import './App.css';
import SimpleBottomNavigation from './components/navigationBar';
import Timer from './components/timer';
import Clock from './components/clock';
import { Switch, Route } from "react-router-dom";
import InteractiveList from './components/ActivityList';

function App() {
  return (
    <div>
      <div class='heading'>
        <h1>InitialView Task Tracker</h1>
      </div>
      <SimpleBottomNavigation />
      <Switch>
        <Route exact path="/">
          <Timer />
          <Clock />
        </Route>

        <Route path="/activities">
          <InteractiveList />
        </Route>

        <Route path="/report">
          <p>3</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
