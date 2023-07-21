import React from 'react'

function Daysago(props) {

    const formatDate = (dateString) => {
        const createdDate = new Date(dateString);
        const currentDate = new Date();
        
        const timeDifferenceInMs = currentDate - createdDate;
        
        const daysAgo = Math.floor(timeDifferenceInMs / (1000 * 60 * 60 * 24));

        if (daysAgo === 0){
            return 'Today'
        }else{
            return `${daysAgo} days ago`;
        }
    
        
      };
  return (
    <>{formatDate(props.created)}</>
  )
}

export default Daysago
