import React, { useState } from 'react';
import logo from './logo.png';

import './TitleBox.scss'
import { BsList } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import PageStroe from '../../stores/PostStore';

const TitleBox = ({ setPostIdx }) => {
  const [selected, setSelected] = useState(0);
  const { list, getPostList, getPostListByKeyword } = PageStroe;

  return (
    <div className='titleBox'>
      <div className='topBar'>
        <img src={logo} alt="" style={{
          cursor: 'pointer',
        }} onClick={() => {
          window.location.reload(true)
        }
        } />
        <div className='searchBox'>
          <FiSearch className='searchIcon' size='20px' color='#2026A2' />
          <input type="text" onKeyPress={
            (e) => {
              setPostIdx(null);
              if (e.key === 'Enter') {
                getPostListByKeyword(e.target.value);
              }
            }
          } />
        </div>
      </div>

      <div className='listBox'>
        <BsList size='24px' />
        <span
          style={{
            borderBottom: selected == 0 ? '2px solid #2026A2' : null,
          }}
          onClick={() => {
            setSelected(0);
            setPostIdx(null);
            getPostList()
          }}>메인</span>
        <span
          style={{
            borderBottom: selected == 1 ? '2px solid #2026A2' : null,
          }}
          onClick={
            () => {
              setSelected(1);
              PageStroe.listFilterWithCategory(1);
            }
          }>1학년</span>
        <span
          style={{
            borderBottom: selected == 2 ? '2px solid #2026A2' : null,
          }}
          onClick={
            () => {
              setSelected(2);
              PageStroe.listFilterWithCategory(2);
            }
          }>2학년</span>
        <span
          style={{
            borderBottom: selected == 3 ? '2px solid #2026A2' : null,
          }}
          onClick={
            () => {
              PageStroe.listFilterWithCategory(3);
              setSelected(3);
            }
          }>3학년</span>
        <span
          style={{
            borderBottom: selected == 4 ? '2px solid #2026A2' : null,
          }}
          onClick={
            async () => {
              setSelected(4);
              await PageStroe.getSlang();
            }
          }>밈</span>
      </div>
    </div>
  )
}

export default TitleBox;
