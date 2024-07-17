"use client";
import React from "react";
import { Navbar, MobileNav } from "@material-tailwind/react";
import { IoIosMenu, IoMdClose, IoIosSettings } from "react-icons/io";
import logo from "@/public/Logo.png";
import Image from "next/image";

const Menubar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="text-[#673AB7]">Feature</li>
      <li className="text-[#673AB7]">Discover</li>
      <li className="text-[#673AB7]">Stories</li>
      <li className="text-[#673AB7]">Community</li>
      <li className="text-[#673AB7]">Blog</li>
    </ul>
  );

  return (
    <main>
      <div>
        <div className="container mx-auto py-5">
          <Navbar className="sticky top-0 z-10 shadow-none bg-transparent ">
            <div className="flex items-center justify-between  text-black">
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  width={35}
                  height={35}
                  alt="Picture of the author"
                />
                <h2 className="cursor-pointer font-medium text-2xl font-social ">
                  Social
                </h2>
              </div>

              <div className="flex items-center">
                <div className="hidden lg:block">
                  <div className="flex justify-start">{navList}</div>
                </div>

                <button
                  className="lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <IoMdClose className="h-8 w-8" />
                  ) : (
                    <IoIosMenu className="h-8 w-8" />
                  )}
                </button>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center gap-x-8 ">
                  <button className="font-bold uppercase">LogIn</button>
                  <button className="bg-[#673AB7] text-white text-sm font-bold py-2 px-4 rounded-2xl uppercase">
                    See Detail
                  </button>
                  <div className="border-r border-[#979797] h-5"></div>
                  <button>
                    <IoIosSettings className="text-[#757575] text-2xl" />
                  </button>
                </div>
              </div>
            </div>
            <MobileNav open={openNav}>
              {navList}
              <div className="flex items-center gap-x-8 mt-5">
                <button className="uppercase text-black font-bold">
                  LogIn
                </button>
                <button className="bg-[#673AB7] text-white text-sm font-bold py-2 px-4 rounded-2xl uppercase">
                  See Detail
                </button>
              </div>
            </MobileNav>
          </Navbar>
        </div>
      </div>
    </main>
  );
};

export default Menubar;
