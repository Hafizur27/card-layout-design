import background from '../../../assets/images/Rectangle 13.png';
import watch from '../../../assets/images/Group 6.png';
import time from '../../../assets/images/Frame 37.png'

const TimerSection = () => {
  return (
    <div className=' max-w-[341px] mx-auto flex gap-6 items-center rounded-lg mb-4 relative' style={{
      backgroundImage: `url('${background}')` 
    }}  >
        <img className='h-[89px] w-[89px]' src={watch} alt="" />
        <img src={time} alt="" />
        {/* <img src={background} alt="" className='absolute top-0 left-0' /> */}
    </div>
  )
}

export default TimerSection