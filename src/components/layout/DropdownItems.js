import { useState } from "react";

import classes from './DropdownItems.module.css'

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
      <div className={classes["with-line"]} onClick={toggleHandler}>
        <span className={classes.dropHeader}>{props.title}</span>
      </div>
      <div className={classes.content}>
         {isOpen && props.children}
      </div>
    </div>
  );
}

export default DropdownItems;