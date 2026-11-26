import React from 'react'
import { useNavigate } from "react-router-dom";
import Container from './Container'
import PrimaryButton from '../ui/PrimaryButton'

const CustomError = () => {
  let navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/")
  }

  return (
    <div className='min-h-screen '>
        <Container>
            <div className='max-w-[652px]'>
                <PrimaryButton text={"back to home"} onClick={handleRedirect} />
            </div>
        </Container>
    </div>
  )
}

export default CustomError
