import React from 'react'

const PortfolioData = ({portfolio}) => {
  return (
    <>
    {portfolio.map((portEle)=>{
      return(
        <> <div className="box col-xl-4 col-lg-4 col-md-6 col-sm-12" id={portEle.id}>
      <a href={portEle.link} target='_blank'> <img src={portEle.image} className='img-fluid shadow-lg'></img>
      </a>
        <span className='portfolio-heading'>{portEle.title}</span>
        <span className='project-type'>{portEle.catogery}</span>
        <span className='project-link'><a href={portEle.projectLink} target='_blank'>View Link</a></span>
      </div>
      </>
      );
    })}
    </>
  )
}

export default PortfolioData
