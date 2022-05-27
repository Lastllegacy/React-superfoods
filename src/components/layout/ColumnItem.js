import classes from './ColumnItem.module.css'

function ColumnItem({title, content}) {
   return <div className={classes.item}>
      <div className={classes.title}>{title}</div>
      <div className={classes.content}>{content}</div>
   </div>
}

export default ColumnItem;