import React, { Fragment }from 'react';

function Season({seasonName, winner}) {
  return(
    <Fragment>
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
     </ Fragment>
  )
}

export default Season;
