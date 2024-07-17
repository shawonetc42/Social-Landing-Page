"use client";
import React from "react";

// react icons
import {
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

// images
import Decoration from "@/public/Decoration.png";
import logo from "@/public/Logo.png";
import Image from "next/image";

import { Select, Option } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <main>
      <div className="container mx-auto px-5 lg:px-0">
        <div className=" bg-[#F6F3FB]">
          <div
            className="relative p-10 text-center h-96 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${Decoration.src})` }}
          >
            <div className=" mt-20 z-10">
              <div className="">
                <footer className="flex flex-col lg:flex-row justify-between gap-10">
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-center lg:justify-start items-center gap-2">
                      <Image
                        src={logo}
                        width={30}
                        height={30}
                        alt="Picture of the author"
                      />
                      <h2 className="text-2xl font-bold">Social</h2>
                    </div>

                    <div className=" w-64">
                      <p className="text-sm text-justify">
                        Nam posuere accumsan porta. Integer id orci sed ante
                        tincidunt tincidunt sit amet sed libero.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm text-center lg:text-left">
                        &copy; Skyrev Theme {currentYear}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="uppercase text-[#673AB7] font-bold">
                      Company
                    </h2>
                    <ul className="flex flex-col gap-2">
                      <li className="text-sm">Donec dignissim</li>
                      <li className="text-sm">Curabitur egestas</li>
                      <li className="text-sm">Nam posuere</li>
                      <li className="text-sm">Aenean facilisis</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="uppercase text-[#673AB7] font-bold">
                      Services
                    </h2>
                    <ul className="flex flex-col gap-2">
                      <li className="text-sm">Cras convallis</li>
                      <li className="text-sm">Vestibulum faucibus</li>
                      <li className="text-sm">Quisque lacinia purus</li>
                      <li className="text-sm">Aliquam nec ex</li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h2 className="uppercase text-[#673AB7] font-bold">
                      resources
                    </h2>
                    <ul className="flex flex-col gap-2">
                      <li className="text-sm">Suspendisse porttitor</li>
                      <li className="text-sm">Nam posuere</li>
                      <li className="text-sm">Curabitur egestas </li>
                    </ul>
                  </div>

                  {/* social icons */}
                  <div className="flex justify-center items-center flex-col gap-10">
                    <div className="flex gap-5">
                      <div className="bg-[#D1C4E9] p-2 rounded-md">
                        <FaFacebookF className="text-[#311B92] text-2xl" />
                      </div>
                      <div className="bg-[#D1C4E9] p-2 rounded-md">
                        <FaLinkedin className="text-2xl text-[#311B92]" />
                      </div>
                      <div className="bg-[#D1C4E9] p-2 rounded-md">
                        <FaTwitter className="text-2xl text-[#311B92]" />
                      </div>
                      <div className="bg-[#D1C4E9] p-2 rounded-md">
                        <FaInstagram className="text-2xl text-[#311B92]" />
                      </div>
                    </div>

                    <div className="">
                      <div className="w-52">
                        <Select label="English - En">
                          <Option>English - En</Option>
                          <Option>Bangla - Bn</Option>
                        </Select>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
