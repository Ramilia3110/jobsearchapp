import React, { useState } from "react";
import Search from "../Search/Search";
import JobDiv from "../JobDiv/JobDiv";

const Home = () => {
  const [notFound, setNotFound] = useState(false); // Corrected line
  const handleNotFound = () => {
    setNotFound(true);
  };

  return (
    <div>
      <Search handleNotFound={handleNotFound} />
      <JobDiv notFound={notFound} />
    </div>
  );
};

export default Home;
