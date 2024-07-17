"use client";
import Image from "next/image";

// swiper js react
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// stories img
import Stories1 from "@/public/image-2.png";

const Stories = () => {
  return (
    <main>
      <div className="container mx-auto px-5 lg:px-0">
        <div>
          <div>
            {/* title */}
            <div className="-mt-2">
              <div className="flex flex-col justify-center items-center my-20 gap-2">
                <h2 className="font-bold text-3xl mr-3">Stories</h2>
                <div className="w-14 h-2 rounded-lg bg-gradient-to-r from-[#B2EBF2] to-[#D1C4E9]"></div>
              </div>
            </div>

            {/* Stories */}
            <div>
              {/* Silder */}
              <div>
                <div>
                  <div className="w-full lg:h-screen h-[200px] mt-14 lg:mt-0">
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
                      loop={true}
                      className="w-full h-full"
                    >
                      <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center relative">
                        <div className="relative w-full h-full">
                          <Image
                            src={Stories1}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-110 transition-all duration-300"
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center relative">
                        <div className="relative w-full h-full">
                          <Image
                            src={Stories1}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className=""
                          />
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="text-center text-lg bg-white flex justify-center items-center relative">
                        <div className="relative w-full h-full">
                          <Image
                            src={Stories1}
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-110 transition-all duration-300"
                          />
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Stories;
