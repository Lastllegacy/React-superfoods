import { TransitionGroup, CSSTransition } from "react-transition-group";
import SuperfoodItem from "../superfoods/SuperfoodItem";
import "./SuperfoodList.css";

function SuperfoodList({ items, setModal, isOpen }) {
   
  function modalHandler() {
    setModal(true);
  }

  return (
    <TransitionGroup component={null}>
      {isOpen && items.map((item) => (
        <CSSTransition key={item.id} timeout={500} classNames="superfood">
          <SuperfoodItem item={item} onModal={modalHandler} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default SuperfoodList;
