import React, { useState, useRef } from 'react';
import axios from 'axios';
import SERVER from '../../stores/config';
import { setToken } from '../../lib/token';

import './LoginModal.scss';

const LoginModal = ({ isOpen, close, setIsLogin }) => {

  const [type, setType] = useState(0);

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [grade, setGrade] = useState(1);


  const login = async () => {
    if (type == 0) {
      try {
        const resp = await axios.post(`${SERVER}/api/auth/login`, {
          id, pw
        });

        const { user } = resp.data.data;
        setToken(user);
        setIsLogin(true);
        alert('로그인 성공');
        close();
      } catch (err) {
        alert('아이디, 비밀번호를 확인해주세요');
      }

    } else {
      try {
        await axios.post(`${SERVER}/api/auth/register`, {
          id, pw, grade,
        });

        alert('회원가입 성공');
        close();
      } catch (err) {
        alert('이미 존재하는 아이디 입니다')
      } finally {
        setType(0);
      }
    }
  }

  return (
    isOpen ?
      <React.Fragment>
        <div className="loginModal-overlay" />

        <div className="loginModal">
          <div className='content'>
            <span className='closeBtn' onClick={close}>X</span>
            <h3>{type == 1 ? '환영합니다' : '어서오세요'}</h3>

            <div className='inputForm'>
              <p>아이디</p>
              <input type="text" value={id} onChange={e => setId(e.target.value)} />
            </div>

            <div className='inputForm'>
              <p>비밀번호</p>
              <input type="password" value={pw} onChange={e => setPw(e.target.value)} />
            </div>

            <div className='inputForm'
              style={{
                display: type == 1 ? null : 'none',
              }}>
              <p>학년</p>
              <input
                min='0'
                max='3'
                type="number" value={grade} onChange={e => setGrade(e.target.value)} />
            </div>

            <div className='inputForm' >
              <button onClick={e => login()}>{type == 0 ? '로그인' : '회원가입'}</button>
            </div>
            <span onClick={
              e => {
                setType(!type)
              }
            }>{type == 0 ? '계정이 없으신가요?' : '로그인 하기'}</span>
          </div>
        </div>
      </React.Fragment >
      : null
  );

}

export default LoginModal;
