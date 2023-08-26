import React from "react";
import PageContainer from "../../components/PageContainer";
import GoogleMapsFrame from "../../components/GoogleMapsFrame";

const Location: React.FC = () => {
  return (
    <PageContainer>
      <h1 className="mb-5 flex text-xl">Location</h1>
      <div className="mb-5">
        <p>8701 Old Troy Pike</p>
        <p className="mb-2">Huber Heights, OH 45424</p>
        <a className="mb-2 inline-block underline" href="tel:123-456-7890">
          (123) 456-7890
        </a>
        <p>Hours:</p>
        <p>8am - 5pm</p>
      </div>
      <GoogleMapsFrame />
    </PageContainer>
  );
};

export default Location;
