import React from 'react'
import Container from '../common/Container'
import logo from '../../assets/image/logo.png'
import Image from '../ui/image'
import { Link, useLocation } from 'react-router-dom'
import { menuData } from '../../dummyData/MenuData'

const Navbar = () => {
  const pathname = useLocation();

  return (
    <header>
      <Container className="py-8">
        <div className='flex items-center justify-between'>
          <Link to="/">
            <Image src={logo} />
          </Link>
          <ul className='flex items-center gap-10'>
            {menuData.map((item,index)=>(
              <li key={index}>
                <Link to={item.url} className={`${item.url === pathname.pathname ? 'text-blue-700' : 'text-black'}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
