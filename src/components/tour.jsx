import React from 'react'

const Tour = ({ data }) => {
  const { img, tour, text, icon, tourCity, duration, pricing, date } = data
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tour}</h4>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className={icon}></i>
            </span>{' '}
            {tourCity}
          </p>
          <p>{duration}</p>
          <p>{pricing}</p>
        </div>
      </div>
    </article>
  )
}

export default Tour
