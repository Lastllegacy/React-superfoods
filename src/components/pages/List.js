import classes from "./List.module.css";
import { useState } from "react";

import DropdownItems from "../layout/DropdownItems";

function List() {
  const [foods, setFoods] = useState([
    {
      image:
        "https://cdn.theatlantic.com/thumbor/nWAG9hiVYPbZNJlqlzvbbYiQIQE=/426x82:5328x3758/1200x900/media/img/mt/2015/08/shutterstock_182338004/original.jpg",
      alt: "Almond",
      id: 1,
    },
    {
      image: "https://previews.123rf.com/images/oleh11/oleh111807/oleh11180700051/104724559-cashewnuss-lokalisiert-auf-wei%C3%9Fem-hintergrund.jpg",
      alt: "Cashew",
      id: 2,
    },
    {
      image: "https://thumbs.dreamstime.com/b/%D0%B3%D1%80%D0%B5%D1%86%D0%BA%D0%B8%D0%B9-%D0%BE%D1%80%D0%B5%D1%85-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BB-%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%B9-%D0%BF%D0%BB%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-%D0%BF%D1%80%D0%B5%D0%B4%D0%BF%D0%BE%D1%81%D1%8B%D0%BB%D0%BA%D0%B5-%D1%81-%D0%BF%D1%83%D1%82%D0%B5%D0%BC-124082717.jpg",
      alt: "Walnut",
      id:3,
    },
  ]);


  return (
    <div className={classes.list}>
      <DropdownItems title="Superfoods" items={foods} >
      </DropdownItems>
      <DropdownItems title="Superfoods" items={foods} >
      </DropdownItems>
      <DropdownItems title="Superfoods" items={foods} >
      </DropdownItems>
    </div>
    
  );
}

export default List;
