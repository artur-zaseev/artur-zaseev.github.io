import { useState } from "react";

export default function Gradient () {
  let [color, setColor] = useState("red");

  return (
    <div>
      <div className="flex justify-center items-center w-screen h-screen">Gradient</div>
    </div>
  );
};
