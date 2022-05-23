import { useState } from "react";

import classes from "./DropdownItems.module.css";

import SuperfoodItem from "../superfoods/SuperfoodItem";
import Modal from "./UI/Modal/Modal";
import Backdrop from "./UI/Backdrop/Backdrop";

function DropdownItems(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  function toggleHandler() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  function modalHandler () {
    if (modalOpen) {
      setModalOpen(false)
    } else {
      setModalOpen(true)
    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.withLine} onClick={toggleHandler}>
        <span className={classes.dropHeader}>{props.title}</span>
      </div>
      <div className={classes.content}>
        {isOpen &&
          props.items.map((item) => <SuperfoodItem item={item} key={item.id} onModal={modalHandler} />)}
        {modalOpen && <Modal />}
        {modalOpen && <Backdrop onClose={modalHandler}/>}
      </div>
    </div>
  );
}

export default DropdownItems;
