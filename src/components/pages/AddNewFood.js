import { useState } from "react";
import MyButton from "../layout/UI/MyButton/MyButton";
import MyInput from "../layout/UI/MyInput/MyInput";
import classes from "./AddNewFood.module.css";

function AddNewFood(props) {
  const [title, setTitle] = useState("");

  function addNewPost(event) {
    console.log(title)
    event.preventDefault();
  }
  return (
    <div className={classes.newFoodForm}>
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="This is will be for title"
        />
        <MyInput type="text" placeholder="This is will be for title" />
        <MyButton onClick={addNewPost}>Add new food</MyButton>
      </form>
    </div>
  );
}

export default AddNewFood;
