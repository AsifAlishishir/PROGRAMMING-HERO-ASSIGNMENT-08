const AppCard = ({ app }) => {
  //   console.log(app);
  return (
    <div className="bg-white p-4 rounded shadow-sm flex flex-col justify-between">
      <div className="aspect-square w-full relative mb-4">
        <img
          className="rounded-lg object-cover w-full h-full"
          src={app.image}
          alt={app.title}
        />
      </div>
      <h3 className="text-[20px] font-medium text-[#001931] mb-4">
        {app.title}
      </h3>
      <div className="flex justify-between font-medium">
        <p className="flex items-center gap-2 bg-[#F1F5E8] rounded px-2.5 py-1.5 text-[#00D390]">
          <img
            color="red"
            width={16}
            src="/public/assets/icon-downloads.png"
            alt=""
          />
          {app.downloads}
        </p>

        <p className="flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] rounded px-2.5 py-1.5">
          <img width={16} src="/public/assets/icon-ratings.png" alt="" />
          {app.ratingAvg}
        </p>
      </div>
    </div>
  );
};

export default AppCard;
