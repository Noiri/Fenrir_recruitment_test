import { Select, MenuItem } from "@mui/material";
import styles from "@/styles/setRange.module.css";

const SetRange = (props) => {
  const range = props.range;
  const setRange = props.setRange;
  const handleChange = (event) => {
    setRange(event.target.value);
  };
  return (
    <div className={styles.position}>
      <span className={styles.text}>{"現在地点から "}</span>
      <Select
        labelId="set-range-label"
        id="set-range"
        value={range}
        onChange={handleChange}
      >
        <MenuItem value={1}>300</MenuItem>
        <MenuItem value={2}>500</MenuItem>
        <MenuItem value={3}>1000</MenuItem>
        <MenuItem value={4}>2000</MenuItem>
        <MenuItem value={5}>3000</MenuItem>
      </Select>
      <span className={styles.text}>{" m以内のお店を表示中!"}</span>
    </div>
  );
};

export default SetRange;
