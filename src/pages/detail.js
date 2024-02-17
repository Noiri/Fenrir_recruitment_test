import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

import Header from "@/components/Header";

import styles from "@/styles/detailPage.module.css";

const Detail = () => {
  const router = useRouter();
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const restaurant_id = router.query.id;

  useEffect(() => {
    (async () => {
      console.log(restaurant_id);
      const res = await fetch(`/api/getRestaurantDetail?id=${restaurant_id}`);
      const data = await res.json();
      setRestaurantDetail(data);
    })();
  }, [restaurant_id]);

  return (
    <>
      <Header></Header>
      <main>
        <div>
          {restaurantDetail.map((info, key) => {
            return (
              <div key={key}>
                <h1 className={styles.restaurantName}>{info.name}</h1>
                <div className={styles.restaurantInfo}>
                  <div className={styles.leftSide}>
                    <Image
                      src={info.photo.pc.l}
                      alt={info.name}
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className={styles.rightSide}>
                    <div className={styles.budget}>
                      <span className={styles.bold}>予算：</span>
                      {info.budget.average}
                    </div>
                    <div className={styles.access}>
                      <span className={styles.bold}>アクセス：</span>
                      {info.access}
                    </div>
                    <div className={styles.open}>
                      <span className={styles.bold}>営業時間：</span>
                      {info.open}
                    </div>
                    <div className={styles.address}>
                      <span className={styles.bold}>住所：</span>
                      {info.address}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Detail;
