import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../Assets/Gemstone logo_pages-to-jpg-0001.jpg'
import '../components/css/Footer.css'

function Footer() {
  return (
    <div>
      <Container>
        <div className='row'>
          <div className='col-md-4 mt-4 '>
            <div className='logo'><img src={logo} height="100%" width="100%" /></div>
            <hr />
            <p className='text-center '>© copyright 2024. All rights reserved.</p>
          </div>
          <div className='col-md-4 '></div>
          <div className='col-md-4 d-flex justify-content-center mt-4 '>
            <div style={{width:"object-fit-contain "}}>
            <div>Crystall Mall,<br />Kalavad road, <br /> Rajkot - 360005</div>
            <div className='mt-4 '>+91 9724528889</div>
            <div className='mt-4 '>Gemstone@gamil.com</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Footer