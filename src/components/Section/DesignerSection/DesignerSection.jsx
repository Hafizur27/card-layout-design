import profileImg from "../../../assets/images/Rectangle 1764.png";
const DesignerSection = () => {
  return (
    <div>
      <div className="w-[874px] mx-auto p-4 flex gap-10 ">
        <img src={profileImg} alt="" />
        <div>
          <h3 className="text-[#284B80] text-3xl">Ajay Kumar</h3>
          <p className="text-[#8D98AA] text-xl">UI/UX Designer</p>
          <div className="flex flex-col gap-6 pt-9">
            <div className="grid grid-cols-3">
              <div>
                <p className="text-[#8D98AA] text-xl">Views</p>
                <h3 className="text-[#284B80] text-3xl">17,653</h3>
              </div>
              <div>
                <p className="text-[#8D98AA] text-xl">Followers</p>
                <h3 className="text-[#284B80] text-3xl">373</h3>
              </div>
              <div>
                <p className="text-[#8D98AA] text-xl">Appreciations</p>
                <h3 className="text-[#284B80] text-3xl">1,888</h3>
              </div>
            </div>
            <div className="flex gap-6">
              <button className="bg-[#1DC6BB] rounded-lg px-6 py-3 border-none text-[#F2F2F2] text-xl">
                Follow
              </button>
              <button className="border border-teal-300  rounded-lg px-6 py-3 text-[#1DC6BB]">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignerSection;
