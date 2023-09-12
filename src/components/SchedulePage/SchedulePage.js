import React from 'react';
import './SchedulePage.css';

function SchedulePage() {
  return (
    <div className="schedule-page">
      <h1>Match Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Opponent</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Oct 15, 2023</td>
            <td>Brisbane Bullets</td>
            <td>Suncorp Arena</td>
          </tr>
          <tr>
            <td>Oct 22, 2023</td>
            <td>Melbourne Storm</td>
            <td>AAMI Park</td>
          </tr>
          <tr>
            <td>Oct 29, 2023</td>
            <td>Sydney Swans</td>
            <td>Accore Stadium</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SchedulePage;
