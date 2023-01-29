import React from 'react'
import { servicesData } from '../data'
import Service from './service'
import Title from './Title'

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title first="our" second="services" />
      <div className="section-center services-center">
        {servicesData.map((data) => {
          const { id } = data
          return <Service key={id} data={data} />
        })}
      </div>
    </section>
  )
}

export default Services
