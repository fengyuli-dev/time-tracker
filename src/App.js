import './App.css';
import SimpleBottomNavigation from './components/navigationBar';
import ActivitySelector from './components/activitySelector';
import Timer from './components/timer';
import Clock from './components/clock';

function App() {
  return (
    <div>
      <ActivitySelector />
      <Timer />
      <Clock />
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
