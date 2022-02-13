import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Styles from "./remote.module.css";

function MSearchResult({ items }) {
  return (
    <div className={Styles.searchcontent}>
      <Table>
        {items.length !== 0 ? (
          <thead>
            <tr>
              <th>#</th>
              <th>노래 제목</th>
              {/* <th>노래 영상 링크</th> */}
              <th>예약</th>
            </tr>
          </thead>
        ) : null}
        {items.map((item, index) => (
          <tbody>
            <tr>
              <td>{index + 1}</td>
              <td>{item.snippet.title}</td>
              {/* <td>{`https://www.youtube.com/watch?v=${item.id.videoId}`}</td> */}
              <td>
                <input
                  className="songbook"
                  type="checkbox"
                  value={item.snippet.title}
                />
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
export default MSearchResult;
