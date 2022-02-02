import MainLobby from "./components/lobby/MainLobby";
import Button from "./Button";
import Video from "./Video";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/user/Login";
import AppBar from "./components/layout/Navbar";
import Home from "./components/layout/Home";

function App() {
  return (
    <div>
      <AppBar />
      <Login />
      <Home />
      {/* <h1> WEBRCT TEST PAGE </h1>
      <Video />
      <div>
        <Button text={"Cam"} />
      </div>
      <Video />
      <div>
        <Button text={"Cam"} />
      </div>
      <Video />
      <div>
        <Button text={"Cam"} />
      </div>
      <Video />
      <div>
        <Button text={"Cam"} />
      </div>

      <MainLobby /> */}

      {/* <Router>
          <Switch>
            <Route path="/lobby">
              <MainLobby />
            </Route>
            {/* <Route path="/">
            </Route> */}

      {/* </Switch>
      </Router> */}
    </div>
  );
}

export default App;
