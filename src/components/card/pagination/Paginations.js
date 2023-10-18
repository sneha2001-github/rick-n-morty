import React from 'react';
import Pagination from '@mui/material/Pagination';
 

function Paginations({handleChange,page,pagecount}) {


  return (
   <div style={{display:"flex", justifyContent:"center",paddingTop:"24PX",paddingBottom:"15px"}}>
     <Pagination  onChange={handleChange} page={page} count={pagecount} />
   </div>
  );
}

export default Paginations;
