import borderImg from '../../../assets/images/Frame 94.png';

const MarketingSection = () => {
  return (
    <div className="max-w-[774px] rounded-2xl flex mb-4 ms-4">
      <div className='bg-[#EB5757] px-10 pt-8 pb-9 text-white rounded-s-2xl flex flex-col gap-6'>
        <h6 className='text-sm'>Course</h6>
        <h2 className='text-2xl w-[60%]'>Digital Marketing</h2>
        <p className='flex items-center gap-2 pt-2'>
          See all Chapters{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
          >
            <path
              d="M12.6364 0.5L17 4.5M17 4.5L12.6364 8.5M17 4.5H1"
              stroke="#ECEFF1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </p>
      </div>
      <div className='px-10 pt-8 pb-4 flex-1'>
        <div className='flex items-center justify-between'>
          <h6 className='text-[#90A4AE] text-sm'>Chapter 10</h6>
          <img src={borderImg} alt="" />
        </div>
        <h1 className='text-[#000] text-[32px] w-[60%]'>Social Media Growth</h1>
        <div className='flex justify-end'>
        <button className='bg-[#EB5757] px-6 py-3 rounded-full text-white'>Next Chapter</button>
        </div>
      </div>
    </div>
  );
};

export default MarketingSection;
