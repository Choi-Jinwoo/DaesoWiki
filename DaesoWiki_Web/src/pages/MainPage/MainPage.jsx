import React from 'react';
import TitleBox from '../../components/TitleBox/TitleBox';
import PostList from '../../components/PostList/PostList';
import FloatingAddBtn from '../../components/FloatingAddBtn/FloatingAddBtn';

import './MainPage.scss'

const MainPage = () => {
  return (
    <div className='mainPage'>
      <TitleBox />
      <PostList />
      <FloatingAddBtn />
    </div>
  )
}

export default MainPage;
