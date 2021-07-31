import './App.css';
import SimpleBottomNavigation from './components/navigationBar';
import Timer from './components/timer';
import Clock from './components/clock';
import { Switch, Route } from "react-router-dom";
import InteractiveList from './components/activityList';
import Report from './components/report';

const db = openDatabase('TimeTracker', '1.0', 'main database', 1024 * 1024 * 1024);

db.transaction(function (tx) {
  tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (description, tag, date, startTime, endTime, duration)', []);
  tx.executeSql('CREATE TABLE IF NOT EXISTS ACTIVITIES (name)', []);
});

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
