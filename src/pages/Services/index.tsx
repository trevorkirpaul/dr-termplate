import React from "react";

import Accordion from "../../components/Accordion";
import PageContainer from "../../components/PageContainer";
import { accordionSections } from "../../config/servicesData";

const Services: React.FC = () => {
  return (
    <PageContainer>
      <h1 className="mb-5 flex text-xl">Services</h1>
      <Accordion sections={accordionSections} />
    </PageContainer>
  );
};

export default Services;
