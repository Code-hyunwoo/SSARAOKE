
// import './App.css';
import MainLobby from './components/lobby/MainLobby';
import Button from "./Button"
import Video from "./Video";
// import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1> WEBRCT TEST PAGE </h1>
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

      <MainLobby />

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
