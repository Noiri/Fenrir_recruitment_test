import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div>
      <div>
        {restaurantDetail.map((info, key) => {
          return (
            <div key={key}>
              <p>{info.name}</p>
              <Image
                src={info.photo.pc.l}
                alt={info.name}
                width={100}
                height={100}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
