import { useState } from "react";
import MyButton from "../layout/UI/MyButton/MyButton";
import MyInput from "../layout/UI/MyInput/MyInput";
import classes from "./AddNewFood.module.css";

function AddNewFood(props) {
  const [post, setPost] = useState({title: '' , body: '' , img: ''});


  function addNewPost(event) {
    event.preventDefault();
    const newPost = {
      ...post
    }
    console.log(newPost)

    setPost({title: '' , body: '' , img: ''})


  }
  return (
    <div className={classes.newFoodForm}>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="This is will be for title"
        />
        <MyInput
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="This is will be for content"
        />
        <MyInput
          value={post.img}
          onChange={(e) => setPost({...post, img: e.target.value})}
          type="text"
          placeholder="This is will be for image url"
        />
        <MyButton onClick={addNewPost}>Add new food</MyButton>
      </form>
    </div>
  );
}

export default AddNewFood;
