import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'

function Modal() {
  const { modal, closeModal } = useGlobalContext()
  return (
    <>
      <div
        className={`${modal ? 'modal-overlay show-modal' : 'modal-overlay'}`}
      >
        <div className='modal-container'>
          <h3>Modal Content</h3>
          <button className='close-modal-btn' onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </div>
    </>
  )
}

export default Modal
