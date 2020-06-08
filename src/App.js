import React, { useState } from "react";
// import logo from './logo.svg';
import { ChromePicker } from "react-color";
import "./App.css";

function App() {
	const [color, setColor] = useState("FFFFFF");
	const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

	return (
		<div className="App">
			<button onClick={() => setIsColorPickerVisible(!isColorPickerVisible)}>
				{isColorPickerVisible ? "Close color picker" : "Pick a color"}
			</button>
      <p>You picked {color}</p>
			{isColorPickerVisible && (
        <ChromePicker
					color={color}
					onChange={(updatedColor) => setColor(updatedColor.hex)}
				></ChromePicker>
			)}
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		</div>
	);
}

export default App;
