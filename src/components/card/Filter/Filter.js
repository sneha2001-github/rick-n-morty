import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./filter.css";
import { Grid } from "@mui/material";

function Filter({ content, handleChange }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "20px",
        gap: "10px",
      }}
    >
      <Grid container spacing={2} width="80%">
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="name"
            value={content.name}
            onChange={handleChange}
            name={"name"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="gender"
            select
            value={content.gender}
            onChange={handleChange}
            name={"gender"}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <TextField
            fullWidth
            variant="outlined"
            label="status"
            select
            value={content.status}
            onChange={handleChange}
            name={"status"}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="alive">Alive</MenuItem>
            <MenuItem value="dead">Dead</MenuItem>
            <MenuItem value="unknown">unknown</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </div>
  );
}

export default Filter;
