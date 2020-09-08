import React, { useState } from 'react';
import logo from './logo.png';

import './TitleBox.scss'
import { BsList } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import PageStroe from '../../stores/PostStore';

const TitleBox = () => {
  const [selected, setSelected] = useState(0);
  const { list, getPostList } = PageStroe;

  return (
    <div className='titleBox'>
      <div className='topBar'>
        <img src={logo} alt="" />
        <div className='searchBox'>
          <FiSearch className='searchIcon' size='20px' color='#2026A2' />
          <input type="text" />
        </div>
      </div>

      <div className='listBox'>
        <BsList size='24px' />
        <span onClick={() => {
          getPostList()
        }}>메인</span>
        <span onClick={
          () => {
            PageStroe.listFilterWithCategory(1);
          }
        }>1학년</span>
        <span onClick={
          () => {
            PageStroe.listFilterWithCategory(2);
          }
        }>2학년</span>
        <span onClick={
          () => {
            PageStroe.listFilterWithCategory(3);
          }
        }>3학년</span>
        <span>개발자소개</span>
      </div>
    </div>
  )
}

export default TitleBox;
