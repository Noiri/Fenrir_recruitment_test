import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/RestaurantList.module.css";

const RestaurantList = (props) => {
  const data = props.data;
  const pageNum = props.pageNum;
  return (
    <div>
      <ul className={styles.restaurantList}>
        {data == undefined
          ? ""
          : data.slice(3 * pageNum, 3 * (pageNum + 1)).map((info, i) => {
              return (
                <li key={i} className={styles.restaurant}>
                  <div className={styles.leftSide}>
                    <Image
                      src={info.photo.pc.m}
                      alt={info.name}
                      width={168}
                      height={168}
                    />
                  </div>
                  <div className={styles.rightSide}>
                    <h3 className={styles.restaurantName}>
                      <Link
                        href={{
                          pathname: "/detail",
                          query: { id: info.id },
                        }}
                      >
                        {info.name}
                      </Link>
                    </h3>
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default RestaurantList;
