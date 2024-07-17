"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <main>
      <div className="container mx-auto px-5 lg:px-0">
        <div>
          <FaArrowUp
            className="fixed bottom-4 right-4 text-[#673AB7] bg-[#D1C4E9] h-10 w-10 p-2 rounded-full cursor-pointer z-50"
            onClick={scrollToTop}
            style={{ display: visible ? "block" : "none" }}
          />
        </div>
      </div>
    </main>
  );
};

export default ScrollTop;
