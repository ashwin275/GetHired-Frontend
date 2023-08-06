import React from 'react'

function TimeConverter(props) {
    const convertTimestamp = (dateString) => {
        const providedDate = new Date(dateString);
        const currentDate = new Date();
    
        
        if (providedDate.toDateString() === currentDate.toDateString()) {
          
          return providedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else if (providedDate.getDate() === currentDate.getDate() - 1) {
          
          return 'yesterday';
        } else {
          
          return providedDate.toISOString().slice(0, 10);
        }
      };
  return (
   <>{convertTimestamp(props.created)}</>
  )
}

export default TimeConverter
