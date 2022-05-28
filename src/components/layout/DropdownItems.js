import { useState } from "react";

import classes from "./DropdownItems.module.css";
import SuperfoodList from "./SuperfoodList";

function DropdownItems(props) {
  const [isOpen, setIsOpen] = useState(false);


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
        <SuperfoodList items={props.items} isOpen={isOpen} >
        </SuperfoodList>
      </div>
         
    </div>
  );
}

export default DropdownItems;
