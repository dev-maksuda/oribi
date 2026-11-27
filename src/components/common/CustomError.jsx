import React from 'react'
import { useState } from 'react'
import { useNavigate} from "react-router-dom";
import Container from './Container'
import Paragraph from '../ui/Paragraph'
import Input from '../ui/Input'
import PrimaryButton from '../ui/PrimaryButton'
import { IoIosSearch } from "react-icons/io";


const CustomError = () => {
  const [searchValue, setSearchValue] = useState("")
  let navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/")
  }

  console.log(searchValue)


  return (
       <div className=' '>
      <Container>
        <div className=' min-h-[80vh] flex items-center'>
          <div className='max-w-[652px]'>
            <span className=' text-black1 text-[200px] font-bold'>404</span>
            <Paragraph text="The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?" />
            <div className='border border-gray2 p-5 mt-12.5 relative'>
              <Input value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}
                type="text" placeholder="Search Here" className="outline-0 w-[88%]" />
              <IoIosSearch className='absolute right-5 top-1/2 -translate-y-1/2 text-2xl' />
            </div>
            <PrimaryButton text={"back to home"} onClick={handleRedirect} className="mt-15" />
          </div>
        </div>
      </Container>
    </div>

  )
}

export default CustomError
