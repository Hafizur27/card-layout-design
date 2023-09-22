import paris from '../../../assets/images/Rectangle 1.png';

const PlanSection = () => {
  return (
    <div  className="max-w-[440px] mx-auto">
        <img src={paris} alt="" />
        <div className='bg-[#fff] flex px-6 py-4 justify-between items-center rounded-b-2xl'>
            <div>
                <h3 className='text-[#333] text-3xl'>Plan Your Trip</h3>
                <p className='text-[#BDBDBD] text-sm'>Eiffel Tower 2 days trip</p>
            </div>
            <p className='bg-[#F7C7B9] px-2 py-1 rounded'> <span className='text-[#5E5343] text-xl'>60%</span> <span className='text-[#5E5343] text-sm'>Discount</span></p>
        </div>
    </div>
  )
}

export default PlanSection