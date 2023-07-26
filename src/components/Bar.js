import React, { useEffect, useRef, useState } from "react";

const ScrollMiddleBar = () => {
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
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-2 bg-slate-800" ref={scrollBarRef}>
      <span
        className="absolute left-1/2 inline-block h-4 w-[600%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-500"
        style={{ top: `${top}px` }}
        ref={scrollBtnRef}
      ></span>
    </div>
  );
};

export default ScrollMiddleBar;
