import ColumnItem from "../layout/ColumnItem";
import classes from "./MainInfo.module.css";

function MainInfo() {
  const overview =
    "The word usually describes a food, or indeed drink, that’s highly nutritious and rich of antioxidants – from kale, beetroot and berries to nuts, green tea and salmon – although there’s no set legal definition.";
  return (
    <div className={classes.backdrop}>
      <div className={classes.title}>
        <h2>What are superfoods?</h2>
        <p>{overview}</p>
        <div className={classes.subtitle}>
          What superpowers you will gain?
        </div>
      </div>
      <div className={classes.mainDescription}>
        <ColumnItem
          title="Superlong-life"
          content="Antioxidants help your organism to fight with more strength against air pollution, toxins, bad stuff coming from food and also lowers the rate of aging, meaning you have more chances to see flying cars :) "
        />
        <ColumnItem
          title="Superquality-life"
          content="They actually contain a variety of vitamins and aminoacids. Last ones help your brain stay longer and more focused. It means everyday little consuming of these products will make you smarter"
        />
        <ColumnItem
          title="Supereasy-life"
          content="You might think that for their high nutrition value they are harder to get or probably their taste leaves a lot to be desired, but you would be very suprised its not at all"
        />
      </div>
    </div>
  );
}

export default MainInfo;
