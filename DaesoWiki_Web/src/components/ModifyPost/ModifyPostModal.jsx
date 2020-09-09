import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import SERVER from '../../stores/config';
import { getToken } from '../../lib/token';
import PostStore from '../../stores/PostStore';

import './ModifyPostModal.scss';

const ModifyPostModal = ({ isOpen, close, post }) => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [idx, setPostIdx] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setCurrentCategory(post.category)
    setTitle(post.title)
    setContent(post.content)
    setPostIdx(post.idx)
  }, [post])

  const submit = async (e) => {
    try {
      await axios.put(`${SERVER}/api/post/${idx}`, {
        title,
        content,
        category: currentCategory,
      }, {
        headers: {
          user: getToken(),
        }
      })

      alert('게시물 수정 성공');
      close();

    } catch (err) {
      console.log(('로그인 후 이용해주세요'));
    }
  }

  return (
    isOpen ?
      <React.Fragment>
        <div className="modifyPostModal-overlay" />

        <div className="modifyPostModal">
          <div className='content'>
            <h3>글 수정</h3>

            <div className='inputForm'>
              <p>제목</p>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='categoryBox'>
              <button style={{
                backgroundColor: currentCategory === 1 ? '#2026A2' : null,
                color: currentCategory === 1 ? '#ffffff' : null
              }} onClick={(e) => setCurrentCategory(1)}>1학년</button>
              <button style={{
                backgroundColor: currentCategory === 2 ? '#2026A2' : null,
                color: currentCategory === 2 ? '#ffffff' : null
              }} onClick={(e) => setCurrentCategory(2)}>2학년</button>
              <button style={{
                backgroundColor: currentCategory === 3 ? '#2026A2' : null,
                color: currentCategory === 3 ? '#ffffff' : null
              }} onClick={(e) => setCurrentCategory(3)}>3학년</button>
            </div>

            <div className='inputForm'>
              <p>내용</p>
              <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
            </div>

            <div className='submitForm'>
              <button
                style={{
                  marginRight: '5px',
                  backgroundColor: '#2026A2',
                  color: '#ffffff'
                }}
                onClick={
                  e => {
                    submit();
                  }
                } >수정</button>
              <button onClick={e => { close() }} style={{
                marginLeft: '5px'
              }}>취소</button>
            </div>

          </div>
        </div>
      </React.Fragment >
      : null
  );

}

export default ModifyPostModal;
