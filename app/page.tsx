import React from "react";
import Left from "./components/left/Left";
import Right from "./components/right/Right";
import Dot from "./components/general/Dot";

const page = () => {
  return (
    <Dot>
      <div className="p-20 flex justify-between w-full">
        <div className="fixed h-screen">
          <Left />
        </div>
        <div className="flex w-full justify-end overflow-y-auto">
          <Right />
        </div>
      </div>
    </Dot>
  );
};

export default page;
