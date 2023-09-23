import carImg from '../../../assets/images/Rectangle 12.png'

const VenomGtSection = () => {
  return (
    <div className="p-4 w-[653px] ml-auto rounded-2xl flex justify-between mb-4">
      <img src={carImg} alt="" />
      <div className='ps-2 pe-4 py-2 text-end'>
        <button className='bg-[#2D9CDB] px-2 text-white rounded'>1.2 million</button>
        <h4 className='text-[#000] text-2xl mb-1'>Hennessey Venom GT</h4>
        <small className='text-[#A7B5BE] text-sm'>Speed</small>
        <p className='text-[#414F58] mb-1'>270 mph (434 km/h)</p>
        <small className='text-[#A7B5BE] text-sm'>Build</small>
        <p className='text-[#414F58] mb-1'>29</p>
        <small className='text-[#A7B5BE] text-sm'>0-100km/h</small>
        <p className='text-[#414F58] mb-1'>3.05 secs</p>
      <p className='flex items-center justify-end gap-2'>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                fill="#F0B666"
              />
            </svg>
          </span>
          4.2
        </p>
      </div>
    </div>
  );
};

export default VenomGtSection;
