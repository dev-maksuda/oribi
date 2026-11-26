import React from 'react'

const Peragraph = ({className, text, title}) => {
  return (
    <p className={`font-normal text-base ${className}`} title={title}>{text}</p>
  )
}

export default Peragraph
