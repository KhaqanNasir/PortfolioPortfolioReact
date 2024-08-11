import React from 'react';

const CertificateData = ({ cerData }) => {
  const cardStyle = {
    backgroundColor: 'hsla(0, 3%, 25%, 0.485)',
    borderRadius: '20px',
    marginBottom: '20px',
    marginTop: '20px',
    padding: '10px',
  };

  const cardTitleStyle = {
    color: 'gray',
  };

  const cardMutedStyle = {
    color: 'gray',
  };

  const cardImgTopStyle = {
    borderRadius: '20px',
  };

  return (
    <>
      {cerData.map((curEle) => {
        return (
          <div 
            className="card col-xl-5 col-lg-5 col-sm-12 col-md-12 shadow-lg" 
            key={curEle.id} 
            style={cardStyle}
          >
            <a href={curEle.image} target='_blank'>
            <img 
              src={curEle.image}
              className="card-img-top img-fluid" 
              alt={curEle.title} 
              style={cardImgTopStyle}
            />
            </a>
            <div className="card-body">
              <h5 className="card-title" style={cardTitleStyle}>
                {curEle.title}
              </h5>
              <p className="card-text">
                {curEle.description}
              </p>
              <p className="card-muted" style={cardMutedStyle}>
                {curEle.date}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CertificateData;
