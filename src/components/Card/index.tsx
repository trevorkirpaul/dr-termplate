import React from "react";

interface IProps {
  title: string;
  className?: string;
  body: string;
}

const Card: React.FC<IProps> = ({ title, body, className }) => {
  return (
    <div
      className={
        "rounded-lg border border-gray-200 bg-gray-100 bg-white shadow " +
        className
      }
    >
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{body}</p>
      </div>
    </div>
  );
};

export default Card;
