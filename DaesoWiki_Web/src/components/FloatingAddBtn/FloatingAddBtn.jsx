import React from 'react';
import { FiPlus } from 'react-icons/fi';

import './FloatingAddBtn.scss';

const FloatingAddBtn = () => {
  return (
    <div className='floatingAddBtn'>
      <FiPlus size='36px' color='#ffffff' />
    </div>
  )
}

export default FloatingAddBtn;