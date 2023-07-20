import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
function ProfileStatusBar(props) {
  return (

    <div className='p-2 m-3 border-2 shadow-xl bg-sky-100 rounded-full'>
        {
            props.status&& <ProgressBar striped animated variant="success" now={props.status} label={`${props.status}%`} />
        }
     
    </div>
  )
}

export default ProfileStatusBar
