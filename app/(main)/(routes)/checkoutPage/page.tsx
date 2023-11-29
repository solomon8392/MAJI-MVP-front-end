"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Slider from "@mui/material/Slider";

export default function CheckoutPage() {
  const items = [
    "1.Product",
    "2.Payment",
    "3.Styling",
    "4.Export",
    "5.Backing",
  ];
  const [showContent, setShowContent] = useState(0);
  const storedImage = localStorage.getItem("selectedImage");
  const [image, setImage] = useState<string | null>(storedImage);
  
  useEffect(() => {
    if (image) {
      localStorage.setItem("selectedImage", image);
    }
  }, [image]);
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining
    
    if (file) {
      console.log('Selected file:', file);
      
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };
  
  const handleCancel = () => {
    setImage(null);
    localStorage.removeItem("selectedImage");
  };
  
  const Addsitems = ["NETWORK", "TOKEN", "Stream Rate", "Receiver"];
  const Addsitems1 = ["Goerli", "USDC", "100 / month", "0xF26C...3a22"];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="w-[50%] absolute">
      <div className="">
        <div className="bg-[#1db227] w-[100%] h-[10vh] flex justify-center items-center">
          <h1 className="">Checkout Builder</h1>
        </div>
        <div className="">
          <div className=" bg-[gray]">
          <ul className="flex gap-[20px] px-5 cursor-pointer justify-around">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => setShowContent(index)}
                className={
                  showContent === index ? "text-blue-700 bg-[red] w-[20%] h-[20%] flex justify-center" : "bg-[pink] w-[20%] h-[20%] flex justify-center text-black"
                }
              >
                <a>{item}</a>
              </li>
            ))}
          </ul>
          </div>


          <div className=" px-5">
            <div className="overflow-y-scroll h-[500px]">
              {showContent === 0 && (
                <div className="">
                  <div className="flex absolute px-5 left-0 items-center justify-center h-full">
                    <div className="">
                      <div className="grid gap-[13px]">
                        <h1 className="text-[24px] text-[#000000] font-popPins font-bold">
                          Checkout Product Details
                        </h1>
                        <p className="font-popPins text-[18px] text-[#000000]">
                          Define the product for which you are looking to
                          receive continuous <br /> real-time payment
                          transactions.
                        </p>
                      </div>
                      <div className="grid gap-2 py-4">
                        <span className="text-[18px] text-[#4e3939] font-popPins">
                          Product Name
                        </span>
                        <input
                          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[480px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm text-[18px] font-popPins font-bold"
                          type="text"
                          aria-label="Filter projects"
                          placeholder="Product Name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <span className="text-[18px] text-[#000000] font-popPins">
                          Product Name
                        </span>
                        <textarea
                          id="myTextarea"
                          className="h-[140px] focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[480px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm"
                          placeholder="Product Description"
                        />
                      </div>
                      <div className="flex flex-col items-center gap-5 py-4">
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="imageInput"
                          />

                          {!image && (
                            <label htmlFor="imageInput">
                              <Image
                                src={require("../../../../public/png/icon2.png")}
                                alt=""
                                className="w-[61px] h-[61px] cursor-pointer"
                              />
                            </label>
                          )}

                          {Image && (
                            <div>
                              <img
                                src={image}
                                alt=""
                                style={{ maxWidth: "50%", height: "49%" }}
                              />
                              <button onClick={handleCancel}>Cancel</button>
                            </div>
                          )}
                        </div>

                        <span>Product Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showContent === 1 && (
                <div className="">
                  <div className="flex flex-col absolute top-[0px] px-4 gap-[30px] left-0 items-center justify-center h-full">
                    <div className="grid gap-[30px]">
                      <div className="">
                        <h1 className="text-[24px] text-[#000000] font-popPins font-bold">
                          Checkout Product Details
                        </h1>
                        <p className="font-popPins text-[18px] text-[#000000]">
                          Specify your preferred payment options to start the
                          process of receiving <br /> continuous real-time
                          payments through the Maji Protocol.
                        </p>
                      </div>

                      <div className="">
                        <h1 className="text-[24px] text-[#000000] font-popPins font-bold">
                          Payment Methods
                        </h1>
                        <button className="w-[237px] items-center text-center h-[7vh] bg-[#0F76CA] gap-[10px]">
                          Add New Payment Method
                        </button>
                      </div>

                      <div className="gap-[30px]">
                        <div className="flex justify-around gap-[20px] text-center items-center border-b-[1px] border-[#000000]">
                          {Addsitems.map((item, index) => (
                            <h1
                              key={index}
                              className="text-[#000000] text-[13px] text-center items-center flex justify-center font-popPins"
                            >
                              {item}
                            </h1>
                          ))}
                        </div>
                        <div
                          className="flex justify-around gap-[10px] py-4 text-center items-center border-b-[1px] border-[#000000]"
                          onMouseEnter={() => handleMouseEnter("icons")}
                          onMouseLeave={handleMouseLeave}
                        >
                          {Addsitems1.map((item, index) => (
                            <h1
                              key={index}
                              className="text-[#000000] text-center items-center flex justify-center text-[13px] font-popPins"
                            >
                              {item}
                            </h1>
                          ))}
                          {hoveredIndex === "icons" && (
                            <div className="flex justify-center absolute items-center text-center">
                              <Image
                                src={require("../../../../public/png/delete.png")}
                                alt=""
                                className=""
                              />
                              <Image
                                src={require("../../../../public/png/Edit.png")}
                                alt=""
                                className=""
                              />
                            </div>
                          )}
                        </div>

                        <div className="flex justify-around gap-[20px] py-7 border-b-[1px] border-[#000000]"></div>
                        <div className="flex justify-around gap-[20px] py-7 border-b-[1px] border-[#000000]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showContent === 2 && (
                <div className="">
                  <div className="flex flex-col absolute top-[0px] px-4 gap-[30px] left-0 items-center justify-center h-full">
                    <div className="grid">
                      <div className="">
                        <h1 className="text-[24px] text-[#000000] font-popPins font-bold">
                          Widget Styling
                        </h1>
                        <p className="font-popPins text-[18px] text-[#000000]">
                          Feel free to personalize the appearance and style of
                          the widget.
                        </p>
                      </div>
                      <div className="">
                        <h1 className="text-[24px] text-[#000000] font-popPins font-bold">
                          Borders
                        </h1>
                        <div>
                          <div className="">
                            <h3 className="text-[18px] text-[#000000]">
                              Container border-radius: X
                            </h3>
                            <Box sx={{ width: 500 }}>
                              <Slider
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                              />
                            </Box>
                          </div>
                          <div className="">
                            <h3 className="text-[18px] text-[#000000]">
                            Field border-radius: X
                            </h3>
                            <Box sx={{ width: 500 }}>
                              <Slider
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                              />
                            </Box>
                          </div>
                          <div className="">
                            <h3 className="text-[18px] text-[#000000]">
                              Button border-radius: X
                            </h3>
                            <Box sx={{ width: 500 }}>
                              <Slider
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                              />
                            </Box>
                          </div>
                        </div>

                      </div>

                      <div className="grid">
                        <h1 className="text-[24px] text-[#000000]">Color</h1>
                        <div className="flex">
                            <div className="grid">
                                <h3>Primary color</h3>
                                <input
                          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none h-[52px] w-[307px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm text-[18px] font-popPins font-bold"
                          type="text"
                          aria-label="Filter projects"
                          placeholder=""
                        />
                            </div>
                            <div className="grid">
                                <h3>Background color</h3>
                                <input
                          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none h-[52px] w-[307px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm text-[18px] font-popPins font-bold"
                          type="text"
                          aria-label="Filter projects"
                          placeholder=""
                        />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showContent === 3 && (
                <div className="flex flex-col absolute top-[2px] px-4 gap-[30px] left-0 items-center justify-center h-full">
                  <div className="grid w-full gap-3">
                    <h1 className="font-popPins text-[#000000] text-[24px]">
                      Publish to IPFS
                    </h1>
                    <span className="font-popPins text-[18 px] text-[#000000]">
                      You’ll create a hosted link to your checkout which you can
                      embed in <br /> your CTAs.
                    </span>

                    <button className="text-[#FFFFFF] bg-[#3742fa] w-[152px] h-[60px]">
                      Download JSON
                    </button>
                  </div>
                  <div className="grid gap-3">
                    <h1 className="text-[24px] text-[#000000] font-popPins font-bold">
                      Download JSON
                    </h1>
                    <span className="font-popPins text-[18px] text-[#000000]">
                      Use this JSON configuration when embedding react or web
                      component <br /> directly to your code
                    </span>

                    <button className="text-[#FFFFFF] bg-[#3742fa] w-[152px] h-[60px]">
                      Download JSON
                    </button>
                  </div>
                </div>
              )}

            {showContent === 4 && (
               <div className="">
                 <div className="">
                    <div className="">
                        <h1>NFT Symbol</h1>
                        <input
                          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[480px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm text-[18px] font-popPins font-bold"
                          type="text"
                          aria-label="Filter projects"
                        />
                    </div>
                    <div className="">
                        <h1>NFT Name</h1>
                        <input
                          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[480px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm text-[18px] font-popPins font-bold"
                          type="text"
                          aria-label="Filter projects"
                        />
                    </div>
                    <div className="">
                        <h1>Contract Owner</h1>
                        <input
                          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-[480px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm text-[18px] font-popPins font-bold"
                          type="text"
                          aria-label="Filter projects"
                        />
                    </div>
                </div>

                <div className="">
                    <div> 
                        <Image src={require ("../../../../public/png/icon2.png")} alt="" />
                        <h1>NFT Image</h1>
                    </div>
                    <div>
                        <button>Create NFT</button>
                    </div>
                </div>
               </div>
            )}
            </div>
          </div>
        </div>
      {/* <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
    </FormControl> */}
      </div>

    </section>
  );
}
