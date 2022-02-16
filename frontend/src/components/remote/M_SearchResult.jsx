import { Table } from "react-bootstrap";
import Styles from "./remote.module.css";
import axios from "axios";
import Swal from "sweetalert2";

function MSearchResult({ items, roomseq }) {
  // console.log(roomseq);
  const failed = () => {
    Swal.fire({
      icon: "error",
      title: "요청 실패",
      text: "에러가 발생했습니다.",
    });
  };
  const addToBooklist = (videotitle, videoId) => {
    axios
      .post("https://i6a306.p.ssafy.io:8080/api/v1/reservation/add", {
        room_seq: roomseq,
        song_no: videoId,
        title: videotitle,
      })
      .then((res) => {
        console.log(res);
        Swal.fire("예약리스트에 추가되었습니다!");
      })
      .catch(() => {
        failed();
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
                {item.snippet.title.startsWith("[TJ노래방") ||
                item.snippet.title.endsWith(" / TJ Karaoke")
                  ? item.snippet.title.slice(8, -13)
                  : item.snippet.title}
              </td>
              {/* <td>{`https://www.youtube.com/watch?v=${item.id.videoId}`}</td> */}
              <td>
                <button
                  // key={index}
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
