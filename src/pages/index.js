import Head from "next/head";
import Image from "next/image";
//import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import RestaurantList from "@/components/RestaurantList";
import ChangePageNumButton from "@/components/ChangePageNumButton";
import Header from "@/components/Header";

export default function Home() {
  // 現在地の緯度，経度
  const [currentLocation, setCurrentLocation] = useState({
    latitude: "",
    longitude: "",
  });
  //レストランのリスト
  const [restaurantList, setRestaurantList] = useState();
  //何ページ目を表示するか
  const [pageNum, setPageNum] = useState(0);

  const [range, setRange] = useState(3);

  // ページ読み込み時に現在地を取得する.
  useEffect(() => {
    (async () => {
      const position = await new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(resolve);
      });

      //const latitude = position.coords.latitude;
      //const longitude = position.coords.longitude;

      const latitude = 36.4304074; //テスト用の座標
      const longitude = 136.4878406;

      setCurrentLocation({ latitude: latitude, longitude: longitude });

      const res = await fetch(
        `/api/getRestaurantList?lat=${latitude}&lon=${longitude}&range=${range}`
      );
      const data = await res.json();
      setRestaurantList(data);
    })();
  }, [range]);

  return (
    <>
      <Header></Header>

      <main>
        <RestaurantList
          data={restaurantList}
          pageNum={pageNum}
          range={range}
          setRange={setRange}
        ></RestaurantList>
        <ChangePageNumButton
          totalPageNum={restaurantList == undefined ? 0 : restaurantList.length}
          setPageNum={setPageNum}
        ></ChangePageNumButton>
      </main>
    </>
  );
}
