import styles from "./Room.module.css";

function Button({ text, getOnClick }) {
  return (
    <div>
      <button className={(styles.btn, styles.neon)} onClick={getOnClick}>{text}</button>
    </div>
  );
}

export default Button;
