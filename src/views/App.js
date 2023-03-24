import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import Parent from './Example/parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello word
        </p>
        {/* <MyComponent> </MyComponent> */}
        <Parent></Parent>
      </header>
    </div>
  );
}

export default App;
