import React from 'react'
import { tourData } from '../data'
import Title from './Title'
import Tour from './tour'

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title first="featured" second="tours" />

      <div className="section-center featured-center">
        {tourData.map((tour) => {
          const { id } = tour
          return <Tour key={id} data={tour} />
        })}
      </div>
    </section>
  )
}

export default Tours
