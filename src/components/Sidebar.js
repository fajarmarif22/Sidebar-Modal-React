import React from 'react'
import logo from '../logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from '../data'
import { useGlobalContext } from './Context'

function Sidebar() {
  const { sidebar, closeSidebar } = useGlobalContext()
  return (
    <>
      <aside className={`${sidebar ? 'sidebar show-sidebar' : 'sidebar'} `}>
        <div className='sidebar-header'>
          <h3 className='sidebar-logo'>SIDEBAR</h3>
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, url, text, icon } = link
            return (
              <li key={id}>
                <a href={url}>
                  {icon} {text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className='social-icons'>
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </aside>
    </>
  )
}

export default Sidebar
