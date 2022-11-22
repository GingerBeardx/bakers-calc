const style = (buttonColor, textColor) => {
  return { backgroundColor: buttonColor, color: textColor }
}

const Button = ({ text, buttonColor, textColor }) => {
  return (
    <button className="btn" style={style(buttonColor, textColor)}>
      {text}
    </button>
  )
}

export default Button
