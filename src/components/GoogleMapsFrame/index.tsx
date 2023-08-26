import React from "react";

const defaultSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195952.86606716664!2d-84.4260174132812!3d39.87953440000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883f7cfb8be89cfd%3A0xa830ff2643c22f3!2sKettering%20Health%20Huber!5e0!3m2!1sen!2sus!4v1693056676789!5m2!1sen!2sus";

interface IProps {
  src?: string;
}

const GoogleMapsFrame: React.FC<IProps> = ({ src = defaultSrc }) => {
  return (
    <div className="rounded google-maps mb-5">
      <iframe
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapsFrame;
