import styles from "./Room.module.css";
import ReactScrollableFeed from "react-scrollable-feed"
import { connect } from "react-redux";  


function RoomChat ({mode, Nickname, sendChat, chatArr}){

    const onKeyPress=(e)=> {
        if(e.key ==='Enter'){
        const msg = e.target.value
          sendChat(msg);
          e.target.value = ''
        }
      };


    return (
        <div className={styles.rgb}>
            <div id={mode}>
                <div className={styles.ChatBox}>
                    <ReactScrollableFeed>
                    {chatArr.map((ele) => (
                    <div className={styles.Chat}>
                        <span className={styles.ChatName}>{ele.name} :</span>
                        <span className={styles.ChatContent}>{ele.msg}</span>
                    </div>
                     ))}
                    </ReactScrollableFeed>
                </div>
                <div className={styles.InputBox}>
                    <div className={styles.Nick}>{Nickname}</div>
                    <input className={styles.txtmsg} type={"text"} id={"chatTxt"} onKeyPress={onKeyPress} placeholder='메세지'></input>
                
                </div>

            </div>
        </div>
    )

}


function mapStateToProps(state) {
    const Nickname = state[0].nickname 
    return { Nickname };
  }

export default connect(mapStateToProps, null)(RoomChat);