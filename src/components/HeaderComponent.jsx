import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const HeaderComponent = () => {
  return (
    <div>
      <div className="bg-green-500 w-full h-20 text-xl text-white flex mx-auto px-4 font-semibold items-center justify-start uppercase">
        <p className="">Refine stores</p>
      </div>
      <Menu></Menu>
    </div>
  );
};

export default HeaderComponent;
