import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  useEffect(() => {
    document.title = useColor;
  });

  const [useColor, setColor] = useState("#fff");
  const [useMsg, setMsg] = useState("");

  const generateColor = () => {
    const body = document.querySelector("body");
    let color = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = "#" + color;
    setColor(body.style.backgroundColor.toString());
    setMsg("Generated color: " + body.style.backgroundColor.toString());
  };

  const copyColor = () => {
    navigator.clipboard.writeText(useColor);
    setMsg(useColor + " copied to clipboard!");
  };

  useEffect(() => {
    let eventClearMsg = setTimeout(() => {
      setMsg("");
    }, 3000);
    return () => clearTimeout(eventClearMsg);
  }, [useMsg]);

  return (
    <div className="container">
      <button onClick={generateColor}>
        <strong>Generate Color</strong>
      </button>
      <button onClick={copyColor}>
        Copy <strong>{useColor}</strong> to clipboard
      </button>
      <p className="msg">{useMsg}</p>
    </div>
  );
};

export default App;
