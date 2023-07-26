import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Card from "../components/Card";
import Bar from "../components/Bar";

const DivScroller = () => {
  const [top, setTop] = useState(0);

  const scrollBarRef = useRef();
  const scrollBtnRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      const halfWindowHeight = window.innerHeight / 2;

      const scrollBarDomRect = scrollBarRef.current?.getBoundingClientRect();
      const scrollBarTop = scrollBarDomRect?.top || 0 + window.scrollY;
      const scrollBarHeight = scrollBarDomRect?.height || 0;
      const scrollBarBottom = scrollBarTop + scrollBarHeight;

      if (
        halfWindowHeight > scrollBarTop &&
        halfWindowHeight < scrollBarBottom
      ) {
        setTop(halfWindowHeight - scrollBarTop);
      } else if (halfWindowHeight >= scrollBarBottom) {
        setTop(scrollBarHeight);
      } else {
        setTop(0);
        document.addEventListener("scroll", onScroll);

        return () => document.removeEventListener("scroll", onScroll);
      }
    };
  });

  return (
    <>
      <div className="bg-slate-700 py-[600px]">
        <div className="flex justify-center gap-x-20 text-white text-xl text-center">
          <div className="flex flex-col gap-y-24 mt-32 mb-32">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          {/* <div className="relative">
            <div
              ref={scrollBarRef}
              id="line"
              className="w-[20px] rounded-full bg-gray-800 h-[100%] "
            >
              <div
                ref={scrollBtnRef}
                id="bar"
                className="absolute bg-white w-[40px] h-[40px] rounded-xl -left-[10px]"
                style={{ top: `${top}px` }}
              ></div>
            </div>
          </div> */}
          <Bar />
          <div className="flex flex-col gap-y-24 mt-32 mb-32">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default DivScroller;
