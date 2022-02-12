import Styles from "./remote.module.css";

function MusicSearchbar() {
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const search = (e) => {
    const searchitem = e.target.value;
    console.log("이걸로 검색", searchitem);
  };
  return (
    <div>
      <input
        className={Styles.serachbar}
        id="search"
        name="search"
        placeholder=" 노래 제목/가수로 검색하세요"
        onKeyPress={search}
      />
      <button className={Styles.serachbtn}> 검색 </button>
    </div>
  );
}
export default MusicSearchbar;
