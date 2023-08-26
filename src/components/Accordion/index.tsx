import React from "react";
import AccordionSection from "./Section";

interface Section {
  title: string;
  body: string;
  img?: string;
  defaultOpen?: boolean;
}

interface IProps {
  sections: Section[];
}
const Accordion: React.FC<IProps> = ({ sections }) => {
  return (
    <>
      <div className="w-full bg-blue-100 rounded p-2">
        {sections.map((sec) => (
          <AccordionSection key={sec.title} {...sec} />
        ))}
      </div>
    </>
  );
};

export default Accordion;
