import React from 'react'


function Dialogs({data}) {


  return (
    <>
     { (
        <div>
          <p>Status: {data.status}</p>
          <p>Species: {data.species}</p>
          <p>Gender: {data.gender}</p>

        </div>
      )}
    </>
  )
}

export default Dialogs;