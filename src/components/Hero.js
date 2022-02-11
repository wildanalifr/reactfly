import React from 'react'
import { Button } from 'reactstrap'
import Heros from '../images/heros.png'

const Hero = () => {
  return (
    <div className="container mt-5 d-flex align-items-center">
      <div className="">
        <h1 className="display-3">Hello, Semua!</h1>
        <p className="lead">Selamat Datang di Personal Website ku, Wildan Dev 😊</p>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Click Me </Button>
        </p>
      </div>

      <div>
        <img src={Heros} alt="hello " />
      </div>
    </div>
  )
}

export default Hero
