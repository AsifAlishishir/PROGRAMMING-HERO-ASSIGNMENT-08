const Banner = () => {
  return (
    <div>
      <div className="container mx-auto text-center pt-20 pb-10 px-4 md:px-6 lg:px-8">
        <h1 className="text-[32px] md:text-[52px] lg:text-[72px] text-[#001931] font-bold md:leading-[60px] lg:leading-[80px]">
          We Build <br />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive{" "}
          </span>
          Apps
        </h1>
        <p className=" lg:text-[20px] text-[#627382] mt-4 mb-10">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden lg:block" />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="font-semibold text-[20px] flex flex-col justify-center md:gap-3.5 lg:gap-6 lg:flex-row lg:items-center px-10">
          <a
            href="https://play.google.com/store/games?device=windows&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2.5 items-center btn mb-4 md:mb-0"
          >
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/fluency/48/google-play.png"
              alt="google-play"
            />
            <span>Google Play</span>
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2.5 items-center btn"
          >
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/color/48/apple-app-store--v3.png"
              alt="apple-app-store--v3"
            />
            <span>App Store</span>
          </a>
        </div>
      </div>
      <div className="flex justify-center max-w-2/3  md:max-w-2/5 mx-auto px-4 md:px-6 lg:px-8">
        <img src="/assets/hero.png" alt="" />
      </div>
      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2] ">
        <div className="container mx-auto text-center p-5 md:p-10 lg:p-20">
          <h1 className="text-[28px] md:text-[38px] lg:text-[48px] text-white font-bold mb-6 md:mb-10">
            Trusted by Millions, Built for You
          </h1>
          <div className="text-white grid grid-cols-3 gap-6">
            <div className="flex flex-col gap-1.5 md:gap-0">
              <p className="text-[#ffffffa2] text-[14px] md:text-[16px]">
                Total Downloads
              </p>
              <h2 className="text-[24px] md:text-[44px] lg:text-[64px] font-extrabold">
                29.6M
              </h2>
              <p className="text-[#ffffffa2] text-[14px] md:text-[16px]">
                21% more than last month
              </p>
            </div>
            <div className="flex flex-col gap-1.5 md:gap-0">
              <p className="text-[#ffffffa2] text-[14px] md:text-[16px]">
                Total Reviews
              </p>
              <h2 className="text-[24px] md:text-[44px] lg:text-[64px] font-extrabold">
                906K
              </h2>
              <p className="text-[#ffffffa2] text-[14px] md:text-[16px]">
                46% more than last month
              </p>
            </div>
            <div className="flex flex-col gap-1.5 md:gap-0">
              <p className="text-[#ffffffa2] text-[14px] md:text-[16px]">
                Active Apps
              </p>
              <h2 className="text-[24px] md:text-[44px] lg:text-[64px] font-extrabold">
                132+
              </h2>
              <p className="text-[#ffffffa2] text-[14px] md:text-[16px]">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
