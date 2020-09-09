import React from 'react';
import start from './start.png';

import './StartPage.scss'

const StartPage = ({ history }) => {
  return (
    <div className='startPage'>
      <div className='wrapper'>
        <div className='content'>
          <h1>DaesoWiki</h1>
          <div className='text'>
            <p>우리들만의 이야기</p>
            <p>지금 만나보세요</p>
          </div>
          <div>
            <button className='start'>
              <a href="/" style={{
                textDecoration: 'none',
                color: '#ffffff'
              }}>
                시작하기
              </a>
            </button>
            <button>회원가입</button>
          </div>
        </div>
      </div>
      <img src={start} alt="이미지 없는데" />
    </div>
  )
}

export default StartPage;
