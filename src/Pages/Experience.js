import React, { Component } from 'react';
import Header from '../Components/Header';

class Experience extends Component {
  render() {
    return (
      <>
      <Header />
      <div className='mainContent'>
        <div>
        Fico feliz de você ter chego até aqui!
        Agora vamos conhecer quais linguagens eu trabalho?
        </div>
        <div className='socialContainer'>
          
          <div className='social'>
          <a href="https://www.linkedin.com/in/juliorugolo/" target="_blank" rel='noreferrer'>LinkedIn</a>
          <a href="https://github.com/JulioRugolo" target="_blank" rel='noreferrer'>GitHub</a>

          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Experience;