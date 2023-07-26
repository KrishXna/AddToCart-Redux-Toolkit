import React, { useState } from "react";

const Resizeable = ({ children }) => {
  const [size, setSize] = useState({ x: 400, y: 1000 });

  const handler = (mouseDownEvent) => {
    const startSize = size;
    const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };

    function onMouseMove(mouseMoveEvent) {
      setSize((currentSize) => ({
        x: startSize.x - startPosition.x + mouseMoveEvent.pageX,
        y: startSize.y - startPosition.y + mouseMoveEvent.pageY,
      }));
    }

    function onMouseUp() {
      document.body.removeEventListener("mousemove", onMouseMove);
      console.log("Mouse move");
      document.body.removeEventListener("mouseup", onMouseUp);
    }

    document.body.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseup", onMouseUp, { once: true });
  };

  return (
    <div
      id="container"
      className="relative bg-slate-800 border-2"
      style={{ width: size.x, height: size.y }}
    >
      <button
        id="draghandle"
        className="absolute bottom-1/2 right-0 translate-x-1/2 translate-y-1/ bg-black w-8 h-8 rounded-full text-white"
        type="button"
        onMouseDown={handler}
      >
        &gt;
      </button>
    </div>
  );
};

// ReactDOM.render(<Resizeable />, document.getElementById("root"));

export default Resizeable;
