import './App.css';
import'../style/Style.css'
import '../components/mainWidget/MainWidget'
import MainWidget from '../components/mainWidget/MainWidget';
import Sun from '../components/Sunset-Sunrise/Sun';
function App() {
  return (
    <div className="App">
      <Sun />
      <MainWidget />
    </div>
  );
}

export default App;
