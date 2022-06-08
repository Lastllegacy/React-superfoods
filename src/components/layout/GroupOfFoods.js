import NewSuperfood from "../superfoods/NewSuperfood";
import classes from  "./GroupOfFoods.module.css"

function GroupOfFoods ({items}) {
   return <div className={classes.groupContainer}>
      {items.map((item) => (
          <NewSuperfood item={item} key={item.id} />
        ))}
   </div>
}

export default GroupOfFoods;

