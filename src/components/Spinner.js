import React from 'react'
import loading from '../spinner.gif'

const Spinner = () => {
  
    return (
      <div className='text-center'>
        <img className="my-5" src={loading} alt="loading" />
      </div>
    )
}
export default Spinner