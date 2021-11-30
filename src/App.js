import './App.css';
import {useEffect} from 'react';

function App() {

useEffect(() => {
  document.title = 'Hello React!';
});


  return (
    <div className="App">
      <h1>
        Hello React!
      </h1>      
    </div>  
  );
}

export default App;
