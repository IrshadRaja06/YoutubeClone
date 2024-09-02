import React from 'react'

const Header = () => {
  return (
    <div className='row py-4 pe-5'>
      <i class="fa-solid fa-bars ps-5 fs-3 col-1"></i>
      <i class="fa-brands fa-youtube text-danger fs-2 col-3"><span className='text-black fs-4'>Youtube</span></i>
      <div className="col-5 text-center d-flex">
      <input className='form-control w-75 ps-5' placeholder='Search'></input>
      <i class="fa-solid fa-magnifying-glass text-secondary fs-3 p-2 text-start border "></i>
      </div>
       
    </div>
  )
}

export default Header
