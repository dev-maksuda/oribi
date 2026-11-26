import React from 'react'

const PrimaryButton = ({text,onClick, className}) => {
  return (
    <button onClick={onClick} className={`text-sm border border-black1 text-black1 hover:text-white font-bold px-13 py-5 bg-transparent cursor-pointer hover:bg-black1 transition-all duration-300 inline-block capitalize ${className}`}>{text}</button>
  )
}

export default PrimaryButton
