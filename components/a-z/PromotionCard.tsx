"use client";

import Image from "next/image";

const PromotionCard = ({
  imgSrc,
  details = "details",
}: {
  imgSrc: string;
  details: string;
}) => {
  return (
    <div className="w-full rounded-full h-28 p-3">
      <Image
        src={imgSrc ? imgSrc : "/images/carousel/lebron-james.jpg"}
        alt={details}
        width={500}
        height={300}
        className="object-cover w-full h-full rounded-t-lg"
      />
      <p className="bg-dark text-white p-1 w-full text-center rounded-b-lg">
        {details}
      </p>
    </div>
  );
};

export default PromotionCard;
