//set reactstate
// ให้ Greeting Message เปลี่ยนได้
// โดยเปลี่ยนเป็น input message
// เอา input มาใช้แบบในคลิป
// ให้อัพเดทเมื่อคลิ้ก
import "./App.css";
import { useState } from "react";
function App() {
  const [greetingInputText, setgreetingInputText] = useState("");
  const [greetingText, setgreetingText] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setgreetingInputText(event.target.value);
          }}
          value={greetingInputText}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setgreetingText(greetingInputText);
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
