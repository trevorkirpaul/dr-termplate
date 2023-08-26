import React from "react";
import Header from "../Header";

interface IProps {
  children?: React.ReactNode;
}
const PageContainer: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="p-5">{children}</div>
    </div>
  );
};

export default PageContainer;