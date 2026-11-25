import React from 'react'
import Container from '../common/Container'
import logo from '../../assets/image/logo.png'
import Image from '../ui/image'


const Navbar = () => {
  return (
    <header>
        <Container>
            <div>
                <Image src={logo}/>
            </div>
        </Container>
    </header>
  )
}

export default Navbar
