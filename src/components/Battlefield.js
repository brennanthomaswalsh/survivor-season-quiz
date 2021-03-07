import React from 'react';

const containerStyles = {
  display: "flex",
  alignItems: "center"
}

function Battlefield({ combatant1, combatant2 }) {
  return(
    <ol style={containerStyles}>
      {combatant1}
      <h3>VS.</h3>
      {combatant2}
    </ol>
  )
}

export default Battlefield;
