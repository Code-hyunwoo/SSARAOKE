import { useState } from "react";
import { Modal, ModalBody } from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Book from "./Book";
import Effect from "./Effect";
import MusicSearchbar from "./MusicSearchbar";
import MSearchResult from "./M_SearchResult";
import Record from "./Record";
import Styles from "./remote.module.css";
import styles2 from "../roomin/Room.module.css";
import axios from "axios";

function Controller({ book, sendYTUrl, setOpenFirework, 
  setstartDream, setstartGoodDay}) {
  const [show, setShow] = useState(false);
  const [booklist, setbookList] = useState(book);
  const startbookList = () => {
    // var YTUrl = booklist[0];
    // var message = {
    //      id: 'sendYTUrl',
    //     room: room,
    //      url: YTUrl,
    // }
    // console.log(YTUrl)
    sendYTUrl(booklist);
    // booklist.shift();
    // setbookList(booklist);
    // alert(`새로운 곡 시작!`)
    // console.log(booklist)
    // console.log(`[sendYTUrl]유튜브 요청 보냄, url: ${YTUrl} at room ${room}`);
    // sendMessage(message);
  };

  // 리모콘 끄기
  function hideControl(){
    setShow(false)
  }


  // 노래 검색 기능
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [searchitem, setSearchitem] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  const params = {
    key: apiKey,
    part: "snippet",
    channelId: "UCZUhx8ClCv6paFW7qi3qljg",
    channelType: "any",
    q: searchitem,
    type: "video",
    maxResults: 30,
  };
  const searchMusic = () => {
    console.log("이전검색값", searchresult);
    console.log("이걸로 검색", searchitem);

    axios
      .get("https://www.googleapis.com/youtube/v3/search", { params })
      .then((res) => {
        // console.log(res);
        // console.log(typeof res.data.items);
        setSearchresult(res.data.items);
        // console.log(res.data.items);
        // setSearchresult((searchresult) => searchresult.concat(res.data.items));
        console.log(searchresult);
      });
  };

  const resetSearch = () => {
    setSearchresult([]);
  };

  // const data = {
  //   kind: "youtube#searchListResponse",
  //   etag: "0SZ6QR7l7X3nwKms_f5nqzbR78w",
  //   regionCode: "KR",
  //   pageInfo: {
  //     totalResults: 3,
  //     resultsPerPage: 3,
  //   },
  //   items: [
  //     {
  //       kind: "youtube#searchResult",
  //       etag: "9Fia-QagbGcRE5f8iIYXGyyP8Is",
  //       id: {
  //         kind: "youtube#video",
  //         videoId: "VrJICmHqVVs",
  //       },
  //       snippet: {
  //         publishedAt: "2021-09-16T08:11:50Z",
  //         channelId: "UCZUhx8ClCv6paFW7qi3qljg",
  //         title: "[TJ노래방] 빅뱅 - 붉은노을 / TJ Karaoke",
  //         description:
  //           "별 -- 프로미스나인 TJ 노래방 곡번호.80376 TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 가서 불러보세요! 그리고 ...",
  //         thumbnails: {
  //           default: {
  //             url: "https://i.ytimg.com/vi/VrJICmHqVVs/default.jpg",
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: "https://i.ytimg.com/vi/VrJICmHqVVs/mqdefault.jpg",
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: "https://i.ytimg.com/vi/VrJICmHqVVs/hqdefault.jpg",
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: "TJ KARAOKE TJ 노래방 공식 유튜브채널",
  //         liveBroadcastContent: "none",
  //         publishTime: "2021-09-16T08:11:50Z",
  //       },
  //     },
  //     {
  //       kind: "youtube#searchResult",
  //       etag: "S2LGU3_39laZutsCvjp7vVVvqNw",
  //       id: {
  //         kind: "youtube#video",
  //         videoId: "S-qsDXwweAE",
  //       },
  //       snippet: {
  //         publishedAt: "2021-09-17T01:32:12Z",
  //         channelId: "UCZUhx8ClCv6paFW7qi3qljg",
  //         title: "[TJ노래방] 에스파 - Next Level / TJ Karaoke",
  //         description:
  //           "별 -- 프로미스나인 TJ 노래방 곡번호.80376 남자키 변경 버전입니다. TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 ...",
  //         thumbnails: {
  //           default: {
  //             url: "https://i.ytimg.com/vi/S-qsDXwweAE/default.jpg",
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: "https://i.ytimg.com/vi/S-qsDXwweAE/mqdefault.jpg",
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: "https://i.ytimg.com/vi/S-qsDXwweAE/hqdefault.jpg",
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: "TJ KARAOKE TJ 노래방 공식 유튜브채널",
  //         liveBroadcastContent: "none",
  //         publishTime: "2021-09-17T01:32:12Z",
  //       },
  //     },
  //     {
  //       kind: "youtube#searchResult",
  //       etag: "S2LGU3_39laZutsCvjp7vVVvqNw",
  //       id: {
  //         kind: "youtube#video",
  //         videoId: "S-qsDXwweAE",
  //       },
  //       snippet: {
  //         publishedAt: "2021-09-17T01:32:12Z",
  //         channelId: "UCZUhx8ClCv6paFW7qi3qljg",
  //         title: "[TJ노래방] 아이유 - 꽃갈피 / TJ Karaoke",
  //         description:
  //           "별 -- 프로미스나인 TJ 노래방 곡번호.80376 남자키 변경 버전입니다. TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 ...",
  //         thumbnails: {
  //           default: {
  //             url: "https://i.ytimg.com/vi/S-qsDXwweAE/default.jpg",
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: "https://i.ytimg.com/vi/S-qsDXwweAE/mqdefault.jpg",
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: "https://i.ytimg.com/vi/S-qsDXwweAE/hqdefault.jpg",
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: "TJ KARAOKE TJ 노래방 공식 유튜브채널",
  //         liveBroadcastContent: "none",
  //         publishTime: "2021-09-17T01:32:12Z",
  //       },
  //     },
  //     {
  //       kind: "youtube#searchResult",
  //       etag: "S2LGU3_39laZutsCvjp7vVVvqNw",
  //       id: {
  //         kind: "youtube#video",
  //         videoId: "S-qsDXwweAE",
  //       },
  //       snippet: {
  //         publishedAt: "2021-09-17T01:32:12Z",
  //         channelId: "UCZUhx8ClCv6paFW7qi3qljg",
  //         title: "[TJ노래방 / 남자키] 별 - 프로미스나인 / TJ Karaoke",
  //         description:
  //           "별 -- 프로미스나인 TJ 노래방 곡번호.80376 남자키 변경 버전입니다. TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 ...",
  //         thumbnails: {
  //           default: {
  //             url: "https://i.ytimg.com/vi/S-qsDXwweAE/default.jpg",
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: "https://i.ytimg.com/vi/S-qsDXwweAE/mqdefault.jpg",
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: "https://i.ytimg.com/vi/S-qsDXwweAE/hqdefault.jpg",
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: "TJ KARAOKE TJ 노래방 공식 유튜브채널",
  //         liveBroadcastContent: "none",
  //         publishTime: "2021-09-17T01:32:12Z",
  //       },
  //     },
  //     {
  //       kind: "youtube#searchResult",
  //       etag: "oHq8rJmt7qXwuaG6OJBrRDXD4o4",
  //       id: {
  //         kind: "youtube#video",
  //         videoId: "TQ2LKBSsass",
  //       },
  //       snippet: {
  //         publishedAt: "2021-09-17T01:32:03Z",
  //         channelId: "UCZUhx8ClCv6paFW7qi3qljg",
  //         title: "[TJ노래방 / 멜로디제거] 별 - 프로미스나인 / TJ Karaoke",
  //         description:
  //           "별 -- 프로미스나인 TJ 노래방 곡번호.80376 멜로디제거 버전입니다. TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 ...",
  //         thumbnails: {
  //           default: {
  //             url: "https://i.ytimg.com/vi/TQ2LKBSsass/default.jpg",
  //             width: 120,
  //             height: 90,
  //           },
  //           medium: {
  //             url: "https://i.ytimg.com/vi/TQ2LKBSsass/mqdefault.jpg",
  //             width: 320,
  //             height: 180,
  //           },
  //           high: {
  //             url: "https://i.ytimg.com/vi/TQ2LKBSsass/hqdefault.jpg",
  //             width: 480,
  //             height: 360,
  //           },
  //         },
  //         channelTitle: "TJ KARAOKE TJ 노래방 공식 유튜브채널",
  //         liveBroadcastContent: "none",
  //         publishTime: "2021-09-17T01:32:03Z",
  //       },
  //     },
  //   ],
  // };

  // const searchresult = data.items;
  return (
    <div>
      <button
        className={styles2.neon}
        onClick={() => {
          setShow(true);
          resetSearch();
        }}
      >
        {" "}
        리모콘{" "}
      </button>

      <Modal
        show={show}
        onHide={() => {
          setShow(false);
        }}
        size="xl"
        dialogClassName="modal-90w"
      >
        <div className={Styles.modalposition}>
          <div className={Styles.remotebg}>
            <ModalHeader closeButton></ModalHeader>
            <ModalBody>
              {/* 검색창 */}
              <div className={Styles.searchpage}>
                {/* 검색 */}
                <MusicSearchbar
                  setSearchitem={setSearchitem}
                  searchMusic={searchMusic}
                />
                {/* 검색 결과 */}
                <MSearchResult items={searchresult} />
              </div>

              {/* 버튼창 */}
              <div className={Styles.remotepage}>
                {/* 기타 효과 - 템포, 에코, 음성, 조명, 필터, 박수 북, 폭죽, 좋아요 등  */}
                <div className={Styles.effectpage}>
                  <Effect setOpenFirework={setOpenFirework} hideControl={hideControl} />
                </div>
                {/* 노래 관련 버튼 */}
                <div>
                  {/* 북마크 목록 */}
                  <button className={Styles.bookmarklist}>BookMark</button>
                  <button className={Styles.songstart} onClick={startbookList}>
                    시작
                  </button>
                  <button className={Styles.songdelete} onClick={() => {
                    setstartDream(false);
                    setstartGoodDay(false);
                    }}>취소</button>
                  {/* 녹화 시작/중지 */}
                  <Record />
                  {/* 노래 예약, 삭제, 목록 */}
                  <div>
                    <button className={Styles.booklist}>예약 목록</button>
                    <button className={Styles.book}>예약</button>
                  </div>
                </div>
              </div>
            </ModalBody>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Controller;
