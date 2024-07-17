import React from "react";
import Image from "next/image";

// React Icons
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdOutlineGroups } from "react-icons/md";
import { FaHands } from "react-icons/fa";

// Images
import F1 from "@/public/Feature1.svg";
import F2 from "@/public/Feature2.png";
import F3 from "@/public/Artworks.png";
import Mask from "@/public/Mask.png";

const Feature = () => {
  return (
    <main>
      <div className="container mx-auto px-5 lg:px-0">
        <div>
          <div>
            <div>
              {/* title */}
              <div className="flex flex-col justify-center items-center my-20 gap-2">
                <h2 className="font-bold text-3xl mr-3">Features</h2>
                <div className="w-14 h-2 rounded-lg bg-gradient-to-r from-[#B2EBF2] to-[#D1C4E9]"></div>
              </div>

              {/* body */}
              <div>
                {/* feature 1 */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:px-20">
                  <div>
                    <Image
                      src={F1}
                      width={600}
                      height={600}
                      alt="Picture of the author"
                    />
                  </div>
                  <div className="lg:mx-52 text-left">
                    <li className="list-disc text-2xl font-bold text-[#00BCD4]">
                      Vivamus sit amet interdum
                    </li>
                    <p className="text-sm leading-6 ">
                      Nam sollicitudin dignissim nunc, cursus ullamcorper eros
                      vulputate sed. Vestibulum sit amet tortor sit amet libero
                      lobortis.
                    </p>
                  </div>
                </div>

                {/* feature 2 */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:px-20 mt-10">
                  <div className=" text-right lg:mx-40">
                    <li className="list-disc text-2xl  font-bold text-[#00BCD4]">
                      Vivamus sit amet interdum
                    </li>
                    <p className="text-sm leading-6	 ">
                      Maecenas nisl libero, tincidunt id odio id, feugiat
                      vulputate quam vestibulum feugiat.
                    </p>
                  </div>
                  <div>
                    <Image
                      src={F2}
                      width={600}
                      height={600}
                      alt="Picture of the author"
                    />
                  </div>
                </div>

                {/*  feature  3*/}
                <div className="flex flex-col justify-center items-center mt-20">
                  <div className="flex flex-col items-center justify-center text-center">
                    <li className="list-disc  text-2xl font-bold text-[#00BCD4]">
                      Vivamus sit amet interdum
                    </li>
                    <p className="text-sm my-10">
                      Vestibulum sit amet tortor sit amet libero lobortis semper
                      at et odio.
                    </p>
                  </div>
                  <div>
                    <Image
                      src={F3}
                      width={600}
                      height={600}
                      alt="Picture of the author"
                    />
                  </div>
                </div>

                <div className="mb-20 -mt-[30em]">
                  <div
                    className="relative p-10 text-center bg-no-repeat h-[100em] w-full  "
                    style={{ backgroundImage: `url(${Mask.src})` }}
                  >
                    <div className=" mt-[40em]  z-10">
                      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
                        <div>
                          <h2 className="text-[#006064] text-2xl font-bold">
                            +200M
                          </h2>
                          <span className="flex items-center gap-2 font-bold">
                            <IoCloudDownloadOutline className="text-xl" />
                            Download
                          </span>
                        </div>

                        <div className="border-r border-[#0000001F] h-10 mx-5 hidden lg:block"></div>

                        <div>
                          <h2 className="text-[#006064] text-2xl font-bold">
                            +480M
                          </h2>
                          <span className="flex items-center gap-2 font-bold">
                            <MdOutlineGroups className="text-2xl" />
                            Members
                          </span>
                        </div>

                        <div className="border-r border-[#0000001F] h-10 mx-5 hidden lg:block"></div>

                        <div>
                          <h2 className="text-[#006064] text-2xl font-bold">
                            +18K
                          </h2>
                          <span className="flex items-center gap-2 font-bold">
                            <FaHands className="text-xl" />
                            Communities
                          </span>
                        </div>
                      </div>
                    </div>
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

export default Feature;
