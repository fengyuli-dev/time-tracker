import './App.css';
import SimpleBottomNavigation from './components/navigationBar';
import ActivitySelector from './components/activitySelector';
import Clock from './components/clock';

function App() {
  return (
    <div>
      <ActivitySelector />
      <Clock />
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
