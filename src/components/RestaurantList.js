import Link from "next/link";
import Image from "next/image";

const RestaurantList = (props) => {
  const data = props.data;
  return (
    <div>
      <ul>
        {data == undefined
          ? ""
          : data.map((info, i) => {
              return (
                <div key={i}>
                  <li>{info.name}</li>
                  <Image
                    src={info.photo.pc.m}
                    alt={info.name}
                    width={100}
                    height={100}
                  />
                </div>
              );
            })}
      </ul>
    </div>
  );
};

export default RestaurantList;
