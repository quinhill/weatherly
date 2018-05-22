import React, { component } from 'react';


const Current = (props) => {


    return (
      <div>
        <h2>{props.city}</h2>
        <h3>{props.condition}</h3>
      </div>
    )
  
}

export default Current;