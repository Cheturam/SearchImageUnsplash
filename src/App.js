import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './App.css';
import ImageContainer from './ImageContainer/ImageContainer';
import SearchBar from  "./SearchBar/SearchBar"
import React, { useState } from "react";

function App() {
 const [inputValue,setInputValue]=useState("")
 const onChangeOfInPut=(e)=>{
  setInputValue(e)
  }

  return (
    <div className="App">
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: 'grey', height: '100vh' }}>
          <h1> Unsplush</h1>
          <SearchBar onChangeOfInPut={onChangeOfInPut}/>
          <ImageContainer inputValue={inputValue} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
