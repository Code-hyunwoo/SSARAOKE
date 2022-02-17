import { Table } from "react-bootstrap";
import Styles from "./remote.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import { connect } from "react-redux";

function MSearchResult({ items, roomseq, state }) {
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
        new Swal({
          title: "예약목록에 추가되었습니다!",
          timer: 700,
          showConfirmButton: false,
        });
      })
      .catch(() => {
        failed();
      });
  };

  //북마크 보내기
  const onCreateBM = (title) => {
    axios
        .post(
          "https://i6a306.p.ssafy.io:8080/api/v1/bookmark/add",
        {
           title: title,
        },
        {
          headers: {
                "Content-Type": "application/json",
                Authorization: state[0].token,
            },
        }
    )
    .then((res) => {
        console.log("res: ",res);
        new Swal({
          title: "북마크에 추가되었습니다!",
          timer: 700,
          showConfirmButton: false,
        });
    });
}

  return (
    <div className={Styles.searchcontent}>
      <Table>
        {items.length !== 0 ? (
          <thead style={{ fontSize: "17px" }}>
            <tr>
              <th>#</th>
              <th>노래 제목</th>
              {/* <th>노래 영상 링크</th> */}
              <th></th>
              <th style={{whiteSpace: "nowrap"}}></th>
              <th></th>
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
              <td>
                <button
                  className="songbook"
                  type="radio"
                  value={item.snippet.title}
                  style={{ whiteSpace: "nowrap", borderRadius: "30vw", backgroundColor:"#94DAFF" }}
                  onClick={() => {
                    addToBooklist(item.snippet.title, item.id.videoId);
                  }}
                >
                  예약
                </button>
              </td>
              <td></td>
              <td>
                <button
                  // key={index}
                  className="Bookmark"
                  type="radio"
                  value={item.snippet.title}
                  style={{ whiteSpace: "nowrap", borderRadius: "30vw", backgroundColor:"#F999B7"  }}
                  onClick={() => {
                    onCreateBM(item.snippet.title);
                  }}
                >
                  북마크
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
function mapStateToProps(state) {
  //state 받아오는 함수 - store에서 직빵으로 값 보내주는 것.
  return { state };
}

export default connect(mapStateToProps, null)(MSearchResult);
