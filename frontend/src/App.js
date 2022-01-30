import MainLobby from './components/lobby/MainLobby';
import Video from "./Video";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div>
      <h1> WEBRCT TEST PAGE </h1>

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
