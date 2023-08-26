import React from "react";

import PageContainer from "../../components/PageContainer";

import Accordion from "../../components/Accordion";
import GoogleMapsFrame from "../../components/GoogleMapsFrame";
import { accordionSections } from "../../config/servicesData";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <div className="mb-5">
        <h1 className="mb-2 text-xl">A Great Doctor's Office</h1>
        <p>
          Visit our doctor's office to get the latest and greatest in medical
          treatment!
        </p>
      </div>
      <div className="mb-5 flex h-20 items-center justify-center rounded bg-yellow-200">
        <a
          href="tel:123-456-7890"
          className="text-xl font-bold hover:underline"
        >
          (123) 456-7890
        </a>
      </div>
      <GoogleMapsFrame />

      <Accordion sections={accordionSections} />
    </PageContainer>
  );
};

export default Home;
