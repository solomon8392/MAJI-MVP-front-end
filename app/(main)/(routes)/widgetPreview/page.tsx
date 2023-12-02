"use client";
// import Image from "next/image";

export default function WidgetPreview() {
  return (
    // w-[103.8vh]
    <div className="relative">
      <div className="bg-[#043263] w-[100%] h-[10vh] flex justify-center items-center">
        <h1 className="text-[22px] text-[#FFFFFF]">WIDGET PREVIEW</h1>
      </div>
      <div className="bg-[#eaeff4] w-[100%] h-[36.6rem]">
        <div>
          <h1 className="text-center"> Widget Preview </h1>
          <p className="text-center items-center">
            In this preview you can see all the changes you apply in the builder
            menu. <br /> This is how your checkout will look once you export it.
          </p>
        </div>
      </div>
    </div>
  );
}
