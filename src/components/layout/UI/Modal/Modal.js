import MyButton from "../MyButton/MyButton";
import classes from "./Modal.module.css";
import "./Modal.css"
import { CSSTransition } from "react-transition-group";

function Modal({ active, setActive, children }) {

  return (
    <CSSTransition in={active} timeout={400} classNames="modal" unmountOnExit>
      <div className={classes.popup} onClick={() => setActive(false)}>
        <div
          className={classes.popup__content}
          onClick={(e) => e.stopPropagation()}
        >
        {children}
          <MyButton onClick={() => setActive(false)}> Close modal </MyButton>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Modal;
