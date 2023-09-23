import person1 from "../../../assets/images/Ellipse 148.svg";
import person2 from "../../../assets/images/Ellipse 1482 (1).svg";
import person3 from "../../../assets/images/Ellipse 1482 (2).svg";

const ProfileSection = () => {
  return (
    <div className="max-w-[800px] p-4 flex gap-4 bg-zinc-200 rounded-2xl mb-4 ms-4">
      <div className="flex flex-col items-center border rounded-lg border-[#5D5FEF] p-4 bg-white">
        <img src={person1} alt="" />

        <div>
          <h5 className="text-center">Brooklyn Simmons</h5>
          <p className="flex items-center gap-1 text-[#C6CDD5] text-xs px-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M7.66667 8.39378C8.74363 8.39378 9.61667 7.52073 9.61667 6.44378C9.61667 5.36682 8.74363 4.49377 7.66667 4.49377C6.58972 4.49377 5.71667 5.36682 5.71667 6.44378C5.71667 7.52073 6.58972 8.39378 7.66667 8.39378Z"
                stroke="#C6CDD5"
                stroke-width="1.5"
              />
              <path
                d="M2.42907 5.30625C3.66032 -0.106249 11.6791 -0.0999984 12.9041 5.3125C13.6228 8.4875 11.6478 11.175 9.91657 12.8375C8.66032 14.05 6.67282 14.05 5.41032 12.8375C3.68532 11.175 1.71032 8.48125 2.42907 5.30625Z"
                stroke="#C6CDD5"
                stroke-width="1.5"
              />
            </svg>
            Netherland
          </p>

          <div className="flex gap-2 px-4 pt-8">
            <div className="px-4">
              <h5 className="text-[#A7B5BE] text-xs">Followers</h5>
              <p className="text-sm">2.4k</p>
            </div>
            <div className="px-4">
              <h5 className="text-[#A7B5BE] text-xs">Following</h5>
              <p className="text-sm">432</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-4">
        <img src={person2} alt="" />

        <div>
          <h5 className="text-center">Arlene McCoy</h5>
          <p className="flex items-center gap-1 text-[#C6CDD5] text-xs px-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M7.66667 8.39378C8.74363 8.39378 9.61667 7.52073 9.61667 6.44378C9.61667 5.36682 8.74363 4.49377 7.66667 4.49377C6.58972 4.49377 5.71667 5.36682 5.71667 6.44378C5.71667 7.52073 6.58972 8.39378 7.66667 8.39378Z"
                stroke="#C6CDD5"
                stroke-width="1.5"
              />
              <path
                d="M2.42907 5.30625C3.66032 -0.106249 11.6791 -0.0999984 12.9041 5.3125C13.6228 8.4875 11.6478 11.175 9.91657 12.8375C8.66032 14.05 6.67282 14.05 5.41032 12.8375C3.68532 11.175 1.71032 8.48125 2.42907 5.30625Z"
                stroke="#C6CDD5"
                stroke-width="1.5"
              />
            </svg>
            Peru, Brazil
          </p>

          <div className="flex gap-2 px-4 pt-8">
            <div className="px-4">
              <h5 className="text-[#A7B5BE] text-xs">Followers</h5>
              <p className="text-sm">12k</p>
            </div>
            <div className="px-4">
              <h5 className="text-[#A7B5BE] text-xs">Following</h5>
              <p className="text-sm">112</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  p-4">
        <img src={person3} alt="" />

        <div>
          <h5 className="text-center">Annette Black</h5>
          <p className="flex items-center gap-1 text-[#C6CDD5] text-xs px-11">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M7.66667 8.39378C8.74363 8.39378 9.61667 7.52073 9.61667 6.44378C9.61667 5.36682 8.74363 4.49377 7.66667 4.49377C6.58972 4.49377 5.71667 5.36682 5.71667 6.44378C5.71667 7.52073 6.58972 8.39378 7.66667 8.39378Z"
                stroke="#C6CDD5"
                stroke-width="1.5"
              />
              <path
                d="M2.42907 5.30625C3.66032 -0.106249 11.6791 -0.0999984 12.9041 5.3125C13.6228 8.4875 11.6478 11.175 9.91657 12.8375C8.66032 14.05 6.67282 14.05 5.41032 12.8375C3.68532 11.175 1.71032 8.48125 2.42907 5.30625Z"
                stroke="#C6CDD5"
                stroke-width="1.5"
              />
            </svg>
            Nevada, USA
          </p>

          <div className="flex gap-2 px-4 pt-8">
            <div className="px-4">
              <h5 className="text-[#A7B5BE] text-xs">Followers</h5>
              <p className="text-sm">987</p>
            </div>
            <div className="px-4">
              <h5 className="text-[#A7B5BE] text-xs">Following</h5>
              <p className="text-sm">3.1k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
