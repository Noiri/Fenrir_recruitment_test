import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

const Detail = () => {
  const router = useRouter();
  const info = JSON.parse(router.query.info);
  return (
    <div>
      <p>{info.name}</p>
      <Image src={info.photo.pc.l} alt={info.name} width={500} height={500} />
    </div>
  );
};

export default Detail;
