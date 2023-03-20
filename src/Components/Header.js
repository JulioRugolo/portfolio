import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Header.css'

class Header extends Component {
  render () {
    const logoUrl = 'https://raw.githubusercontent.com/JulioRugolo/juliorugolo.github.io/bc20c6b9b73c4f2623e7d76a43142107f127f889/public/src/Components/img/Logo.svg'
    return (
        <>
            <header>
                <div className="logoContainer">
                    <Link to="/"><img src={logoUrl} alt="JR Logo"/></Link>
                </div>
                <div className="title">
                    Portfólio
                </div>
                <div className="navbar">
                    <Link to="/experience">Experiências</Link>
                    <Link to="/projects">Projetos</Link>
                    <Link to="/contact">Contato</Link>
                </div>
            </header>
          </>

    )
  }
}

export default Header
