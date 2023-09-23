import profileImg from "../../../assets/images/Ellipse 1487.svg";

const Jennifer = () => {
  return (
    <div className="max-w-[547px] ps-8 py-8 pr-8 bg-[#9B51E0] rounded-3xl ms-4 mb-4 flex items-start gap-8">
      <img className="" src={profileImg} alt="" />
      <div className="text-white flex flex-col gap-4">
        <h3 className="text-2xl">Jennifer Aniston</h3>
        <p>
          I’m so excited to reveal our second LolaVie product, the Perfecting
          Leave-In. Read More...
        </p>
        <p>Read More...</p>
        <p>21:08 p.m</p>
      </div>
    </div>
  );
};

export default Jennifer;
