import Styles from "./Mypage.module.css"

function Mypage_old() {

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
                <h1 className={Styles.Mh1}> 회원 정보 </h1>
                   <div>
                     <h3 className={Styles.nic}> Nickname :  </h3>
                     <button id="nicupdate" value="nicupdate" name="nicupdate" className={Styles.nicupbtn} >수정</button>
                     <h3 className={Styles.mail}> E-Mail : </h3>
                   </div>
                   {/* <p className={Styles.p}> </p> */}

                <h1 className={Styles.Sh1}> Bookmark </h1>
                    <div>
                     <h3 className={Styles.bm1}>  1. 오마이걸 - 던던  </h3>
                     <h3 className={Styles.bm2}>  2. 에스파 - Next Level</h3>
                     <h3 className={Styles.bm3}> 3. 종현 - 하루의 끝 </h3>
                   </div>
                   <button id="joinout" value="joinout" name="joinout" className={Styles.joinoutbtn} >탈퇴</button>
            </div>
            {/* 
            <form>
                    <h5>회원정보</h5>
                    <span>Nickname:</span> <input type="text" name="nickname" value="nickname" /> 
                    <br/>
                    <span>E-mail:</span> <input type="text" name="email" value="email" /> 
                </form>
                <form>
                    <h5>Bookmark</h5>
                    <ol>
                        <li>
                            1. 오마이걸 - 던던
                        </li>
                        <li>
                            2. 에스파 - Next Level
                        </li>
                        <li>
                            3. 종현 - 하루의 끝
                        </li>
                    </ol>
                </form>
            */}
        </div>
    )
    
}
export default Mypage_old;