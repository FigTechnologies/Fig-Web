"use client"
import MySwiper from "../MySwiper";
import MyTypewriter from "../MyTypewriter";

const FigHero = () => {
  return (
    <section className="w-full horizontal-center">
      <div className="min-h-screen h-screen  w-full  flex flex-col md:flex-row ">
        <div className=" flex flex-col justify-center border-4 border-red-500 h-[50%] md:h-full w-full ">
          <h4 className="heading-4   text-primary-color mb-2 ">
            Trusted By 100+ Creators
          </h4>
          <h1 className={`heading-1`}>
            Financing for{" "}
            <span className="text-primary-color">Influencers </span> and{" "}
            <span className="text-primary-color">Creators </span> in Africa
          </h1>
          <span className="text-[25px] font-[400] lg:flex hidden md:mt-3 text-primary-black ">
            Powering the dreams of {"    "}
            <MySwiper />
          </span>
          <span className="text-[20px] md:h-[30px] font-[400] text-primary-black block h-[40px] mb-[20px] md:mb-0 mt-3 lg:hidden  ">
            Powering the dreams of {"    "}{" "}
            <span className="text-[#050914] font-[700]">
              <MyTypewriter />
            </span>
          </span>
          <div className="lg:mt-[10px]   ">
            <button className="btn-normal">Apply For Funding</button>
            
          </div>
        </div>
        <div className="  w-full"></div>
      </div>
    </section>
  );
};

export default FigHero;
