import './App.css';
import SimpleBottomNavigation from './components/navigationBar';
import ActivitySelector from './components/activitySelector';
import Timer from './components/timer';
import Clock from './components/clock';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <SimpleBottomNavigation />
      <Switch>
        <Route exact path="/">
          <ActivitySelector />
          <Timer />
          <Clock />
        </Route>

        <Route path="/activities">
          <p>2</p>
        </Route>

        <Route path="/report">
          <p>3</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
