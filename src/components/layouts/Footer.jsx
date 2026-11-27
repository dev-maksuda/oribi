import React from 'react'
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import { menuData } from '../../dummyData/MenuData'

const Footer = () => {
  return (
    <footer className='bg-[#F5F5F3] pt-13.75 pb-13'>
      <Container>
        <div>
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
        </div>
      </Container>
    </footer>
  )
}


export default Footer