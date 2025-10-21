const Banner = () => {
  return (
    <div>
      <div className="container mx-auto text-center pt-20 pb-10">
        <h1 className="text-[72px] text-[#001931] font-bold leading-[80px]">
          We Build <br />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive{" "}
          </span>
          Apps
        </h1>
        <p className="text-[20px] text-[#627382] mt-4 mb-10">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div className="font-semibold text-[20px] flex justify-center gap-6">
          <a
            href="https://play.google.com/store/games?device=windows&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2.5 items-center btn"
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
      <div className="flex justify-center  max-w-2/5 mx-auto">
        <img src="/assets/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
