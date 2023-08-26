import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  children?: React.ReactNode;
}
const PageContainer: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <div className="p-5 pt-14">{children}</div>
      <Footer />
    </div>
  );
};

export default PageContainer;
