"use client"
import React, { Dispatch, SetStateAction, useState, useEffect } from 'react'

type TProps={
    opened: boolean,
    mode: "light" | "dark";
    setSelectedLink:Dispatch<SetStateAction<string>>
    setOpened:Dispatch<SetStateAction<boolean>>
}

const CloseIcon = (props:TProps) => {
  const {mode, setSelectedLink, opened, setOpened} = props;

  useEffect(() => {
    const body = document.body;
    body.style.overflow = opened ? 'hidden' : 'auto';
  }, [opened]);

  const toggleMenu = () => {
    setSelectedLink("");
    setOpened(!opened);
  };

  return (
    <div className="col-span-6 max-lg:flex hidden justify-end max-sm:col-span-4 z-10 scale-75">
      <button
        className={`${
          opened && "opened"
        } border-none bg-transparent cursor-pointer flex p-0`}
        onClick={toggleMenu}
        aria-label="Main Menu "
      >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <path
            className={`line line1 ${
              mode === "light" ? "stroke-black" : "stroke-white"
            }`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            className={`line line1 ${
              mode === "light" ? "stroke-black" : "stroke-white"
            }`}
            d="M 20,50 H 80"
          />
          <path
            className={`line line1 ${
              mode === "light" ? "stroke-black" : "stroke-white"
            }`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
    </div>
  )
}

export default CloseIcon