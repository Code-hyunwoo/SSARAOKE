import logo from './logo.svg';
import './App.css';
import MainLobby from './components/lobby/MainLobby';
import Button from "./Button"
import Video from "./Video";

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
    </div>
  );
}

export default App;
