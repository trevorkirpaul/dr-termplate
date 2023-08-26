import React from "react";

import PageContainer from "../../components/PageContainer";

import medicalService1ImgUrl from "../../assets/images/medical-service-1.jpg";
import medicalService2ImgUrl from "../../assets/images/medical-service-2.jpg";
import medicalService3ImgUrl from "../../assets/images/medical-service-3.jpg";
import Accordion from "../../components/Accordion";
import GoogleMapsFrame from "../../components/GoogleMapsFrame";

const accordionSections = [
  {
    title: "Service 1",
    body: "This is one of our services. You can expect great treatment of your ailment.",
    img: medicalService1ImgUrl,
  },
  {
    title: "Service 2",
    body: "This is one of our services. You can expect great treatment of your ailment.",
    img: medicalService2ImgUrl,
  },
  {
    title: "Service 3",
    body: "This is one of our services. You can expect great treatment of your ailment.",
    img: medicalService3ImgUrl,
  },
];

const Home: React.FC = () => {
  return (
    <PageContainer>
      <div className="mb-5">
        <h1 className="text-xl mb-2">A Great Doctor's Office</h1>
        <p>
          Visit our doctor's office to get the latest and greatest in medical
          treatment!
        </p>
      </div>
      <div className="mb-5 bg-yellow-200 rounded h-20 flex justify-center items-center">
        <a
          href="tel:123-456-7890"
          className="hover:underline text-xl font-bold"
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
