import cola from "../../assets/cocacola.png";
import adidas from "../../assets/exercise.png";
import mcdonalds from "../../assets/mcdonalds.png";

const companies = [
  {
    name: "Coca‑Cola Company",
    img: cola,
    values:
      "Leadership, integrity, collaboration, passion, accountability, quality, and diversity.",
  },
  {
    name: "Adidas",
    img: adidas,
    values:
      "Customer obsession, ownership, invent and simplify, deliver results, earn trust, hire and develop the best, think big, bias for action, frugality, vocally self-critical, learn and be curious, have backbone; disagree and commit.",
  },
  {
    name: "MCDonalds",
    img: mcdonalds,
    values:
      "Focus on the user, act ethically, pursue excellence, respect each other, work with integrity, be open and honest, take action, be a good citizen, innovate, and think big.",
  },
];

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      {/* Heading */}
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        Company values ...
      </h1>

      {/* Value Cards */}
      <div className="grid gap-[4rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className="singleGrid rounded-[10px] hover:bg-blueColor p-[1.5rem] shadow-lg transition-colors duration-300 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              {/* Icon Section */}
              <div className="imgDiv p-[15px] rounded-[.8rem] bg-[#dedef8] h-[60px] w-[60px] flex items-center justify-center">
                <img
                  src={company.img}
                  alt={`logo of ${company.name}`}
                  className="h-[40px] w-[40px] object-contain" // Ensure all icons are the same size
                />
              </div>

              {/* Title */}
              <span className="font-semibold text-textColor text-[18px]">
                {company.name}
              </span>
            </div>

            {/* Description */}
            <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold flex-grow">
              {company.values}
            </p>
          </div>
        ))}
      </div>

      {/* Call-to-Action Card */}
      <div className="card mt-[2rem] flex justify-between items-center bg-white p-[3rem] rounded-[10px] text-white">
        <div>
          <h1 className="text-gray-600 text-[30px] my-8 font-bold">
            Ready to switch your career?
          </h1>
          <h2 className="text-textColor text-[25px] font-bold mb-6">
            Let's get started!
          </h2>
          <button className="mt-[1rem] border-[2px] rounded-[10px] py-[10px] px-[30px] text-[18px] font-semibold text-blueColor hover:bg-white hover:text-blueColor border-blueColor transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Value;
