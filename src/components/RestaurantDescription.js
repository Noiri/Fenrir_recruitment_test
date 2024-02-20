import styles from "@/styles/restaurantDescription.module.css";

const RestaurantDescription = (props) => {
  const captions = props.captions;
  const descriptions = props.descriptions;
  return (
    <ul>
      {captions == undefined
        ? ""
        : captions.map((caption, key) => {
            const description = descriptions[key];
            return (
              <div key={key} className={styles.description}>
                <span className={styles.bold}>{`${caption}：`}</span>
                {description}
              </div>
            );
          })}
    </ul>
  );
};

export default RestaurantDescription;
