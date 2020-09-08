import React, { useState, useRef } from 'react';

import './AddPostModal.scss';

const AddPostModal = ({ isOpen, close }) => {
  const fileEl = useRef(null);

  const [currentCategory, setCurrentCategory] = useState(1);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);


  const handleClick = (e) => {
    fileEl.current.click();
  }

  return (
    isOpen ?
      <React.Fragment>
        <div className="addPostModal-overlay" />

        <div className="addPostModal">
          <div className='content'>
            <h3>새 글 작성</h3>

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

            <div className='inputFileBtn'>
              <button onClick={
                e => {
                  handleClick();
                }
              }>파일</button>
            </div>

            <input type="file" className='fileInput' style={{
              display: 'none',
            }} ref={fileEl}
              onChange={e => {

              }}
            />

            <div className='submitForm'>
              <button style={{
                marginRight: '5px'
              }}>작성</button>
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

export default AddPostModal;
