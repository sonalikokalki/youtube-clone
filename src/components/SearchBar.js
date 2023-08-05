import { IconButton, Paper } from "@mui/material";
import React from "react";
import { Search, SearchIcon } from "@mui/icons-material";

const SearchBar = () => {
  return (
    
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "none",
        boxShadow: "none",
        pl: 2,
        mr: { sm: 5 },
      }}
    >
      <input className="search-bar" placeholder="Search" onChange={() => {}} value=''/>
      <IconButton type="submit" sx={{color:'red', p:'10px'}}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
