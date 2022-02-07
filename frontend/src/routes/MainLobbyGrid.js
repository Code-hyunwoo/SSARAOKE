import NavbarLobby from "../components/layout/NavbarLobby";
import LobbyBackGround from "../components/lobby/background/LobbyBackGround";
import DoorList from "../components/lobby/DoorList";
import Lobbychat from "../components/lobby/Lobbychat";

function MainLobbyGrid() {
  return (
    <div>
      <NavbarLobby />
      <LobbyBackGround />
      <Lobbychat />
      <DoorList />
    </div>
  );
}

export default MainLobbyGrid;
