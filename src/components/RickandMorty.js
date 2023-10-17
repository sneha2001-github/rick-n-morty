import React, { useState, useEffect } from "react";
import Cards from "./card/Cards";
import Grid from "@mui/material/Grid";
import Pagination from "./Pagination";
import Filter  from "./Filter";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [content, setContent] = useState({
    page: 1,
    name: "",
    status: "",
    type: "",
    species: "",
    gender: "",
  });
  const charactersPerPage = 20; // Number of characters per page
  const totalCharacters = 842; // Total number of characters

  const totalPages = Math.ceil(totalCharacters / charactersPerPage);

  const fetchCharacters = async () => {
    try {
      // Calculate the offset based on the current page
      const offset = (content.page - 1) * charactersPerPage;

      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${content.page}&name=${content.name}&status=${content.status}&type=${content.type}&species=${content.species}&gender=${content.gender}&status=${statusFilter}&gender=${genderFilter}`
      );


      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePrevPage = () => {
    if (content.page > 1) {
      setContent((prevContent) => ({ ...prevContent, page: prevContent.page - 1 }));
    }
  };

  const handleNextPage = () => {
    if (content.page < totalPages) {
      setContent((prevContent) => ({ ...prevContent, page: prevContent.page + 1 }));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContent({ ...content, [name]: value });
  };

  const handleGenderFilterChange = (selectedGender) => {
    setContent({ ...content, gender: selectedGender, page: 1 });
  };

  const handleStatusFilterChange = (selectedStatus) => {
    setContent({ ...content, status: selectedStatus, page: 1 });
  };

  const handleSearchSubmit = () => {
    fetchCharacters();
  };
  useEffect(() => {
    fetchCharacters();
  }, [content.page, content.name, content.status, content.type, content.species, content.gender,genderFilter, statusFilter]);

  return (
    <div>
 <Filter
        gender={content.gender}
        onGenderChange={handleGenderFilterChange}
        status={content.status}
        onStatusChange={handleStatusFilterChange}
        onSearchSubmit={handleSearchSubmit}
      />

      <Pagination
           currentPage={content.page}
           totalPages={totalPages}
           onNextPage={handleNextPage}
           onPrevPage={handlePrevPage}
           onSearchChange={handleInputChange}
           onSearchSubmit={handleSearchSubmit}
           onGenderFilterChange={(event) => setGenderFilter(event.target.value)}
            statusFilter={statusFilter}
           onStatusFilterChange={(event) => setStatusFilter(event.target.value)}
      />
      <div style={{ width: "100%", marginLeft: "50px" }}>
        <Grid
          sx={{ margin: "auto" }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {characters.map((character, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Cards data={character} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default RickAndMorty;
