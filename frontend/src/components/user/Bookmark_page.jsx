import { Table } from "react-bootstrap";
import Styles from "./MyPageMain.module.css";
import BStyles from "./Bookmark.module.css";
import { BsTrash2Fill, BsTrash2 } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Forest from "../lobby/background/Forest";
import { connect } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

function BookmarkPage({ state }) {

    //북마크리스트 넘어온거 받기
    const [bookmark, setBookmark] = useState([]);

    //북마크 받기
    useEffect(() => {
        //페이지 호출과 동시에 불러오기 위해 사용
        axios
          .get(
              "https://i6a306.p.ssafy.io:8080/api/v1/bookmark/list",
              {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: state[0].token,
                },
              }
          )
          .then((response) => {
            console.log("북마크 넘어오냐: ",response.data); //값 너머오는지 찍고
            setBookmark(response.data); //값 저장하고
            console.log("bookmark:", bookmark); //값 저장되었는지 확인
          })
          .catch((e) => {
            console.log("에러 발생");
            console.error(e);
          });
      }, [bookmark]); //,[]는 무한 랜더링 방지


      const bookbye =(title) => {
            axios
              .delete("https://i6a306.p.ssafy.io:8080/api/v1/bookmark/delete",
                {
                    headers:{
                        "Content-Type": "application/json",
                        Authorization: state[0].token,
                    },
                    data: {
                          title: title,
                    },
                })
              .then((res) => {
                  console.log(res);
                  new Swal({
                    title: "북마크가 삭제되었습니다!",
                    timer: 700,
                    showConfirmButton: false,

                  });
              })
              .catch((e) => {
                  console.log(e);
              });
      };


    return(
        <div>
            <Forest />

            <Link to="/mypage">
                <button className={Styles.backbtn}></button>
            </Link>
            {/* 자판기시작 */}
            {/* 큰틀 */}
            <div className={Styles.machineOutline}>
                {/* 작은틀 */}
                <div className={BStyles.machineInline} style={{height: '78vh', }}>
                    <div className={BStyles.Sh1} style={{top: '2vh'}} >Bookmark</div>
                    <div style={{padding:'1vw' ,top:'9vh', left:'3.2vw'}} className={BStyles.table}>
                        <Table style={{top:'15vh'}}>
                            <thead className={BStyles.tablehead} >
                                <tr style={{textAlign:"center"}}>
                                    <th>#</th>
                                    <th>노래</th>
                                </tr>
                            </thead>
                            <tbody className={BStyles.tablebody}>
                                {/* item-> 배열안 하나의 요소, index-> 말그대로 인덱스 */}
                            {bookmark.map((item, index) => (
                                <tr>
                                    <th>{index+1}</th>
                                    <th>
                                        {item.song_title.startsWith("[TJ노래방") ||
                                        item.song_title.endsWith(" / TJ Karaoke")
                                        ? item.song_title.slice(8, -13)
                                        : item.song_title}
                                    </th>
                                    <th>
                                        <button value={item.song_title} onClick={ () => {bookbye(item.song_title)}} style={{borderRadius:"30vw", backgroundColor:"powderblue"}}>
                                            삭제
                                        </button>
                                    </th>
                                </tr>
                                )
                             )} 
                            </tbody>
                        </Table>
                    </div>
                
                </div>

                {/* 떨어진 캔들 */}
                <div className={BStyles.pink}></div>
                <div className={BStyles.yellow}></div>
                <div className={BStyles.bora}></div>
                <div className={BStyles.navy}></div>
                <div className={BStyles.blue}></div>
                <div className={BStyles.sky}></div>
                <div className={BStyles.red}></div>

            </div>
            {/* 쓰레기통 */}
                <div style={{ backgroundColor: "black", borderColor: "black" }}>
                    <div className={Styles.trash1}></div>
                    <div className={Styles.trash2}></div>
                    <div className={Styles.trash4}></div>
                    <div className={Styles.trash7}></div>
                    <div className={Styles.trash5}></div>
                    <div className={Styles.trash6}></div>
                    <div className={Styles.trashCan}></div>

                    {/* <Link to="/"> */}
                    <div>
                        {" "}
                        <BsTrash2Fill className={Styles.trashCan} color="#0381D7" />
                        <BsTrash2 className={Styles.trashCan} color="#0381D7" />
                    </div>
                    {/* </Link> */}
                </div>   
        </div>
    );
}
function mapStateToProps(state) {
    //state 받아오는 함수 - store에서 직빵으로 값 보내주는 것.
    return { state };
  }
export default connect(mapStateToProps, null)(BookmarkPage);