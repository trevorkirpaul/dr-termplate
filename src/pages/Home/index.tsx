import React from "react";

import PageContainer from "../../components/PageContainer";

import medicalService1ImgUrl from "../../assets/images/medical-service-1.jpg";
import medicalService2ImgUrl from "../../assets/images/medical-service-2.jpg";
import medicalService3ImgUrl from "../../assets/images/medical-service-3.jpg";

const imageClassName = "";

const Home: React.FC = () => {
  return (
    <PageContainer>
      <div className="mb-5 pt-14">
        <h1 className="text-xl mb-2">A Great Doctor's Office</h1>
        <p>
          Visit our doctor's office to get the latest and greatest in medical
          treatment!
        </p>
      </div>
      <div className="google-maps mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.3927531801237!2d-84.10488808909518!3d39.88783807141079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883f7ccc9e649659%3A0xafbcd6379bad0b4c!2s5223%20Mason%20Ln%2C%20Phoneton%2C%20OH%2045371!5e0!3m2!1sen!2sus!4v1693022875721!5m2!1sen!2sus"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <h2 className="text-xl mb-2">Services</h2>
        <ul>
          <li className="mb-3">
            <h3 className="text-lg">Service 1</h3>
            <p className="mb-3">
              This is one of our services. You can expect great treatment of
              your ailment.
            </p>
            <img className={imageClassName} src={medicalService1ImgUrl} />
          </li>

          <li>
            <h3 className="text-lg mb-3">Service 2</h3>
            <p className="mb-3">
              This is one of our services. You can expect great treatment of
              your ailment.
            </p>
            <img className={imageClassName} src={medicalService2ImgUrl} />
          </li>

          <li>
            <h3 className="text-lg">Service 3</h3>
            <p className="mb-3">
              This is one of our services. You can expect great treatment of
              your ailment.
            </p>
            <img className={imageClassName} src={medicalService3ImgUrl} />
          </li>
        </ul>
      </div>
    </PageContainer>
  );
};

export default Home;
