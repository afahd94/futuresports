import React from 'react';
import './NewsPage.css';

function NewsPage() {
  return (
    <div className="news-page">
      <h1>Latest News</h1>
      <div className="news-article">
        <h2>FutureSports Wins Championship</h2>
        <p>
          We are excited to announce that FutureSports Soccer Club has won the
          championship title for the third consecutive year. It was an
          incredible journey filled with thrilling matches and outstanding
          performances by our players.
        </p>
      </div>
      <div className="news-article">
        <h2>New Signing: Star Forward</h2>
        <p>
          FutureSports is proud to welcome a new addition to the team, Christiane Fahd, a renowned forward with an impressive goal-scoring record. Christiane
          brings her expertise to lead our attack in the upcoming season.
        </p>
      </div>
    </div>
  );
}

export default NewsPage;
