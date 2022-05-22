import NewSuperfood from "../superfoods/NewSuperfood";
import classes from "./List.module.css";
import { useState } from "react";

import DropdownItems from "../layout/DropdownItems";

import image from "../svg/almond.svg";
import Modal from "../layout/Modal";
import Backdrop from "../layout/Backdrop";

function List() { 
   
   const [isOpen, setIsOpen] = useState(false);
 
  function modalHandler () {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  
  return (
    <div className={classes.list}>
        <NewSuperfood image={image} alt="Almond" width="70px" onModal={modalHandler} />
      <DropdownItems title="Veggetables">
        <NewSuperfood image={image} alt="Almond" width="70px" onModal={modalHandler} />
         {isOpen && <Modal/>}
         {isOpen && <Backdrop/>}
      </DropdownItems>
    </div>
  );
}

export default List;
