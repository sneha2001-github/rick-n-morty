import React from "react";

function Filter({ gender, onGenderChange, status, onStatusChange, onSearchSubmit }) {
  const handleGenderChange = (e) => {
    onGenderChange(e.target.value);
  };

  const handleStatusChange = (e) => {
    onStatusChange(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    onSearchSubmit(searchTerm);
  };

  return (
    <div>
      <select value={gender} onChange={handleGenderChange}>
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <select value={status} onChange={handleStatusChange}>
        <option value="">All Statuses</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}

export default Filter;
