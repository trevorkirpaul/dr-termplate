import React from "react";

import PageContainer from "../../components/PageContainer";

import Accordion from "../../components/Accordion";
import GoogleMapsFrame from "../../components/GoogleMapsFrame";
import { accordionSections } from "../../config/servicesData";
import Card from "../../components/Card";
import TestimonialBlock from "../../components/TestimonialBlock";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <div className="hero-splash flex flex-col justify-center px-10">
        <h1 className="mb-1 rounded p-2 text-6xl font-extrabold text-white">
          Doctor's Office
        </h1>
        <p className="mb-5 rounded p-2 text-xl font-bold text-black">
          Medical Care, Surgery, and TeleHealth
        </p>

        <div className="mb-5 flex flex-col items-center justify-center rounded bg-yellow-200 py-3">
          <p className="mb-2">Call to schedule and appointment!</p>
          <a
            href="tel:123-456-7890"
            className="text-4xl font-bold hover:underline"
          >
            (123) 456-7890
          </a>
        </div>
      </div>

      {/* <div className="bg-gray-200 pt-5">
        <h2 className="mb-5 text-center text-5xl font-bold">Location</h2>
        <GoogleMapsFrame />
      </div> */}

      <TestimonialBlock />

      <div className="p-5">
        <h2 className="mb-5 text-left text-5xl font-bold text-black">
          Services
        </h2>

        <div className="flex flex-col justify-center">
          <Card
            className="mb-5"
            title="Service 1"
            body="Service 1 description"
          />
          <Card
            className="mb-5"
            title="Service 2"
            body="Service 2 description"
          />
          <Card
            className="mb-5"
            title="Service 3"
            body="Service 3 description"
          />
        </div>

        {/* <Accordion sections={accordionSections} /> */}
      </div>
    </PageContainer>
  );
};

export default Home;
