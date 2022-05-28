import classes from "./SuperfoodItem.module.css";

import { useState } from "react";
import Modal from "../layout/UI/Modal/Modal";

function SuperfoodItem(props) {
  const [over, setOver] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className={classes.listItems}>
        <div
          className={classes.card}
          onMouseOver={() => setOver(false)}
          onMouseOut={() => setOver(true)}
          onClick={() => setIsOpen(true)}
        >
          {over ? (
            <img src={props.item.image} alt={props.item.alt} />
          ) : (
            <p> {props.item.alt} </p>
          )}
        </div>
        {
        <Modal active={isOpen} setActive={setIsOpen}>
          <p>{props.item.info}</p>
        </Modal>
      }
      </div>

      

  );
}

export default SuperfoodItem;
