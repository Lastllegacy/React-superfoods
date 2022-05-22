import classes from "./NewSuperfood.module.css";

import { useState } from "react";
function NewSuperfood(props) {
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
          src={props.image}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
      ) : (
        <p> {props.alt} </p>
      )}
    </div>
    
  );
}

export default NewSuperfood;
