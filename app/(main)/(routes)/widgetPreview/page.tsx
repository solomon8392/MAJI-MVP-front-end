"use client";
// import Image from "next/image";

export default function WidgetPreview() {
    return (
        <div className="w-[50%] relative">
        <div className="bg-[#0F76CA] w-[100%] h-[10vh] flex justify-center items-center">
          <h1 className="text-[22px] text-[#FFFFFF]">WIDGET BUILDER</h1>
        </div>
        <div className="bg-[#eaeff4] w-[100%] h-[36.3rem]">
            <div>
                <h1 className="text-center"> Widget Preview </h1>
                <p className="text-center items-center">In this preview you can see all the changes you apply in the builder menu. <br /> This is how your checkout will look once you export it.

</p>
            </div>
        </div>
        </div>
    )
}
