import { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  applySearchToJobs,
  clearAllFilters,
} from "../../store/slices/homeSlice";
import { h1 } from "framer-motion/client";

const Search = ({ handleNotFound }) => {
  const [searchText, setSearchText] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobLevel, setJobLevel] = useState("");
  const [jobSort, setJobSort] = useState("");

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.home.jobs); // Get the filtered jobs from the Redux state

  const applyFilters = () => {
    const search = {};
    if (searchText.trim()) search.searchText = searchText;
    if (company.trim()) search.company = company;
    if (location.trim()) search.location = location;
    search.jobType = jobType;
    search.jobLevel = jobLevel;
    search.jobSort = jobSort;

    dispatch(applySearchToJobs(search));
    if (jobs.length > 0) {
      handleNotFound();
    }
  };

  const handleFilterChange = (e) => {
    e.preventDefault();
    applyFilters();
  };

  const handleClick = (setter) => {
    setter(""); // Reset the corresponding state to an empty string
    applyFilters(); // Apply the filters after clearing the input
  };

  const handleClear = () => {
    dispatch(clearAllFilters()); // Dispatch the clear all filters action
    setJobType("");
    setJobLevel("");
    setJobSort("");
    setSearchText("");
    setLocation("");
    setCompany("");
  };

  useEffect(() => {
    applyFilters();
  }, [dispatch, searchText, company, location, jobType, jobLevel, jobSort]); // Dependency array updated

  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-5 md:p-[3rem]">
      <form onSubmit={handleFilterChange}>
        <div className="firstDiv flex flex-col md:flex-row justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
          {/* Search by job */}
          <div className="flex flex-1 gap-2 items-center mb-4 md:mb-0">
            <AiOutlineSearch className="text-[25px] icon text-blue-500" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search Job Here ..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor cursor-pointer"
              onClick={() => handleClick(setSearchText)}
            />
          </div>

          {/* Search by company */}
          <div className="flex flex-1 gap-2 items-center mb-4 md:mb-0">
            <BsHouseDoor className="text-[25px] text-blue-500 icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search by company..."
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor cursor-pointer"
              onClick={() => handleClick(setCompany)}
            />
          </div>

          {/* Search by location */}
          <div className="flex flex-1 gap-2 items-center mb-4 md:mb-0">
            <CiLocationOn className="text-[25px] text-blue-500 icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-full"
              placeholder="Search by location ..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <AiOutlineCloseCircle
              className="text-[30px] text-[#a5a6a6] hover:text-textColor cursor-pointer"
              onClick={() => handleClick(setLocation)}
            />
          </div>
        </div>
      </form>

      {/* Filter options */}
      <div className="secDiv flex flex-col md:flex-row items-center gap-5 justify-center">
        {/* Sort by filter */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select
            name="relevance"
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1 border border-gray-300"
            value={jobSort}
            onChange={(e) => setJobSort(e.target.value)}
          >
            <option value="relevance">Relevance</option>
            <option value="inclusive">Inclusive</option>
            <option value="starts_with">Starts With</option>
            <option value="contains">Contains</option>
          </select>
        </div>

        {/* Type filter */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[#808080] font-semibold">
            Type:
          </label>
          <select
            name="type"
            id="type"
            className="bg-white rounded-[3px] px-4 py-1 border border-gray-300"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">All</option>
            <option value="full_time">Full-time</option>
            <option value="part_time">Part-time</option>
            <option value="remote">Remote</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        {/* Level filter */}
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text-[#808080] font-semibold">
            Level:
          </label>
          <select
            name="level"
            id="level"
            className="bg-white rounded-[3px] px-4 py-1 border border-gray-300"
            value={jobLevel}
            onChange={(e) => setJobLevel(e.target.value)}
          >
            <option value="">All</option>
            <option value="senior">Senior</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advocate">Advocate</option>
          </select>
        </div>

        <button
          className="bg-blueColor hover:bg-blue-600 transition duration-300 text-white px-6 py-3 rounded-[10px] text-lg font-semibold w-full md:w-auto"
          onClick={handleFilterChange}
        >
          Search
        </button>
        {/* Clear all filters */}
        <span
          className="text-[#a1a1a1] cursor-pointer hover:underline"
          onClick={handleClear}
        >
          Clear All
        </span>
      </div>

      {/* {jobs.length === 0 && (
        <div className="text-center text-red-500 mt-4">No jobs found.</div>
      )} */}
    </div>
  );
};

export default Search;
