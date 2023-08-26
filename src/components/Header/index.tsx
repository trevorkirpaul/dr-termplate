import React, { useState } from "react";
import { Menu } from "iconoir-react";

import MobileNavMenu from "../MobileNavMenu";

const Header: React.FC = () => {
  const [mobileNavMenuIsOpen, setMobileNavMenuIsOpen] = useState(false);

  return (
    <>
      <MobileNavMenu
        mobileNavMenuIsOpen={mobileNavMenuIsOpen}
        setMobileNavMenuIsOpen={setMobileNavMenuIsOpen}
      />
      <div className="flex justify-between p-3 bg-white fixed z-10 w-full">
        <span>Dr. First Last, MD</span>
        <button
          className="cursor-pointer"
          onClick={() => setMobileNavMenuIsOpen(true)}
        >
          <Menu />
        </button>
      </div>
    </>
  );
};

export default Header;
