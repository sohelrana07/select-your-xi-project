import React from "react";
import bannerImg from "../../assets/banner-main.png";
import bannerShadowImg from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bannerShadowImg})` }}
      className={`max-w-[1200px] mx-auto p-16 flex flex-col justify-center items-center gap-6 text-center rounded-2xl bg-cover bg-center bg-black shadow-md`}
    >
      <figure>
        <img src={bannerImg} alt="" />
      </figure>
      <div>
        <h1 className="text-2xl font-medium lg:text-4xl lg:font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <h2 className="text-xl lg:text-2xl lg:font-medium text-white mt-4">
          Beyond Boundaries Beyond Limits
        </h2>
      </div>
      <div className="border-2 border-[#E7FE29] p-2 rounded-xl">
        <button className="btn btn-warning bg-[#E7FE29] rounded-lg border-0">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
