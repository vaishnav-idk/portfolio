import React, { useState } from 'react';
import '../../css/Services/service_card.css';

function Service_Card(props) {
  const [indexNumber, setIndexNumber] = useState(0);



  return (
    <div className="service_card_container">

      <div className="service_card_detail">
        <h3 className='icon'><i className={props.icons}/></h3>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>

    </div>
  );
}

export default Service_Card;
