import './App.css';
import Visitcard from './components/Visitcard/Visitcard';
import Scrolling from './components/Scrolling/Scrolling';

function App() {
  return (
    <div className="App">
      <div className="relative">
        <div className="relative lg:fixed w-full lg:w-4/12 min-h-screen">
          <Visitcard/>
        </div>
        <div className="w-full lg:w-8/12 ml-auto">
          <div className="flex flex-col">
            <Scrolling/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
