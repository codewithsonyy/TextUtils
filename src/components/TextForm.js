import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function TextForm(props) {
  const [btntext, setBtnText] = useState("Black Theme");
  const [myStyle, setMyStyle] = useState({
    color: "white",
    backgroundColor: "#d97706",
  });
  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "amber",
        backgroundColor: "black",
      });
      setBtnText("Blue btns");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#d97706",
      });
      setBtnText("Black btns ");
    }
  };
  //let numberofwords = 0;
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handlePdfClick = () => {
    const input = document.querySelector("#myBox");
    html2canvas(input, { scale: 2, quality: 4 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
      });
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("download.pdf");
    });
  };

  const handleCopyClick = () => {
    props.showAlert("Your text is copied!", "success");

    const text = document.getElementById("myBox");

    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <div className="w-3/4 md:w-2/3 mx-auto ">
      <div className=" mb-4 ">
        <h1 className="text-xl md:text-3xl font-bold text-center md:text-start">
          {props.heading}{" "}
          <span className="hidden sm:inline">, save as pdf, case change</span>
        </h1>

        <textarea
          id="myBox"
          rows="8"
          className="  block my-4  p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-2  focus:outline-none  focus:border-amber-500  dark:bg-black dark:text-white dark:focus:border-amber-500 dark:border-gray-400 "
          placeholder="Your text..."
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className=" grid grid-cols-2 grid-rows-4 gap-3 md:gap-4 md:inline-flex  md:h-min ">
        <button
          style={myStyle}
          onClick={handleUpClick}
          className="justify-center sm:mr-4 md:mr-0 items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-amber-700 rounded-lg focus:ring-2 focus:ring-amber-200 hover:bg-amber-800"
        >
          To Uppercase
        </button>
        <button
          style={myStyle}
          onClick={handleLoClick}
          className=" justify-center sm:mr-4 md:mr-0  items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-amber-700 rounded-lg focus:ring-2 focus:ring-amber-200 hover:bg-amber-800"
        >
          To Lowercase
        </button>
        <button
          style={myStyle}
          onClick={handleClearClick}
          className="justify-center sm:mr-4 md:mr-0  items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-amber-700 rounded-lg focus:ring-2 focus:ring-amber-200 hover:bg-amber-800"
        >
          Clear all
        </button>
        <button
          style={myStyle}
          onClick={handlePdfClick}
          className=" justify-center  sm:mr-4 md:mr-0  items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-200 hover:bg-blue-800"
        >
          Save as PDF
        </button>
        <button
          style={myStyle}
          onClick={handleCopyClick}
          className=" justify-center  sm:mr-4 md:mr-0  items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-200 hover:bg-blue-800"
        >
          Copy Text
        </button>
        <button
          style={myStyle}
          onClick={toggleStyle}
          className="justify-center sm:mr-4 md:mr-0  md:mt-0 items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-200 hover:bg-blue-800"
        >
          {btntext}
        </button>
        <button
          style={myStyle}
          onClick={handleExtraSpaceClick}
          className="sm:col-start-1 sm:col-end-2 sm:mr-4 col-span-2 md:mr-0  md:mt-0 justify-center  items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-2 focus:ring-blue-200 hover:bg-blue-800"
        >
          Clear Extra Space
        </button>
      </div>
      <div className="my-3 mx-2 text-center md:text-start">
        <h2 className="text-xl font-bold md:text-2xl">your text summary</h2>
        <p className="md:mt-1.5 dark:text-gray-400">
          {
            text.split(/\s+/).filter((word) => {
              return word.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p className="dark:text-gray-400">
          {Math.trunc(0.24 * text.split(" ").length)} secs read
        </p>
      </div>
    </div>
  );
}
