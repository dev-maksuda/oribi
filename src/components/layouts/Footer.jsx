import React from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import { menuData, categoryData, footerNavData } from '../../dummyData/MenuData'

const Footer = () => {
  return (
    <footer className='bg-[#F5F5F3] pt-13.75 pb-13'>
      <Container>
        <div className='grid grid-cols-3'>
          <div>
            <h3 className='font-bold text-black1 uppercase mb-4.25'>MENU</h3>
            <ul className='grid grid-cols-1 gap-1.5'>
              {menuData.map((item,index)=>(
                <li key={index}>
                  <Link to={item.url} className='font-normal text-sm text-gray3 capitalize'>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-black1 uppercase mb-4.25'>SHOP</h3>
            <ul className='grid grid-cols-1 gap-1.5'>
              {categoryData.map((item,index)=>(
                <li key={index}>
                  <Link to={item.url} className='font-normal text-sm text-gray3 capitalize'>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='font-bold text-black1 uppercase mb-4.25'>Help</h3>
            <ul className='grid grid-cols-1 gap-1.5'>
              {footerNavData.map((item,index)=>(
                <li key={index}>
                  <Link to={item.url} className='font-normal text-sm text-gray3 capitalize'>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='bg-red-400'>
            <h3 className='font-bold text-black1 uppercase mb-4.25'>(052) 611-5711 company@domain.com</h3>
            <address>575 Crescent Ave. Quakertown, PA 18951</address>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer
