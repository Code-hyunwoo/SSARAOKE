import NavbarLobby from "../components/layout/NavbarLobby";
import LobbyBackGround from "../components/lobby/background/LobbyBackGround";
import Desk from "../components/lobby/Desk";
import DoorList from "../components/lobby/DoorList";

function MainLobbyGrid() {
  return (
    <div>
      <NavbarLobby />
      <LobbyBackGround />
      <DoorList />
    </div>
  );
}

export default MainLobbyGrid;
