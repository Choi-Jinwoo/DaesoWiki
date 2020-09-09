import React, { useState, useRef } from 'react';
import axios from 'axios';
import SERVER from '../../stores/config';

import './AddPostModal.scss';
import { FaUserAltSlash } from 'react-icons/fa';

const AddPostModal = ({ isOpen, close }) => {
  const fileEl = useRef(null);

  const [type, setType] = useState(0);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);


  const handleClick = (e) => {
    fileEl.current.click();
  }

  const submit = async (e) => {
    if (type === 0) {

      const formData = new FormData();
      let fileRes;

      if (file) {
        formData.append("file", file[0]);
        try {
          const res = await axios.post(`${SERVER}/api/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            }
          });
          fileRes = res.data.data.file;

          await axios.post(`${SERVER}/api/post`, {
            title,
            content,
            category: currentCategory,
            thumbnail: fileRes,
          })

          alert('게시물 생성 성공');
          setTitle('')
          setContent('')
          close();
          window.locaiton.reload(true);

        } catch (err) {
          console.log(err);
        }
      } else {
        alert('파일이 없어요')
      }
    } else {
      try {
        await axios.post(`${SERVER}/api/slang`, {
          title,
          content,
          grade: 0,
        });
        alert('밈 생성 성공');
        setTitle('')
        setContent('')
        close();
      } catch (err) {
        console.log((err));
      }
    }


  }

  return (
    isOpen ?
      <React.Fragment>
        <div className="addPostModal-overlay" />

        <div className="addPostModal">
          <div className='content'>
            <h3>새 글 작성</h3>

            <div className='type'>
              <button onClick={e => setType(0)} style={{
                backgroundColor: type === 0 ? '#2026A2' : null,
                color: type === 0 ? '#ffffff' : null
              }}>게시글</button>
              <button style={{
                backgroundColor: type === 1 ? '#2026A2' : null,
                color: type === 1 ? '#ffffff' : null
              }}
                onClick={e => setType(1)}>밈</button>
            </div>

            <div className='inputForm'>
              <p>제목</p>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='categoryBox' style={{
              display: type == 1 ? 'none' : null,
            }}>
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

            <div className='inputFileBtn' style={{
              display: type == 1 ? 'none' : null,
            }}>
              <button onClick={
                e => {
                  handleClick();
                }
              }>파일</button>
            </div>

            <input type="file" className='fileInput' style={{
              display: 'none',
            }} ref={fileEl}
              onChange={e => setFile(e.target.files)}
            />

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
                } >작성</button>
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
