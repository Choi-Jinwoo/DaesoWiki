import React, { useState, useRef } from 'react';
import axios from 'axios';
import SERVER from '../../stores/config';

import './HistoryModal.scss';
import { useEffect } from 'react';
import { useCallback } from 'react';

const HistoryModal = ({ isOpen, close, postIdx }) => {
  const [history, setHistory] = useState({});

  useEffect(async () => {
    const resp = await axios.get(`${SERVER}/api/post/history?postIdx=${postIdx}`);
    setHistory(resp.data.data.history);
  }, [history]);

  return (
    isOpen ?
      <React.Fragment>
        <div className="historyModal-overlay" />

        <div className="historyModal">
          <div className='content'>
            <h3>수정 내역</h3>

            <div>
              {/* {post.title} */}
            </div>


            <div className='submitForm'>
              <button onClick={e => { close() }} style={{
                marginLeft: '5px'
              }}>확인</button>
            </div>

          </div>
        </div>
      </React.Fragment >
      : null
  );

}

export default HistoryModal;
