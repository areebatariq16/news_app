import React from 'react';

const Card = ({ data = [] }) => {  
  console.log(data);

  return (
    <div className='card-container'>
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <div key={index} className='card'>
              <img src={curItem.urlToImage} alt="News" /> 
              <div className='card-content'>
                <a className='title' onClick={() => window.open(curItem.url, "_blank")}>{curItem.title}</a>
                <p>{curItem.description}</p>
                <button onClick={() => window.open(curItem.url, "_blank")}>Read more</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;


