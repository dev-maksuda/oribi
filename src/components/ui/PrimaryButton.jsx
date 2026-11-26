import React from 'react'

const PrimaryButton = ({text, className, onClick}) => {
  return (
    <button className={`${className}`}>{text}</button>
  )
}

export default PrimaryButton
