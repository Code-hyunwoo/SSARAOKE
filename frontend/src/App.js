import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import MainLobbyGrid from "./routes/MainLobbyGrid";
import MypageMain from "./routes/MyPage_Main";
import Basic from "./routes/Basic";
import Free from "./routes/Free";
import Solo from "./routes/Solo";
import Duet from "./routes/Duet";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lobby" element={<MainLobbyGrid />}></Route>
          <Route path="/mypage" element={<MypageMain />}></Route>
          <Route path="/basic" element={<Basic />}></Route>
          <Route path="/free" element={<Free />}></Route>
          <Route path="/solo" element={<Solo />}></Route>
          <Route path="/duet" element={<Duet />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
