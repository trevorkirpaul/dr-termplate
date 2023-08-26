import React from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
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
      className="fixed w-screen h-screen top-0 left-0 z-20"
    >
      <Dialog.Panel className="w-screen bg-gray-700 h-screen p-3 z-20">
        <Dialog.Title className="text-white text-xl mb-5 flex justify-between">
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
              <Link to={r.path} className={linkClassName}>
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileNavMenu;
