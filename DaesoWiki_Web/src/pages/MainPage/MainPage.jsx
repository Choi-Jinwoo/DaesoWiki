import React from 'react';
import TitleBox from '../../components/TitleBox/TitleBox';
import PostList from '../../components/PostList/PostList';
import FloatingAddBtn from '../../components/FloatingAddBtn/FloatingAddBtn';
import PostView from '../../components/PostView/PostView';

import './MainPage.scss'
import { useState } from 'react';
import AddPostModal from '../../components/AddPost/AddPostModal';

const MainPage = () => {
  const [postIdx, setPostIdx] = useState(null);
  const [isOpen, setIsOpen] = useState(true);


  return (
    <div className='mainPage'>
      <TitleBox setPostIdx={setPostIdx} />
      {
        postIdx === null ?
          <PostList setPostIdx={setPostIdx} /> : <PostView postIdx={postIdx} />
      }
      <FloatingAddBtn setIsOpen={setIsOpen} />

      <AddPostModal isOpen={isOpen} close={() => { setIsOpen(false) }} />
    </div >
  )
}

export default MainPage;
