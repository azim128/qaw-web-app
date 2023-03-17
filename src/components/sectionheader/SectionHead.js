import React from 'react'
import './section.header.css'
const SectionHead = (props) => {
  return (
    <div className="section-title">
          <h2>{props.title}</h2>
          <p>{props.subtitle}</p>
        </div>
  )
}

export default SectionHead