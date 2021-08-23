import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");

  };
  const handleLowClick = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");

  };
  const handleClear = () => {

    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared","success");

  };
  const handleOnChange = (event) => {

    setText(event.target.value);
    // props.showAlert("Text is cleared","success")

  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    
    
    props.showAlert("Copied to Clipboard","success");

  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#091b49" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#091b49" }}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text{" "}
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#091b49" }}>
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes reads</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter some to preview it"}</p>
      </div>
    </>
  );
}
