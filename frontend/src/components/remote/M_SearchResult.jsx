import { Table } from "react-bootstrap";
import Styles from "./remote.module.css";
import axios from "axios";

function MSearchResult({ items, roomseq }) {
  // console.log(roomseq);
  const addToBooklist = (videotitle, videoId) => {
    axios
      .post("https://i6a306.p.ssafy.io:8080/api/v1/reservation/add", {
        room_seq: roomseq,
        song_no: videoId,
        title: videotitle,
      })
      .then((res) => {
        console.log(res);
      })
      .catch(() => {
        alert("Error가 발생했습니다.");
      });
  };

  return (
    <div className={Styles.searchcontent}>
      <Table>
        {items.length !== 0 ? (
          <thead style={{ fontSize: "17px" }}>
            <tr>
              <th>#</th>
              <th>노래 제목</th>
              {/* <th>노래 영상 링크</th> */}
              <th>예약</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
        ) : null}
        {items.map((item, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td style={{ fontSize: "17px" }}>
                {item.snippet.title.endsWith(" / TJ Karaoke")
                  ? item.snippet.title.slice(0, -13)
                  : item.snippet.title}
              </td>
              {/* <td>{`https://www.youtube.com/watch?v=${item.id.videoId}`}</td> */}
              <td>
                <button
                  className="songbook"
                  type="radio"
                  value={item.snippet.title}
                  style={{ whiteSpace: "nowrap" }}
                  onClick={() => {
                    addToBooklist(item.snippet.title, item.id.videoId);
                  }}
                >
                  추가
                </button>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
export default MSearchResult;
