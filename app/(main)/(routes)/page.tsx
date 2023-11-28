"use client";

import Image from "next/image";
import Head from "next/head";
import Link from "next/link"


export default function Home() {
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

      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400;1,700&family=Fira+Code:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;700;800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Open+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,200;1,300;1,500;1,700;1,800&family=Source+Code+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head> */}

      <div className="g-[#FFFFFF]">
        <div className="flex flex-col lg:flex-row bg-[#EAF9FA] w-full  md:flex-row items-center lg:gap-0 md:gap-0 gap-[30px] justify-around">
          <div className="">
            <h4 className="text-[#0F76CA] py-5 lg:text-[22px] md:text-[20px] text-[18px] font-popPins">
              Accelerate revenue
            </h4>
            <h1 className="lg:text-[36px] md:text-[33px] text-[18px] font-firaCode font-bold">
              Instantly boost subscriptions <br /> with cross-chain payments
            </h1>
            <h5 className="text-[#000000] py-5 lg:text-[18px] md:text-[18px] text-[13px] font-popPins">
              The best purchase experience for your customers.{" "}
            </h5>
            <button>
              <a
                href=""
                className="bg-[#3742FA] text-[#FFFFFF] font-popPins justify-center flex font-bold lg:text-[18px] md:text-[13px] text-[12px] items-center rounded-full lg:w-[220px] md:w-[230px] w-[150px] h-[50px]"
              >
                Check our demo
              </a>
            </button>
          </div>
          <div className="lg:w-[537px] md:w-[437px] lg:h-[537px] md:h-[437px] items-center flex">
            <Image src={require("../../../public/png/img1.png")} alt="" />
          </div>
        </div>
        <div className="lg:px-8 md:px-5 px-4">          
        <div className="py-9 overflow-hidden">
          <h1 className="lg:text-[36px] md:text-[27px] text-[22px] font-firaCode text-[#072146] font-bold text-center">
            Build your subscription checkout in 3 easy steps
          </h1>
          <div className="border-t-2 border-b-2 border-[#000000] flex flex-col lg:flex-row ">
            <div className="m-4">
              <h1 className="lg:text-[22px] md:text-[20px] text-[15px] font-popPins text-[#145387] font-bold">
                Customize widget
              </h1>
              <h4 className="text-[#000000] lg:text-[18px] md:text-[18px] py-5 text-[14px] font-popPins">
                Set your payment details and play with different component
                styles.
              </h4>
              <div className="lg:w-[364px] lg:h-[316px] md:w-[264px] w-[223px]">
                <Image src={require("../../../public/png/img2.png")} alt="" />
              </div>
            </div>
            <div className=" border-l-2 border-[#000000]"></div>
            <div className="m-4">
              <h1 className="lg:text-[22px] md:text-[20px] text-[15px] font-popPins text-[#145387] font-bold">
                Export it
              </h1>
              <h4 className="text-[#000000] lg:text-[18px] md:text-[18px] py-5 text-[13px] font-popPins">
                Choose to export as JSON or publish it to <br /> IPFS for a link
                that is ready to be hosted.
              </h4>
              <div className="lg:w-[364px] lg:h-[316px] md:w-[264px] w-[223px]">
                <Image src={require("../../../public/png/img3.png")} alt="" />
              </div>
            </div>
            <div className=" border-l-2 border-[#000000]"></div>
            <div className="m-4">
              <h1 className="lg:text-[22px] md:text-[20px] text-[15px] font-popPins text-[#145387] font-bold">
                Integrate it
              </h1>
              <h4 className="text-[#000000] lg:text-[18px] md:text-[18px] py-5 text-[14px] font-popPins">
                Place it in your platform and receive <br /> cross-chain payment
                second-by-second.
              </h4>
              <div className="lg:w-[364px] lg:h-[300px] md:w-[264px] w-[223px]">
                <Image src={require("../../../public/png/img4.png")} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-row items-center lg:gap-0 md:gap-0 gap-[30px] justify-between">
          <div className="lg:gap-0 md:gap-0 gap-[30px]">
            <h4 className="text-[#0F76CA] py-4 lg:text-[22px] md:text-[18px] text-[17px] font-popPins">
              MAJI IS A developer-friendly integration
            </h4>
            <h1 className="lg:text-[36px] md:text-[25px] text-[#072146] text-[18px] font-firaCode  font-bold">
              Get cross-chain subscriptions <br /> with just a few lines of
              code.
            </h1>
            <p className="lg:text-[18px] md:text-[13px] text-[#000000] py-7 ">
              MAJI cross-chain checkout can be seamlessly incorporated into your{" "}
              <br /> project. Just use our React component or push it on IPFS.
              The Widget <br /> Builder lets you create and try configurations
              easily before going live.{" "}
            </p>
            <button>
              <a
                href=""
                className="bg-[#3742FA] text-[#FFFFFF] font-popPins justify-center flex font-bold lg:text-[18px] md:text-[13px] text-[12px] items-center rounded-full lg:w-[220px] md:w-[230px] w-[150px] h-[50px]"
              >
                Check our demo
              </a>
            </button>
          </div>
          <div className="lg:w-[537px] md:w-[437px] lg:h-[537px] md:h-[437px] items-center flex">
            <Image src={require("../../../public/png/img5.png")} alt="" />
          </div>
        </div>
          </div>

        <div className="py-[10vh] bg-[#004481] w-full flex justify-center items-center">
          <div className="rounded-3xl h-[100%] border-none w-[90%] lg:px-8 md:px-5 px-4 p-5 bg-[#043263]">
            <div className="gap-[30vh]">
              <h1 className="lg:text-[36px] md:text-[27px] text-[22px] text-[#FFFFFF] font-firaCode font-bold text-center">
                Watch your revenue increase in real-time.
              </h1>
              <p className="text-center lg:text-[18px] md:text-[15px] py-5 text-[13px] text-[#FFFFFF]">
                With a single transaction, Maji Subscriptions flow by the second
                into your wallet, cutting <br /> down on transaction costs and
                enabling immediate access to capital.
              </p>
              <div className="flex justify-center items-center">
                <Image src={require("../../../public/png/code2.png")} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:py-[10vh] md:py-[10vh] py-[4vh] bg-[#EAF9FA]">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={require("../../../public/png/heroA2.png")}
              alt=""
              className="lg:w-[30%] md:w-[50%] w-[70%]"
            />
            <div className="flex flex-col justify-center items-center">
              <h4 className="text-[#0F76CA] py-4 lg:text-[22px] md:text-[20px] text-[18px] font-popPins">
                BUILT FOR SCALING
              </h4>
              <h1 className="text-[#072146] lg:text-[36px] md:text-[33px] text-[18px] font-firaCode font-bold">
                See it in action
              </h1>

                  <Link className="py-4" href={{pathname: "widgetPage"}} >
              <button className="bg-[#3742FA] text-[#FFFFFF] font-popPins justify-center flex font-bold lg:text-[18px] md:text-[13px] text-[12px] items-center rounded-full lg:w-[220px] md:w-[230px] w-[150px] h-[50px]">
                  Check our demo
              </button>
                </Link>
            </div>
          </div>
        </div>
          <div/>
      </div>
    </>
  );
}
