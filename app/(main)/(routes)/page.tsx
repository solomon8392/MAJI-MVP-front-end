"use client";

import Image from "next/image";
import Head from "next/head";
// import link from "link/next"
import { useState } from "react";

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const Array1 = [
    ['Web3 Services & APIs', 'Donations and Creators', 'DAOs and Communities'],
  ];

  const Array2 = [
    ['Recurring payments simplified', 
      'Monetize your following',
      'Generate sustainable revenue'
  ],
  ]

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,700&family=Fira+Code:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;700;800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;1,100&family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,200;1,300;1,500;1,700;1,800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,700&family=Fira+Code:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;700;800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;1,100&family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,200;1,300;1,500;1,700;1,800&family=Source+Code+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,700&family=Fira+Code:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;700;800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,200;1,300;1,500;1,700;1,800&family=Source+Code+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>

      <div className="relative w-full bg-[#eaeff4] px-2">
        <div className="items-center grid gap-3">
          <h1 className="text-center lg:text-[50px] text-[#2e3a47] font-bold md:text-[42px] text-[30px] font-firaCode">
            Generate subscription revenue in <br /> seconds.
          </h1>
          <p className="text-center lg:text-[17px] md:text-[16px] text-[14px] px-9 text-[#7c7d7d] font-popPins">
            Build a best-in-class crypto subscription experience today. <br />{" "}
            Maximise conversion and retention.
          </p>
          <div className="flex flex-col items-center">
            <a href="" className="bg-[#46be50] text-[#FFFFFF] font-popPins justify-center flex font-bold lg:text-[15px] md:text-[13px] text-[12px] items-center rounded-full lg:w-[270px] md:w-[250px] w-[227px] h-[50px]">
              try the wedget Builder component 
            </a>
            <br />
            <a href="" className="lg:text-[15px] md:text-[12px] font-popPins justify-center flex text-[12px] lg:w-[150px] md:w-[140px] w-[130px] font-bold h-[50px] border-[#46be50] items-center border-[1px] rounded-full cursor-pointer">
              Book a Demo
            </a>
          </div>

          <div className="flex justify-center items-center">
            <div className="max-w-1200px lg:w-[90%] md:w-[60%] overflow-hidden flex justify-center items-center">
              <Image
                src={require("../../../public/png/heroA1.png")}
                alt=""
                className="flex items-center justify-center"
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="grid gap-2 items-center">
            <h1 className="text-center lg:text-[40px] md:text-[30px] text-[30px] font-bold  font-firaCode text-[#2e3a47]">
              Customize and integrate your <br /> checkout in minutes
            </h1>
            <p className="text-center lg:text-[16px] md:text-[15px] text-[14px] font-popPins text-[#7c7d7d]">
              Start accepting crypto subscriptions in 3 easy steps. Customize
              your checkout widget, export it <br />
              as JSON or publish it to IPFS for a hosted link, and integrate it
              into your platform.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center items-center px-9 py-9 lg:gap-[30px] md:gap-[15px] gap-[15px]">
              <div className="flex justify-center">
              <div className="flex flex-col relative gap-[8px] text-[#2e3a47] rounded-[30px] bg-[#FFFFFF] lg:w-[50vh] md:w-[60vh] w-[50vh] p-[20px] justify-center items-center">
                <h1 className="font-firaCode font-extrabold text-[19px]">Build Widget</h1>
                <h4 className="text-[16px] font-popPins text-[#7c7d7d]">Customize every detail</h4>
                <div className="flex justify-center w-[65vh] items-center">
                  <Image
                    src={require("../../../public/png/icon1.png")}
                    className="w-[40vh] "
                    alt=""
                  />
                </div>
              </div>
              
              </div>

                  <div className="flex justify-center">
              <div className="flex flex-col relative gap-[2px] text-[#2e3a47] rounded-[30px] bg-[#FFFFFF] lg:w-[50vh] md:w-[60vh] w-[50vh] p-[10px] justify-center items-center">
              <h1 className="font-firaCode font-extrabold text-[19px]">Export</h1>
                <h4 className="text-[16px] font-popPins text-[#7c7d7d]">Select most convenient option</h4>
                <div className="flex justify-center w-[47vh] items-center">
                  <Image
                    src={require("../../../public/png/export.png")}
                    className=""
                    alt=""
                  />
                </div>
              </div>
                  </div>
                  <div className="flex justify-center">                    
              <div className="flex flex-col relative gap-[8px] text-[#2e3a47] rounded-[30px] bg-[#FFFFFF] lg:w-[50vh] md:w-[60vh] w-[50vh] p-[20px] justify-center items-center">
              <h1 className="font-firaCode font-extrabold text-[19px]">Integrate</h1>
                <h4 className="text-[16px] font-popPins text-[#7c7d7d]">Receive payment second-by-second</h4>
                <div className="flex justify-center w-[65vh] items-center">
                  <Image
                    src={require("../../../public/png/icon1.png")}
                    className="w-[40vh] "
                    alt=""
                  />
                </div>
              </div>
                  </div>

            </div>         </div>
          <div className="flex flex-col gap-[90px] justify-center items-center">
            <div className="relative rounded-[30px] bg-[#FFFFFF] lg:w-[75%] md:w-[75%] w-[50vh] flex justify-center items-center">
              <div className="w-[100%] flex flex-col justify-center items-center">
              <h1 className="text-center lg:text-[30px] md:text-[20px] text-[17px] text-[#2e3a47] py-[5vh] font-firaCode font-extrabold">
                Watch your revenue grow in real-time.
              </h1>
              <p className="text-center py-2 px-4 lg:text-[16px] md:text-[13px] text-[15px] font-popPins text-[#7c7d7d]">
                With a single transaction, Superfluid Subscriptions flow by the
                second into your wallet, <br /> reducing transaction costs and
                unlocking immediate capital availability.
              </p>
              <div className="w-[50%]">
                <Image src={require("../../../public/png/heroA1.png")} alt="" />
              </div>
                </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <h5 className="text-center text-[16px] m-[50px] py-6 font-bold font-firaCode text-[#46be50]">Made for scaling</h5>
            <h1 className="text-center lg:text-[40px] md:text-[30px] text-[30px] font-bold  font-firaCode text-[#2e3a47]">
              Grow your business with frictionless <br /> subscriptions.
            </h1>
            <p className="items-center text-center py-4 px-6 lg:text-[16px] md:text-[14px] text-[15px] text-[#7c7d7d]">
              In as little as 3 clicks, users can subscribe to your web3 product
              or service with money <br /> streams. Money streams flow in
              perpetuity, mitigating non-payment risk and reducing <br /> churn.
            </p>

            <div className="flex items-center text-center justify-center lg:w-[50%] md:w-[55%] w-[80%]">
              <Image src={require("../../../public/png/heroA2.png")} alt="" />
            </div>
          </div>

          <div className="">
            <div className="flex flex-col text-center">
              <h1 className="text-center lg:text-[50px] text-[#2e3a47] font-bold md:text-[42px] text-[30px] font-firaCode">See it in action</h1>
              <h3 className="text-[#707070] text-[15px] py-4 font-bold">Try one of our interactive demos below.</h3>
            </div>
            <div className="flex py-4 justify-center">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-[20px]">
              {[0, 1, 2].map((index) => (
        <div className="justify-center items-center lg:w-[100%] md:w-[100%] w-[100%] lg:h-[65vh] md:h-[69vh] h-[65vh] bg-[#FFFFFF] flex rounded-3xl"        
        >
                    <div className="gap-[20vh]">
                      <div className="flex justify-center items-center"  key={index}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}>
                        <div className="flex justify-center relative items-center px-2 text-center">
                          <Image
                            src={require("../../../public/png/devshare.png")}
                            alt=""
                            className="lg:w-[100%] md:w-[95%] w-[160%] lg:h-[50vh] md:h-[52vh] h-[49vh] flex justify-center items-center rounded-3xl group-hover:opacity-80 transition-opacity duration-300"
                          />
                        </div>

                          <>
                            {" "}
                            <div className="flex justify-center items-center text-center">
                            <button className="absolute flex">
                            {hoveredIndex === index && (
                           <span className="flex">Read more</span>       
                              )}
                            </button>{" "}
                            </div>
                          </>
                    </div>
                    <div className="px-4 py-4">
                    {Array1.map((innerArray, outerIndex) => (
        <div key={outerIndex}>
          {innerArray.slice(0, 2).map((item, innerIndex) => (
            <p key={innerIndex}>{`Item ${innerIndex}: ${item}`}</p>
          ))}
        </div>
      ))}

                    </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center overflow-hidden">
          <div className="bg-[#21253a] absolute w-full h-[60rem] relative overflow-hidden rounded-[90px]">

          
          <div className="flex flex-col justify-center items-center text-center">
                      <div className="py-[20px]">
                        <h1 className="text-center lg:text-[90px] text-[#FFFFFF] font-extrabold md:text-[42px] text-[30px] font-firaCode"> Made for your <br /> needs.</h1>
                      </div>


                      <section className="relative ">
                        <div className="absolute bg-[#39468e] justify-center flex items-center blur-[120px] top-[40%] right-0 left-0 w-[229px] z-0 h-[409px] opacity-[99vh]">
                          <div className="relative z-10 item-center"></div>
                        </div>
                      </section>

                        <div className="grid gap-[20px]">
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-9">

                      <div className="border-[2px] border-[#47559d] w-[45vh] h-[40vh] flex justify-center items-center rounded-3xl">
                        <div className="text-center items-center gap-[10px]">
                            <div className="flex justify-center items-center">
                          <Image src={require("../../../public/svg/icons1A.svg")} className="flex items-center justify-center" alt="" />
                            </div>
                          <div className="py-2">
                            <h1 className="text-[16px] text-[#FFFFFF] font-extrabold font-popPins">Streamlined buyer experience</h1>
                            <h4 className="text-[14px] py-4 font-popPins font-bold text-[#FFFFFF]">Enable customers to subscribe with <br /> crypto in as few as 3 clicks</h4>
                          </div>
                        </div>
                      </div>
                      <div className="border-[2px] border-[#47559d] w-[45vh] h-[40vh] flex justify-center items-center rounded-3xl">
                        <div className="text-center items-center gap-[10px]">
                            <div className="flex justify-center items-center">
                          <Image src={require("../../../public/svg/icon1B.svg")} className="flex items-center justify-center" alt="" />
                            </div>
                          <div className="py-2">
                            <h1 className="text-[16px] text-[#FFFFFF] font-extrabold font-popPins">Highly customizable design</h1>
                            <h4 className="text-[14px] py-4 font-popPins font-bold text-[#FFFFFF]">Match your checkout to your <br /> brand colors, typography, & <br /> more</h4>
                          </div>
                        </div>
                      </div>
                      <div className="border-[2px] border-[#47559d] w-[45vh] h-[40vh] flex justify-center items-center rounded-3xl">
                        <div className="text-center items-center gap-[10px]">
                            <div className="flex justify-center items-center">
                          <Image src={require("../../../public/svg/icon3A.svg")} className="flex items-center justify-center" alt="" />
                            </div>
                          <div className="py-2">
                            <h1 className="text-[16px] text-[#FFFFFF] font-extrabold font-popPins">Easy to integrate</h1>
                            <h4 className="text-[14px] py-4 font-popPins font-bold text-[#FFFFFF]">Implement your Subscription Checkout <br /> starting with just a few lines of code</h4>
                          </div>
                        </div>
                      </div>
                      <div className="border-[2px] border-[#47559d] w-[45vh] h-[40vh] flex justify-center items-center rounded-3xl">
                        <div className="text-center items-center gap-[10px]">
                            <div className="flex justify-center items-center">
                          <Image src={require("../../../public/svg/icon4C.svg")} className="flex items-center justify-center" alt="" />
                            </div>
                          <div className="py-2">
                            <h1 className="text-[16px] text-[#FFFFFF] font-extrabold font-popPins">Simple Accounting</h1>
                            <h4 className="text-[14px] py-4 font-popPins font-bold text-[#FFFFFF]">Easily retrieve and export granular <br /> stream data as .csv</h4>
                          </div>
                        </div>
                      </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-9">

                      <div className="border-[2px] border-[#47559d] w-[45vh] h-[35vh] flex justify-center items-center rounded-3xl">
                        <div className="text-center items-center gap-[10px]">
                            <div className="flex justify-center items-center">
                          <Image src={require("../../../public/svg/icons1A.svg")} className="flex items-center justify-center" alt="" />
                            </div>
                          <div className="py-2">
                            <h1 className="text-[16px] text-[#FFFFFF] font-extrabold font-popPins">Highly customizable design</h1>
                            <h4 className="text-[14px] py-4 font-popPins font-bold text-[#FFFFFF]">Match your checkout to your <br /> brand colors, typography, & <br /> more</h4>
                          </div>
                        </div>
                      </div>
                      <div className="border-[2px] border-[#47559d] w-[45vh] h-[35vh] flex justify-center items-center rounded-3xl">
                        <div className="text-center items-center gap-[10px]">
                            <div className="flex justify-center items-center">
                          <Image src={require("../../../public/svg/icons1A.svg")} className="flex items-center justify-center" alt="" />
                            </div>
                          <div className="py-2">
                            <h1 className="text-[16px] text-[#FFFFFF] font-extrabold font-popPins">Highly customizable design</h1>
                            <h4 className="text-[14px] py-4 font-popPins font-bold text-[#FFFFFF]">Match your checkout to your <br /> brand colors, typography, & <br /> more</h4>
                          </div>
                        </div>
                      </div>
                      <div className="border-[2px] border-[#47559d] w-[45vh] h-[35vh] flex justify-center items-center rounded-3xl">
                        <div className="text-center items-center gap-[10px]">
                            <div className="flex justify-center items-center">
                          <Image src={require("../../../public/svg/icons1A.svg")} className="flex items-center justify-center" alt="" />
                            </div>
                          <div className="py-2">
                            <h1 className="text-[16px] text-[#FFFFFF] font-extrabold font-popPins">Highly customizable design</h1>
                            <h4 className="text-[14px] py-4 font-popPins font-bold text-[#FFFFFF]">Match your checkout to your <br /> brand colors, typography, & <br /> more</h4>
                          </div>
                        </div>
                      </div>
                      <div className="border-[2px] border-[#47559d] w-[45vh] h-[35vh] flex justify-center items-center rounded-3xl">
                        <div className="text-center items-center gap-[10px]">
                            <div className="flex justify-center items-center">
                          <Image src={require("../../../public/svg/icons1A.svg")} className="flex items-center justify-center" alt="" />
                            </div>
                          <div className="py-2">
                            <h1 className="text-[16px] text-[#FFFFFF] font-extrabold font-popPins">Highly customizable design</h1>
                            <h4 className="text-[14px] py-4 font-popPins font-bold text-[#FFFFFF]">Match your checkout to your <br /> brand colors, typography, & <br /> more</h4>
                          </div>
                        </div>
                      </div>
                          </div>
                        </div>




          </div>


              <div className="">
                <div> 
                  <h1 className="text-center lg:text-[50px] text-[#2e3a47] font-bold md:text-[42px] text-[30px] font-firaCode">Developer-friendly integration.</h1>
                  <h4 className="font-popPins text-[30px] text-center]">Developer-friendly integration.</h4>
                </div>
              </div>
          </div>
          </div>

        </div>
      </div>
    </>
  );
}
