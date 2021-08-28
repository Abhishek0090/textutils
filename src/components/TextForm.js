import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    console.log("UpperCase Was Clicked!" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase!","success")
  };
  const onLowerClick = () => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted To LowerCase!","success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const onClear = () => {
    let textclear = "";
    setText(textclear);
    props.showAlert("Data has been Cleared!","success")
  };

  const onHandleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been Copied","success")

  };

  const onhandleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Spaces has been Removed","success")

  }
  const [text, setText] = useState(""); //hooks
  // setText('I m the best'); -> valid way to change the state
  return (
    <>
      <div className="Container"  style= {{
                color : props.mode==='dark'?'white':'black' //ternary operator
            }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Write Your Thoughts Down</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter Your Text Here"
            style= {{
                backgroundColor : props.mode==='dark'?'#070115':'white',
                color : props.mode==='dark'?'white':'black'
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={onLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={onClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-2" onClick={onHandleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-2" onClick={onhandleExtraSpace}>
          Remove Spaces
        </button>
      </div>
      <div className="container my-2" style= {{
                color : props.mode==='dark'?'white':'black' //ternary operator
       }}>                                                                                                                
        <h1>Your Paragraph summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <b>{0.008 * text.split(" ").length} Minutes taken to read</b>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
