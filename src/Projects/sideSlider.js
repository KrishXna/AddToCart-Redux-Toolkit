import React, { useState } from "react";
import ImgCard from "../components/ImgCard";
import Kingfisher from "../assets/kingfisher.jpg";

const SideSlider = () => {
  const [open, setOpen] = useState(false);
  const [droppedImage, setDroppedImage] = useState(null);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  function allowDrop(e) {
    console.log(e, "13");
    e.preventDefault();
  }

  function drag(e) {
    console.log(e, "17");
    e.dataTransfer.setData("text/plain", e.target.id);
  }

  function drop(e) {
    console.log(e, "23");
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    const image = document.getElementById(data);
    console.log({ data, image, droppedImage });
    if (image) {
      setDroppedImage(image.src);
    }
  }

  return (
    <div className="flex bg-slate-700 border-t">
      <div className={open ? "w-2/3" : "w-full"}>
        <div className="flex flex-wrap mx-auto items-center justify-center gap-y-40 gap-x-20 mt-32">
          <ImgCard
            src={Kingfisher}
            draggable={true}
            onDragStart={drag}
            onDrop={drop}
            onDragOver={allowDrop}
            id="draggable"
            className="h-full w-full cursor-pointer"
          />
          <ImgCard onDrop={drop} onDragOver={allowDrop} />
          <ImgCard onDrop={drop} onDragOver={allowDrop} />
          <ImgCard onDrop={drop} onDragOver={allowDrop} />
        </div>
        <div className="flex flex-col items-center mt-24">
          <p
            draggable={true}
            onDragStart={drag}
            className="inline-block mt-10 text-white"
            id="draggable"
          >
            This is a draggable paragraph. Drag this element into the rectangle
            or square box.
          </p>
          <div
            className="w-[600px] h-[300px] mt-10 bg-white px-4 border"
            onDrop={drop}
            onDragOver={allowDrop}
          >
            {droppedImage && (
              <div>
                <img
                  src={droppedImage}
                  alt="Dropped Image"
                  className="w-full h-full relative z-10"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={
          open
            ? "w-1/3 shadow- bg-slate-800 h-screen flex items-center relative"
            : "w-0 mr-2 h-screen flex items-center relative transition-all duration-1000"
        }
      >
        <div className="cursor-pointer absolute -left-4 rounded-full bg-black w-8 h-8 text-white text-center flex justify-center items-center">
          <button onClick={handleOpen} className="cursor-pointer">
            &lt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideSlider;
