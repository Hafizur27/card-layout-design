const UpcomingTask = () => {
  return (
    <div className="w-[481px] p-4 border-s-4 rounded-xl border-[#7B61FF] m-4 bg-zinc-200">
      <div className="flex justify-between pb-3 pt-3">
        <div>
          <h4 className="text-[#A7B5BE] text-sm">Upcoming Tasks</h4>
          <h2 className="text-[#28353D] text-xl pt-5 pb-2">Yoga Classes (Hauz Khas Colony)</h2>
          <p className="text-[#6D8493] text-sm pb-3">Mrng 07:30 am- 08:30 am</p>
        </div>
        <div className="pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="6"
            viewBox="0 0 22 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#6D8493" />
            <circle cx="11" cy="3" r="3" fill="#6D8493" />
            <circle cx="19" cy="3" r="3" fill="#6D8493" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between pb-3">
        <div>
          <h4 className="text-[#A7B5BE] text-sm">Next</h4>
          <h2 className="text-[#28353D] text-xl pt-5 pb-2">Meeting with my childhood friend</h2>
          <p className="text-[#6D8493] text-sm pb-3">Evening 04:00 pm</p>
        </div>
        <div className="pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="6"
            viewBox="0 0 22 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#6D8493" />
            <circle cx="11" cy="3" r="3" fill="#6D8493" />
            <circle cx="19" cy="3" r="3" fill="#6D8493" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between pb-3">
        <div>
          <h4 className="text-[#A7B5BE] text-sm">Next</h4>
          <h2 className="text-[#28353D] text-xl pt-5 pb-2">Dinner with my Aunt</h2>
          <p className="text-[#6D8493] text-sm pb-3">Evening 08:45 pm</p>
        </div>
        <div className="pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="6"
            viewBox="0 0 22 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#6D8493" />
            <circle cx="11" cy="3" r="3" fill="#6D8493" />
            <circle cx="19" cy="3" r="3" fill="#6D8493" />
          </svg>
        </div>
      </div>
      <div className="flex justify-between pb-3">
        <div className="">
          <h4 className="text-[#A7B5BE] text-sm">Next</h4>
          <h2 className="text-[#28353D] text-xl pt-5 pb-2">Watch new movie (Spiderman)</h2>
          <p className="text-[#6D8493] text-sm">Evening 11:30 pm</p>
        </div>
        <div className="pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="6"
            viewBox="0 0 22 6"
            fill="none"
          >
            <circle cx="3" cy="3" r="3" fill="#6D8493" />
            <circle cx="11" cy="3" r="3" fill="#6D8493" />
            <circle cx="19" cy="3" r="3" fill="#6D8493" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UpcomingTask;
