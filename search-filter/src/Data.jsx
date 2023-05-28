import React, { useState } from "react";
import applicants from "../MOCK_DATA.json";

const Data = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredApplicants = applicants.filter((info) =>
    info.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input type="text" onChange={handleSearch} />
      {filteredApplicants.map((info) => (
        <div key={info.id}>
          <p>{info.first_name}</p>
        </div>
      ))}
    </div>
  );
};

export default Data;
