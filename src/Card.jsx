import React from 'react'

const Card = (props) => {
  return (
    <div>
      <iframe className='rounded' src={props.link}></iframe>
      <p className='m-0 fw-bold'>{props.para}</p>
      <p className='m-0'>{props.channel}</p>
      <p className='m-0'>{props.year}</p>
    </div>
  )
}

export default Card
