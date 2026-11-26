import React from 'react'
import Container from '../common/Container'
import Image from '../ui/Image'
import logo from '../../assets/image/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { menuData } from '../../dummyData/MenuData'

const Navbar = () => {
    const pathname = useLocation()

    return (
        <header>
            <Container className='py-6'>
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <Image src={logo} />
                    </Link>
                    <ul className='flex gap-20'>
                        {menuData.map((item, index) => (
                            <li key={index}>
                                <Link to={item.url} className={`font-medium uppercase ${item.url === pathname.pathname ? 'text-blue-600' : 'text-black'}`}>
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
