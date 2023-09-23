import profile from "../../../assets/images/Ellipse 4.svg";

const MelissaSection = () => {
  return (
    <div className="bg-[#fff] rounded-2xl w-[401px] mx-auto p-4 mb-4">
      <div className="rounded-lg grid grid-cols-3 items-center justify-between">
        <img src={profile} alt="" />
        <div className="ms-4 me-2 w-[184px]">
          <h3 className="text-[#28353D] text-xl">Melissa Stark</h3>
          <p className="text-[#6D8493] text-sm">Stock Investor</p>
        </div>
        <div className="">
          <button className="bg-[#C99B67] px-4 py-1 text-white text-base border-none rounded ml-6">
            Call
          </button>
        </div>
      </div>
      <div>
        <h5 className="text-center py-4 mt-4 text-[#6D8493] text-sm">David, Melissa</h5>
        <p className="flex items-center gap-[10px] px-4 py-3 mb-4 text-[#576974] text-base">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
            >
              <circle cx="4" cy="4.5" r="4" fill="#EF5DA8" />
            </svg>
          </span>{" "}
          Hey, are you coming to the party tonight?
        </p>
        <p className="flex items-center gap-[10px] px-4 py-3 text-[#576974] text-base">
          Yes, I am totally ready to bang the party tonight...haha{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="9"
              viewBox="0 0 8 9"
              fill="none"
            >
              <circle cx="4" cy="4.5" r="4" fill="#5D5FEF" />
            </svg>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MelissaSection;
