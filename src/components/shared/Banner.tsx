import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import banner from "../../../src/app/assests/banner.jpg";

const Banner = () => {
  return (
    <div className="bg-slate-100 dark:text-white dark:bg-gray-800">
      <div className="px-4 py-8 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* image container */}
        <div>
          <Image src={banner} alt="" width={600} height={400} className="rounded"/>
        </div>
        {/* text container */}
        <div className="space-y-4 flex flex-col">
          <h4 className="text-sm">Technology</h4>
          <h2 className="text-3xl font-bold">
            OpwnAI Is Growing Fast and Burning Through Piles of Money
          </h2>
          <p>
            OpenAi monthly revenue hit us$300 million in August, up 1,700% since
            the beginning of 2023 , and the company expects about $3.7 billion
            in annual sales this year, accroding to financial documents reviewed
            by The New York Times. <br /> <br /> OpenAI estimates that its
            revenue will balloon to copy 1.6 billion next year. OpenAI revenue
            in August more than tripled from a year earlier, according to the
            documents, and about 350 million people up from around 100 million
            in March of this year - used its services each month as of June.
          </p>
          <Button variant="default" >Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
