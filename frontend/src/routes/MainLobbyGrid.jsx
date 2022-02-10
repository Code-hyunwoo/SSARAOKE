import NavbarLobby from "../components/layout/NavbarLobby";
import LobbyBackGround from "../components/lobby/background/LobbyBackGround";
import DoorList from "../components/lobby/DoorList";
import axios from "axios";

function MainLobbyGrid() {
  const start = () => {
    axios
      .get(
        "https://i6a306.p.ssafy.io:8080/api/v1/lobby",
        {
          // post로 보낼 데이터
          // title: roomTitle,
          // tags: checkedTags,
          // tags: arrcheckedTags,
          // mode: selected,
          // is_private: opened,
          // password : roompw
        },
        {
          headers: {
            // "Content-Type": 'application/json',
            // "Authorization" : token,  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
            // "Authorization" : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaXNzIjoic3NhcmFva2UiLCJleHAiOjE2NDU0NTEwODEsImlhdCI6MTY0NDE1NTA4MX0.N9j_0TcCsgKetRCh26r-p93hajHoSPV7OLk6jsXswNKgAMSGbI-kl3Vh9YRtKoq14CnEN20pFVaC99HbAzQFDw',  // -> 승인. 토큰을 넣어 보내야, 백에서 승인해서 보내줌.
          },
        }
      )
      .then((res) => {
        console.log(res);
        // navigate(`/${selected}`);
      });
  };

  return (
    <div>
      {/* <button onClick={start}>test</button> */}
      <NavbarLobby />
      <LobbyBackGround />
      <DoorList />
    </div>
  );
}

export default MainLobbyGrid;
