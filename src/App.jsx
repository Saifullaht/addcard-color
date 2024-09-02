import { useState } from 'react'
import './App.css'

function App() {
  const [fontColor, setFontColor] = useState("#ffffff");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [inputValue, setInputValue] = useState(null);
  const [cards, setCards] = useState([]);

  const addCard = () => {
    console.log("checked");
    const cardData = {
      inputValue: inputValue,
      textColor: fontColor,
      bgcolor: bgColor,
      createdAt: Date.now()
    }
    setCards([...cards, cardData]);
    setInputValue("");
    setBgColor("#ffffff");
    setFontColor("#ffffff");
    console.log(cards);
  };

  return (
    <>
      <div className="container">
        <h1>Color Picker</h1>
        <label htmlFor="input1">Enter-text</label>
        <div className="form-group">
          <input
            type="text"
            id="input1"
            className='input-text'
            value={inputValue}
             // Corrected style
            onChange={(e) => {
              setInputValue(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input2a">Font-Color</label>
          <input
            type="color"
            id="input2a"
            className='input-color'
            value={fontColor}
            onChange={(e) => {
              setFontColor(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="input2b">Background-Color</label>
          <input
            type="color"
            id="input2b"
            className='input-color'
            value={bgColor}
            onChange={(e) => {
              setBgColor(e.target.value);
              console.log(e.target.value);
            }}
          />
        </div>
        <button className="submit-button" onClick={addCard}>Submit</button>
      </div>


      <div className='cards'>
        {cards.map((data, index) => (
          <div
            key={index}
            className='card'
            style={{
              backgroundColor: data.bgcolor, // Corrected style property name
              color: data.textColor ,// Corrected style property name
              fontWeight: '800', // Add styling for font weight
              padding: '10px', // Add padding
              margin: '5px', // Add margin
              borderRadius: '5px',
              fontSize:  "21px",
              fontFamily:"cursive" // Add border radius
            }}
          >
            {data.inputValue}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
