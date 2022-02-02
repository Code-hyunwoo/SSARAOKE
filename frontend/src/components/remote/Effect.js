import Styles from "./remote.module.css"; 

function Effect() {

    return(
        <div>
            {/* 템포 업 */}
            <button className={Styles.jump} 
                style={{left: '32px', top: '16px'}}>
                    간주점프
                    {/* <div className={Styles.tempoupbtn} ></div> */}
            </button>

            {/* 템포 다운*/}
            {/* <button className={Styles.tempo} 
                style={{left: '32px', top: '50px'}}>
                    ????&nbsp;&nbsp;
                    <div className={Styles.tempodownbtn} ></div>
            </button> */}

            {/* 에코*/}
            <button className={Styles.echo} >
                에코 제거/설정
            </button>

            {/* 음성변조*/}
            <button className={Styles.change}>
                음성 변조
            </button>

            {/* 조명 업 */}
            <button className={Styles.light} style={{left: '295px', top: '10px'}} >
                조명 &nbsp;
                <div className={Styles.lightup}></div>
            </button>

            {/* 조명 다운*/}
            <button className={Styles.light} style={{left: '295px', top: '50px'}}>
                조명 &nbsp;
                <div className={Styles.lightdown}></div>
            </button>

            {/* 필터*/}
            <button className={Styles.fgbtn} style={{left: '425px', top: '10px'}}>
                필터
            </button>
            {/* 배경*/}
            <button className={Styles.fgbtn} style={{left: '425px', top: '50px'}}>
                배경 
            </button>
            {/* 박수 */}
            <button className={Styles.effectbtn} style={{left: '560px', top: '14px'}}>

            </button>
            {/* 탬버린 */}
            <button className={Styles.effectbtn} style={{left: '670px', top: '14px'}}>

            </button>
            {/* 폭죽 */}
            <button className={Styles.effectbtn} style={{left: '780px', top: '14px'}}>

            </button>
            {/* 좋아요 */}
            {/* <button className={Styles.effectbtn} style={{left: '790px', top: '15px'}}> */}

            {/* </button> */}
        </div>
    )
}

export default Effect;