import officeImg from '../../../assets/images/Rectangle 14.png'
const ConferenceSpaceSection = () => {
  return (
    <div className="max-w-[504px] p-4 mb-4">
      <img className='rounded-t-2xl' src={officeImg} alt="" />
      <div className="px-4 pt-4 pb-8 bg-slate-200 rounded-b-2xl">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[#000] text-2xl">Conference Space</h3>
            <p className="text-[#000] text-lg">Gurugram</p>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M9 0L11.5392 5.50505L17.5595 6.21885L13.1086 10.335L14.2901 16.2812L9 13.32L3.70993 16.2812L4.89144 10.335L0.440492 6.21885L6.46077 5.50505L9 0Z"
                  fill="#EAC800"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M9 0L11.5392 5.50505L17.5595 6.21885L13.1086 10.335L14.2901 16.2812L9 13.32L3.70993 16.2812L4.89144 10.335L0.440492 6.21885L6.46077 5.50505L9 0Z"
                  fill="#EAC800"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M9 0L11.5392 5.50505L17.5595 6.21885L13.1086 10.335L14.2901 16.2812L9 13.32L3.70993 16.2812L4.89144 10.335L0.440492 6.21885L6.46077 5.50505L9 0Z"
                  fill="#EAC800"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M9 0L11.5392 5.50505L17.5595 6.21885L13.1086 10.335L14.2901 16.2812L9 13.32L3.70993 16.2812L4.89144 10.335L0.440492 6.21885L6.46077 5.50505L9 0Z"
                  fill="#EAC800"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
              >
                <path
                  d="M9 1.19375L11.0852 5.71447L11.2024 5.96862L11.4804 6.00157L16.4242 6.58774L12.7691 9.96786L12.5636 10.1579L12.6182 10.4324L13.5884 15.3154L9.24422 12.8837L9 12.747L8.75578 12.8837L4.4116 15.3154L5.38185 10.4324L5.43639 10.1579L5.23091 9.96786L1.57582 6.58774L6.51964 6.00157L6.79757 5.96862L6.9148 5.71447L9 1.19375Z"
                  fill="url(#paint0_linear_101_116)"
                  stroke="#EAC800"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_101_116"
                    x1="1.5"
                    y1="7"
                    x2="16"
                    y2="7"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.477927" stop-color="#EAC800" />
                    <stop
                      offset="0.536506"
                      stop-color="#EAC800"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
              <small className="bg-[#27AE60] rounded-full text-sm text-white py-1 px-2 ml-3">
                4.6
              </small>
            </div>
          </div>
          <div>
            <button className="text-[#598EC2] border px-4 rounded-full border-[#598EC2]">
              Explore
            </button>
          </div>
        </div>
        <div className="flex justify-between gap-4 pt-7">
          <div className="flex flex-col items-center">
            <h5 className="text-[#90A4AE] text-sm">Capacity</h5>
            <p className="text-[#607D8A] text-base">30-50 people</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-[#90A4AE] text-sm">Zone</h5>
            <p className="text-[#607D8A] text-base">Conference</p>
          </div>
          <div className="flex flex-col items-center">
            <h5 className="text-[#90A4AE] text-sm">Availability</h5>
            <p className="text-[#607D8A] text-base flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
              >
                <circle cx="4.5" cy="4.5" r="4" fill="#27AE60" />
              </svg>{" "}
              Yes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceSpaceSection;
