import Styles from "./Forest.module.css"

function Forest() {

    return(
        <div style={{margin: '0px', padding:'0px', height:'100%'}}>
            <div className={Styles.scene} style={{zIndex:'unset',overflow:'hidden'}}>
            {/* <div class="ufoWrap">
                <div class='center'>
                <div class="ufoInner">
                    <div id='ufo'>
                    <ul class='blinkers'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <div class="dome"></div>
                    <div class="antigrav">
                        <div class="rings">
                        <div class="inner"></div>
                        <ul>
                            <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
                        </ul>
                        </div> */}
                        {/* <!-- end div.rings --> */}
                    {/* </div> */}
                    {/* <!-- end div.antigrav --> */}
                    <div className={Styles.thrust}>
                        <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        </ul>
                    </div>
                    {/* <!-- end div.thrust --> */}
                    {/* </div> */}
                    {/* <!-- end div#ufo --> */}
                {/* </div> */}
                {/* <!-- end div#ufoInner --> */}
                {/* </div> */}
                {/* <!-- end div.center --> */}
                {/* </div> */}
                {/* <!-- end div.ufoInner --> */}
              
                <div className={Styles.foreground}>
                {/* <ul className={Styles.trees3}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
                {/* <!-- end ul.trees3 --> */}
                
                {/* <ul className={Styles.trees2}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
                {/* <!-- end ul.trees2 --> */}

                {/* <ul className={Styles.trees1}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul> */}
                {/* <!-- end ul.trees1 -->   */}
                </div>
                {/* <!-- end div.foreground --> */}

                <div className={Styles.background}>
                <div className={Styles.stars}>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li className={Styles.small}></li>
                    <li></li>
                    <li></li>    
                </div>
                {/* <!-- end div.stars --> */}
                </div>
                {/* <!-- end div.background --> */}

                </div>
                {/* <!-- end div.scene --> */}

                {/* <div class="camera">
                    <div class="battery">
                        <div class="juice"></div>
                    </div> */}
                    {/* <!-- end div.battery --> */}
                    {/* <div class="rec">
                        <span><span></span>REC</span>
                    </div> */}
                    {/* <!-- end div.rec --> */}
                    {/* <div class="meta">
                        <p>F2.3&nbsp;&nbsp;0dB&nbsp;&nbsp;15.7V 
                            <span class="exposure">
                                <span class="plus">+</span>
                                <span class="minus">-</span>
                            </span>
                        </p>
                    </div> */}
                    {/* <!-- end div.meta --> */}
                    {/* <div class="timer">
                        <label id="hours">00</label>:
                        <label id="minutes">00</label>:
                        <label id="seconds">00</label>
                    </div> */}
                    {/* <!-- end div.timer --> */}
                {/* </div> */}
                {/* <!-- end div.camera --> */}
        </div>
    )
}

export default Forest;