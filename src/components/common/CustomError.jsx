import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

const CustomError = () => {
  return (
    <div className='min-h-screen '>
        <Container>
            <div className='max-w-[652px]'>

            <Link to={'/'}>Back to Home</Link>
            </div>
        </Container>
    </div>
  )
}

export default CustomError
