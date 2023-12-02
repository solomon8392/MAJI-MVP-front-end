"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import Modal from "../../Modal/page";

export default function CheckoutPage() {
  const items = [
    "1. Product",
    "2. Payment",
    "3. Styling",
    "4. Export",
    "5. Backing",
  ];
  const [showContent, setShowContent] = useState(0);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (image && typeof window !== "undefined") {
      localStorage.setItem("selectedImage", image);
    }
  }, [image]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      console.log("Selected file:", file);

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

  const handleMouseEnter = (index: any) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section className="lg:w-[50%] md:w-[100%] w-[100%] absolute">
      <div className="">
        <div className="bg-[#0F76CA] w-[100%] h-[10vh] flex justify-center items-center">
          <h1 className="text-[22px] text-[#FFFFFF]">WIDGET BUILDER</h1>
        </div>
        <div className="">
          <div className="bg-[#DADADA] lg:h-[7vh] md:h-[6vh] h-[5vh] items-center text-center">
            <ul className="flex gap-[15px] px-5 cursor-pointer justify-around items-center text-center">
              {items.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setShowContent(index)}
                  className={
                    showContent === index
                      ? "text-[#0F76CA] bg-[#FFFFFF] h-[7vh] text-center lg:text-[15px] text-[8px] md:text-[16px] font-bold items-center w-[20%] rounded-tl-0 lg:rounded-tr-[20px] md:rounded-tr-[10px] rounded-tr-[10px] lg:rounded-tl-[20px] md:rounded-tl-[10px] rounded-tl-[10px] rounded-br-0 rounded-bl-0 flex justify-center"
                      : "bg-transparent w-1/5 h-[20%] lg:text-[15px] text-[8px] md:text-[16px] flex justify-center font-bold text-[#000000]"
                  }
                >
                  <a>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className=" px-5 overflow-y-scroll h-[500px]">
            <div className="">
              {showContent === 0 && (
                <div className="">
                  <div className="flex absolute px-5 left-0 items-center lg:top-[14.9%] md:top-[11.9%] top-[6.9%] justify-center h-full">
                    <div className="">
                      <div className="grid gap-[13px]">
                        <h1 className="lg:text-[24px] md:text-[20px] text-[18px] text-[#145387] font-popPins font-bold">
                          Checkout Product Details
                        </h1>
                        <p className="font-popPins lg:text-[18px] md:text-[16px] text-[11px] text-[#000000]">
                          Define the product for which you are looking to
                          receive continuous <br /> real-time payment
                          transactions.
                        </p>
                      </div>
                      <div className="grid gap-2 py-4">
                        <span className="lg:text-[18px] md:text-[15px] text-[13px] text-[#444A6A] font-popPins">
                          Product Name
                        </span>
                        <input
                          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none lg:w-[475px] md:w-[605px] w-[103%] h-[49px] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm text-[18px] font-popPins"
                          type="text"
                          aria-label="Filter projects"
                          placeholder="Product Name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <span className="lg:text-[18px] md:text-[15px] text-[13px] text-[#444A6A] font-popPins">
                          Product Description
                        </span>
                        <textarea
                          id="myTextarea"
                          className="lg:h-[140px] md:h-[130px] h-[108px] focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none lg:w-[478px] md:w-[605px] w-[103%] text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 ring-1 ring-slate-200 shadow-sm"
                          placeholder="Product Description"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center text-center gap-5 py-4">
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
                                width={100}
                                height={100}
                                src={require("/public/png/icon2.png")}
                                alt=""
                                className="lg:w-[61px] md:w-[58px] w-[50px] lg:h-[61px] md:h-[58px] h-[50px] cursor-pointer"
                              />
                            </label>
                          )}
                          {image != null && (
                            <Image
                              width={100}
                              height={100}
                              src={image as string}
                              alt=""
                              style={{ maxWidth: "50%", height: "59%" }}
                              className="flex justify-center items-center "
                            />
                          )}
                        </div>

                        <span className="text-[#000000] lg:text-[18px] md:text-[16px] text-[13px] font-bold text-center font-popPins">
                          Product Image
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showContent === 1 && (
                <div className="">
                  <div className="flex flex-col absolute lg:top-[8.9%] md:top-[5.9%] top-[1.9%] px-4 gap-[30px] left-0 items-center lg:w-full md:w-full  justify-center h-full">
                    <div className="grid gap-[30px]">
                      <div className="">
                        <h1 className="lg:text-[24px] md:text-[20px] text-[#145387] font-popPins font-bold">
                          Checkout Product Details
                        </h1>
                        <p className="font-popPins lg:text-[18px] md:text-[15px] text-[10px] text-[#000000]">
                          Specify your preferred payment options to start the
                          process of <br /> receiving continuous real-time
                          payments through the Maji Protocol.
                        </p>
                      </div>

                      <div className="">
                        <h1 className="lg:text-[24px] md:text-[20px] text-[#145387] font-popPins font-bold">
                          Payment Methods
                        </h1>
                        <div className="lg:py-6 md:py-5 py-3 border-none">
                          <button className="lg:w-[277px] md:w-[270px] w-[225px] border-none items-center text-[#EAF9FA] lg:text-[18px] md:text-[16px] text-[15px] text-center h-[7vh] bg-[#0F76CA] ">
                            Add New Payment Method
                          </button>
                        </div>
                      </div>

                      <div className="gap-[30px]">
                        <div className="flex justify-around gap-[20px] text-center items-center border-b-[1px] border-[#A6C4C6]">
                          {Addsitems.map((item, index) => (
                            <h1
                              key={index}
                              className="text-[#000000] lg:text-[18px] md:text-[14px] text-[11px] text-center items-center flex justify-center font-popPins"
                            >
                              {item}
                            </h1>
                          ))}
                        </div>
                        <div
                          className="flex justify-around py-4 text-center items-center border-b-[1px] border-[#A6C4C6]"
                          onMouseEnter={() => handleMouseEnter("icons")}
                          onMouseLeave={handleMouseLeave}
                        >
                          {Addsitems1.map((item, index) => (
                            <h1
                              key={index}
                              className="text-[#000000] text-center items-center flex justify-center lg:text-[16px] md:text-[14px] text-[11px] font-popPins"
                            >
                              {item}
                            </h1>
                          ))}
                          {hoveredIndex === "icons" && (
                            <div className="flex justify-center absolute items-center text-center">
                              <div>
                                <div className="" onClick={handleOpenModal}>
                                  <Image
                                    width={25}
                                    height={25}
                                    src={require("/public/png/delete.png")}
                                    alt=""
                                    className=""
                                  />
                                </div>
                                {openModal && (
                                  <Modal closeModal={handleCloseModal} />
                                )}
                              </div>

                              <div className="">
                                <Image
                                  width={25}
                                  height={25}
                                  src={require("/public/png/Edit.png")}
                                  alt=""
                                  className=""
                                />
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex justify-around gap-[20px] py-7 border-b-[1px] border-[#A6C4C6]"></div>
                        <div className="flex justify-around gap-[20px] py-7 border-b-[1px] border-[#A6C4C6]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showContent === 2 && (
                <div className="">
                  <div className="flex flex-col absolute lg:top-[21.9%] md:top-[15.9%] top-[14.1%] px-4 gap-[30px] left-0 items-center w-full justify-center h-full">
                    <div className="grid">
                      <div className="">
                        <h1 className="lg:text-[24px] md:text-[20px] text-[#145387] font-popPins font-bold">
                          Widget Styling
                        </h1>
                        <p className="font-popPins lg:text-[18px] md:text-[15px] text-[13px] text-[#000000]">
                          Feel free to personalize the appearance and style of
                          the widget.
                        </p>
                      </div>
                      <div className="">
                        <h1 className="lg:text-[24px] md:text-[20px] text-[18px] text-[#000000] font-popPins font-bold">
                          Borders
                        </h1>
                        <div>
                          <div className="">
                            <h3 className="lg:text-[18px] md:text-[16px] text-[13px] text-[#000000]">
                              Container border-radius: X
                            </h3>
                            <div className="lg:w-[90%] md:w-[100%] w-[100%]">
                              <Slider
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                              />
                            </div>
                          </div>
                          <div className="">
                            <h3 className="lg:text-[18px] md:text-[16px] text-[13px] text-[#000000]">
                              Field border-radius: X
                            </h3>
                            <div className="lg:w-[90%] md:w-[100%] w-[100%]">
                              <Slider
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                              />
                            </div>
                          </div>
                          <div className="">
                            <h3 className="lg:text-[18px] md:text-[16px] text-[13px] text-[#000000]">
                              Button border-radius: X
                            </h3>
                            <div className="lg:w-[90%] md:w-[100%] w-[100%]">
                              <Slider
                                defaultValue={50}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid">
                        <h1 className="lg:text-[24px] md:text-[20px] font-bold text-[15px] text-[#444A6A]">
                          Color
                        </h1>
                        <div className=" lg:flex md:flex-col flex-col py-2 gap-6">
                          <div className="grid">
                            <h3>Primary color</h3>
                            <input
                              className="border-[1px] border-[#A6C4C6] outline-none border-none appearance-none rounded-[15px] h-[52px] lg:w-[277px] md:w-[100%] w-[100%] text-sm leading-6 text-slate-900 placeholder-slate-400 py-2 pl-4 ring-1 ring-slate-200 shadow-sm text-[18px] font-popPins font-bold"
                              type="text"
                              aria-label="Filter projects"
                              placeholder=""
                            />
                          </div>
                          <div className="grid">
                            <h3>Background color</h3>
                            <input
                              className="border-[1px] border-[#A6C4C6] border-none outline-none appearance-none rounded-[15px] h-[52px] lg:w-[277px] md:w-[100%] w-[100%] text-sm leading-6 text-slate-900 placeholder-slate-400 py-2 pl-4 ring-1 ring-slate-200 shadow-sm text-[18px] font-popPins font-bold"
                              type="text"
                              aria-label="Filter projects"
                              placeholder=""
                            />
                          </div>
                        </div>
                        <div className="">
                          <h1 className="text-[#444A6A] text-[24px] font-popPins">
                            View type
                          </h1>
                          <div>
                            <FormControl className="flex">
                              <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                className="flex"
                              >
                                <div className="flex">
                                  <FormControlLabel
                                    value="Inline"
                                    control={<Radio />}
                                    label="Inline"
                                  />
                                  <FormControlLabel
                                    value="Drawer"
                                    control={<Radio />}
                                    label="Drawer"
                                  />
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {showContent === 3 && (
                <div className="flex flex-col absolute lg:bottom-[0.0%] md:bottom-[3.9%] bottom-[10%] px-4 gap-[30px] left-0 items-center justify-center h-full">
                  <div className="grid w-[100%] gap-2">
                    <h1 className="font-popPins text-[#000000] lg:text-[24px] md:text-[20px] text-[18px]">
                      Publish to IPFS
                    </h1>
                    <span className="font-popPins lg:text-[18px] md:text-[16px] text-[9px] text-[#000000]">
                      You’ll create a hosted link to your checkout which you can
                      embed in <br /> your CTAs.
                    </span>

                    <button className="text-[#FFFFFF] outline-none bg-[#3742fa] w-[152px] h-[60px]">
                      Download JSON
                    </button>
                  </div>
                  <div className="grid gap-2">
                    <h1 className="font-popPins text-[#000000] lg:text-[24px] md:text-[20px] text-[18px]">
                      Publish Json
                    </h1>
                    <span className="font-popPins lg:text-[18px] md:text-[16px] text-[9px] text-[#000000]">
                      You’ll create a hosted link to your checkout which you can
                      embed in <br /> your CTAs.
                    </span>

                    <button className="text-[#FFFFFF] outline-none bg-[#3742fa] w-[152px] h-[60px]">
                      Download JSON
                    </button>
                  </div>
                </div>
              )}

              {showContent === 4 && (
                <div className="top-[10.9%]">
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
                      <Image
                        width={100}
                        height={100}
                        src={require("/public/png/icon2.png")}
                        alt=""
                      />
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
      </div>
    </section>
  );
}
