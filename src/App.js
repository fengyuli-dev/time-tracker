import './App.css';
import SimpleBottomNavigation from './components/navigationBar';
import Timer from './components/timer';
import Clock from './components/clock';
import { Switch, Route } from "react-router-dom";
import InteractiveList from './components/activityList.js';
import Report from './components/report';

function App() {
  return (
    <div>
      <div class='heading'>
        <h1>InitialView Task Tracker</h1>
      </div>
      <Switch>
        <Route exact path="/">
          <Timer />
          <Clock />
        </Route>

        <Route path="/activities">
          <InteractiveList />
        </Route>

        <Route path="/report">
          <Report />
        </Route>
      </Switch>
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
