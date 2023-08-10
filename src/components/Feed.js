// import { BorderRight } from '@mui/icons-material'
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory,setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  // console.log(videos)
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory} `).then((data) => setVideos(data.items))
  }, [selectedCategory])
  
  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" }, 
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
          borderRight: "1px solid #3d3d3d",
        }}
      >
        <Sidebar selectedCategory = {selectedCategory} setSelectedCategory = {setSelectedCategory} />
        <Typography
          className="copyright"
          sx={{ color: "#fff", mt: 1.5 }}
          variant="body2"
        >
          Copyright 2023 Sonali Kokalki
        </Typography>
      </Box>
      <Box p={2} sx={{ height: "90vh", overflowY: "auto", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb="2"
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
