import React, { Component } from 'react';
import SurvivorSeasonImage from '../images/survivor-season-image.png'

function SeasonCard () {
	return (
		<div ClassName="survivor-season-card">
			<img src={SurvivorSeasonImage} />
			<div ClassName="card-title">Survivor Season Name</div>
		</div>
	);
}

export default SeasonCard;