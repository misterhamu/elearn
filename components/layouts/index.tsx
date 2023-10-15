import React from "react";
import MainNav from "../main-nav";

type Props = {
  children: React.ReactNode;
};

export default function Layouts({ children }: Props) {
  return (
    <>
      <MainNav />
    <div className=" border"></div>
      <div className="container
      max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4
      ">{children}</div>
    </>
  );
}
