const SearchProjects = () => {
  return (
    <div className="max-w-[432px] mx-auto min-h-[144px] shadow-md my-4 py-6 bg-[#FFF] rounded-2xl">
      <div className="flex justify-center">
        <input
          className="w-[336px] h-[43px] rounded-s-lg bg-[#F7F9FF] placeholder:pl-4"
          type="text"
          placeholder="Search Projects"
          name=""
          id=""
        />
        <div className="bg-[#1DC6BB] p-3 rounded-e-lg">
        <svg
          
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9543 2.43363C10.8281 1.68245 9.50449 1.28215 8.15078 1.28339C6.33949 1.29325 4.60528 2.01759 3.32507 3.29897C2.04486 4.58035 1.32211 6.31521 1.31391 8.12651C1.31391 9.48022 1.71541 10.8035 2.46761 11.929C3.21982 13.0545 4.28894 13.9316 5.53972 14.4493C6.79051 14.9671 8.16675 15.1022 9.49436 14.8377C10.822 14.5731 12.0413 13.9208 12.9981 12.9631C13.9548 12.0055 14.6061 10.7856 14.8694 9.45771C15.1328 8.12986 14.9964 6.75374 14.4775 5.50343C13.9586 4.25312 13.0805 3.18481 11.9543 2.43363ZM3.63718 1.37144C4.97321 0.478738 6.54395 0.0022583 8.15078 0.0022583C10.3055 0.0022583 12.3719 0.858204 13.8955 2.3818C15.4191 3.90539 16.275 5.97183 16.275 8.12651C16.275 9.73334 15.7986 11.3041 14.9059 12.6401C14.0131 13.9761 12.7443 15.0174 11.2598 15.6323C9.77528 16.2473 8.14177 16.4081 6.56582 16.0947C4.98986 15.7812 3.54226 15.0074 2.40606 13.8712C1.26987 12.735 0.496105 11.2874 0.182629 9.71148C-0.130848 8.13553 0.03004 6.50201 0.644946 5.0175C1.25985 3.53298 2.30116 2.26415 3.63718 1.37144ZM15.2126 14.2948L19.8184 18.9319C19.8763 18.9902 19.9221 19.0593 19.9533 19.1352C19.9844 19.2112 20.0003 19.2926 20 19.3747C19.9997 19.4568 19.9833 19.5381 19.9516 19.6138C19.9199 19.6896 19.8736 19.7583 19.8153 19.8162C19.757 19.874 19.6879 19.9199 19.612 19.951C19.536 19.9822 19.4546 19.9981 19.3725 19.9978C19.2904 19.9975 19.2091 19.981 19.1334 19.9493C19.0576 19.9176 18.9889 19.8713 18.931 19.8131L14.3252 15.176L15.2126 14.2948Z"
            fill="white"
          />
        </svg>
        </div>
      </div>
      <div className="text-[#284B80] text-sm flex justify-between px-6 gap-3 pt-7">
        <p>#medical</p>
        <p>#Financial</p>
        <p>#eCommerce</p>
        <p>#Marketing</p>
      </div>
    </div>
  );
};

export default SearchProjects;
