import Styles from "./remote.module.css";

function MusicSearchbar() {

    return(
        
            <div>
                <input className={Styles.serachbar} id="search" name="search" placeholder=" 노래 제목/가수로 검색하세요">
                </input>
                <button  className={Styles.serachbtn}> 검색 </button>
                
            </div>
    )

}
export default MusicSearchbar;