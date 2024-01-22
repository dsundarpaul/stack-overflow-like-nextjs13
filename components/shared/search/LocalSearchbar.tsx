"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

interface CutsomInputProps {
  route: string;
  iconPosition: "left" | "right";
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: CutsomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="serarch"
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        // value=""
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none dark:text-white"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          width={24}
          height={24}
          alt="serarch"
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default LocalSearchbar;
