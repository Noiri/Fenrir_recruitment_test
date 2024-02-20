import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/RestaurantList.module.css";
import { useState } from "react";
import SetRange from "./SetRange";
import RestaurantDescription from "./RestaurantDescription";

const RestaurantList = (props) => {
  const data = props.data;
  const pageNum = props.pageNum;
  const range = props.range;
  const setRange = props.setRange;

  return (
    <div>
      <div className={styles.setRangePosition}>
        <SetRange range={range} setRange={setRange}></SetRange>
      </div>
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
                    <div className={styles.catch}>{info.catch}</div>

                    <div className={styles.restaurantName}>
                      <Link
                        href={{
                          pathname: "/detail",
                          query: { id: info.id },
                        }}
                        className={styles.restaurantNameLink}
                      >
                        {info.name}
                      </Link>
                    </div>

                    <RestaurantDescription
                      captions={["アクセス", "営業時間"]}
                      descriptions={[info.access, info.open]}
                    ></RestaurantDescription>
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default RestaurantList;
