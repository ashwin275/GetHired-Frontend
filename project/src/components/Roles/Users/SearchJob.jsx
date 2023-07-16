import React, { useContext } from 'react'
import { Context } from '../../Features/Context/JobsContext'

function SearchJob() {
    const {jobId} = useContext(Context)
    
  return (
    <div>
      <p>Search</p>
    </div>
  )
}

export default SearchJob
