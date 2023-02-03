import React, { Component } from 'react';
import Title from './Title';
import Missiones from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="container-missions">
        <Title headline="Missões" />
        {Missiones.map((mission) => (
          <MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
