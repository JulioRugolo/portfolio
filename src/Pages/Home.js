import React, { Component } from 'react'
import Header from '../Components/Header'
import './CSS/Home.css'

class Home extends Component {
  render () {
    return (
        <>
            <Header />
            <main className='mainContent'>
              <section className='info'>
              Olá, me chamo Julio, tenho 31 anos, atualmente estudo para me tornar FullStack!
              Desde pequeno sempre fui fascinado por tecnologia, e hoje achei o sentido para minha vida profissional!
              </section>

              <section className='socialContainer'>
                <p>Check out my social networks!</p>
                <div className='social'>
                <a href="https://www.linkedin.com/in/juliorugolo/" target="_blank" rel='noreferrer'>LinkedIn</a>
                <a href="https://github.com/JulioRugolo" target="_blank" rel='noreferrer'>GitHub</a>

                </div>
              </section>
            </main>
          </>

    )
  }
}

export default Home
