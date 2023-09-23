const TemplateSection = () => {
  return (
    <div className="max-w-[828px] mx-auto px-10 py-8 bg-[#fff] rounded-2xl mb-4">
      <div>
        <h6 className="text-center text-[#8A9CA7] text-sm">How it works</h6>
        <h3 className="text-center text-[#576974] text-xl">
          A Really Great Template
        </h3>
      </div>
      <div className="grid grid-cols-3 justify-between pt-10">
        <div className=" flex flex-col items-center gap-8">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.3459 1.92675C12.0293 1.24333 13.1373 1.24333 13.8207 1.92675L14.9065 3.01254C15.5899 3.69595 15.5899 4.80399 14.9065 5.48741L6.29683 14.0971C6.08653 14.3074 5.82611 14.4606 5.54015 14.5423L2.28931 15.4711C2.02741 15.546 1.74554 15.4729 1.55294 15.2803C1.36034 15.0877 1.2873 14.8059 1.36212 14.544L2.29094 11.2931C2.37264 11.0072 2.52587 10.7467 2.73617 10.5364L11.3459 1.92675ZM12.7601 2.98741C12.6624 2.88978 12.5041 2.88978 12.4065 2.98741L11.1439 4.24997L12.5833 5.68931L13.8459 4.42675C13.9435 4.32912 13.9435 4.17083 13.8459 4.0732L12.7601 2.98741ZM11.5226 6.74997L10.0833 5.31063L3.79683 11.5971C3.76679 11.6271 3.7449 11.6643 3.73322 11.7052L3.17528 13.658L5.12807 13.1C5.16892 13.0884 5.20612 13.0665 5.23617 13.0364L11.5226 6.74997Z"
              fill="#6281A0"
            />
          </svg>
          <div className="text-center">
            <h3 className="text-[#8A9CA7]">Step 01</h3>
            <p className="text-[#A7B5BE] text-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae hac
              penatibus pellentesque ridiculus nec quam.
            </p>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <g clip-path="url(#clip0_203_91)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.75003 2.5C0.783533 2.5 3.05221e-05 3.2835 3.05221e-05 4.25V4.98577C-0.000132439 4.99479 -0.000132049 5.00381 3.05221e-05 5.01282V12.75C3.05221e-05 13.7165 0.783532 14.5 1.75003 14.5H14.25C15.2165 14.5 16 13.7165 16 12.75V5.01265C16.0002 5.00376 16.0002 4.99485 16 4.98594V4.25C16 3.2835 15.2165 2.5 14.25 2.5H1.75003ZM14.5 4.57029V4.25C14.5 4.11193 14.3881 4 14.25 4H1.75003C1.61196 4 1.50003 4.11193 1.50003 4.25V4.57029L8.00003 8.38063L14.5 4.57029ZM1.50003 6.30902V12.75C1.50003 12.8881 1.61196 13 1.75003 13H14.25C14.3881 13 14.5 12.8881 14.5 12.75V6.30902L8.37932 9.89702C8.1451 10.0343 7.85496 10.0343 7.62074 9.89702L1.50003 6.30902Z"
                fill="#6281A0"
              />
            </g>
            <defs>
              <clipPath id="clip0_203_91">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(3.05176e-05 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <div className="text-center">
          <h3 className="text-[#8A9CA7]">Step 02</h3>
          <p className="text-[#A7B5BE] text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae hac
            penatibus pellentesque ridiculus nec quam.
          </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <g clip-path="url(#clip0_203_97)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.66671 0.5C5.90529 0.5 3.66671 2.73858 3.66671 5.5V8.44722C3.66671 8.49658 3.6521 8.54483 3.62472 8.5859L1.92159 11.1406C1.75539 11.3899 1.66671 11.6828 1.66671 11.9824C1.66671 12.8206 2.34616 13.5 3.1843 13.5H14.1491C14.9873 13.5 15.6667 12.8206 15.6667 11.9824C15.6667 11.6828 15.578 11.3899 15.4118 11.1406L13.7087 8.5859C13.6813 8.54483 13.6667 8.49658 13.6667 8.44722V5.5C13.6667 2.73858 11.4281 0.5 8.66671 0.5ZM5.16671 5.5C5.16671 3.567 6.73371 2 8.66671 2C10.5997 2 12.1667 3.567 12.1667 5.5V8.44722C12.1667 8.79272 12.269 9.13048 12.4606 9.41795L14.1637 11.9726C14.1657 11.9755 14.1667 11.9789 14.1667 11.9824C14.1667 11.9847 14.1662 11.9873 14.1662 11.9873L14.1656 11.989C14.1656 11.989 14.1637 11.9927 14.1615 11.9948C14.1594 11.997 14.1557 11.9989 14.1557 11.9989C14.1557 11.9989 14.1529 12 14.1491 12H3.1843C3.18049 12 3.17768 11.9989 3.17768 11.9989C3.17768 11.9989 3.174 11.997 3.17186 11.9948C3.16973 11.9927 3.16778 11.989 3.16778 11.989C3.16778 11.989 3.16671 11.9862 3.16671 11.9824C3.16671 11.9789 3.16774 11.9755 3.16966 11.9726L4.8728 9.41795C5.06444 9.13048 5.16671 8.79272 5.16671 8.44722V5.5Z"
                fill="#6281A0"
              />
              <path
                d="M10.6513 14.7495C10.5285 15.7363 9.68678 16.5 8.6667 16.5C7.64662 16.5 6.80492 15.7363 6.68211 14.7495C6.66506 14.6125 6.77863 14.5 6.9167 14.5H10.4167C10.5548 14.5 10.6683 14.6125 10.6513 14.7495Z"
                fill="#6281A0"
              />
            </g>
            <defs>
              <clipPath id="clip0_203_97">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.66671 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        <div className="text-center">
        <h3 className="text-[#8A9CA7]">Step 03</h3>
          <p className="text-[#A7B5BE] text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae hac
            penatibus pellentesque ridiculus nec quam.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSection;
