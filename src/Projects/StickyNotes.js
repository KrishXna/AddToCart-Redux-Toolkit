import React, { useLayoutEffect, useRef, useState } from "react";
import { useReducer } from "react";

const initialState = {
  notes: 0,
  totalNotes: 0,
};
const notesReducer = (prevState, action) => {
  switch (action.type) {
    case "Add_Notes": {
      const newNotes = {
        notes: [...prevState.notes, action.payload],
        totalNotes: prevState.notes.length + 1,
      };
      return newNotes;
    }
    case "Delete_Notes": {
      const deleteNotes = {
        ...prevState,
        notes: prevState.notes.filter((note) => note.id != action.payload.id),
        totalNotes: prevState.notes.length - 1,
      };
      return deleteNotes;
    }
    default: {
      throw new Error("No Notes");
    }
  }
};
const StickyNotes = () => {
  const [reducer, dispatch] = useReducer(notesReducer, initialState);
  return (
    <>
      <div className="w-full bg-slate-800 h-screen p-4">
        <div className="max-w-[200px] py-4">
          <textarea type="text" placeholder="Write Notes..."></textarea>
          <button className="w-1/2 bg-slate-500 text-white font-bold">
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyNotes;
