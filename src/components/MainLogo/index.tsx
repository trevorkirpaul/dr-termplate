import React from "react";
import { PharmacyCrossSquare } from "iconoir-react";

const MainLogo: React.FC = () => {
  return (
    <div className="flex">
      <PharmacyCrossSquare className="mr-1" color="grey" />
      <span>Dr. First Last, MD</span>
    </div>
  );
};

export default MainLogo;
