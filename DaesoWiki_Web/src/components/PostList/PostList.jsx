import React, { useEffect, useCallback } from 'react';

import './PostList.scss';
import PostItem from './PostItem/PostItem';
import PostStore from '../../stores/PostStore';
import { observer } from 'mobx-react';

const PostList = observer(() => {
  const { filterList, getPostList } = PostStore;

  const handlePostList = useCallback(async () => {
    await getPostList();
  }, [getPostList]);

  const postList = filterList.map(item => {
    return <PostItem post={item}></PostItem>;
  });

  useEffect(() => {
    handlePostList();
  }, [handlePostList])

  return (
    <div className='postList'>
      {postList}
    </div>
  )
});

export default PostList;
