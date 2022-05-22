import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.logo}>React app featuring superfoods</div>
        <nav>
          <ul>
            <li>
              <Link to="/"> Main </Link>
            </li>
            <li>
              <Link to="/list"> List </Link>
            </li>
            <li>
              <Link to='/contact'> Contact </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default MainNavigation;
