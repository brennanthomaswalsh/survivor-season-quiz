import React from 'react';

function Season({seasonName, winner}) {
  return(
    <div>
      <p>Season: </p>
      <div>
        { seasonName }
      </div>
    </div>

    <div>
      <p>Winner: </p>
      <div>
        { winner }
      </div>
    </div>
  )
}

export default Season;
