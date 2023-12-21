import "./App.css";
import { useState } from "react";

function App() {
  const [greetinginput, setGreetinginput] = useState("");
  const [greetingMessage, setclick] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={greetinginput}
          onChange={(event) => setGreetinginput(event.target.value)}
          required
        />
      </div>

      <div className="buttons">
        <button onClick={() => setclick(greetinginput)}>Update text</button>
      </div>
    </div>
  );
}

export default App;
