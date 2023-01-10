import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [color, setColor] = useState("#fff");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    document.title = color;
  }, [color]);

  const generateColor = () => {
    const color = ((Math.random() * 0xffffff) << 0).toString(16);
    document.body.style.backgroundColor = "#" + color;
    setColor("#" + color);
    setMsg(`Generated color: ${color}`);
  };

  const copyColor = async () => {
    try {
      await navigator.clipboard.writeText(color);
      setMsg(`${color} copied to clipboard!`);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const clearTimeoutIdRef = useRef(null);

  useEffect(() => {
      clearTimeoutIdRef.current = setTimeout(() => {
          setMsg("");
      }, 3000);

      return () => clearTimeout(clearTimeoutIdRef.current);
  }, []);

  return (
    <div className="container">
      <button onClick={generateColor}>
        <strong>Generate Color</strong>
      </button>
      <button onClick={copyColor}>
        Copy <strong>{color}</strong> to clipboard
      </button>
      <p className="msg">{msg}</p>
    </div>
  );
};

export default App;
