import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
// basically this function call all other components
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const light = {
    backgroundColor: "white",
    color: "black",
  };
  const dark = {
    backgroundColor: "black",
    color: "white",
  };
  
  const [alrt, setalrt] = useState(null);
  const [Style, setStyle] = useState(light);
  const [md, setmd] = useState("light");
  const togglemode = () => {
    if (md == "dark") {
      setmd("light");
      document.body.style.backgroundColor = "white";
      setStyle(light)
      setalrt({
        verdict:"success",
        msg:"light mode enabled"
      });
      setTimeout(() => {
        setalrt(null)
      }, 1500);
    } else {
      setmd("dark");
      document.body.style.backgroundColor = "black";  
      setStyle(dark)
      setalrt({
        verdict:"success",
        msg:"dark mode enabled"
      });
      setTimeout(() => {
        setalrt(null)
      }, 2000);
    }
  };
  return (
    <>
    <Router>
      <Navbar title="Text Customiser" mode={md} tgmd={togglemode} />
      <Alert Message={alrt}/>
      <Switch>
          <Route path="/">
            <Textform textboxname="Enter the text here" st={Style} />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
       </Switch>
    </Router>
    </>
  );
}

export default App;
