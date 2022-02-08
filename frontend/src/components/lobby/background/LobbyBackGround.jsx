import Styles from "./LobbyBackGround.module.css";
// import Styles from "./LobbyBackGround2.module.css";

function LobbyBackGround(){

    return(
        <div className={Styles.container}>
            <div className={Styles.sky} class="sky">
                {/* <div className={Styles.text}>#CODEVEMBER</div> */}
                <div className={Styles.stars}></div>
                <div className={Styles.shootingstars}></div>
                {/* <div className={Styles.stars2}></div> */}
                {/* <div className={Styles.stars1}></div> */}
                <div className={Styles.stars2}></div>
                <div className={Styles.shootingstars}></div>
                <div className={Styles.stars1}></div>
            </div>
        </div>
    )
}


export default LobbyBackGround;