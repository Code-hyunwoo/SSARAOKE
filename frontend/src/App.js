import MainLobby from "./components/lobby/MainLobby";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/user/Login";
import AppBar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import MyVideo from './components/user/MyVideo';
import Bookmark from './components/user/Bookmark';
import ChangeMode from './components/roomin/ChangeMode';
import Controller from './components/remote/Controller';
import MusicSearchbar from './components/remote/MusicSearchbar';
import MainLobby2 from './routes/MainLobby2';
import MypageMain from './routes/MyPage_Main';
import Basic from './routes/Basic';
import Free from './routes/Free';
import Solo from './routes/Solo';
import Duet from './routes/Duet';


function App() {
  return (
    <div>

      <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<MainLobby2/>}></Route> */}
            <Route path="/" element={<MainLobby2/>}></Route>
            <Route path="/Mypage" element={<MypageMain/>}></Route>
            <Route path="/basic" element={<Basic/>}></Route>
            <Route path="/free" element={<Free/>}></Route>
            <Route path="/solo" element={<Solo/>}></Route>
            <Route path="/duet" element={<Duet/>}></Route>
          </Routes>
      </BrowserRouter>

      {/* <AppBar />
      <Login />
      <Home /> */}

    </div>
  );
}

export default App;
