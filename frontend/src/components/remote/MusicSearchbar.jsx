import Styles from "./remote.module.css";

function MusicSearchbar({ setSearchitem, searchMusic }) {
  const getSearchitem = (e) => {
    setSearchitem(e.target.value);
  };

  const entersearch = (e) => {
    if (e.key === "Enter") {
      searchMusic();
    }
  };

  return (
    <div>
      <input
        className={Styles.serachbar}
        id="search"
        name="search"
        placeholder=" 노래 제목/가수로 검색하세요"
        onChange={getSearchitem}
        onKeyPress={entersearch}
      />
      <button className={Styles.serachbtn} onClick={searchMusic}>
        {" "}
        검색{" "}
      </button>
    </div>
  );
}
export default MusicSearchbar;
