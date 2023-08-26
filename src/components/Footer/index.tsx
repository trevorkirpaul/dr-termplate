import React from "react";
import MainLogo from "../MainLogo";

const Footer: React.FC = () => {
  return (
    <div className="p-2 pb-24 bg-gray-300 color-white">
      <MainLogo />
      <div className="my-5">
        <span className="block mb-2 text-xl">Contact:</span>
        <ul>
          <li>
            <a href="tel:123-456-7890">(123) 456-7890</a>
          </li>
          <li>
            <a href="email:drfirstlastmd@doctor.com">
              drfirstlastmd@doctor.com
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-5">
        <span className="block mb-2 text-xl">Hours:</span>
        <span className="block mb-2">8am - 5pm</span>
      </div>
    </div>
  );
};

export default Footer;
