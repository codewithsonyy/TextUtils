import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import useTheme from "./hooks/useTheme";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [nextTheme, setTheme] = useTheme();
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
      <Router>
        <div className="bg-white dark:bg-amber-900  pb-20">
          <Navbar theme={() => setTheme(nextTheme)} />

          <Alert alert={alert} />
        
          <div>
            <Routes>
              <Route path="/about" element={<About />} />

               <Route
                path="/"
                element={
                  <TextForm
                    heading="Try TextUtils- word counter"
                    showAlert={showAlert}
                  />
                }
              /> 
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
