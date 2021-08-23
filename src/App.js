import { useState } from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  const [mode, setMode] = useState("light");

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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#091b49";
      showAlert("DarkMode has been enable", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been enable", "success");
    }
  };

  return (
    <>
    {/* <Router> */}

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
            <TextForm
              showAlert={showAlert}
              heading="Enter text to analyse: "
              mode={mode}
              />
          {/* </Route>
        </Switch> */}

        {/* <About /> */}
      </div>
              {/* </Router> */}
    </>
  );
}

export default App;
