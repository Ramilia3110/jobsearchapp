import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchByAllJobs } from "../../store/slices/homeSlice";
import JobCard from "./JobCard/JobCard";

const JobDiv = ({ notFound }) => {
  const dispatch = useDispatch();
  const { allJobs, loading, error, jobs } = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(fetchByAllJobs());
  }, [dispatch]);

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center placeholder-gray-100 mt-10">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : jobs.length > 0 ? (
          jobs.map(({ id, image, title, time, location, desc, company }) => (
            <JobCard
              key={id}
              id={id}
              image={image}
              title={title}
              time={time}
              location={location}
              desc={desc}
              company={company}
            />
          ))
        ) : notFound ? (
          <h1>Jobs you searched are not found</h1>
        ) : allJobs.length > 0 ? (
          allJobs.map(({ id, image, title, time, location, desc, company }) => (
            <JobCard
              key={id}
              id={id}
              image={image}
              title={title}
              time={time}
              location={location}
              desc={desc}
              company={company}
            />
          ))
        ) : (
          <h1>No Jobs Found</h1>
        )}
      </div>
    </div>
  );
};

export default JobDiv;
