 import perfectImg from '../../../assets/images/Rectangle 1763.png';
 import profileImg from '../../../assets/images/Ellipse 1482.svg';

const PerfectSection = () => {
  return (
    <div className='w-[354px] mx-auto mt-6 flex flex-col gap-6 p-6  bg-neutral-300'>
        <img src={perfectImg} alt="" />
        <p className='text-[#284B80] text-2xl w-[70%]'>How to make a perfect smoothie at home during lockdown</p>
        <div className='flex gap-6'>
            <img src={profileImg} alt="" />
            <div>
                <h3 className='text-[#284B80] text-2xl'>Ajay Kumar</h3>
                <p className='text-[#8D98AA] text-base'>Smoothie maker of the year</p>
            </div>
        </div>
    </div>
  )
}

export default PerfectSection