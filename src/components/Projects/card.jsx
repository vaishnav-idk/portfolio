import React, { useState } from 'react';
import '../../css/Projects/card.css';

function Card(props) {
  const [indexNumber, setIndexNumber] = useState(0);

  // Function to move the slide based on the direction
  function moveSlide(direction) {
    const slides = document.querySelectorAll(`.id_${props.id}`); // Get images with unique id
    const totalSlides = slides.length;

    setIndexNumber((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = totalSlides - 1; // Loop to the last image
      else if (newIndex >= totalSlides) newIndex = 0; // Loop to the first image
      return newIndex;
    });
  }

  return (
    <div className="card_container">
      <div className="card">
        <div className="card_top">
          <div className="card_image_container">
            {props.images.map((item, index) => (
              <img key={index} className={`card_images id_${props.id}`} src={item} alt={`Slide ${index + 1}`}
                style={{transform: `translateX(${-indexNumber * 100}%)`,transition: 'transform 0.5s ease-in-out',}}
              />
            ))}
          </div>
          <button className="prev" onClick={() => moveSlide(-1)}>
            <i className="fa-solid fa-chevron-left" />
          </button>
          <button className="next" onClick={() => moveSlide(1)}>
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>

        <div className="card_detail">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
