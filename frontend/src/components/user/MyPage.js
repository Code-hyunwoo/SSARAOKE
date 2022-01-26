

function Mypage() {

    return(
        <div>
            <span>
            <Mypage/>
            {/* <MyVideo /> */}
            </span>
            <span>
                <form>
                    <h5>회원정보</h5>
                    <input type="text" name="nicname" value="nicname" /> 카카오 대화명
                    <input type="text" name="email" value="email" /> 카카오(보류)
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
            </span>
        </div>
    )
    
}
export default Mypage;