import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { id, title, image, downloads, ratingAvg } = app;
  //   console.log(app);
  return (
    <Link
      to={`/app/${id}`}
      className="bg-white p-4 rounded shadow-sm flex flex-col justify-between transition duration-200 ease-in-out hover:scale-[1.04] hover:shadow-lg cursor-pointer"
    >
      <div className="aspect-square w-full relative mb-4">
        <img
          className="rounded-lg object-cover w-full h-full"
          src={image}
          alt={title}
        />
      </div>
      <h3 className="text-[20px] font-medium text-[#001931] mb-4">{title}</h3>
      <div className="flex justify-between font-medium">
        <p className="flex items-center gap-2 bg-[#F1F5E8] rounded px-2.5 py-1.5 text-[#00D390]">
          <img
            color="red"
            width={16}
            src="/public/assets/icon-downloads.png"
            alt=""
          />
          {downloads}
        </p>

        <p className="flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] rounded px-2.5 py-1.5">
          <img width={16} src="/public/assets/icon-ratings.png" alt="" />
          {ratingAvg}
        </p>
      </div>
    </Link>
  );
};

export default AppCard;
