import MainLobby from './components/lobby/MainLobby';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Basic from './routes/Basic';
import Free from './routes/Free';
import Solo from './routes/Solo';
import Duet from './routes/Duet';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/basic" element={<Basic/>}></Route>
        <Route path="/free" element={<Free/>}></Route>
        <Route path="/solo" element={<Solo/>}></Route>
        <Route path="/duet" element={<Duet/>}></Route>
      </Routes>
    
    </BrowserRouter>


  );
}

export default App;
