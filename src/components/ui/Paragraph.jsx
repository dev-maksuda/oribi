import React from 'react'

const Paragraph = ({text, className, title}) => {
  return (
    <p className={`font-normal text-base text-gray1 ${className}`} title={title}>{text}</p>
  )
}

export default Paragraph
