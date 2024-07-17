import React from "react";
import TopCommunity from "@/public/Top-Community.png";
import Image from "next/image";

const Community = () => {
  return (
    <main>
      <div className="container mx-auto px-5 lg:px-0">
        <div>
          <div>
            <div>
              <div className="flex flex-col justify-center items-center mt-20 gap-2">
                <h2 className="font-bold text-3xl mr-3">Top Community</h2>
                <div className="w-14 h-2 rounded-lg bg-gradient-to-r from-[#B2EBF2] to-[#D1C4E9]"></div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-10">
              <Image
                src={TopCommunity}
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Community;
