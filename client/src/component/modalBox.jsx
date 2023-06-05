import React, { useState } from "react";

function ModalBox({ title, children, footer }) {

  return (
    <>
   <div className="fixed top-0 left-0 w-full h-full overflow-x-hidden overflow-y-auto flex justify-center items-center z-[99] backdrop-blur-md">
      <div className="flex bg-darkSecondary flex-col shadow-2xl min-w-[20rem] max-w-[35rem] md:w-[35rem] py-2 shadow-white px-1 md:px-5">
        <h2 className="text-2xl text-darkTextPrimary text-center font-semibold">
          {title}
        </h2>
        <div className=" bg-darkTertiary w-full h-[3px] mt-2"></div>
        <div className="">{children}</div>
        <div className=" bg-darkTertiary w-full h-[3px] mt-2"></div>
       {footer}
      </div>
    </div>
    
    </>
  );
}

export default ModalBox;

export function ModalFooter({children}){
  return (
    <div className="flex w-full flex-row gap-x-2 justify-end mt-2">
    {children}
  </div>
  )
}