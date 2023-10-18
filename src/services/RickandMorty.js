import React, { useState, useEffect } from "react";
import Cards from "../components/card/Cards";
import Grid from "@mui/material/Grid";
import Pagination from "../components/card/pagination/Paginations";
import Filter from "../components/card/Filter/Filter";

function RickAndMorty() {
  const [characters, setCharacters] = useState([]);
  const [pagecount, setPagecount] = useState(42);
  const [content, setContent] = useState({
    page: 1,
    name: "",
    status: "",
    type: "",
    species: "",
    gender: "",
  });

  const fetchCharacters = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${content.page}&name=${content.name}&status=${content.status}&type=${content.type}&species=${content.species}&gender=${content.gender}`
      );

      const data = await response.json();

      setCharacters(data.results);
      setPagecount(data.info.pages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    console.log(e);
    setContent((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleChangepage = (e, value) => {
    setContent((prevState) => {
      return { ...prevState, page: value };
    });
  };

 
  useEffect(() => {
    fetchCharacters();
  }, [content]);

  return (
    <div>
      <Filter
        handleChange={handleChange}
        content={content}
      />

      <div style={{ width: "100%" }}>
        <Grid
          sx={{ margin: "auto" }}
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {characters.map((character, index) => (
            <Grid item xs={2} sm={4} md={4} key={index} margin={"auto"}>
              <Cards data={character} />
            </Grid>
          ))}
        </Grid>
      </div>
      <Pagination pagecount={pagecount} handleChange={handleChangepage} />
    </div>
  );
}

export default RickAndMorty;
