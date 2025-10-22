
const AppNotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 py-20">
            <img className="max-w-[420px] mb-5 mt-20" src="/public/assets/App-Error.png" alt="" />
            <h1 className="text-[48px] text-[#001931] font-semibold">OPPS!! APP NOT FOUND</h1>
            <p className="text-[20px] text-[#627382] mb-5">The App you are requesting is not found on our system.  please try another apps</p>
            <button className=" font-semibold text-white btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] border-none px-9 py-5">Go Back</button>
        </div>
    );
};

export default AppNotFound;