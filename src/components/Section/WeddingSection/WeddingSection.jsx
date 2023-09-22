import nature from "../../../assets/images/Rectangle 11.png";

const WeddingSection = () => {
  return (
    <div className="m-4 max-w-[246px]">
      <img src={nature} alt="" />
      <div className="bg-[#fff] rounded-b-2xl flex justify-between items-center p-4">
        <div>
          <h3 className="text-[#414F58] text-xl">Wedding</h3>
          <p className="text-[#6D8493] text-xs">23rd July 2021</p>
        </div>
        <div className="bg-[#FFEFEB] w-[48px] h-[47px] px-[12px] py-[10px] rounded-full">
          <svg className="h-[27px] w-[24px]"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="27"
            viewBox="0 0 24 27"
            fill="none"
          >
            <g filter="url(#filter0_i_18_108)">
              <path
                d="M13.1201 5.18294L16.9043 2.26842L18.5833 3.12414L18.3596 8.02527L13.1201 5.18294ZM9.89718 16.7615L17.3609 8.98921L12.1024 6.12852L9.89718 16.7615ZM22.4659 5.10295L19.7587 3.7232L19.5333 8.66199L24 11.0851L22.4659 5.10295ZM19.0203 9.74573L11.6133 16.8408L18.3097 13.6353C19.5321 16.8244 18.84 20.6875 15.8626 23.1802C10.8597 27.3687 3.12941 24.5726 1.9815 18.1592C1.16857 13.6171 4.0856 9.65276 8.04187 8.51591L9.17818 15.3959L10.7573 5.3604L6.87786 3.15868L7.65095 6.71662C2.78125 8.05539 -0.830413 12.9097 0.166139 18.4776C1.5623 26.2779 10.9642 29.6786 17.049 24.5843C20.6693 21.5533 21.5136 16.8556 20.0285 12.9773L22.93 11.8667L19.0203 9.74573ZM15.7228 1.66625L12.4534 0L7.55793 2.16554L11.9681 4.55799L15.7228 1.66625Z"
                fill="#FFE06A"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_18_108"
                x="0"
                y="0"
                width="24"
                height="31"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.695264 0 0 0 0 0.550612 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_18_108"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WeddingSection;
