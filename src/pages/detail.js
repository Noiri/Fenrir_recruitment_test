import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import styles from "@/styles/detailPage.module.css";
import RestaurantDescription from "@/components/RestaurantDescription";

const Detail = () => {
  const router = useRouter();
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const restaurant_id = router.query.id;

  useEffect(() => {
    (async () => {
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
                    <RestaurantDescription
                      captions={["予算", "アクセス", "営業時間", "住所"]}
                      descriptions={[
                        info.budget.average,
                        info.access,
                        info.open,
                        info.address,
                      ]}
                    ></RestaurantDescription>
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
