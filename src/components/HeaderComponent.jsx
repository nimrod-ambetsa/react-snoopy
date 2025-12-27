import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const HeaderComponent = () => {
  return (
    <div>
      <div className="bg-green-500 w-full h-20 text-xl text-white flex mx-auto px-4 font-semibold items-center justify-start uppercase">
        <p className="">Refine stores</p>
      </div>
      <div className="h-20 text-black flex px-4 flex-row align-middle border-b-2 border-gray-200 uppercase mx-auto font-bold items-center">
        <ul className="flex items-center justify-end space-x-10 w-full">
          <li>
            <input
              type="search"
              className="border px-2 py-1 border-gray-200 rounded-md"
              name="search"
              id=""
              placeholder="search"
            />
          </li>
          <li>shop</li>
          <li>cart</li>
          <li>Account</li>
          <li>favourites</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
