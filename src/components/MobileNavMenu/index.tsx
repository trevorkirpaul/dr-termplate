import React from "react";
import { Dialog } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { Cancel } from "iconoir-react";

interface Props {
  mobileNavMenuIsOpen: boolean;
  setMobileNavMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
}

const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/contact",
    label: "Contact",
  },
  {
    path: "/location",
    label: "Location",
  },
  {
    path: "/book-appointment",
    label: "Book Appointment",
  },
  {
    path: "/services",
    label: "Services",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/faq",
    label: "FAQ",
  },
];

const linkClassName = "hover:underline text-l mb-2 py-2 inline-block";

const MobileNavMenu: React.FC<Props> = ({
  mobileNavMenuIsOpen,
  setMobileNavMenuIsOpen,
  title = "Dr. First Last, MD",
}) => {
  return (
    <Dialog
      open={mobileNavMenuIsOpen}
      onClose={() => setMobileNavMenuIsOpen(false)}
      className="fixed left-0 top-0 z-20 h-screen w-screen"
    >
      <Dialog.Panel className="z-20 h-screen w-screen bg-gray-700 p-3">
        <Dialog.Title className="mb-5 flex justify-between text-xl text-white">
          <div>{title}</div>
          <div>
            <button
              className="inline-block cursor-pointer"
              onClick={() => setMobileNavMenuIsOpen(false)}
            >
              <Cancel />
            </button>
          </div>
        </Dialog.Title>
        <ul className="text-white">
          {routes.map((r) => (
            <li key={r.path}>
              <NavLink
                to={r.path}
                className={({ isActive }) =>
                  isActive
                    ? linkClassName + " font-bold text-blue-400 underline"
                    : linkClassName
                }
              >
                {r.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileNavMenu;
