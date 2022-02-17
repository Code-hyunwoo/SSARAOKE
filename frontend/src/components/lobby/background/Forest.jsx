import Styles from "./Forest.module.css"

function Forest() {

    return(
        <div style={{margin: '0px', padding:'0px', height:'100%'}}>
            <div className={Styles.scene} style={{zIndex:'unset',overflow:'hidden'}}>
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
              
                <div className={Styles.foreground}>
                
                </div>

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
                </div>

                </div>
        </div>
    )
}

export default Forest;