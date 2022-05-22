import classes from './ColumnItem.module.css'

function ColumnItem(props) {
   return <div className={classes.item}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.content}>{props.content}</div>
   </div>
}

export default ColumnItem;