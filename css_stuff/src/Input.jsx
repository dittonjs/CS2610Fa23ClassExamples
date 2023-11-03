// import styles from "./Input.module.css";
// console.log(styles);


const styles = {
  input: {
    padding: "8px 16px",
    borderRadius: "32px",
    border: "1px solid lightgray",
    fontSize: "18px"
  },
  error: {
    border: "2px solid rgb(205, 35, 35)"
  }
}

export function Input(props) {
  const {
    value,
    onChange,
    hasError,
    type,
    onBlur
  } = props;

  let style = styles.input
  if (hasError) style = {...styles.input, ...styles.error}

  return (
    <input
        type={type}
        style={style}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
  )
}