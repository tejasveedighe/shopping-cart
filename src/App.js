import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState();

  function handleChange(event) {
    event.preventDefault();
    setInput(event.currentTarget.value)
  }
  
    return(<div className="App">
      <form>
      <input type="number" value={input} placeholder='Enter Cart Items' onChange={handleChange}/>
      <button >Checkout</button>
      </form>
    </div>
  );
}

export default App;