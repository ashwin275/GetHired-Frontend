import React, { useContext } from 'react'
import { Context } from '../../Features/Context/JobsContext'

function SearchJob() {
    const {jobId} = useContext(Context)
    
  return (
    <div className='w-full h-20  p-5 border-1 '>
      <p>Search</p>
    </div>
  )
}

export default SearchJob
