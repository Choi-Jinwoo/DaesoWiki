import React, { useEffect } from 'react';

import './LoginReqBox.scss';
import { useState } from 'react';
import LoginModal from '../LoginModal/LoginModal';

import profile from './1.png';
import { getToken, removeToken } from '../../lib/token';

const LoginReqBox = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);


  useEffect(() => {
    if (getToken()) {
      console.log('pass');
      setIsLogin(true);
    }
  }, [setIsOpen])
  return (
    <div>
      <div className='loginReqBox'>
        {
          isLogin ? <div className='profileBox'>
            <img src={profile} alt="" />
            <p>
              <b>
                {getToken()}
              </b>
              님 환영합니다
            </p>
            <button onClick={() => {
              removeToken();
              setIsLogin(false);
            }}>로그아웃</button>
          </div>
            : <button onClick={e => setIsOpen(true)}>로그인</button>
        }
        <div>
          <p>인물</p>
          <p>사건</p>
        </div>
      </div>

      <LoginModal setIsLogin={setIsLogin} isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  )
}

export default LoginReqBox;
