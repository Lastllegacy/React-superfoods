import { TransitionGroup, CSSTransition } from "react-transition-group";
import SuperfoodItem from "../superfoods/SuperfoodItem";
import "./SuperfoodList.css";

function SuperfoodList({ items, isOpen }) {


  return (
    <TransitionGroup className="flex">
      {isOpen && items.map((item) => (
        <CSSTransition key={item.id} timeout={500} classNames="superfood">
          <SuperfoodItem item={item} />
        </CSSTransition>
      ))}

    </TransitionGroup>
  );
}

export default SuperfoodList;
