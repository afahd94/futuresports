import React from 'react';
import './PlayersPage.css';
import VideoPlayer from './VideoPlayer';

const playersData = [
  {
    id: 1,
    name: 'Alex Ashak',
    position: 'Forward',
    nationality: 'Australia',
    description: 'A prolific goal-scorer known for his speed and agility on the field.',
  },
  {
    id: 2,
    name: 'Christiane Fahd',
    position: 'Midfielder',
    nationality: 'Germany',
    description: 'A playmaker with exceptional passing ability and vision.',
  },
];

function PlayersPage() {
  return (
    <div className="players">
      <h1>Meet Our Players</h1>
      <ul>
        {playersData.map(player => (
          <li key={player.id}>
            <h3>{player.name}</h3>
            <p>{`${player.position} from ${player.nationality}`}</p>
            <p>{player.description}</p>
          </li>
        ))}
      </ul>
      <VideoPlayer />
    </div>
  );
}

export default PlayersPage;
