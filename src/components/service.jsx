import React from 'react'

const Service = ({ data }) => {
  const { serviceTitle, paragraph, icon } = data
  return (
    <article className="service">
      <span className="service-icon">
        <i className={icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{serviceTitle}</h4>
        <p className="service-text">{paragraph}</p>
      </div>
    </article>
  )
}

export default Service
