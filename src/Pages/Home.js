import React, { Component } from 'react'
import Header from '../Components/Header'
import './CSS/Home.css'

class Home extends Component {
  render () {
    return (
        <>
            <Header />
            <main className='mainContent'>
              <h1>Julio Rugolo</h1>
            </main>
          </>

    )
  }
}

export default Home
