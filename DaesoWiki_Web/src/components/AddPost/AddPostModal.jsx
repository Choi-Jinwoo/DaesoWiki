import React, { useState } from 'react';

import './AuthModal.scss';
import stores from '../../stores';

const AddPostModal = ({ isOpen, close }) => {
  return (
    isOpen ?
      <React.Fragment>
        <div className="addPostModal-overlay" />

        <div className="addPostModal">
          <div className='content'>
            <div className='title'>
              <h3>로그인</h3>
            </div>
          </div>
        </div>
      </React.Fragment >
      : null
  );

}

export default AddPostModal;
