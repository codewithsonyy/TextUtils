import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
//import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const handleAlert = () => {
    showAlert("Alert mode is on!", "success");
    document.title = "TextUtils-AlertMode";
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Navbar />
      <Alert alert={alert} />
      <div className="">
        <TextForm heading="Enter the text below to analyze" />
        {/* <Routes>
            <Route path="/about" element={<About />} />

            <Route
              path="/"
              element={<TextForm heading="Enter the text below to analyze" />}
            />
          </Routes> */}
      </div>
      <button
        onClick={handleAlert}
        className="mr-3  inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-pink-600 rounded-lg focus:ring-4 focus:ring-pink-200 hover:bg-pink-700"
      >
        Alert!
      </button>
    </>
  );
}

export default App;
