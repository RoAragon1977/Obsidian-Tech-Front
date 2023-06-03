import React, {useState} from 'react'

import { NavLink } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faCircleQuestion, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';

import '../navegacion/ObsidianNavbar.css'
import FilterComponent from '../filtroNavegacion/FilterComponent';

export const ObsidianNavbar = () => {

//useState para menu burger
  const [clicked, setClicked] = useState(false)

  function clickear(){
    setClicked(!clicked)
  }
//useState para boton user
  const [login, setLogin] = useState(false)

  function openedUser(){
    setLogin(!login)
  }

  return (
    <>
    <div className='navBarBox'>
      <div className='navBarContainer'>
        <h2>Obsidian<span>-</span>Tech</h2>
        <div className={ clicked ? 'linksContainer active': 'linksContainer'}>
          <NavLink className='linkStyle' to={'/'}>Home</NavLink>
          <NavLink className='linkStyle' to={'/administracion'}>Administracion</NavLink>
          <NavLink className='linkStyle' to={'/nosotros'}>Nosotros</NavLink>
        </div>
        <div className='halfContainer'>
          <div className='iconContainer'>
            <div className='userContainer'>
              <button onClick={openedUser}><FontAwesomeIcon icon={faUser} /></button>
              <div className={ login ? 'loginContainer active' : 'loginContainer'}>
                <h6>Login</h6>
                <h6>Registro</h6>
              </div>
            </div>
            <button><FontAwesomeIcon icon={faCartShopping} /></button>
            <button><FontAwesomeIcon icon={faHeart} /></button>
            <button><FontAwesomeIcon icon={faCircleQuestion} /></button>
          </div>
          <div className='burger'>
            <button onClick={clickear}><FontAwesomeIcon icon={faBars} /></button>
          </div>
        </div>
        <div className={clicked ? 'inputContainer active':'inputContainer'}>
          <FilterComponent/>
        </div>
      </div>
    </div>
    </>
  )
}
