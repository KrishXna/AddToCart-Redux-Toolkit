import React from "react";

const ImgCard = ({ src, className, draggable, onDrop, onDragOver }) => {
  return (
    <div
      className="w-[200px] h-[200px] border-2 border-slate-500 flex justify-center items-center text-white"
      onDrop={onDrop}
      onDragOver={onDragOver}
      draggable={draggable}
    >
      {src && <img src={src} className={className} draggable={draggable} />}
    </div>
  );
};
export default ImgCard;
