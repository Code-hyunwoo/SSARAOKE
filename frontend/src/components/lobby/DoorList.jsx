import Door from "./Door";
import styles from "./DoorList.module.css";
import CreateRoom from "./CreateRoom";
import axios from "axios";
import { useEffect, useState } from "react";
import Lobbychat from "./Lobbychat";

function DoorList() {
  // Door.js에서 map쓸거면 선택한 태그(tags)를 배열로 받아와야함
  // OR 객체로 받아와서 배열로 변환
  //여기로 값을 가져오면, 각 Door로 값이 자동으로 갈까?

  //백에서 받은값 저장하기
  const [roomdata, setRoomdata] = useState([]);
  // const [doordata, setDoordata] = useState([]);
  // const [loading, setLoading] = useState(false)

  //함수로 감싸지 않고 하기
  console.log("doorlist"); //값 받기 전에 찍고
  useEffect(() => {
    //페이지 호출과 동시에 불러오기 위해 사용
    axios
      .get("https://i6a306.p.ssafy.io:8080/api/v1/lobby")
      .then((response) => {
        console.log(response.data); //값 너머오는지 찍고
        setRoomdata(response.data); //값 저장하고
        console.log("룸데이타:", roomdata); //값 저장되었는지 확인
      })
      .catch((e) => {
        console.log("에러 발생");
        console.error(e);
      });
    console.log("doorlist useEffect"); //실행되는지 찍고
  }, []); //,[]는 무한 랜더링 방지

  //로비에서 DoorList뺴고는 다 불러오는데 list를 데이터 초과로 받지 못함. 한번만 받게 해야하는데
  //왜이리 많이 받아지냐
  // //const fetchData = async () => {
  // const fetchData = () => {
  //   // asyno를 사용한 함수 따로 선언
  //     setLoading(true);
  //     try{
  //       const response = await axios.get('https://i6a306.p.ssafy.io:8080/api/v1/lobby',);
  //       console.log(response.data);
  //       setDoordata(response.data);
  //       console.log(doordata);
  //     }
  //     catch(e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  //대기중일때
  // if(loading) {
  //   return <DoorList>방 불러오는 중...</DoorList>
  // }

  // //아직 roomdata가 설정되지 않았을때
  // if(!doordata){
  //   return [];
  // }

  //태그 값
  // const tags = []; //arrcheckedTags

  //roomdata 값이 유효할 때
  return (
    <>
      {/* <button onClick={Roomdata}>button</button> */}
      <CreateRoom />
      <div className={styles.firstcontainer}>
        <Door
          tags={roomdata[0]?.tagList}
          roomseq={roomdata[0]?.room_seq}
          title={roomdata[0]?.title}
          thumnail={roomdata[0]?.thumbnail_url}
          user={roomdata[0]?.owner_nickname}
          current={roomdata[0]?.current}
        />
        <Lobbychat />
        <Door
          tags={roomdata[1]?.tagList}
          roomseq={roomdata[1]?.room_seq}
          title={roomdata[1]?.title}
          thumnail={roomdata[1]?.thumbnail_url}
          user={roomdata[1]?.owner_nickname}
          current={roomdata[1]?.current}
        />
      </div>
      {/* 두번째줄 */}
      <div className={styles.gridcontainer}>
        <Door
          tags={roomdata[2]?.tagList}
          roomseq={roomdata[2]?.room_seq}
          title={roomdata[2]?.title}
          thumnail={roomdata[2]?.thumnail}
          user={roomdata[2]?.owner_nickname}
          current={roomdata[2]?.current}
        />
        {/* <Door /> */}
        <div className={styles.griditem}>
          <Door
            tags={roomdata[3]?.tagList}
            roomseq={roomdata[3]?.room_seq}
            title={roomdata[3]?.title}
            thumnail={roomdata[3]?.thumnail}
            user={roomdata[3]?.owner_nickname}
            current={roomdata[3]?.current}
          />
          {/* <Door /> */}
          {/* <Door /> */}
          <Door
            tags={roomdata[4]?.tagList}
            roomseq={roomdata[4]?.room_seq}
            title={roomdata[4]?.title}
            thumnail={roomdata[4]?.thumnail}
            user={roomdata[4]?.owner_nickname}
            current={roomdata[4]?.current}
          />
        </div>
        {/* <Door /> */}
        <Door
          tags={roomdata[5]?.tagList}
          roomseq={roomdata[5]?.room_seq}
          title={roomdata[5]?.title}
          thumnail={roomdata[5]?.thumnail}
          user={roomdata[5]?.owner_nickname}
          current={roomdata[5]?.current}
        />
      </div>
      {/* 세번째줄 */}
      <div className={styles.gridcontainer}>
        <Door
          tags={roomdata[6]?.tagList}
          roomseq={roomdata[6]?.room_seq}
          title={roomdata[6]?.title}
          thumnail={roomdata[6]?.thumnail}
          user={roomdata[6]?.owner_nickname}
          current={roomdata[6]?.current}
        />
        <div className={styles.griditem}>
          <Door
            tags={roomdata[7]?.tagList}
            roomseq={roomdata[7]?.room_seq}
            title={roomdata[7]?.title}
            thumnail={roomdata[7]?.thumnail}
            user={roomdata[7]?.owner_nickname}
            current={roomdata[7]?.current}
          />
          <Door
            tags={roomdata[8]?.tagList}
            roomseq={roomdata[8]?.room_seq}
            title={roomdata[8]?.title}
            thumnail={roomdata[8]?.thumnail}
            user={roomdata[8]?.owner_nickname}
            current={roomdata[8]?.current}
          />
        </div>
        <Door
          tags={roomdata[9]?.tagList}
          roomseq={roomdata[9]?.room_seq}
          title={roomdata[9]?.title}
          thumnail={roomdata[9]?.thumnail}
          user={roomdata[9]?.owner_nickname}
          current={roomdata[9]?.current}
        />
      </div>
      {/* 네번째줄 */}
      <div className={styles.gridcontainer}>
        <Door
          tags={roomdata[10]?.tagList}
          roomseq={roomdata[10]?.room_seq}
          title={roomdata[10]?.title}
          thumnail={roomdata[10]?.thumnail}
          user={roomdata[10]?.owner_nickname}
          current={roomdata[10]?.current}
        />
        <div className={styles.griditem}>
          <Door
            tags={roomdata[11]?.tagList}
            roomseq={roomdata[11]?.room_seq}
            title={roomdata[11]?.title}
            thumnail={roomdata[11]?.thumnail}
            user={roomdata[11]?.owner_nickname}
            current={roomdata[11]?.current}
          />
          <Door
            tags={roomdata[12]?.tagList}
            roomseq={roomdata[12]?.room_seq}
            title={roomdata[12]?.title}
            thumnail={roomdata[12]?.thumnail}
            user={roomdata[12]?.owner_nickname}
            current={roomdata[12]?.current}
          />
        </div>
        <Door
          tags={roomdata[13]?.tagList}
          roomseq={roomdata[13]?.room_seq}
          title={roomdata[13]?.title}
          thumnail={roomdata[13]?.thumnail}
          user={roomdata[13]?.owner_nickname}
          current={roomdata[13]?.current}
        />
      </div>
      {/* 다섯번째줄 */}
      <div className={styles.gridcontainer}>
        <Door
          tags={roomdata[14]?.tagList}
          roomseq={roomdata[14]?.room_seq}
          title={roomdata[14]?.title}
          thumnail={roomdata[14]?.thumnail}
          user={roomdata[14]?.owner_nickname}
          current={roomdata[14]?.current}
        />
        <div className={styles.griditem}>
          <Door
            tags={roomdata[15]?.tagList}
            roomseq={roomdata[15]?.room_seq}
            title={roomdata[15]?.title}
            thumnail={roomdata[15]?.thumnail}
            user={roomdata[15]?.owner_nickname}
            current={roomdata[15]?.current}
          />
          <Door
            tags={roomdata[16]?.tagList}
            roomseq={roomdata[16]?.room_seq}
            title={roomdata[16]?.title}
            thumnail={roomdata[16]?.thumnail}
            user={roomdata[16]?.owner_nickname}
            current={roomdata[16]?.current}
          />
        </div>
        <Door
          tags={roomdata[17]?.tagList}
          roomseq={roomdata[17]?.room_seq}
          title={roomdata[17]?.title}
          thumnail={roomdata[17]?.thumnail}
          user={roomdata[17]?.owner_nickname}
          current={roomdata[17]?.current}
        />
      </div>
    </>
  );
}

export default DoorList;
