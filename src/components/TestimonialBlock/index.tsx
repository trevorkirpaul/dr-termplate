import { ProfileCircle } from "iconoir-react";
import React from "react";

interface Props {}

const TestimonialBlock: React.FC<Props> = () => {
  return (
    <div className="flex justify-between bg-black p-5">
      <div className="mr-5">
        <ProfileCircle color="white" height={75} width={75} />
      </div>
      <div>
        <h2 className="mb-2 text-2xl text-white">Dr. First Last,MD</h2>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
          maiores doloremque! Earum aspernatur sed illum cumque sint, enim
          reiciendis facilis, dolorem odit magnam ea iusto.
        </p>
      </div>
    </div>
  );
};

export default TestimonialBlock;
