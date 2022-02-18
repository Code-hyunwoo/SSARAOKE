import Door from "./Door";
import styles from "./DoorList.module.css";
import CreateRoom from "./CreateRoom";
import axios from "axios";
import { useEffect, useState } from "react";
import Lobbychat from "./Lobbychat";

function DoorList() {
  //백에서 받은값 저장하기
  const [roomdata, setRoomdata] = useState([]);

  //함수로 감싸지 않고 하기
  useEffect(() => {
    //페이지 호출과 동시에 불러오기 위해 사용
    axios
      .get("https://i6a306.p.ssafy.io:8080/api/v1/lobby")
      .then((response) => {
        setRoomdata(response.data); //값 저장하고
      })
      .catch((e) => {
        console.log("에러 발생");
        console.error(e);
      });
  }, []); //,[]는 무한 랜더링 방지

  
  //roomdata 값이 유효할 때
  return (
    <>
      <CreateRoom />
      <div className={styles.firstcontainer}>
        <Door
          tags={roomdata[0]?.tagList}
          roomseq={roomdata[0]?.room_seq}
          title={roomdata[0]?.title}
          thumnail={roomdata[0]?.thumbnail_url}
          user={roomdata[0]?.owner_nickname}
          current={roomdata[0]?.current}
          isPrivate={roomdata[0]?.private}
          mode={roomdata[0]?.mode}
        />
        <Lobbychat />
        <Door
          tags={roomdata[1]?.tagList}
          roomseq={roomdata[1]?.room_seq}
          title={roomdata[1]?.title}
          thumnail={roomdata[1]?.thumbnail_url}
          user={roomdata[1]?.owner_nickname}
          current={roomdata[1]?.current}
          isPrivate={roomdata[1]?.private}
          mode={roomdata[1]?.mode}
        />
      </div>
      <div className={styles.gridcontainer}>
        <Door
          tags={roomdata[2]?.tagList}
          roomseq={roomdata[2]?.room_seq}
          title={roomdata[2]?.title}
          thumnail={roomdata[2]?.thumnail}
          user={roomdata[2]?.owner_nickname}
          current={roomdata[2]?.current}
          isPrivate={roomdata[2]?.private}
          mode={roomdata[2]?.mode}
        />
        <div className={styles.griditem}>
          <Door
            tags={roomdata[3]?.tagList}
            roomseq={roomdata[3]?.room_seq}
            title={roomdata[3]?.title}
            thumnail={roomdata[3]?.thumnail}
            user={roomdata[3]?.owner_nickname}
            current={roomdata[3]?.current}
            isPrivate={roomdata[3]?.private}
            mode={roomdata[3]?.mode}
          />
          <Door
            tags={roomdata[4]?.tagList}
            roomseq={roomdata[4]?.room_seq}
            title={roomdata[4]?.title}
            thumnail={roomdata[4]?.thumnail}
            user={roomdata[4]?.owner_nickname}
            current={roomdata[4]?.current}
            isPrivate={roomdata[4]?.private}
            mode={roomdata[4]?.mode}
          />
        </div>
        <Door
          tags={roomdata[5]?.tagList}
          roomseq={roomdata[5]?.room_seq}
          title={roomdata[5]?.title}
          thumnail={roomdata[5]?.thumnail}
          user={roomdata[5]?.owner_nickname}
          current={roomdata[5]?.current}
          isPrivate={roomdata[5]?.private}
          mode={roomdata[5]?.mode}
        />
      </div>
      <div className={styles.gridcontainer}>
        <Door
          tags={roomdata[6]?.tagList}
          roomseq={roomdata[6]?.room_seq}
          title={roomdata[6]?.title}
          thumnail={roomdata[6]?.thumnail}
          user={roomdata[6]?.owner_nickname}
          current={roomdata[6]?.current}
          isPrivate={roomdata[6]?.private}
          mode={roomdata[6]?.mode}
        />
        <div className={styles.griditem}>
          <Door
            tags={roomdata[7]?.tagList}
            roomseq={roomdata[7]?.room_seq}
            title={roomdata[7]?.title}
            thumnail={roomdata[7]?.thumnail}
            user={roomdata[7]?.owner_nickname}
            current={roomdata[7]?.current}
            isPrivate={roomdata[7]?.private}
            mode={roomdata[7]?.mode}
          />
          <Door
            tags={roomdata[8]?.tagList}
            roomseq={roomdata[8]?.room_seq}
            title={roomdata[8]?.title}
            thumnail={roomdata[8]?.thumnail}
            user={roomdata[8]?.owner_nickname}
            current={roomdata[8]?.current}
            isPrivate={roomdata[8]?.private}
            mode={roomdata[8]?.mode}
          />
        </div>
        <Door
          tags={roomdata[9]?.tagList}
          roomseq={roomdata[9]?.room_seq}
          title={roomdata[9]?.title}
          thumnail={roomdata[9]?.thumnail}
          user={roomdata[9]?.owner_nickname}
          current={roomdata[9]?.current}
          isPrivate={roomdata[9]?.private}
          mode={roomdata[9]?.mode}
        />
      </div>
      <div className={styles.gridcontainer}>
        <Door
          tags={roomdata[10]?.tagList}
          roomseq={roomdata[10]?.room_seq}
          title={roomdata[10]?.title}
          thumnail={roomdata[10]?.thumnail}
          user={roomdata[10]?.owner_nickname}
          current={roomdata[10]?.current}
          isPrivate={roomdata[10]?.private}
          mode={roomdata[10]?.mode}
        />
        <div className={styles.griditem}>
          <Door
            tags={roomdata[11]?.tagList}
            roomseq={roomdata[11]?.room_seq}
            title={roomdata[11]?.title}
            thumnail={roomdata[11]?.thumnail}
            user={roomdata[11]?.owner_nickname}
            current={roomdata[11]?.current}
            isPrivate={roomdata[11]?.private}
            mode={roomdata[11]?.mode}
          />
          <Door
            tags={roomdata[12]?.tagList}
            roomseq={roomdata[12]?.room_seq}
            title={roomdata[12]?.title}
            thumnail={roomdata[12]?.thumnail}
            user={roomdata[12]?.owner_nickname}
            current={roomdata[12]?.current}
            isPrivate={roomdata[12]?.private}
            mode={roomdata[12]?.mode}
          />
        </div>
        <Door
          tags={roomdata[13]?.tagList}
          roomseq={roomdata[13]?.room_seq}
          title={roomdata[13]?.title}
          thumnail={roomdata[13]?.thumnail}
          user={roomdata[13]?.owner_nickname}
          current={roomdata[13]?.current}
          isPrivate={roomdata[13]?.private}
          mode={roomdata[13]?.mode}
        />
      </div>
      <div className={styles.gridcontainer}>
        <Door
          tags={roomdata[14]?.tagList}
          roomseq={roomdata[14]?.room_seq}
          title={roomdata[14]?.title}
          thumnail={roomdata[14]?.thumnail}
          user={roomdata[14]?.owner_nickname}
          current={roomdata[14]?.current}
          isPrivate={roomdata[14]?.private}
          mode={roomdata[14]?.mode}
        />
        <div className={styles.griditem}>
          <Door
            tags={roomdata[15]?.tagList}
            roomseq={roomdata[15]?.room_seq}
            title={roomdata[15]?.title}
            thumnail={roomdata[15]?.thumnail}
            user={roomdata[15]?.owner_nickname}
            current={roomdata[15]?.current}
            isPrivate={roomdata[15]?.private}
            mode={roomdata[15]?.mode}
          />
          <Door
            tags={roomdata[16]?.tagList}
            roomseq={roomdata[16]?.room_seq}
            title={roomdata[16]?.title}
            thumnail={roomdata[16]?.thumnail}
            user={roomdata[16]?.owner_nickname}
            current={roomdata[16]?.current}
            isPrivate={roomdata[16]?.private}
            mode={roomdata[16]?.mode}
          />
        </div>
        <Door
          tags={roomdata[17]?.tagList}
          roomseq={roomdata[17]?.room_seq}
          title={roomdata[17]?.title}
          thumnail={roomdata[17]?.thumnail}
          user={roomdata[17]?.owner_nickname}
          current={roomdata[17]?.current}
          isPrivate={roomdata[17]?.private}
          mode={roomdata[17]?.mode}
        />
      </div>
    </>
  );
}

export default DoorList;
