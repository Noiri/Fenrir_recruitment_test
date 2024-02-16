import Link from "next/link";
import Image from "next/image";

const RestaurantList = (props) => {
  const data = props.data;
  const pageNum = props.pageNum;
  return (
    <div>
      <ul>
        {data == undefined
          ? ""
          : data.slice(3 * pageNum, 3 * (pageNum + 1)).map((info, i) => {
              return (
                <div key={i}>
                  <li>
                    <Link
                      href={{
                        pathname: "/detail",
                        query: { id: info.id },
                      }}
                    >
                      {info.name}
                    </Link>
                  </li>
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
