"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaApple } from "react-icons/fa";
import Banner from "@/public/Hero.png";
import bg from "@/public/Bg.png";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main>
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col  items-center justify-center">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            <div className="lg:ml-16 lg:-mt-16">
              <h2 className="social-font font-bold text-black text-3xl">
                Sed Imperdiet Enim li Vitae Viverra Justo
              </h2>
              <p className="text-[#0000008A] social-font text-base">
                Nam sollicitud nunc, cursus eros vulputate sed. Vestibulum
                lobortis.
              </p>
              <div className="flex gap-5 mt-5">
                <button className="flex items-center gap-2 bg-black text-white rounded py-2s px-3	">
                  <span>
                    <FaApple className="text-4xl" />
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="normal-case text-[11px] social-font">
                      Download on the
                    </span>
                    <span className="text-base font-bold social-font -mt-1">
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
                    <span className="text-[14px] font-bold social-font -mt-1">
                      Google Play
                    </span>
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-16">
              <div className="absolute lg:ml-[14em]">
                <Image
                  src={Banner}
                  width={550}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <div className="relative  ml-40 lg:ml-96 -mt-10 lg:-mt-32 ">
                <Image
                  src={bg}
                  width={400}
                  height={500}
                  alt="bg"
                  className={
                    isMobile ? "h-[30em] w-[25em]" : "h-[40em] w-[40em]"
                  }
                />
              </div>
            </div>
          </div>
          <div className="-mt-24">
            <ul className="flex flex-col lg:flex-row items-center gap-5">
              <div className="">
                <li className="list-disc text-[#00BCD4] font-bold text-xl">
                  Business Solution
                </li>
                <p className="text-sm">Interdum et malesuada ac ante…</p>
              </div>

              <div className="border-r border-[#0000001F] h-10 mx-5 hidden lg:block"></div>

              <div>
                <li className="list-disc text-[#00BCD4] font-bold text-xl">
                  Free project quote
                </li>
                <p className="text-sm">Interdum et malesuada ac ante…</p>
              </div>

              <div className="border-r border-[#0000001F] h-10 mx-5 hidden lg:block"></div>

              <div>
                <li className="list-disc text-[#00BCD4] font-bold text-xl">
                  Nulla lobortis nunc
                </li>
                <p className="text-sm">Interdum et malesuada ac ante…</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
