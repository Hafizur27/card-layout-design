import natureImg from "../../../assets/images/Rectangle 2.png";

const BeachSection = () => {
  return (
    <div className="ms-4 p-4 max-w-[492px]">
      <img className="rounded-t-2xl" src={natureImg} alt="" />
      <div className="bg-neutral-00">
        <h3 className="text-[#6E7491] text-2xl">Rawai Beach Phuket</h3>
        <p className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="27"
            viewBox="0 0 24 27"
            fill="none"
          >
            <path
              d="M12.0009 15.329C13.724 15.329 15.1209 13.7866 15.1209 11.884C15.1209 9.98134 13.724 8.43896 12.0009 8.43896C10.2777 8.43896 8.88086 9.98134 8.88086 11.884C8.88086 13.7866 10.2777 15.329 12.0009 15.329Z"
              stroke="#A7B5BE"
              stroke-width="1.5"
            />
            <path
              d="M3.61973 9.87454C5.58973 0.312457 18.4197 0.323499 20.3797 9.88558C21.5297 15.4947 18.77 19.5629 16 22.5C14.9954 23.5706 12 25.7863 12 25.7863C12 25.7863 9.00961 23.5715 7.99921 22.5C5.23921 19.5629 2.46973 15.4837 3.61973 9.87454Z"
              stroke="#A7B5BE"
              stroke-width="1.5"
            />
          </svg>
          <span className="text-[#7C8DB0] text-base">Aviasales.ru Seaview Phuket office, Phuket, Thailand</span>
          
        </p>
      </div>
      <div className="flex justify-between py-11">
        <div className="flex flex-col items-center px-10">
          <h5 className="text-[#7C8DB0] text-base">Views</h5>
          <p className="">65,03,009</p>
        </div>
        <div className="flex flex-col items-center px-10">
          <h5 className="text-[#7C8DB0] text-base">Downloads</h5>
          <p>23,991</p>
        </div>
      </div>
      <div className="px-10">
      <button className="bg-[#2D9CDB] text-white text-xl rounded px-32 py-1">See Details</button>
      </div>
    </div>
  );
};

export default BeachSection;
