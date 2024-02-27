import '../style/App.css';
import'../style/Style.css'
import SearchBar from './App Components/Searchbar';
import Sunbox from './App Components/sundata';
import Today from './App Components/Today';
import Bottom from './App Components/Bottom';
function App() {
  return (
    <div className="App">
      <p>Weather App let's go</p>
      <div className='Top-bar'>
        <div className='TBL'>
          <SearchBar/>
        </div>
        <div className='TBR'>
          <Sunbox/>
        </div>
      </div>
      <div className='Mid'>
      <div>
        <Today/>
      </div>
      </div>
      <div className='Bottom'>
        <Bottom />
      </div>
    </div>
  );
}

export default App;
