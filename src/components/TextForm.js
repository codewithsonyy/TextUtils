import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function TextForm(props) {
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
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboardText(text.value);
  };
  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <div className="w-2/3 mx-auto">
      <div className=" my-6 ">
        <h1 className="text-3xl font-bold  ">{props.heading}</h1>

        <textarea
          id="myBox"
          rows="8"
          className="  my-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border-2  focus:outline-none  focus:border-blue-500 focus:border-2"
          placeholder="Your text..."
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button
        onClick={handleUpClick}
        className="mr-3 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
      >
        Convert to Uppercase
      </button>
      <button
        onClick={handleLoClick}
        className=" mr-3 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
      >
        Convert to Lowercase
      </button>
      <button
        onClick={handleClearClick}
        className="mr-3 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
      >
        Clear all
      </button>
      <button
        onClick={handlePdfClick}
        className="  mr-3 inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
      >
        Save as PDF
      </button>
      <button
        onClick={handleCopyClick}
        className="mr-3  inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
      >
        Copy Text
      </button>
      <button
        onClick={handleExtraSpaceClick}
        className=" inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
      >
        clear Extra Space
      </button>
      <div className="my-3 mx-2">
        <h2 className="text-2xl font-bold">your text summary</h2>
        <p className="mt-1.5">
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{Math.trunc(0.24 * text.split(" ").length)} secs read</p>
      </div>
    </div>
  );
}
