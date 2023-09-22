import camera from "../../../assets/images/Rectangle 1766.png";

const PhotoShotSection = () => {
  return (
    <div className="bg-[#fff] rounded-2xl max-w-[388px] ml-auto flex p-4 gap-6">
      <img src={camera} alt="" />
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="19"
          viewBox="0 0 29 19"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 0C1.79086 0 0 1.79086 0 4V15C0 17.2091 1.79086 19 4 19H25C27.2091 19 29 17.2091 29 15V4C29 1.79086 27.2091 0 25 0H4ZM12 13.4232V5.5751C12.0002 5.47299 12.0267 5.37277 12.0768 5.28469C12.127 5.1966 12.199 5.12383 12.2854 5.07383C12.3718 5.02382 12.4696 4.99837 12.5687 5.00008C12.6678 5.0018 12.7647 5.03061 12.8495 5.08358L18.5477 8.66827C18.6858 8.75507 18.8 8.877 18.8792 9.02235C18.9584 9.1677 19 9.33158 19 9.49827C19 9.66496 18.9584 9.82884 18.8792 9.97419C18.8 10.1195 18.6858 10.2415 18.5477 10.3283L12.8512 13.9148C12.4789 14.1488 12 13.8734 12 13.4232Z"
            fill="#1DC6BB"
          />
        </svg>
        <h4 className="text-[#284B80] text-xl">How to shoot an ad video</h4>
        <p className="text-[#8D98AA] text-xs">80.22k views</p>
      </div>
    </div>
  );
};

export default PhotoShotSection;
