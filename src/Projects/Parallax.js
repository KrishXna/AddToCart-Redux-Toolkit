import React, { useEffect, useRef } from "react";
import KingFisher from "../assets/kingfisher.jpg";
const Parallax = () => {
  const btnRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      const btnRect = btnRef.current?.getBoundingClientRect();
      console.log(btnRect);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className="w-full h-[100vh] border border-red-500 relative"></div>
      </div>
    </>
  );
};

export default Parallax;
