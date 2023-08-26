import React from "react";
import { Disclosure } from "@headlessui/react";
import { NavArrowDown, NavArrowUp } from "iconoir-react";

const imageClassName = "rounded mt-2";

interface IProps {
  title: string;
  body: string;
  img?: string;
  defaultOpen?: boolean;
}

const AccordionSection: React.FC<IProps> = ({
  title,
  body,
  img,
  defaultOpen = true,
}) => {
  return (
    <Disclosure defaultOpen={defaultOpen} as="div" className="mb-2">
      {({ open }) => (
        <>
          <Disclosure.Button className="p-2 flex justify-between w-full bg-blue-300 mb-3 rounded">
            <span>{title}</span>
            {open ? <NavArrowUp /> : <NavArrowDown />}
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <p>{body}</p>
            {img && <img className={imageClassName} src={img} />}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default AccordionSection;
