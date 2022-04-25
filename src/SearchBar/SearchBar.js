import React, { useState } from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export default function SearchBar(props) {
  const [searchTag, setSearchTag] = useState("")

  const onInputChange = (e) => {
    const { name, value } = e.target
    setSearchTag(value)
    props.onChangeOfInPut(value)

  }
  const onSubmitText = (e) => {
    e.preventDefault()
   
  }
  return <div style={{ textAlign: 'center', margin: "20px" }}>
    <form onSubmit={onSubmitText}>
      <Input
        placeholder="Search Image......."
        onChange={onInputChange} name="imageTagFiled"
        value={searchTag}
      />
      <Button variant="contained" type="submit" onSubmit={onSubmitText}>Search</Button>
    </form>
  </div>;
}
