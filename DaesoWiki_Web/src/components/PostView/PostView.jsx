import React from 'react';

import './PostView.scss'
import { observer } from 'mobx-react';
import { useCallback } from 'react';
import PostStore from '../../stores/PostStore';
import { useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import SERVER from '../../stores/config';
import { getToken } from '../../lib/token';

const PostView = observer(({ postIdx }) => {

  const { post, getPost } = PostStore;

  const handlePost = useCallback(async () => {
    await getPost(postIdx);
  }, [getPost]);

  useEffect(() => {
    handlePost();
  }, [handlePost]);

  return (
    <div className='postView'>
      <div className='title'>
        <h1>{post.title}</h1>
        <span>{post.category}학년</span>
      </div>
      <div className='content'>
        <img src={`${SERVER}/static/${post.thumbnail}`} alt="" />
        {post.content}
      </div>
      <div className='like'>
        <FaHeart className='heart' size='12px' color={post.liked ? '#2026A2' : '#808080'} onClick={
          async (e) => {
            if (!post.liked) {
              try {
                await axios.post(`${SERVER}/api/post/like?postIdx=${post.idx}`, null,
                  {
                    headers: {
                      user: getToken(),
                    }
                  });
                post.liked = true;
                post.likeCount += 1;
              } catch (err) {
                alert('로그인 후 이용해주세요');
              }
            } else {
              try {
                await axios.post(`${SERVER}/api/post/unlike?postIdx=${post.idx}`, null,
                  {
                    headers: {
                      user: getToken(),
                    }
                  }
                );
                post.liked = false;
                post.likeCount -= 1;
              } catch (err) {
                alert('로그인 후 이용해주세요');
              }
            }
          }
        } />
        <span>
          {post.likeCount}
        </span>
      </div>
    </div >
  )
})

export default PostView;
