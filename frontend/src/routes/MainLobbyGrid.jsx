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
        },
        {
          headers: {},
        }
      )
      .then((res) => {
      });
  };

  return (
    <div>
      <NavbarLobby />
      <LobbyBackGround />
      <DoorList />
    </div>
  );
}

export default MainLobbyGrid;
