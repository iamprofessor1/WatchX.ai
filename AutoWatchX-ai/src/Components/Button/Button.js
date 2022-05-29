import "./Button.css";

const Button = (props) => {
  return <button className={props.buttonType + " btn"} onClick={props.handleClick || null}>{props.children}</button>;
};

//Removed inline css

export default Button;