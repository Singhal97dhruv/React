import React from 'react'
const Movie = (props) => {
  return (
    <div className='movie'>
    <img src={props.img} alt="" />
    <h3 style={{color: "black"}}>{props.title}</h3>
    <h4>{props.year}</h4>
    </div>
  )
}

export default Movie 