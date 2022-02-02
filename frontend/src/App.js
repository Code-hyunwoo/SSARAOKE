import MainLobby from './components/lobby/MainLobby';
import Button from "./Button"
import Video from "./Video";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";

import MyVideo from './components/user/MyVideo';
import Bookmark from './components/user/Bookmark';
import ChangeMode from './components/roomin/ChangeMode';
import Controller from './components/remote/Controller';
import MusicSearchbar from './components/remote/MusicSearchbar';
import ChangeMode_modal from './components/roomin/ChangeMode_modal';
import MainLobby2 from './routes/MainLobby2';
import MypageMain from './routes/MyPage_Main';

function App() {
  return (
    <div>

{/* 라우터 시도 */}
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLobby2/>}></Route>
            <Route path="/Mypage" element={<MypageMain/>}></Route>
          </Routes>
      </BrowserRouter>

{/* 테스트 */}
      {/* <MainLobby /> */}
      {/* <MainLobby2 /> */}
      {/* <Mypage_Main /> */}
      {/* <Bookmark /> */}
      {/* <MyVideo /> */}
      {/* <ChangeMode_modal /> */}
      {/* <Controller /> */}
    </div>


  );
}

export default App;
