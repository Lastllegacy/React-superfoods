import classes from './MainDescription.module.css';

function MainDescription(props) {
   return <div className={classes.mainDescription}>
   {props.children}
   </div>
}

export default MainDescription;