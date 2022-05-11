import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="py-10   md:w-[80%] mx-auto flex justify-between bg-black  ml-5 md:ml-8 lg:ml-[50px] ">
      <p className="text-sm text-slate-500 barlow">
        Copyright &copy; 2022 Space Savvy
      </p>
      <p
        className="text-sm text-slate-500 underline barlow cursor-pointer hover:text-white absolute ml-[280px]  md:ml-[620px]     lg:ml-[1000px]  "
        onClick={() => scrollToTop()}
      >
        Back to Top
      </p>
    </div>
  );
}
