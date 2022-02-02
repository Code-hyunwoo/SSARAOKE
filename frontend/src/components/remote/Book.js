import Styles from "./remote.module.css";

function Book() {

    return(
        <div>
            <button className={Styles.booklist}>예약 목록</button>
            <button className={Styles.book}>예약</button>
            
        </div>
    )
}
export default Book;