"use client";
import Image from "next/image";
import React from "react";

// material tailwind components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaApple } from "react-icons/fa";

const Update = () => {
  return (
    <main>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="bg-[#F6F3FB]">
          <div>
            {/* title */}
            <div className="pt-10">
              <div className="flex flex-col justify-center items-center text-center mt-20 gap-2">
                <h2 className="font-bold text-3xl mr-3">Whats Update</h2>
                <div className="w-14 h-2 rounded-lg bg-gradient-to-r from-[#B2EBF2] to-[#D1C4E9]"></div>
                <p className="text-sm text-black my-5">
                  Vestibulum sit amet tortor sit amet libero lobortis semper at
                  et odio.
                </p>
              </div>
            </div>

            {/* update */}
            <div className="flex flex-col lg:flex-row justify-center gap-20 items-center mt-10">
              {/* left card */}
              <div>
                <Card className="mt-6 lg:w-96 w-80">
                  <CardHeader color="blue-gray" className="relative h-48">
                    <Image
                      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                      alt="card-image"
                      width={500}
                      height={500}
                    />
                  </CardHeader>
                  <CardBody className="">
                    <h2 className="mb-2 text-[#0000008A] text-sm uppercase">
                      Headline
                    </h2>
                    <h2 className="">Sed imperdiet enim ligula vitae</h2>
                  </CardBody>
                  <div className="flex justify-start items-start p-7 -mt-7">
                    <button className="text-[#311B92] text-lefts">
                      Read more
                    </button>
                  </div>
                </Card>
              </div>

              {/* right card */}
              <div className="flex flex-col gap-16">
                <div className="flex  items-center flex-col lg:flex-row mx-5 mt-16 lg:mt-0">
                  <div className="-mt-20 lg:mt-0 absolute z-20">
                    <Image
                      src="https://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/60/7c/607c0e54-489b-4f24-b5b1-dca261da02d4/yunus-and-eliza-daenerys-game-of-thrones-photo-credit-nick-wall-hbo.jpg__760x0_q75_crop-scale_subsampling-2_upscale-false.jpg"
                      alt="card-image"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="relative bg-white py-4 px-5 lg:pl-28 rounded-lg shadow-lg ">
                    <h1 className="text-[#0000008A] uppercase">News</h1>
                    <h2 className="text-black text-sm">
                      Sed imperdiet enim ligula, vitae viverra justo porta vel.
                    </h2>
                    <button className="text-[#9C27B0]">Read more</button>
                  </div>
                </div>

                <div className="flex  items-center flex-col lg:flex-row mx-5 mt-16 lg:mt-0">
                  <div className="-mt-20 lg:mt-0 absolute z-20">
                    <Image
                      src="https://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/filer_public/60/7c/607c0e54-489b-4f24-b5b1-dca261da02d4/yunus-and-eliza-daenerys-game-of-thrones-photo-credit-nick-wall-hbo.jpg__760x0_q75_crop-scale_subsampling-2_upscale-false.jpg"
                      alt="card-image"
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="relative bg-white py-4 px-5 lg:pl-28 rounded-lg shadow-lg ">
                    <h1 className="text-[#0000008A] uppercase">News</h1>
                    <h2 className="text-black text-sm">
                      Sed imperdiet enim ligula, vitae viverra justo porta vel.
                    </h2>
                    <button className="text-[#9C27B0]">Read more</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Download */}
            <div>
              <div className="flex flex-col justify-center items-center text-center mt-20 gap-2">
                <h2 className="font-bold text-3xl mr-3">
                  What are you waiting for? Download Now!
                </h2>
              </div>
              <div>
                <div className="flex justify-center items-center gap-5 mt-5">
                  <button className="flex items-center gap-2 bg-black text-white rounded py-2 px-3">
                    <span>
                      <FaApple className="text-4xl" />
                    </span>
                    <div className="flex flex-col items-start">
                      <span className="normal-case text-[11px] social-font">
                        Download on the
                      </span>
                      <span className="text-base font-bold social-font">
                        App Store
                      </span>
                    </div>
                  </button>
                  <button className="flex items-center gap-2 bg-black text-white rounded py-2 px-3">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1"
                          x1="18.102"
                          x2="25.297"
                          y1="3.244"
                          y2="34.74"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#35ab4a"></stop>
                          <stop offset=".297" stop-color="#31a145"></stop>
                          <stop offset=".798" stop-color="#288739"></stop>
                          <stop offset="1" stop-color="#237a33"></stop>
                        </linearGradient>
                        <path
                          fill="url(#AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1)"
                          d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"
                        ></path>
                        <linearGradient
                          id="AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2"
                          x1="19.158"
                          x2="21.194"
                          y1="23.862"
                          y2="66.931"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#f14e5d"></stop>
                          <stop offset=".499" stop-color="#ea3d4f"></stop>
                          <stop offset="1" stop-color="#e12138"></stop>
                        </linearGradient>
                        <path
                          fill="url(#AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2)"
                          d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"
                        ></path>
                        <linearGradient
                          id="AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3"
                          x1="32.943"
                          x2="36.541"
                          y1="14.899"
                          y2="43.612"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#ffd844"></stop>
                          <stop offset=".519" stop-color="#ffc63f"></stop>
                          <stop offset="1" stop-color="#ffb03a"></stop>
                        </linearGradient>
                        <path
                          fill="url(#AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3)"
                          d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"
                        ></path>
                        <linearGradient
                          id="AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4"
                          x1="13.853"
                          x2="15.572"
                          y1="5.901"
                          y2="42.811"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".003" stop-color="#0090e6"></stop>
                          <stop offset="1" stop-color="#0065a0"></stop>
                        </linearGradient>
                        <path
                          fill="url(#AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4)"
                          d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"
                        ></path>
                      </svg>
                    </span>
                    <div className="flex flex-col items-start">
                      <span className="text-[11px] social-font">Get it On</span>
                      <span className="text-[14px] font-bold social-font">
                        Google Play
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Update;
