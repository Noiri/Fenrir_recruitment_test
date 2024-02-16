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
                </div>
              );
            })}
      </ul>
    </div>
  );
};

export default RestaurantList;
