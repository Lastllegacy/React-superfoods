import classes from "./SuperfoodItem.module.css";

import { useState } from "react";
function SuperfoodItem(props) {
  const [over, setOver] = useState(true);
  

  return (
    <div
      className={classes.card}
      onMouseOver={() => setOver(false)}
      onMouseOut={() => setOver(true)}
      onClick={props.onModal}
    >
      {over ? (
        <img
          src={props.item.image}
          alt={props.item.alt}
        />
      ) : (
        <p> {props.item.alt} </p>
      )}
    </div>
    
  );
}

export default SuperfoodItem;
