import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface IProps {
  children?: React.ReactNode;
  addPadding?: boolean;
}

const getChildrenWrapperClassName = (addPadding?: boolean) => {
  if (addPadding) {
    return "p-5 pt-14";
  }
  return "pt-14";
};

const PageContainer: React.FC<IProps> = ({ children, addPadding }) => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Header />
      <div className={getChildrenWrapperClassName(addPadding)}>{children}</div>
      <Footer />
    </div>
  );
};

export default PageContainer;
