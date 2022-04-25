import { Grid, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Masonry from "@mui/lab/Masonry";
const apiKey = "DyoFzpX4kNlswUSOWjqA1rligt7VQr7q4uwA8N2AhCY"
function ImageContainer(props) {
  const [initialImage, setInitialImage] = useState([]);

  useEffect(() => { 
    const res = axios.get(
      `https://api.unsplash.com/photos/?client_id=${apiKey}`,  
      {
        params: {
          per_page: "30",
        },
      }
    );
    res.then((response) => setInitialImage(response.data));
  }, []);


  useEffect(() => {
    if(props.inputValue){
      const res = axios.get(
        `https://api.unsplash.com/search/photos/?client_id=${apiKey}`,
        {
          params: {
            per_page: "30",
            query:`${props.inputValue}`
          },
        }
      );
      
      res.then((response) => setInitialImage(response.data.results))
    }
    else{
      return
    }
    
  }, [props.inputValue]);
  return (
    <div>
      {initialImage ? (
        <Masonry columns={3} spacing={0.5}>
          {initialImage?.map((item,index) => (
            <Stack key={index}>
              <img src={item?.urls?.small} alt={item.alt_description}  />
            </Stack>
          ))}
        </Masonry>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
export default ImageContainer;
