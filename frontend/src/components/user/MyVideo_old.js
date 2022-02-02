import Styles from "./MyVideo.module.css"

function MyVideo() {

    return(
        <div>
            <div className={Styles.desk}>
            </div>
            <div className={Styles.menut}>
            </div>
            {/* 메뉴바 */}
            <div className={Styles.menu}>
                <button className={Styles.Mh31}> 회원 정보 </button>
                <button className={Styles.Mh32}> My Video </button>
            </div>
            <button className={Styles.backbtn}></button>
            {/* 본문 */}
            <div className={Styles.body}>
                <h1 className={Styles.Mh1}> My Video </h1>
                <div>
                    <span>
                        <video id="" controls className={Styles.video}>
                            <source src='?'></source>
                        </video>
                    </span>
                    <span>
                        <video id="" controls className={Styles.video2}>
                            <source src='?'></source>
                        </video>
                    </span>
                    <span>
                        <video id="" controls className={Styles.video3}>
                            <source src='?'></source>
                        </video>
                    </span>
                </div>
                <line className={Styles.line}></line>
                <div>
                    <span ><p className={Styles.title}>YYYY.MM.DD.hh.mm</p></span>
                    <span ><p className={Styles.title2}>YYYY.MM.DD.hh.mm</p></span>
                    <span ><p className={Styles.title3}>YYYY.MM.DD.hh.mm</p></span>
                </div>

                <div>
                    <span>
                        <video id="" controls className={Styles.video4}>
                            <source src='?'></source>
                        </video>
                    </span>
                    <span>
                        <video id="" controls className={Styles.video5}>
                            <source src='?'></source>
                        </video>
                    </span>
                    <span>
                        <video id="" controls className={Styles.video6}>
                            <source src='?'></source>
                        </video>
                    </span>
                </div>
                <line className={Styles.line2}></line>
                <div>
                    <span ><p className={Styles.title4}>YYYY.MM.DD.hh.mm</p></span>
                    <span ><p className={Styles.title5}>YYYY.MM.DD.hh.mm</p></span>
                    <span ><p className={Styles.title6}>YYYY.MM.DD.hh.mm</p></span>
                </div>

            </div>
        </div>
    )
    
}
export default MyVideo;