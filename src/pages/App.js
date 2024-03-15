import './App.css';
import'../style/Style.css'
import '../components/mainWidget/MainWidget'
import MainWidget from '../components/mainWidget/MainWidget';
import TopBar from '../components/Topbar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <MainWidget />
    </div>
  );
}

export default App;
