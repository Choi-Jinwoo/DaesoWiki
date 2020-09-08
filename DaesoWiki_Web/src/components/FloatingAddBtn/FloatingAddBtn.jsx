import React from 'react';
import { FiPlus } from 'react-icons/fi';

import './FloatingAddBtn.scss';

const FloatingAddBtn = ({ setIsOpen }) => {
  return (
    <div className='floatingAddBtn' onClick={
      (e) => {
        setIsOpen(true);
      }
    }>
      <FiPlus size='36px' color='#ffffff' />
    </div>
  )
}

export default FloatingAddBtn;