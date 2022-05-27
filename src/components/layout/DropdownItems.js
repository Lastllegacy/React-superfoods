import { useState } from "react";

import classes from "./DropdownItems.module.css";
import SuperfoodList from "./SuperfoodList";

import Modal from "./UI/Modal/Modal";

function DropdownItems(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [modal, setModal] = useState(false);

  function toggleHandler() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.withLine} onClick={toggleHandler}>
        <span className={classes.dropHeader}>{props.title}</span>
      </div>
      <div className={classes.content}>
        <SuperfoodList items={props.items} setModal={setModal} isOpen={isOpen} />
      </div>
         <Modal active={modal} setActive={setModal} />
    </div>
  );
}

export default DropdownItems;
