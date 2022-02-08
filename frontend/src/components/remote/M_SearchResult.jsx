import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Styles from "./remote.module.css"

function M_SearchResult() {
    const [songs, setSongs] = useState([]);
    const getSongs = async() => {
        const json = await (
            await fetch(
                ``)
        ).json();
        setSongs(json.data.songs);
    };
    useEffect(() => {
        getSongs();
    },[]);
     
    return(
        <div className={Styles.searchcontent}>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>노래 제목</th>
                        <th>가수</th>
                        <th>북마크</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>던던 댄스 </th>
                        <th>오마이걸</th>
                        <th> <div className={Styles.likebtn}></div> </th>
                        {/* <th> <input type='checkbox'></input> </th> */}
                        {/*  */}
                        <th> <input type='checkbox' style={{width:'35px'}}></input></th>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <th>2</th>
                        <th>던던 단스 </th>
                        <th>오마이보이</th>
                        <th> <div className={Styles.likebtn}></div> </th>
                        {/* <th> <input type='checkbox'></input> </th> */}
                        {/*  */}
                        <th> <input type='checkbox' style={{width:'35px'}}></input></th>
                    </tr>
                </tbody>
                
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th><button>삭제</button></th>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}
export default M_SearchResult;