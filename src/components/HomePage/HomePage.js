import React from 'react';
import './HomePage.css';
import PhotoC1 from "../../assets/images/soccerbackground.jpg";
import PhotoC2 from "../../assets/images/soccerball.jpg";
import PhotoC3 from "../../assets/images/soccerpitch.jpg";
import PhotoC4 from "../../assets/images/soccerplayer.jpg";

function HomePage() {
  const photoCarouselList = [
    {
      photo: PhotoC1,
      info: "Sign up today!",
      alt: "background image",
    },
    {
      photo: PhotoC2,
      info: "Sign up today!",
      alt: "background image",
    },
    {
      photo: PhotoC3,
      info: "Sign up today!",
      alt: "background image",
    },
    {
      photo: PhotoC4,
      info: "Sign up today!",
      alt: "background image",
    },
  ];

  return (
    <div className="home">
      <h1>Welcome to FutureSports Soccer Club</h1>
      <p>
        FutureSports Soccer Club is a premier soccer club dedicated to promoting
        the sport of soccer and fostering a love for the game among players,
        fans, and the community.
      </p>
      <p>
        Our club is home to talented players, dedicated coaches, passionate
        fans, and supportive sponsors. Together, we aim to achieve excellence
        on and off the field.
      </p>
      {/* Rendering the photo Carousel component */}
        {photoCarouselList.map((photo, index) => (
          <div key={index}>
            <img src={photo.photo} alt={photo.alt} />
            <p className="legend">{photo.heading}</p>
          </div>
        ))}
    </div>
  );
}

export default HomePage;

