import React from 'react';

const containerStyles = {
  display: "flex",
  alignItems: "center"
}

function Battlefield({ combatant1, combatant2 }) {
  return(
    <div style={containerStyles}>
      {combatant1}
      <h3>VS.</h3>
      {combatant2}
    </div>
  )
}

export default Battlefield;
